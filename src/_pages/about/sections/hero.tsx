'use client';

import { useDictionary } from '@/shared/lib/hooks';
import Image from 'next/image';
import { FC } from 'react';
import heroImage from "@/assets/about.png";
import ArrowDown from '@/assets/arrow-down.svg';
import { DictionaryType } from '@/shared/config/i18n';

const Hero: FC<{dictionary: DictionaryType}> = ({dictionary}) => {

	return (
		<div className='h-screen-minus-127 bg-background'>
			<div className="container flex items-center justify-between h-full relative">
				<div className="info flex-1">
					<h1 className='mb-4 text-textPrimary font-oxygen text-6xl leading-70p4'>
						{dictionary.family.hero.title}
					</h1>
					<p>{dictionary.family.hero.desc}</p>
					<button className='btn btn-primary mt-8'>{dictionary.common.GetAConsultation}</button>
				</div>
				<div className='flex-1 bottom-0 right-0 absolute'>
					<Image src={heroImage} className='mx-auto' alt="Hero Image" width={469} height={469} />
				</div>

				<div className="absolute  bottom-14 w-full flex justify-center cursor-pointer">
					<Image src={ArrowDown} alt="arrow-down" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
