// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-05-03',
	modules: ['siste-personas', '@cristiannorga/security'],
	personas: {
		apiPersonas: 'https://jsonplaceholder.typicode.com/users',
	},
	security: {
		responseEncrypt: {
			enabled: false,
			key: 'lEVlTfTFNy43IUaih3cJqCyKLuJwM1rekj-goDVU_f0',
		},
		authorization: {
			enabled: false,
			type: 'basic',
		},
	},
	nitro: {
		compatibilityDate: '2025-05-03',
		experimental: {
			tasks: true,
		},
		dev: true,
		openAPI: {
			meta: {
				title: 'My PCO Nuxt API',
				description: 'This might become the next big thing.',
				version: '1.0',
			},
		},
	},
	devtools: { enabled: true },
	runtimeConfig: {
		public: {
			test: process.env.TEST_ENVIROMENT,
		},
	},
});
