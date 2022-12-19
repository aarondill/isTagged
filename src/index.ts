/*! Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above copyright
notice and this permission notice appear in all copies.
 */
/**
 * Returns true if the arguments passed correspond to a tagged function.
 * @example // Using rest arguments:
 * (...args)=> isTagged(args[0], ...args.slice(1))
 * // Using already separated arguments:
 * (first, ...rest) => isTagged(first, ...rest);
 * @param first The first argument of your function. May be a
 * TemplateStringsArray
 * @param rest The remaining arguments. May be values to insert
 * @returns Boolean determining if the arguments passed belong to a tagged
 * function
 */
export default function isTagged(
	first: any,
	...rest: any[]
): first is TemplateStringsArray {
	// const first = args[0]
	return !!(
		first &&
		Array.isArray(first) &&
		first.length > 0 &&
		"raw" in first &&
		Array.isArray(first.raw) &&
		first.raw.length === first.length &&
		Object.isFrozen(first) &&
		rest.length + 1 === first.length
	);
}
