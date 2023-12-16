import React, { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="">
      <nav className="w-full py-3 flex justify-between px-5 bg-[#10A4B0]">
        <p className="text-lg font-bold text-white">MYSKILL - Arsat Teguh</p>
        <div className="flex items-center gap-6 font-semibold text-white">
          <Link
            className={`${pathname !== '/' ? ' text-zinc-600' : ''}`}
            href="/"
          >
            Form
          </Link>
          <Link
            className={`${pathname !== '/portofolio' ? 'text-zinc-600' : ''}`}
            href="/portofolio"
          >
            Portofolio
          </Link>
        </div>
      </nav>
      {children}
    </div>
  );
}

export default Navbar;
