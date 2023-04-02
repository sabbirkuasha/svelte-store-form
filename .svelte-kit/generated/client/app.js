export { matchers } from './matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12')];

export const server_loads = [];

export const dictionary = {
	"/": [~2],
	"/checkout": [~4],
	"/form": [~5],
	"/lazy": [~6],
	"/mailcrab": [~7],
	"/navbar": [8],
	"/otp": [9],
	"/phone": [~10],
	"/some": [11],
	"/some/[some]": [12],
	"/[lightbox]": [3]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';