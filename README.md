<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# contains

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if an array-like value contains a search value.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/assert-contains
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var contains = require( '@stdlib/assert-contains' );
```

#### contains( value, searchValue\[, position] )

Tests if `value` contains a search value.

```javascript
var v = contains( [ 1, 2, 3 ], 2 );
// returns true
```

When `value` is a string, the function checks whether the characters of a search string are found in the input string.

```javascript
var v = contains( 'Hello World', 'World' );
// returns true
```

When `value` is an array-like object, but not a string, the function checks whether the input value contains an element which is the [same value][@stdlib/assert/is-same-value] as the specified search value.

```javascript
var arr = [ null, NaN, 2, 'abc', {} ];

var v = contains( arr, NaN ); // NaNs are considered equal
// returns true

v = contains( arr, {} );
// returns false

v = contains( arr, 'ab' );
// returns false
```

Search is case-sensitive.

```javascript
var v = contains( 'Hello World', 'world' );
// returns false
```

To start searching at a specified index, provide a `position` argument.

```javascript
var v = contains( 'Hello World', 'Hello', 6 );
// returns false

v = contains( [ true, NaN, false ], true, 1 );
// returns false
```

If not provided an array-like object, the function throws an error.

<!-- run throws: true -->

```javascript
var v = contains( false, 'abc' );
// throws <TypeError>
```

If not provided an integer-valued `position` argument, the function throws an error.

<!-- run throws: true -->

```javascript
var v = contains( 'hello', 'e', 2.5 );
// throws <TypeError>
```

</section>

<!-- /.usage -->

<section class="notes">

* * *

## Notes

-   For strings, the function is modeled after [String.prototype.includes][mdn-includes], part of the ECMAScript 6 specification. This function is different from a call to `String.prototype.includes.call` insofar as type-checking is performed for all arguments.
-   The function **does** distinguish between positive and negative zero (see [`@stdlib/assert-is-same-value`][@stdlib/assert/is-same-value].
-   If `position < 0`, the search is performed for the entire input array or string.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var contains = require( '@stdlib/assert-contains' );

var bool = contains( 'last man standing', 'stand' );
// returns true

bool = contains( [ 1, 2, 3, 4 ], 2 );
// returns true

bool = contains( 'presidential election', 'president' );
// returns true

bool = contains( [ NaN, 2, 3, 4 ], NaN );
// returns true

bool = contains( 'javaScript', 'js' );
// returns false

bool = contains( 'Hidden Treasures', '' );
// returns true
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-contains.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-contains

[test-image]: https://github.com/stdlib-js/assert-contains/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-contains/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-contains/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-contains?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-contains.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-contains/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-contains/tree/deno
[deno-readme]: https://github.com/stdlib-js/assert-contains/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/assert-contains/tree/umd
[umd-readme]: https://github.com/stdlib-js/assert-contains/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/assert-contains/tree/esm
[esm-readme]: https://github.com/stdlib-js/assert-contains/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/assert-contains/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-contains/main/LICENSE

[mdn-includes]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

[@stdlib/assert/is-same-value]: https://github.com/stdlib-js/assert-is-same-value

</section>

<!-- /.links -->
