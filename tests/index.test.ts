import isTagged from "../src/index";
describe("Testing isTagged", () => {
	test("Return true if called with arguments object", () => {
		const func = function (..._unusedArgs: any[]) {
			return isTagged(arguments);
		};
		expect(func`helloworld`).toBe(true);
	});
	test("Return true if called with tagged extracted arguments", () => {
		const args = ((...x) => x)`Hello ${"world"}`;
		expect(isTagged(args)) // Called with valid tag arguments
			.toBe(true);
	});
	test("Return false if called normally", () => {
		expect(isTagged(`Hello ${"world"}`)) // Not tagged
			.toBe(false);
	});
	test("Return false if called with array", () => {
		expect(isTagged([["Hello", "world"], 9])) // Not tagged
			.toBe(false);
	});
	test("Return false if called with falsified tagged arguments", () => {
		const args = [["Hello ", ""], "world"];
		expect(isTagged(args)) // Called with invalid tag arguments (missing raw)
			.toBe(false);
	});
});
