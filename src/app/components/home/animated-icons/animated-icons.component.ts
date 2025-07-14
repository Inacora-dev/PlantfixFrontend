import { Component } from '@angular/core';

interface Icon {
  src: string;
  alt: string;
  class: string;
  imgClass: string;
}

@Component({
  selector: 'app-animated-icons',
  templateUrl: './animated-icons.component.html',
  styleUrls: []
})

export class AnimatedIconsComponent {
  icons: Icon[] = [
    {
      src: 'icon1.png',
      alt: 'Icon 1',
      class: 'w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] rounded-full flex justify-center items-center bg-[#c4e4bf]',
      imgClass: 'w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px]',
    },
    {
      src: 'icon2.png',
      alt: 'Icon 2',
      class: 'w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] rounded-full flex justify-center items-center bg-[#d7e2d5]',
      imgClass: 'w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px]',
    },
    {
      src: 'icon3.png',
      alt: 'Icon 3',
      class: 'w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] rounded-full flex justify-center items-center bg-[#e2f2e0]',
      imgClass: 'w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px]',
    },
    {
      src: 'icon4.png',
      alt: 'Icon 4',
      class: 'hidden lg:flex w-[120px] h-[120px] rounded-full justify-center items-center bg-[#e9f6e7]',
      imgClass: 'w-[60px] h-[60px]',
    },
    {
      src: 'icon5.png',
      alt: 'Icon 5',
      class: 'hidden lg:flex w-[120px] h-[120px] rounded-full justify-center items-center bg-[#f5fbf4]',
      imgClass: 'w-[60px] h-[60px]',
    },
    {
      src: 'icon6.png',
      alt: 'Icon 6',
      class: 'hidden lg:flex w-[120px] h-[120px] rounded-full justify-center items-center bg-[#f3f3f3]',
      imgClass: 'w-[60px] h-[60px]',
    },
  ];
}