import Image from 'next/image';
import LinkGrid from '@/components/LinkGrid';
import links from '@/data/links';

export default function HomePage() {
	return (
		<main className="flex flex-col items-center justify-center p-6 gap-6">
			<Image src="/logo.png" alt="iwanoie logo" width={120} height={120} priority />
			<LinkGrid links={links} />
		</main>
	);
}
