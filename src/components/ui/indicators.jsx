import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import indicatorData from './data';

const IndicatorCard = () => {
  return (
    <div className='flex-wrap space-x-4 flex justify-center items-center'>
      {indicatorData.map((item, index) => (
        <div key={index} className={`relative h-44 w-[30%] ${item.background} rounded-md shadow-md shadow-black font-bold`}>
          <div className='flex flex-col items-start justify-end h-full w-full px-10 pb-10 text-white'>
            <p className='font-semibold text-[20px]'>{item.title}</p>
            <p className='font-bold text-[40px]'>{item.value}</p>
          </div>
          <FontAwesomeIcon icon={item.icon} color='white' className='absolute right-2 top-2 h-6' />
        </div>
      ))}
    </div>
  );
}
export default IndicatorCard;