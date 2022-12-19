# Check if a function is called by tagging!

## Installation

`npm install https://github.com/aarondill/isTagged.git`

## Usage

```js
import isTagged from "is-tagged";

function tag(first, ...rest) {
	return isTagged(first, ...rest);
}
tag`hello world`; // => true
tag("hello world"); //=> false
```
