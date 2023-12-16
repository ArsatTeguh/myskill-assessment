import React from 'react';
import { dataPorto } from '@/lib/type';
import Image from 'next/image';

type Props = {
  handler: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  formData: dataPorto;
};

function Profile({ handler, formData }: Props) {
  return (
    <div className="md:w-[810px] w-full mx-auto md:mx-0 h-[344px] py-6 bg-white shadow px-6 block  rounded">
      <div className="flex items-center justify-between py-1">
        <p className="text-base font-semibold">Profile</p>
        <Image src="/IconButton.svg" alt="icon button" width={40} height={40} />
      </div>
      <div
        className={`w-full h-[248px]  flex-col gap-2 flex rounded 
           py-[14px] 
        `}
      >
        <input
          type="text"
          className="h-14 w-full rounded placeholder:text-text_place border border-zinc-300 outline-none px-3"
          placeholder="Nama"
          name="user_name"
          value={formData.user_name}
          onChange={handler}
        />
        <input
          type="text"
          className="h-14 w-full rounded placeholder:text-text_place border border-zinc-300 outline-none px-3"
          placeholder="Title/Posisi"
          name="title"
          value={formData.title}
          onChange={handler}
        />
        <textarea
          className="h-32 pt-2 w-full rounded placeholder:text-text_place border border-zinc-300 outline-none px-3"
          placeholder="Description"
          name="desc_data"
          value={formData.desc_data}
          onChange={handler}
        />
      </div>
    </div>
  );
}

export default Profile;
