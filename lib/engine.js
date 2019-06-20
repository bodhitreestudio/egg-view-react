'use strict';
const React = require('react');
const ReactDOMServer = require('react-dom/server');

class Engine {
  constructor(app) {
    this.app = app;
    this.config = app.config.react;
  }

  render(name, locals, options) {
    const reactClass = require(name);
    return Promise.resolve(this.renderToString(reactClass, locals));
  }

  renderStaticMarkup(name, locals, options) {
    const reactClass = require(name);
    return Promise.resolve(this.renderToStaticMarkup(reactClass, locals));
  }

  renderToString(reactClass, locals) {
    reactClass = reactClass && reactClass.default ? reactClass.default : reactClass;
    return ReactDOMServer.renderToString(React.createElement(reactClass, locals));
  }

  renderToStaticMarkup(reactClass, locals) {
    reactClass = reactClass && reactClass.default ? reactClass.default : reactClass;
    return ReactDOMServer.renderToStaticMarkup(React.createElement(reactClass, locals));
  }
}

module.exports = Engine;
