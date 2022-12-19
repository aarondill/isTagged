import type { Config } from "jest";

const config: Config = {
	transform: { "^.+\\.ts?$": "ts-jest" },
	testEnvironment: "node",
	// run .test.ts; it.test.ts; test.ts; .it.test.js; not ITtest.js
	testRegex: "/tests/(.+/)?(.*\\.)?(test|spec)\\.[tj]s(x)?$",
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	verbose: false,
};

export default config;
