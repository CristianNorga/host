defineRouteMeta({
	openAPI: {
		tags: ['ping'],
		description: 'Test route description',
		parameters: [],
	},
});

export default defineEventHandler(async () => {
	return 'pong';
});
