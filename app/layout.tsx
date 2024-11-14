import type { Metadata } from 'next';
import { inter } from '@/components/shared/fonts';
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from '@/lib/constants';
import './globals.css';

export const experimental_ppr = true;

export const metadata: Metadata = {
	title: {
		template: `%s | ${APP_NAME}`, // %s is a placeholder for particular page like Home etc
		default: APP_NAME,
	},
	description: APP_DESCRIPTION,
	metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${inter.className} antialiased`}>{children}</body>
		</html>
	);
}
