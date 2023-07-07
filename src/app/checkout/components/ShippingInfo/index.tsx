import React from 'react';
import Title from '../Title';
import Question from './Question';
import { ShippingInfoQuestion } from '@/types/types';

export default function ShippingInfo() {
  const questions: ShippingInfoQuestion[] = [
    {
      label: '收件人姓名',
      value: 'name',
      desciprtion: '務必填寫完整收件人姓名，避免包裹無法順利簽收',
    },
    {
      label: '手機',
      value: 'phone',
    },
    {
      label: '地址',
      value: 'address',
    },
    {
      label: 'Email',
      value: 'email',
    },
    {
      label: '配送時間',
      value: 'time',
      options: ['08:00-12:00', '14:00-18:00', '不指定'],
    },
  ];
  return (
    <div className='flex flex-col gap-[30px]'>
      <Title>訂購資料</Title>
      {questions.map((question, index) => (
        <div key={index}>
          <Question
            label={question.label}
            value={question.value}
            desciprtion={question.desciprtion}
            options={question.options}
          />
        </div>
      ))}
    </div>
  );
}
