'use client';

import React from 'react';
import { jetBrainsMono } from '@/utils/fonts';
import Link from 'next/link';
import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

function Header() {
  return (
    <header className="header py-2.5">
      <div className="container mx-auto flex items-center">
        <div className={`logo ${jetBrainsMono.className} text-3xl mr-16`}>
          <span>DF</span>
          <span className="text-orange">A</span>
        </div>
        <nav className="nav flex">
          <Link href="/" className="mr-10 hover:text-orange transition-colors">
            Главная
          </Link>
          <Link
            href="/products"
            className="mr-10 hover:text-orange transition-colors"
          >
            Каталог
          </Link>
          <Link href="/history" className="hover:text-orange transition-colors">
            История
          </Link>
        </nav>
        <div className="flex items-center ml-auto">
          <div className="rounded-full bg-white p-2 cursor-pointer mr-2.5">
            <ShoppingCartIcon className="w-6" />
          </div>
          <div className="rounded-full bg-white p-2 cursor-pointer mr-2.5">
            <HeartIcon className="w-6" />
          </div>
          <Link
            href="/login"
            className="bg-white py-2.5 px-8 rounded-full mr-2.5"
          >
            Войти
          </Link>
          <Link
            href="/register"
            className="bg-darkGray text-white py-2.5 px-8 rounded-full"
          >
            Зарегистрироваться
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
