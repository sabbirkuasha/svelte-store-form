import { writable } from 'svelte/store';

const newLoading = () => {
	const { subscribe, update, set } = writable({
		status: 'IDLE',
		message: 'default message'
	});

	return subscribe, update, set;
};

export const loading = newLoading();
