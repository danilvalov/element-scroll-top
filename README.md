
# element-scroll-top

  Smooth element scroll to position with requestAnimationFrame and [Tween](https://github.com/component/tween).

## Installation

    $ component install component/element-scroll-top

## API

### elementScrollTop(element, top, [options])

  Scroll to the given point `top` with the given `options`:

  - `ease` easing function defaulting to "out-circ" (view [ease](https://github.com/component/ease) for more)
  - `duration` animation duration defaulting to `1000`

```js
var elementScrollTop = require('element-scroll-top');

var element = document.getElementById('test');

elementScrollTop(element, 1200, {
  ease: 'out-bounce',
  duration: 1500
});
```

## License

  MIT
