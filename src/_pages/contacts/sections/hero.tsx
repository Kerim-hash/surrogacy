'use client';

import { useDictionary } from '@/shared/lib/hooks';
import Image from 'next/image';
import { FC } from 'react';
import heroImage from "@/assets/about.png";
import ArrowDown from '@/assets/arrow-down.svg';
import { DictionaryType } from '@/shared/config/i18n';
import ContactsIMage from "@/assets/contacts.jpg"

const Hero: FC<{ dictionary: DictionaryType }> = ({ dictionary }) => {

	return (
		<div className='h-screen-minus-127 bg-background relative'>
			<div className="container flex items-center justify-between h-full relative">
				<div className="flex-1 flex flex-col  w-1/2">
					<h1 className='mb-20 text-textPrimary font-oxygen text-8xl leading-70p4'>
						{dictionary.contacts.title}
					</h1>
					<a href="tel:+996556668989" className={`text-textPrimary text-5xl font-oxygen mb-10`}>
						+996 556 668 989
					</a>
					<a className={`text-textPrimary text-5xl font-oxygen`} href="mailto:tang.ivf@gmail.com">tang.ivf@gmail.com</a>
				</div>
			</div>
				<div className='absolute right-0 top-0 flex-1 h-full'>
					<Image src={ContactsIMage} className='mx-auto w-full h-full' alt="Hero Image" width={630} height={575} />
				</div>
		</div>
	);
};

export default Hero;
