/* eslint-disable import/prefer-default-export */
import localFont from 'next/font/local';

export const sfProDisplay = localFont({
  src: [
    {
      path: '../assets/fonts/sfProDisplayBold.otf',
      style: 'normal',
      weight: '700',
    },
    {
      path: '../assets/fonts/sfProDisplayMedium.otf',
      style: 'normal',
      weight: '500',
    },
    {
      path: '../assets/fonts/sfProDisplayRegular.otf',
      style: 'normal',
      weight: '400',
    },
  ],
});

export const jetBrainsMono = localFont({
  src: [
    {
      path: '../assets/fonts/JetBrainsMono-Bold.ttf',
      style: 'normal',
      weight: '700',
    },
    {
      path: '../assets/fonts/JetBrainsMono-SemiBold.ttf',
      style: 'normal',
      weight: '600',
    },
  ],
});
