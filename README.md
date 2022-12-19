# Check if a function is called by tagging!

## Installation

Install from npm:
`npm install @aarond309/is-tagged`

## Usage

```js
import isTagged from "@aarond309/is-tagged";

function tag(first, ...rest) {
	if (isTagged(first, ...rest)) {
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
