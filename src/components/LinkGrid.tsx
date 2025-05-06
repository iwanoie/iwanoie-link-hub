'use client';

import DisplayCards from './ui/display-cards';
import { LinkItem } from '@/data/links';

interface LinkGridProps {
	links: LinkItem[];
}

export default function LinkGrid({ links }: LinkGridProps) {
	return (
		<div className="flex min-h-[200px] w-full items-center justify-center py-20">
			<div className="w-full max-w-3xl">
				<DisplayCards cards={links} />
			</div>
		</div>
	);
}
