'use client';

export type LinkItem = {
	icon: 'rakutenroom' | 'tiktok' | 'littlerooms' | 'none';
	title: string;
	description: string;
	date: string;
	url: string;
	iconClassName: string;
	iconBgClassName: string;
	titleClassName: string;
	className: string;
};

const links: LinkItem[] = [
	{
		icon: 'littlerooms',
		title: 'Little Rooms',
		description: 'Explore my room',
		date: 'Just now',
		url: 'https://littlerooms.jp/iwanoie',
		iconClassName: 'text-yellow-500',
		iconBgClassName: 'bg-yellow-200',
		titleClassName: 'text-yellow-500',
		className:
			"[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
	},
	{
		icon: 'tiktok',
		title: 'TikTok',
		description: 'Watch my dog',
		date: 'Just now',
		url: 'https://www.tiktok.com/@iwanoie_?_t=8lo4Egjpqa1&_r=1',
		iconClassName: 'text-blue-500',
		iconBgClassName: 'bg-blue-200',
		titleClassName: 'text-blue-500',
		className:
			"[grid-area:stack] translate-x-12 translate-y-20 hover:translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
	},
	{
		icon: 'rakutenroom',
		title: 'Rakuten Room',
		description: 'View my shopping list',
		date: 'Just now',
		url: 'https://room.rakuten.co.jp/ssikt.room',
		iconClassName: 'text-pink-500',
		iconBgClassName: 'bg-pink-200',
		titleClassName: 'text-pink-500',
		className: '[grid-area:stack] translate-x-24 translate-y-40 hover:translate-y-30',
	},
];

export default links;
