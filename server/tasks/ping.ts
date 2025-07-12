
export default defineTask({
	meta: {
		name: 'ping',
		description: 'Queue task for processing messages',
	},
	run({ payload }) {

		console.log('Processing queue task with payload:', payload);
		return { result: 'pong' };
	},
});
