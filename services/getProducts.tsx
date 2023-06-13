import { GoldInfo } from '@/components/card/Card';

export default async function getProducts() {
  const result = await fetch(`${process.env.NEXT_URL}/api/products`);
  const data: Array<GoldInfo> = await result.json();

  return data;
}
