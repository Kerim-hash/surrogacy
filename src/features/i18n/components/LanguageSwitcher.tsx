'use client';
import { defaultLocale, locales } from '@/shared/config/i18n';
import { usePathname, useRouter } from 'next/navigation';

const LanguageSwitcher = () => {
	const { push } = useRouter();
	const pathname = usePathname();
	const currentLocale = pathname.split('/')[1];

	const handleLocaleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const newLocale = event.target.value;
		const newPathname = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
		push(newPathname);
	};

	return (
		<div className="relative inline-block">
			<select
				value={currentLocale || defaultLocale}
				onChange={handleLocaleChange}
				className="appearance-none  bg-transparent border border-[#DDDDDF] px-3 py-1 pr-8 cursor-pointer rounded-md  text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none"
			>
				{locales.map(({ code, name }) => (
					<option key={code} value={code}>
						{code}
					</option>
				))}
			</select>
			<span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="w-4 h-4 text-gray-700"
				>
					<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
				</svg>
			</span>
		</div>

	);
};

export default LanguageSwitcher;
