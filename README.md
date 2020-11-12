<div>
  
<h1 align="center">
  <a href="https://github.com/moralistfestus/domify.js">
    domify.js library
  </a>
</h1>

<p align="center">
  <strong>The JavaScript library for faster and easier development of web applications.</strong><br>
    A simple lightweight Javascript library for DOM Manipulation and faster web application development. 
    
</p>

<p align="center">
 
<a href="https://github.com/MoralistFestus/domify.js/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="This repository is released under the MIT license." />
  </a>
  
  <a href="https://github.com/MoralistFestus/domify.js/blob/master/CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  </a>
</p>


</div>

---

<br />

> [**Library Documentation**](https://github.com/MoralistFestus/domify.js/tree/main/docs)


You probably need a Javascript library to interact with DOM, Event handlers, and a lightweight, modern and performant javascript library. This does:

- DOM Manipulation (selector, id, class, each, etc.)
- DOM editing (classes & attributes, html, etc.)
- Event handling
- Animation (Fadein, Fadeout, scroll up, etc)
- Interacting with browser webcam
- Clipboard features

A couple of simple examples:

```js
// Simple events handler
 dom('button').on('click', function() {
  alert('Hello, world');
})

// hide element
dom('button').on('click', function() {
  dom('h1').hide()
})
```

## Getting Started
There are few ways to use domify.js

### Link locally
You can download/clone the library directly to your local system and immediately link using the `script` tag

```js
<script src="src/domify.js"></script>

// minified version
<script src="src/domify.min.js"></script>
```

### Use a CDN
jsdelivr.com is an awesome CDN (Content Delivery Network) service that hosts many open source projects so you don't need to download the code, just link:

```js
<script src="https://cdn.jsdelivr.net/gh/MoralistFestus/domify.js@2.0/src/domify.js"></script>

// minified version
<script src="https://cdn.jsdelivr.net/gh/MoralistFestus/domify.js@2.0/src/domify.min.js"></script>
```

## Functions
- **hide()**: Hides the element of the specified selector (tag, class, id, attr) 
- **show()**: Shows the element of the specified selector (tag, class, id, attr)
- **addClass()**: Adds or creates a new class attribute if specified 
- **removeClass()**: Removes specified class 
- **toggleClass()**: Toggle classes upon another 
- **output()**: Writes to an HTML element
- **camera()**: Request browser's permission for web camera eligibility (if supported)
- **copy()**: Copy to clipboard function 
- **color()**: Add text color to an HTML element 
- **bgcolor()**: Adds background color to an HTML element 
- **prevent()**: Prevent form action

## Contributing 
It's open source and contributions welcomed.

## Author and License 
This library is currently maintained by [**moralistfestus**](https://github.com/moralistfestus) and Co-contributors, licensed under MIT License


