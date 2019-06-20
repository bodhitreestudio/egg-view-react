'use strict';

class View {
  constructor(ctx) {
    this.ctx = ctx;
    this.app = ctx.app;
  }

  render (name, locals, options = {}) {
    if (options.toStaticMarkup) {
      return this.app.react.renderStaticMarkup(name, locals, options);
    }

    return this.app.react.render(name, locals, options);
  }

  renderString (name, locals, options) {
    throw 'NOT IMPLEMENTED';
  }

}

module.exports = View;
