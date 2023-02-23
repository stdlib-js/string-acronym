<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# acronym

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Generate an acronym for a given string.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/string-acronym
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].
-   To use as a general utility for the command line, install the corresponding [CLI package][cli-section] globally.

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var acronym = require( '@stdlib/string-acronym' );
```

#### acronym( str\[, options] )

Generates an acronym for a given string.

```javascript
var out = acronym( 'the quick brown fox' );
// returns 'QBF'

out = acronym( 'Hard-boiled eggs' );
// returns 'HBE'
```

The function accepts the following `options`:

-   **stopwords**: list of custom stop words. If not specified, the function uses a default set of stop words from the English language that were deemed words one would likely want to exclude from the acronym generation (a subset of the stop words from [@stdlib/datasets/stopwords-en][@stdlib/datasets/stopwords-en]).

By default, the function uses a list of common English stop words. To use a custom list, set the `stopwords` option.

```javascript
var out = acronym( 'the quick brown fox', {
    'stopwords': []
});
// returns 'TQBF'

out = acronym( 'the quick brown fox', {
    'stopwords': [ 'the', 'quick', 'brown', 'fox' ]
});
// returns ''
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var acronym = require( '@stdlib/string-acronym' );

var str = 'Test-driven development';
var out = acronym( str );
// returns 'TDD'

str = 'Industrial Business Machines';
out = acronym( str );
// returns 'IBM'

str = 'National Aeronautics and Space Administration';
out = acronym( str );
// returns 'NASA'

str = 'To be determined...';
out = acronym( str, {
    'stopwords': []
});
// returns 'TBD'
```

</section>

<!-- /.examples -->

<!-- Section for describing a command-line interface. -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use as a general utility, install the CLI package globally

```bash
npm install -g @stdlib/string-acronym-cli
```

</section>
<!-- CLI usage documentation. -->


<section class="usage">

### Usage

```text
Usage: acronym [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --stopwords str       Comma-separated list of custom stop words.
         --split sep           Delimiter for stdin data. Default: '/\\r?\\n/'.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   If the split separator is a [regular expression][mdn-regexp], ensure that the `split` option is either properly escaped or enclosed in quotes.

    ```bash
    # Not escaped...
    $ echo -n $'quick brown fox\nAlpha-Centauri' | acronym --split /\r?\n/

    # Escaped...
    $ echo -n $'quick brown fox\nAlpha-Centauri' | acronym --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

### Examples

```bash
$ acronym 'the quick brown fox'
QBF
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'the quick brown fox'' | acronym
QBF
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n 'quick brown fox\tAlpha-Centauri' | acronym --split '\t'
QBF
AC
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

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

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-acronym.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-acronym

[test-image]: https://github.com/stdlib-js/string-acronym/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/string-acronym/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-acronym/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-acronym?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-acronym.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-acronym/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/string-acronym#cli
[cli-url]: https://github.com/stdlib-js/string-acronym/tree/cli
[@stdlib/string-acronym]: https://github.com/stdlib-js/string-acronym/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-acronym/tree/deno
[umd-url]: https://github.com/stdlib-js/string-acronym/tree/umd
[esm-url]: https://github.com/stdlib-js/string-acronym/tree/esm
[branches-url]: https://github.com/stdlib-js/string-acronym/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-acronym/main/LICENSE

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

[@stdlib/datasets/stopwords-en]: https://github.com/stdlib-js/datasets-stopwords-en

</section>

<!-- /.links -->
