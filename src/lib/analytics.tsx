'use client';

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

export function GoogleAnalytics() {
	if (!GA_ID) {
		console.warn('GA4 ID is not set. Please check NEXT_PUBLIC_GA_MEASUREMENT_ID.');
		return null;
	}

	return (
		<>
			<script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}></script>
			<script
				dangerouslySetInnerHTML={{
					__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', '${GA_ID}');
					`,
				}}
			/>
		</>
	);
}

export const trackEvent = ({
	action,
	category,
	label,
	value,
}: {
	action: string;
	category: string;
	label: string;
	value?: number;
}) => {
	if (typeof window !== 'undefined') {
		window.gtag?.('event', action, {
			event_category: category,
			event_label: label,
			value,
		});
	}
};
