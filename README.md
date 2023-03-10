# Check if a function is called by tagging!

## Installation

Install from npm:
`npm install @aarondill/is-tagged`

## Usage

Import the default export and call it using the _entire_ list of arguments to the function in question, stored in an Array or ArrayLike(has a length property) object.

Example:

```js
import isTagged from "@aarondill/is-tagged";

function tag(...args) {
	// or `isTagged(arguments)`
	if (isTagged(args)) {
		// Do stuff with tag`hello world`
		return true;
	} else {
		// Do stuff with tag("hello world")
		return false;
	}
}
tag`hello world`; // => true
tag("hello world"); //=> false
```

## Why?

Sometimes you want to provide two ways of calling a function:

```js
func`hello ${12}`;
func("hello 12");
```

In order to implement any behavior allowing this, arguments must be processed _entirely_ differently.
This library helps this by allowing detection of the method in which the function was called

## Special Feature:

`isTagged` is a type-guard in TypeScript, allowing for better autocomplete and error management!

**_Note:_** This only works if the arguments are stored in a non-internal variable(ie, not the arguments object). In order to use the arguments object with type-guarding, store it in a variable: `const args = arguments`
