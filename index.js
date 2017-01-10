/**
 * Module dependencies.
 */

var Tween = require('tween');
var raf = require('raf');

/**
 * Expose `elementScrollTop`.
 */

module.exports = elementScrollTop;

/**
 * Scroll `_element` to `top`.
 *
 * @param {Element} _element
 * @param {Number} top
 * @param {Object} options
 * @api public
 */

function elementScrollTop(_element, top, options) {
  options = options || {};

  // start position
  const start = {
    top: _element.scrollTop
  };

  // setup tween
  const tween = Tween(start)
    .ease(options.ease || 'out-circ')
    .to({
      top: top
    })
    .duration(options.duration || 1000);

  // scroll
  tween.update(function (o) {
    _element.scrollTop = o.top;
  });

  // handle end
  tween.on('end', function () {
    animate = function () {};
  });

  // animate
  function animate() {
    raf(animate);
    tween.update();
  }

  animate();

  return tween;
}
