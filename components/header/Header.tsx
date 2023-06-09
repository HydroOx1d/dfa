'use client';

import React from 'react';
import { jetBrainsMono } from '@/utils/fonts';
import Link from 'next/link';
import basket from '@/assets/basket.svg';
import wish from '@/assets/wish.svg';
import Image from 'next/image';

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
            href="/catalog"
            className="mr-10 hover:text-orange transition-colors"
          >
            Каталог
          </Link>
          <Link href="/history" className="hover:text-orange transition-colors">
            История
          </Link>
        </nav>
        <div className="flex ml-auto">
          <div className="rounded-full bg-white p-2 cursor-pointer mr-2.5">
            <Image src={basket} width={24} height={24} alt="basket" />
          </div>
          <div className="rounded-full bg-white p-2 cursor-pointer mr-2.5">
            <Image src={wish} width={24} height={24} alt="wish list" />
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
