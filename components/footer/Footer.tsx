import { jetBrainsMono } from '@/utils/fonts';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="footer py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <div className={`logo ${jetBrainsMono.className} text-3xl mr-16 col-span-4 sm:col-span-4 lg:col-span-1`}>
            <span>DF</span>
            <span className="text-orange">A</span>
          </div>
          <div className="flex flex-col">
            <Link
              href="/"
              className={`hover:text-orange transition-colors ${jetBrainsMono.className}`}
            >
              Главная
            </Link>
            <Link
              href="/basket"
              className={`hover:text-orange transition-colors ${jetBrainsMono.className}`}
            >
              Корзина
            </Link>
            <Link
              href="/favorites"
              className={`hover:text-orange transition-colors ${jetBrainsMono.className}`}
            >
              Избранное
            </Link>
            <Link
              href="/history"
              className={`hover:text-orange transition-colors ${jetBrainsMono.className}`}
            >
              История покупок
            </Link>
          </div>
          <div className="flex flex-col col-span-4 sm:col-span-3 md:col-span-1">
            <Link
              href="/"
              className={`hover:text-orange transition-colors ${jetBrainsMono.className}`}
            >
              О компании
            </Link>
            <Link
              href="/basket"
              className={`hover:text-orange transition-colors ${jetBrainsMono.className}`}
            >
              Адрес
            </Link>
            <Link
              href="/favorites"
              className={`hover:text-orange transition-colors ${jetBrainsMono.className}`}
            >
              Связаться с нами
            </Link>
          </div>
          <div className="flex flex-col">
            <Link
              href="/"
              className={`hover:text-orange transition-colors ${jetBrainsMono.className}`}
            >
              Политика конфиденциальности
            </Link>
            <Link
              href="/basket"
              className={`hover:text-orange transition-colors ${jetBrainsMono.className}`}
            >
              Условия покупки
            </Link>
          </div>
        </div>
        <div className="flex justify-between mt-28 sm:flex-row flex-col">
          <span className="mb-4 sm:mb-0">© ОсОО “DUTY FREE ALTYN”</span>
          <span className="uppercase">Все права защищены</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
