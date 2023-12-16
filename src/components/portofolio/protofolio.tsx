import React from 'react';
import { formatMonthYear } from '@/lib/formatDate';
import { PortfolioItem } from '@/lib/type';

type Props = {
  item: PortfolioItem;
};

function Protofolio({ item }: Props) {
  return (
    <div className="w-full px-4 py-2 flex flex-col gap-2 rounded  first-line:rounded shadow ">
      <div className="">
        <p className="text-base font-semibold   ">{item.job_position} </p>
        <p className="text-xs text-zinc-500 ">{item.company} </p>
      </div>
      <p className="text-xs text-zinc-500">
        {item.date_in && formatMonthYear(item.date_in)} -{' '}
        {item.date_out && formatMonthYear(item.date_out)}
      </p>
      <p className="text-xs  ">{item.description}</p>
    </div>
  );
}

export default Protofolio;
