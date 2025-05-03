import './globals.css';
import { AnalyticsScript } from '@/lib/analytics';
import { ThemeProvider } from 'next-themes';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	metadataBase: new URL('https://iwanoie-link-hub.vercel.app/'),
	title: 'iwanoie | インテリアと犬のリンク集',
	description: 'インテリアとわんこが好きな人のための Rakuten Room リンク。',
	openGraph: {
		title: 'iwanoie | インテリアと犬のリンク集',
		images: ['/og.png'], // v1.0 は静的画像で OK（後で動的化可）
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ja" suppressHydrationWarning>
			<head>
				{/* Cloudflare analytics script */}
				<AnalyticsScript token={process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN} />
			</head>
			<body className="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans antialiased">
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
