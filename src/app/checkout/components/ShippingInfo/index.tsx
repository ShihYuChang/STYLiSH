import { CheckoutQuestion } from '@/types/types';
import Question from '../Question';
import Title from '../Title';

export default function ShippingInfo() {
  const questions: CheckoutQuestion[] = [
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
    <div className='flex flex-col gap-[20px]'>
      <div>
        <Title>訂購資料</Title>
        <hr className='w-full border-black' />
      </div>
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
