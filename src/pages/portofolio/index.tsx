import React from 'react';
import MainPortofolio from '@/components/portofolio/main';
import { Getter } from '@/lib/API/portofolio';
import { PortoState } from '@/lib/type';

function PortofolioPage({ data }: { data: PortoState }) {
  return (
    <div className="w-[900px] mx-auto py-5">
      {data ? (
        <MainPortofolio data={data} />
      ) : (
        <div className="h-full w-full">
          <p className="flex justify-center items-center font-semibold text-xl">
            DATA KOSONG
          </p>
        </div>
      )}
    </div>
  );
}

export default PortofolioPage;

export async function getServerSideProps() {
  const data = await Getter();
  return {
    props: {
      data: data ? data[0] : null,
    },
  };
}
