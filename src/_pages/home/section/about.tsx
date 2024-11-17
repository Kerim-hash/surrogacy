'use client';

import { useDictionary } from '@/shared/lib/hooks';
import Image from 'next/image';
import { FC } from 'react';
import aboutImage from "../../../assets/family-about.png";
import AccordionBlock from '@/features/Accordion/ui/accordion-info';
import { DictionaryType } from '@/shared/config/i18n';
const About: FC<{dictionary: DictionaryType}> = ({dictionary}) => {

	return (
		<section className="container  pt-[100px]">
			{/* Left Block */}
			<div className='flex items-center justify-between pb-[100px]'>
				<div className="max-w-[560px] flex-1 space-y-[24px]">
					<h1 className="mb-4 title">{dictionary.family.about.title}</h1>
					<p className='desc1 text-gray'>{dictionary.family.about.articles[0]}</p>
					<p className='desc2'>{dictionary.family.about.articles[1]}</p>
					<p className='desc2'>{dictionary.family.about.articles[2]}</p>
				</div>

				{/* Right Block (Image) */}
				<div className="max-w-[502px] flex-1">
					<Image
						className="mx-auto"
						src={aboutImage}
						alt="Vercel Logo"
						width={502}
						height={502}
					/>
				</div>
			</div>

			<AccordionBlock />

		</section>

	);
};

export default About;
