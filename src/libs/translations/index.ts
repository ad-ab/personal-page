import type { Config as ConfigType } from 'sveltekit-i18n';
import i18n from 'sveltekit-i18n';
import lang from './lang.json';

const Config: ConfigType = {
	loaders: [
		{
			locale: 'en',
			key: 'lang',
			loader: () => Promise.resolve(lang)
		},
		{
			locale: 'en',
			key: 'menu',
			loader: async () => (await import('./en/menu.json')).default
		},
		{
			locale: 'en',
			key: 'about',
			routes: ['/about'],
			loader: async () => (await import('./en/about.json')).default
		},
		{
			locale: 'en',
			key: 'home',
			routes: ['/'],
			loader: async () => (await import('./en/home.json')).default
		},
		{
			locale: 'cs',
			key: 'lang',
			loader: () => Promise.resolve(lang)
		},
		{
			locale: 'cs',
			key: 'menu',
			loader: async () => (await import('./cs/menu.json')).default
		},
		{
			locale: 'cs',
			key: 'about',
			routes: ['/about'],
			loader: async () => (await import('./cs/about.json')).default
		},
		{
			locale: 'cs',
			key: 'home',
			routes: ['/'],
			loader: async () => (await import('./cs/home.json')).default
		}
	]
};

export const { t, loading, locales, locale, loadTranslations } = new i18n(Config);

loading.subscribe(($loading) => $loading && console.log('Loading translations...'));
