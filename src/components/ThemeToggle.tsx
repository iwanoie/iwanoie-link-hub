'use client';

import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	const isDark = theme === 'dark';
	return (
		<button
			aria-label="テーマ切替"
			onClick={() => setTheme(isDark ? 'light' : 'dark')}
			className="fixed top-4 right-4 p-2 rounded-full shadow bg-white/80dark:bg-slate-800/80 backdrop-blur focus-visible:outline-none focus-visible:ring-2 ring-orange-500"
		>
			{isDark ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-slate-700" />}
		</button>
	);
}
