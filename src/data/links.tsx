'use client';

import { ReactNode } from 'react';
import { SiGooglehome, SiRakuten, SiTiktok } from 'react-icons/si';
import { Sparkles } from 'lucide-react';

export type LinkItem = {
	icon: ReactNode;
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
		icon: <SiGooglehome className="text-green-500" />,
		title: 'Little Rooms',
		description: 'Rakuten description',
		date: 'Just now',
		url: 'https://littlerooms.jp/iwanoie',
		iconClassName: 'text-green-500',
		iconBgClassName: 'bg-green-200',
		titleClassName: 'text-green-500',
		className:
			"[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
	},
	{
		icon: <SiTiktok className="text-gray-500" />,
		title: 'TikTok',
		description: 'Rakuten description',
		date: 'Just now',
		url: 'https://www.tiktok.com/@iwanoie_?_t=8lo4Egjpqa1&_r=1',
		iconClassName: 'text-gray-500',
		iconBgClassName: 'bg-gray-200',
		titleClassName: 'text-gray-500',
		className:
			"[grid-area:stack] translate-x-12 translate-y-20 hover:translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
	},
	{
		icon: <SiGooglehome className="text-blue-500" />,
		title: 'Ohouse',
		description: 'Rakuten description',
		date: 'Just now',
		url: 'https://link.ohouse.com/5pmcjx',
		iconClassName: 'text-blue-500',
		iconBgClassName: 'bg-blue-200',
		titleClassName: 'text-blue-500',
		className:
			"[grid-area:stack] translate-x-24 translate-y-40 hover:translate-y-30 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
	},
	{
		icon: <SiRakuten className="text-pink-500" />,
		title: 'Rakuten Room',
		description: 'Rakuten description',
		date: 'Just now',
		url: 'https://room.rakuten.co.jp/ssikt.room',
		iconClassName: 'text-pink-500',
		iconBgClassName: 'bg-pink-200',
		titleClassName: 'text-pink-500',
		className: '[grid-area:stack] translate-x-36 translate-y-60 hover:translate-y-50',
	},
];

export default links;
