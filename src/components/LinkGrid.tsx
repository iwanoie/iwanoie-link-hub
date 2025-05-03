'use client';

import DisplayCards from './ui/display-cards';
import { LinkItem, LinkIcon } from '@/data/links';
import { trackClick } from '@/lib/analytics';
import { IconBaseProps } from 'react-icons';
import { FiShoppingBag, FiHome, FiCamera, FiHeart } from 'react-icons/fi';
import { ReactNode } from 'react';

interface LinkGridProps {
	links: LinkItem[];
}

// アイコンのマッピング
const ICON_MAP: Record<LinkIcon, (props: IconBaseProps) => ReactNode> = {
	shopping: (props) => <FiShoppingBag {...props} />,
	home: (props) => <FiHome {...props} />,
	camera: (props) => <FiCamera {...props} />,
	heart: (props) => <FiHeart {...props} />,
};

export default function LinkGrid({ links }: LinkGridProps) {
	const cards = links.map((link) => ({
		icon: ICON_MAP[link.icon]({ size: 24 }),
		title: link.title,
		description: '',
		data: '',
		className: 'transition-transform ease-out hover:scale-105',
		onClick: () => trackClick(`${link.title}_click`),
	}));

	return (
		<div className="flex justify-center py-10">
			<DisplayCards cards={cards} />
		</div>
	);
}
