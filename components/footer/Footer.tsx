import { jetBrainsMono } from '@/utils/fonts';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="footer py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-4">
          <div className={`logo ${jetBrainsMono.className} text-3xl mr-16`}>
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
          <div className="flex flex-col">
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
        <div className="flex justify-between mt-28">
          <span>© ОсОО “DUTY FREE ALTYN”</span>
          <span className="uppercase">Все права защищены</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
