import { browser } from '$app/env';

export const duration =
	browser && window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 400;
