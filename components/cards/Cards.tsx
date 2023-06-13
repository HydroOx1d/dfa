import React from 'react';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import Card, { GoldInfo } from '@/components/card/Card';

type Props = {
  data: Array<GoldInfo>
  linkMore: boolean
}

export default function Cards({ data, linkMore }: Props) {
  return (
    <section className="flex items-center flex-col sm:grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
      {
        data ? data.map((el) => (
          <Card key={el.id} data={el} />
        ))
          : null
      }

      {
        linkMore ? (
          <article className="p-2.5 bg-orange w-full h-full sm:max-w-md rounded-md flex justify-center items-center">
            <Link href="/products" className="flex items-center">
              <h3 className="text-lg font-semibold text-white mr-3">
                Больше золота
              </h3>
              <ArrowUpRightIcon className="w-7 text-white min-h-[270px]" />
            </Link>
          </article>
        )
          : null
      }

    </section>
  );
}
