# Tree Builder Demo
![Stunning tree picture from wikimedia](https://upload.wikimedia.org/wikipedia/commons/8/83/Socotra_dragon_tree.JPG)

This is a small React app that parses string representation of a tree (i.e. table of content) and renders the interactive version of it.
See the live version hosted on [Netlify](https:://www.netlify.com) - [Tree Builder](https://tree-builder.netlify.com)

## UX and UI
I'm not a designer, but modern web is all the same - navbar at the top and the content below.

Tree Builder is responsive. Nothing more to say about the design.

But what is more important is that Tree Builder is Progressive Web Application.
It has basic service worker that caches the requests and user can enjoy the app while being offline.

User can save the app to home screen to quickly access it.

The apps has progressive enhancement features like localStorage support to save the tree data.

I also spent some time on accessibility:
* App has correct headings structure
* Editor area is a `<form>` with all inputs properly labeled
* Rendered tree has all proper aria attributes and has basic keyboard support. The tree should be properly represented to screen reader users. 
* Whole page is comfortable to use just with keyboard - so no need to leave your cup on a table.

## Google Lighthouse Audit

This app is 13k in total and loads really fast - CSS is inlined in `<head>`, JS bundle goes to the end of `<body>`.

As the result, the app has this score:
* 99 - Performance
* 100 - Progressive Web App
* 100 - Accessibility
* 100 - Best Practices
* 100 - SEO.

Please see the screenshot:
![Google Lighthouse score](https://i.imgur.com/7OZoCC1.png)

## Technology Used
I used [Preact](https://preactjs.com/) with [Preact Compat](https://www.npmjs.com/package/preact-compat) that allows to write React code and saves a lot of bandwidth at the same time (Preact is about 3k g-zipped).

I bootstrapped the project using [Preact-CLI](https://github.com/developit/preact-cli). It has these features out of the box:
* Webpack
* ES6 transpiling + polyfills
* CSS preprocessors
* Simple Service worker
* Basic manifest file
* Page prerendering

### Why (P)React?
It's totally possible to implement this app using vanilla JS. However frameworks make it much easier to colaborate on and share the code. I like the components idea that allows to devide the apps and each component is atomic - it has all the assets in one place.

With Preact it's possible to achieve in 13k of network traffic in total, so why not.

### What about Redux?
I didn't use Redux or any other state management lib because the app is quite simple. There are no problems with lifting the state one level app. 

## Development Experience
Nice things about development enviroment:
* Watch mode
* ESLint
* [.editorconfig](http://editorconfig.org/) - make your editor and linting be friends
* ES6
* React
* SCSS support - just rename css files to scss

All this was possible with low to zero configuration with the help of Preact-CLI
