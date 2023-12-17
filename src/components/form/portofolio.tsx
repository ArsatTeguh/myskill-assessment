import React from 'react';
import { PortfolioItem } from '@/lib/type';
import Image from 'next/image';

type Props = {
  handler: (id: number, key: keyof PortfolioItem, value: string | Date) => void;
  index: number;
  data: PortfolioItem;
  remove: (id: number) => void;
};

function Portofolio({
  index, data, handler, remove,
}: Props) {
  return (
    <div data-testid="porto" className="md:w-[810px] w-full mx-auto md:mx-0 h-[540px] py-6 bg-white shadow px-6 block rounded">
      <div className="flex items-center justify-between py-1">
        <p className="text-base font-semibold">Portofolio {index} </p>
        <div className="flex items-center gap-2">
          <Image
            src="/IconButton.svg"
            alt="icon button"
            width={40}
            height={40}
          />
          <div onClick={() => remove(data.id)} className="cursor-pointer">
            <Image
              src="/IconButton2.svg"
              alt="icon button"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
      <div
        className={`w-full h-full  flex-col gap-4 flex rounded 
           py-[14px] 
        `}
      >
        <input
          type="text"
          className="h-14 w-full rounded placeholder:text-text_place border border-zinc-300 outline-none px-3"
          placeholder="Title/Posisi"
          value={data.job_position}
          onChange={(e) => handler(data.id, 'job_position', e.target.value)}
        />
        <input
          type="text"
          className="h-14 w-full rounded placeholder:text-text_place border border-zinc-300 outline-none px-3"
          placeholder="Perusahaan"
          value={data.company}
          onChange={(e) => handler(data.id, 'company', e.target.value)}
        />
        <div className="flex items-center gap-4">
          <input
            type="text"
            className="h-14 w-full rounded placeholder:text-text_place border border-zinc-300 outline-none px-3"
            placeholder="Tanggal Mulai"
            name="date_in"
            value={data.date_in}
            onFocus={(e) => (e.target.type = 'month')}
            onChange={(e) => handler(data.id, 'date_in', e.target.value)}
          />

          <input
            type="text"
            className="h-14 w-full rounded placeholder:text-text_place  border border-zinc-300 outline-none px-3"
            placeholder="Tanggal Selesai"
            name="date_out"
            value={data.date_out}
            onFocus={(e) => (e.target.type = 'month')}
            onChange={(e) => handler(data.id, 'date_out', e.target.value)}
          />
        </div>
        <textarea
          className="h-32 pt-2 w-full rounded placeholder:text-text_place border border-zinc-300 outline-none px-3"
          placeholder="Description"
          value={data.description}
          onChange={(e) => handler(data.id, 'description', e.target.value)}
        />
      </div>
    </div>
  );
}

export default Portofolio;
