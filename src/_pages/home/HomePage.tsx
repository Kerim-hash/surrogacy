'use client';

import { useDictionary } from '@/shared/lib/hooks';
import { FC } from 'react';
import Hero from './section/hero';
import About from './section/about';
import Video from './section/video';
import Animation from './section/Animation';
import Info from './section/Info';
import ProgramStages from './section/programStages';
import RequestConsultation from '@/shared/ui/RequestConsultation';
import Law from './section/law';

const HomePage: FC = () => {
	const { dictionary } = useDictionary();

	return (
		<main className=''>
			<Hero dictionary={dictionary} />
			<About dictionary={dictionary} />
			<Video dictionary={dictionary} />
			<Animation  />
			<Info dictionary={dictionary} />
			<ProgramStages dictionary={dictionary} />
			<div className='container pt-[100px]'>
			<RequestConsultation dictionary={dictionary} />
			</div>
			<Law dictionary={dictionary} />
			<div className='container pt-[100px]'>
			<RequestConsultation dictionary={dictionary} />
			</div>
		</main>
	);
};

export default HomePage;
