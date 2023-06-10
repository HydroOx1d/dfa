'use client';

import React from 'react';
import { jetBrainsMono } from '@/utils/fonts';
import Link from 'next/link';
import { HeartIcon, ShoppingCartIcon, Bars3CenterLeftIcon } from '@heroicons/react/24/outline';

function Header() {
  const [navIsOpen, setNavIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (navIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [navIsOpen]);

  return (
    <header className="header py-2.5">
      <div className="container mx-auto flex items-center px-3">
        <div
          className={`logo ${jetBrainsMono.className} text-3xl mr-16 relative z-20`}
        >
          <span>DF</span>
          <span className="text-orange">A</span>
        </div>
        <div
          className={`fixed overflow-auto z-10 bg-bgColor h-screen w-full left-0 top-0 lg:static lg:w-auto lg:h-auto ${
            !navIsOpen && 'hidden'
          }`}
        >
          <nav className="flex flex-col justify-center px-4 pb-4 pt-20 h-full lg:h-auto lg:p-0 lg:bg-transparent lg:justify-normal lg:flex-row">
            <Link
              href="/"
              className="lg:mr-10 text-3xl lg:text-base mb-16 lg:mb-0 hover:text-orange transition-colors"
            >
              Главная
            </Link>
            <Link
              href="/products"
              className="lg:mr-10 text-3xl lg:text-base mb-16 lg:mb-0 hover:text-orange transition-colors"
            >
              Каталог
            </Link>
            <Link
              href="/history"
              className="text-3xl lg:text-base mb-16 lg:mb-0 hover:text-orange transition-colors"
            >
              История
            </Link>

            <div className="flex lg:hidden mt-auto">
              <Link
                href="/login"
                className="basis-2/4 flex justify-center bg-white py-2.5 px-8 rounded-full mr-2.5"
              >
                Войти
              </Link>
              <Link
                href="/register"
                className="basis-2/4 flex justify-center bg-darkGray text-white py-2.5 px-8 rounded-full"
              >
                Зарегистрироваться
              </Link>
            </div>
          </nav>
        </div>
        <div className="flex items-center ml-auto">
          <div className="rounded-full bg-white p-2 cursor-pointer mr-2.5 relative z-20">
            <ShoppingCartIcon className="w-6" />
          </div>
          <div className="rounded-full bg-white p-2 cursor-pointer mr-2.5 relative z-20">
            <HeartIcon className="w-6" />
          </div>
          <Link
            href="/login"
            className="bg-white py-2.5 px-8 rounded-full mr-2.5 lg:block hidden"
          >
            Войти
          </Link>
          <Link
            href="/register"
            className="bg-darkGray text-white py-2.5 px-8 rounded-full lg:block hidden"
          >
            Зарегистрироваться
          </Link>
        </div>
        <Bars3CenterLeftIcon
          className="w-6 lg:hidden block relative z-20"
          onClick={() => setNavIsOpen((prev) => !prev)}
        />
      </div>
    </header>
  );
}

export default Header;
