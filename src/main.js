import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {		
		nameheader : 'Learn Svelte',
	}
});

export default app;