import React from 'react';

function History() {
  return (
    <section className="history py-16">
      <div className="container mx-auto px-3">
        <div className="overflow-scroll">
          <table className="table-auto min-w-full text-left">
            <thead>
              <tr>
                <th className="py-2.5 text-sm font-normal px-2">
                  Проба / Карат
                </th>
                <th className="py-2.5 text-sm font-normal text-center px-2">
                  Дата покупки
                </th>
                <th className="py-2.5 text-sm font-normal text-center px-2">
                  Количество
                </th>
                <th className="py-2.5 text-sm font-normal text-center px-2">
                  Масса, г
                </th>
                <th className="py-2.5 text-sm font-normal text-right px-2">
                  Цена за слиток
                </th>
              </tr>
            </thead>
            <tbody className="bg-lightGray">
              <tr>
                <td className="py-2.5 text-sm font-normal px-2">750 / 18</td>
                <td className="py-2.5 text-sm font-normal text-center px-2">
                  06.02.23
                </td>
                <td className="py-2.5 text-sm font-normal text-center px-2">
                  10 слитков
                </td>
                <td className="py-2.5 text-sm font-normal text-center px-2">
                  30 г
                </td>
                <td className="py-2.5 text-sm font-normal text-orange text-right px-2">
                  3023$
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default History;
