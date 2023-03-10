import { writable } from 'svelte/store';

export const isActive = writable(false);

export const redirectPage = writable('');
