'use client';

import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';

interface DisplayCardProps {
	className?: string;
	icon?: React.ReactNode;
	title?: string;
	description?: string;
	date?: string;
	iconClassName?: string;
	titleClassName?: string;
	onClick?: () => void;
}

export function DisplayCard({
	className,
	icon = <Sparkles className="size-4 text-blue-300" />,
	title = 'Featured',
	description = 'Discover amazing content',
	date = 'Just now',
	iconClassName = 'text-blue-500',
	titleClassName = 'text-blue-500',
	onClick,
}: DisplayCardProps) {
	return (
		<div
			onClick={onClick}
			className={cn(
				'relative flex h-36 w-[22rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 bg-muted/70 backdrop-blur-sm px-4 py-3 transition-all duration-700 hover:border-white/20 hover:bg-muted cursor-pointer',
				className,
			)}
		>
			<div>
				<span className="relative inline-block rounded-full bg-blue-800 p-1">{icon}</span>
				<p className={cn('text-lg font-medium', titleClassName)}>{title}</p>
			</div>
			{description && <p className="whitespace-nowrap text-lg">{description}</p>}
			{date && <p className="text-muted-foreground">{date}</p>}
		</div>
	);
}

interface DisplayCardsProps {
	cards: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
	return (
		<div className="grid gap-6 [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700">
			{cards.map((card, index) => (
				<DisplayCard key={index} {...card} />
			))}
		</div>
	);
}
