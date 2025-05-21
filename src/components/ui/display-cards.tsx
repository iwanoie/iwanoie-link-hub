'use client';

import { trackEvent } from '@/lib/analytics';
import { cn } from '@/lib/utils';
import { FiXSquare } from 'react-icons/fi';
import { SiGooglehome, SiRakuten, SiTiktok } from 'react-icons/si';

interface DisplayCardProps {
	className?: string;
	icon?: 'rakutenroom' | 'tiktok' | 'littlerooms' | 'none';
	title?: string;
	description?: string;
	date?: string;
	url?: string;
	iconClassName?: string;
	iconBgClassName?: string;
	titleClassName?: string;
}

function resolveIcon(name: string, iconClassName?: string) {
	switch (name) {
		case 'rakutenroom':
			return <SiRakuten className={iconClassName} />;
		case 'tiktok':
			return <SiTiktok className={iconClassName} />;
		case 'littlerooms':
			return <SiGooglehome className={iconClassName} />;
		default:
			return <FiXSquare className={iconClassName} />;
	}
}

function DisplayCard({
	className,
	icon = 'none',
	title = 'No Link',
	description = 'The link is not registered yet',
	date = 'Long ago...',
	url = '',
	iconClassName = 'text-red-500',
	iconBgClassName = 'bg-orange-200',
	titleClassName = 'text-orange-500',
}: DisplayCardProps) {
	const handleClick = () => {
		if (!title) return;
		trackEvent({
			action: 'click',
			category: 'outbound',
			label: title,
		});
	};

	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			onClick={handleClick}
			className={cn(
				"relative flex h-36 w-full max-w-[16rem] sm:max-w-[20rem] right-12 -skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 bg-muted/70 backdrop-blur-sm px-4 py-3 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-background after:to-transparent after:content-[''] hover:border-white/20 hover:bg-muted [&>*]:flex [&>*]:items-center [&>*]:gap-2",
				className,
			)}
		>
			<div>
				<span className={cn('relative inline-block rounded-full p-1', iconBgClassName)}>
					{resolveIcon(icon, iconClassName)}
				</span>
				<p className={cn('text-lg font-medium', titleClassName)}>{title}</p>
			</div>
			<p className="whitespace-nowrap text-lg">{description}</p>
			<p className="text-muted-foreground">{date}</p>
		</a>
	);
}

interface DisplayCardsProps {
	cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
	const defaultCards = [
		{
			className:
				"[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
		},
	];

	const displayCards = cards || defaultCards;

	return (
		<div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700 w-full max-w-[90vw] mx-auto">
			{displayCards.map((cardProps, index) => (
				<DisplayCard key={index} {...cardProps} />
			))}
		</div>
	);
}
