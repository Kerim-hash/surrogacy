import '@/app/styles/globals.css';
import type { Metadata } from 'next';
import { Open_Sans, Lato} from 'next/font/google';

const open = Open_Sans({ subsets: ['latin'] });
export const lato = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Surrogacy Centermotherhood',
	description: 'high quality, comfortable and safe',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`bg-[#F5F5F7] ${open.className}`}>{children}</body>
		</html>
	);
}
