Smoothscroll js library
===============================================

![Dependency](http://img.shields.io/badge/dependencies-jQuery-brightgreen.svg) &nbsp;&nbsp;	[![Code Climate](https://codeclimate.com/github/mebjas/awesomeJs.png)](https://codeclimate.com/github/mebjas/awesomeJs)

Adding this file to HTML script converts every internal links page movement to smooth transition
```html
Anchor tags:
<a href="#target">internal link</a>
```

**#how_to_add**: just include the js file
```js
<script src="js/awesomeJs.smoothscroll.js"></script>
<script>
    $(document).ready(function() {
        $(document).smoothscroll();
    });
</script>
```
