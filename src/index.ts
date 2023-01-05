/*! Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above copyright
notice and this permission notice appear in all copies.
 */

export interface TaggedArgs extends ArrayLike<any> {
	0: TemplateStringsArray;
}
/**
 * Returns true if the arguments passed correspond to a tagged function.
 * @example // Using rest arguments:
 * (...args)=> isTagged(args)
 * @example //using arguments object
 * function tag(){ isTagged(arguments) }
 * @note
 * In TS, type predicate with arguments object only works if saved to
 * a different variable. ie,
 * ```js
 * const arg = arguments; isTagged(arg)
 * ```
 * @returns Boolean determining if the arguments passed belong to a tagged
 * function
 */
export default function isTagged(args: ArrayLike<any>): args is TaggedArgs {
	if (typeof args !== "object") return false;
	const first = args[0];
	return !!(
		first &&
		Array.isArray(first) &&
		first.length > 0 &&
		"raw" in first &&
		Array.isArray(first.raw) &&
		first.raw.length === first.length &&
		Object.isFrozen(first) &&
		"length" in args &&
		args.length === first.length
	);
}
