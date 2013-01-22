# Nepalify (tested on browsers IE6+, Firefox 3+, Chrome 14+, Safari 4+, Opera 10+ )


A Javascript library that adds instant support for (Romanized) Nepali(नेपाली) input on HTML `<input>` and `<textarea>` with almost zero setup effort.

This has been tested to work on ancient browsers such as IE6 and above. Please let me know if you run into a bug by [opening an issue here](https://github.com/suvash/nepalify/issues).

## Live Demo

For a live demo of the library, please visit [the showcase page](http://suvashthapaliya.com/showcase/practice-romanized-nepali-with-nepalify-js/).

## Dependencies

This library depends on jQuery. Please get the latest version of jQuery before you intend to use Nepalify.

## Installation

Download the libraries to the "scripts" directory (or wherever you place your JS files.)

- Download the [latest version of jQuery here](http://jquery.com/)
- Download the [latest minified version of Nepalify here](https://raw.github.com/suvash/Nepalify/master/lib/nepalify.min.js)

## Usage

### Add "nepalify" classes to the input fields you want to have Nepali Input

In your HTML files, add classes to the required input/textarea elements.

```
      <input class="nepalify">
      <textarea class="nepalify"></textarea>
```

### Add the library (and load it after jQuery and the page had loaded)

Load the library after jQuery. Make sure that the library is loaded only after all the HTML is loaded. This can be done by loading the libraries after all the HTML elements. i.e. towards the bottom.

```
    ...
    </div>
    <script src="scripts/jquery/jquery.js"></script>
    <script src="scripts/nepalify.min.js"></script>
  </body>
</html>
```

### That's it. The input fields are all set to using (Romanized) Nepali(नेपाली) input.

##Suggestions are always welcome.

Feel free to send me one by [opening an issue here](https://github.com/suvash/nepalify/issues).

