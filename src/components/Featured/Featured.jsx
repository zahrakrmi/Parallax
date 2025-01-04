import React from 'react';

export default function Featured() {
  const photos = ['/1.webp', '/2.webp']; // مسیر عکس‌ها از public

  return (
    <section className='grid grid-cols-2 items-center justify-center border'>
      <div className='grid grid-cols-2 gap-10 '>
        <h6 className='text-[20px] uppercase font-bold translate-x-[100%] -rotate-[90deg] ' style={{ transformOrigin: 'left bottom' }}>green</h6>
        <img 
          src={photos[0]} // عکس اول
          alt="Green Photo"
          className="w-[100%] object-cover  "
          style={{ clipPath: 'inset(0% 0% 0% 0%)' }} // اگر clipPath نیاز دارید
        />
      </div>
      <div className='grid gap-[10px] items-end' style={{ gridTemplateColumns: '100px auto' }}>
        <h6 className='translate-x-[100%] -rotate-[90deg] font-bold uppercase'style={{ transformOrigin: 'left bottom' }}>lily</h6>
        <img
          src={photos[1]} // عکس دوم
          alt="Lily Photo"
          className="w-[100%] h-[125vh] object-cover pr-24"
        />
      </div>
    </section>
  );
}
