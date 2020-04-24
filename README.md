# Nepalify

A JavaScript library that adds support for typing (Romanized) Nepali(नेपाली) input on HTML `<input>` and `<textarea>`.

## Supported Browsers

This library has been tested to work most modern browsers, the oldest ones being Internet Explorer 9, 10 and 11. If you are running an even older browser, you might want to look into the [legacy version](#legacy-version).

## Live Demo / Playground

Visit the following link and starting typing right away.  
https://www.thapaliya.com/en/writings/practice-romanized-nepali-unicode-in-your-browser/

## Installation

Nepalify is available in CommonJS2, ES6 as well as UMD formats for all different needs.  
It can be consumed directly via Unpkg CDN into your pages, or installed via NPM to include in your application bundle.

### Unpkg CDN installation

Via [Unpkg](https://unpkg.com/), you can directly use the bare url for the latest version.

```html
<script src="https://unpkg.com/nepalify" />
```

Or, include the full fixed url.

```html
<script src="unpkg.com/nepalify@0.4.0/umd/nepalify.production.min.js" />
```

Also, add an input/textarea element with a unique id, if you want to follow along.

```html
<input id="unique-input" />
<textarea id="unique-textarea"></textarea>
```

Optionally the following attributes can be used on the elements above.

```html
autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
```

### Via NPM

The library is available on NPM as `nepalify`.

```bash
npm install nepalify
```

## Documentation

The default exports from the library consists of a handful of functions, as explained below.

### interceptElementByID("unique-id")

This method allows the library code to intercept the keypress events on `<input>` and `<textarea>` html elements, given an `id` selector. This can only be used in a browser.

The argument to this function is the same as you'd provide to the standard `getElementById`

```javascript
var inputEl = nepalify.interceptElementById("unique-input");
var textareaEl = nepalify.interceptElementById("unique-textarea");
```

At this point, the library should already be intercepting the keypresses. Go ahead and give it a try.

The object returned by the function above has more methods that can be used to control the interception.

#### isEnabled()

Returns a boolean value indicating whether the interception is turned on or not.

#### enabled()

Enable the interception on the element. Already done by default.


#### disable()

Disable the interception on the element. Useful for clean up or building toggle behaviour.


### format("some-ascii-text")

This method allows you to format the text to Unicode nepali. Also usable in Node or any other non-browser javascript code.

```javascript
var text = "kiMkr/tv/ybimuX/";
console.log(nepalify.format(text));
//किंकर्तव्यबिमुढ्
```

## Examples

I've included some links here where this library has been used. If you've used Nepalify in a project and would like to include it in this list, feel free to reach out or open an issue.

### [Samajik/सामाजिक](http://samajik.glitch.me/)

You can view the source at https://glitch.com/edit/#!/samajik


## Changelog

Please check the [CHANGELOG.md](https://github.com/suvash/nepalify/blob/master/CHANGELOG.md) for details.


## Legacy version

The legacy version of this package supported ancient browsers such as IE6, used jQuery as a dependency and relied on a bunch of hacks. It's still preserved on the [legacy-jquery branch](https://github.com/suvash/nepalify/tree/legacy-jquery)

## License

Copyright © 2020, Suvash Thapaliya

Distributed under the [ISC License](https://github.com/suvash/nepalify/blob/master/LICENSE).
