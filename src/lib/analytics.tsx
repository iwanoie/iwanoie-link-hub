export function AnalyticsScript({ token }: { token: string | undefined }) {
	if (!token) return null;

	return (
		<script
			defer
			src={`https://static.cloudflareinsights.com/beacon.min.js`}
			data-cf-beacon={`{"token": "${token}"}`}
		></script>
	);
}

export const trackClick = (eventName: string) => {
	if (typeof window !== 'undefined' && 'cf_beacon' in window) {
		// @ts-ignore
		window.cf_beacon?.send(eventName);
	}
};
