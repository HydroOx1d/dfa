/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from 'next/server';
import cardsData from './products';

export async function GET(req: Request) {
  return NextResponse.json(cardsData);
}

export async function POST(req: Request) {
  return NextResponse.json({ message: 'hello' });
}
