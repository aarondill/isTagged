import isTagged from "../src/index";
describe("Testing isTagged", () => {
	test("Return true if tagged without substitutions", () => {
		expect(isTagged`Hello world`) // Tagged
			.toBe(true);
	});
	test("Return true if tagged with substitutions", () => {
		expect(isTagged`Hello ${"world"}`) // Tagged w/ substitution
			.toBe(true);
	});
	test("Return false if called normally", () => {
		expect(isTagged(`Hello ${"world"}`)) // Not tagged
			.toBe(false);
	});
	test("Return false if called with array", () => {
		expect(isTagged(["Hello", "world"], 9)) // Not tagged
			.toBe(false);
	});
	test("Return true if called with tagged arguments", () => {
		const args = ((...x) => x)`Hello ${"world"}`;
		expect(isTagged(args[0], ...args.slice(1))) // Called with valid tag arguments
			.toBe(true);
	});
	test("Return false if called with falsified tagged arguments", () => {
		const args = [["Hello ", ""], "world"];
		expect(isTagged(args[0], ...args.slice(1))) // Called with invalid tag arguments (missing raw)
			.toBe(false);
	});
});
