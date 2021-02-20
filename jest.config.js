module.exports = {
	transform: {
		'\\.js$': 'babel-jest',
	},
	moduleNameMapper: {
		'^vue$': 'vue/dist/vue.common',
		'vue-2-3-auto/to-vue-2': '<rootDir>/src/to-vue-2',
		'vue-2-3-auto/to-vue-3': '<rootDir>/src/to-vue-3',
	},
};
