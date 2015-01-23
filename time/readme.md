time js library
===============================================

![Dependency](http://img.shields.io/badge/dependencies-jQuery-brightgreen.svg) &nbsp;&nbsp;	[![Code Climate](https://codeclimate.com/github/mebjas/awesomeJs.png)](https://codeclimate.com/github/mebjas/awesomeJs)

This library allows you to work on timestamps
```html
	<!-- toPrettyDate() method -->
	Allows you to convert timestamps to dates, in required format
	1421178276 => Wed, 14th Feb 2014 {format here is D d^ M 20y}

	<!-- toRelativeDate() method -->
	1421178276 => 4s ago
	1421178276 => 10d ago
	1421178276 => on Wed, 14th Feb'14
```
you can use this library to create automatic clock showing `1s ago` -> `2s ago` -> `3s ago` and so on!

##how_to_add: include the js file `awesomejs.time.js`
```js
<span class="timestamp1">1421178276</span>
<span class="timestamp2">1421178276</span>

<script src="js/awesomeJs.time.js"></script>
<script>
    $(".timestamp1").toRelativeDate();
    // or you can call
    $(".timestamp2").toPrettyDate("D d^ M 20y");
    // for vedic number system
</script>
```
