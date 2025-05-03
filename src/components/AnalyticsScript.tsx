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
