'use client';

import { useDictionary } from '@/shared/lib/hooks';
import { FC } from 'react';
import Hero from './sections/hero';
import About from './sections/about';
import RequestConsultation from '@/shared/ui/RequestConsultation';
import Director from './sections/director';
import Info from './sections/info';
import Head from 'next/head';

const AboutPage: FC = () => {
	const { dictionary } = useDictionary();

	return (
		<div className=''>
				<Head>
			<title>О нас | Surrogacy Center Motherhood</title>
			<meta
				name="description"
				content="Узнайте больше о Surrogacy Center Motherhood и наших услугах в области суррогатного материнства."
			/>
		</Head>
			<Hero dictionary={dictionary} />
			<About dictionary={dictionary} />
			<div className='container pt-[100px]'>
			<RequestConsultation dictionary={dictionary} />
			</div>
			<Director dictionary={dictionary} />
			<Info dictionary={dictionary} />
		</div>
	);
};

export default AboutPage;
