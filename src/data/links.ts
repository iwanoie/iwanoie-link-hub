export type LinkIcon = 'shopping' | 'home' | 'camera' | 'heart';

export type LinkItem = {
	id: number;
	title: string;
	url: string;
	icon: LinkIcon;
};

const links: LinkItem[] = [
	{
		id: 1,
		title: 'Rakuten Room',
		url: 'https://room.rakuten.co.jp/ssikt.room',
		icon: 'shopping',
	},
	{ id: 2, title: 'Ohouse', url: 'https://link.ohouse.com/5pmcjx', icon: 'home' },
	{
		id: 3,
		title: 'TikTok',
		url: 'https://www.tiktok.com/@iwanoie_?_t=8lo4Egjpqa1&_r=1',
		icon: 'camera',
	},
	{ id: 4, title: 'Little Rooms', url: 'https://littlerooms.jp/iwanoie', icon: 'heart' },
];

export default links;
