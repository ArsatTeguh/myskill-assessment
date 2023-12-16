import React from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '@/state/store';
import Protofolio from '../portofolio/protofolio';

function Preview() {
  const data = useSelector((state: RootState) => state.porto);
  return (
    <div className="  w-full  rounded bg-white shadow">
      <div className="banner relative w-full h-[240px]">
        {!data.banner ? (
          <span className="block w-full h-full bg-secondary" />
        ) : (
          <Image
            src={data?.banner}
            alt="Selected file"
            fill
            className="rounded"
            style={{ objectFit: 'cover' }}
          />
        )}
        {!data.avatar ? (
          <span className="block w-[130px] h-[130px] rounded-full absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-zinc-300 border-2" />
        ) : (
          <span className="block w-[130px] h-[130px] absolute -bottom-10 left-1/2 transform -translate-x-1/2 ">
            <div className="w-full h-full relative ">
              <Image
                src={data?.avatar}
                alt="Selected file"
                fill
                className=" rounded-full"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </span>
        )}
      </div>
      <p className="text-[24px] font-bold mt-10 text-center">
        {' '}
        {data.user_name}{' '}
      </p>
      <p className="text-[12px]  text-center w-[330px] mx-auto">
        {data.desc_data}
      </p>

      <div className="px-8 pb-6">
        <p className="text-base pt-8 pb-2 font-bold">Portofolio</p>
        <div className="flex flex-col gap-3">
          {data.portfolio.map((item) => (
            <Protofolio key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Preview;
