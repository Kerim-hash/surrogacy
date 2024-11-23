import React, { FC } from "react";
import Image from "next/image";
import { DictionaryType } from "@/shared/config/i18n";
import heroImage from "@/assets/EggDonation/hero.webp";
import ArrowDown from '@/assets/arrow-down.svg';

const Hero: FC<{ dictionary: DictionaryType }> = ({ dictionary }) => {
  return <div className='h-screen-minus-127 bg-background'>
  <div className="container flex items-center justify-between h-full relative">
      <div className="info flex-1">
          <h1 className='mb-4 text-textPrimary font-oxygen text-6xl leading-70p4'>
              {dictionary.eggDonation.hero.title}
          </h1>
          <button className='btn btn-primary mt-8'>{dictionary.common.GetAConsultation}</button>
      </div>
      <div className='flex-1 h-full'>
          <Image src={heroImage} className='mx-auto h-full' alt="Hero Image"  />
      </div>

      <div className="absolute bottom-14 w-full flex justify-center cursor-pointer">
          <Image src={ArrowDown} alt="arrow-down" />
      </div>
  </div>
</div>
};

export default Hero;
