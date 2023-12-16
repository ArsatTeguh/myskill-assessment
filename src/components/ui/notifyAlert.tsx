import React from 'react';

function NotifyAlert({ type }: { type: string }) {
  const bgColor = type === 'error' ? 'bg-red-500' : 'bg-green-500';

  return (
    <div
      className={`z-10 shadow-xl fixed top-2 font-medium transition-opacity duration-300 ${bgColor} text-white px-8 py-2 rounded absolute top-6 left-1/2 transform -translate-x-1/2 $`}
    >
      {type === 'error' ? 'Gagal Penyimpan Data' : 'Berhasil Menyimpan Data'}
    </div>
  );
}

export default NotifyAlert;
