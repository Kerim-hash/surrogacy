'use client';

import { useDictionary } from '@/shared/lib/hooks';
import { FC } from 'react';
import Hero from './sections/hero';

const AboutPage: FC = () => {
	const { dictionary } = useDictionary();

	return (
		<div className=''>
			<Hero dictionary={dictionary} />
		</div>
	);
};

export default AboutPage;
