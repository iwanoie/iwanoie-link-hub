import './globals.css';
import { AnalyticsScript } from '@/lib/analytics';
import Script from 'next/script';
import { ThemeProvider } from 'next-themes';
import type { Metadata } from 'next';
import links from '@/data/links';

export const metadata: Metadata = {
	metadataBase: new URL('https://iwanoie-link-hub.vercel.app/'),
	title: 'iwanoie',
	description:
		'インテリア好き3.4万人がフォローする iwanoie 公式リンク集。Rakuten Room の購入品リストや TikTok・Ohouse など、各種 SNS をまとめてチェックできます。',
	keywords: ['インテリア', 'Rakuten Room', 'リンク集', 'iwanoie'],
	openGraph: {
		title: 'iwanoie',
		description:
			'Rakuten Room のおすすめアイテムと人気 SNS へのアクセスを 1 ページに集約。おしゃれ空間のヒントがここに。',
		url: '/',
		siteName: 'iwanoie',
		locale: 'ja_JP',
		type: 'website',
		// images: ['/og.png'], // v1.0 は静的画像で OK（後で動的化可）
		images: [
			{
				url: '/og.png',
				width: 1200,
				height: 630,
				alt: 'iwanoie リンク集 OGP',
			},
		],
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ja" suppressHydrationWarning>
			<head>
				{/* Cloudflare analytics script */}
				<AnalyticsScript token={process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN} />
				{/* JSON‑LD 構造化データ */}
				<Script
					id="ld-json"
					type="application/ld+json"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'WebSite',
							name: 'iwanoie',
							url: 'https://iwanoie-link-hub.vercel.app/',
							description:
								'インテリア好き3.4万人がフォローする iwanoie 公式リンク集。Rakuten Room の購入品リストや TikTok・Ohouse など、各種 SNS をまとめてチェックできます。',
							sameAs: [
								'https://room.rakuten.co.jp/ssikt.room',
								'https://link.ohouse.com/5pmcjx',
								'https://www.tiktok.com/@iwanoie_?_t=8lo4Egjpqa1&_r=1',
								'https://littlerooms.jp/iwanoie',
							],
						}),
					}}
				/>
			</head>
			<body className="min-h-screen bg-amber-50 dark:bg-slate-900 font-sans antialiased">
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
