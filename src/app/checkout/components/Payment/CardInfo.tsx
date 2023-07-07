import { CheckoutQuestion } from '@/types/types';
import Question from '../Question';
import Title from '../Title';

export default function CardInfo() {
  const questions: CheckoutQuestion[] = [
    {
      label: '信用卡號碼',
      value: 'cardNumber',
      placehoder: '**** **** **** ****',
    },
    {
      label: '有效期限',
      value: 'expireDate',
      placehoder: 'MM /YY',
    },
    {
      label: '安全碼',
      value: 'securityCode',
      placehoder: '後三碼',
    },
  ];
  return (
    <div className='flex flex-col gap-[20px]'>
      <div>
        <Title>付款資料</Title>
        <hr className='w-full border-black' />
      </div>
      {questions.map((question, index) => (
        <Question
          key={index}
          label={question.label}
          value={question.value}
          placehoder={question.placehoder}
        />
      ))}
    </div>
  );
}
