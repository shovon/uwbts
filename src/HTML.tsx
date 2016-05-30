import * as React from 'react';
import { renderToString } from 'react-dom/server';
import {Component, PropTypes} from 'react';
import * as serialize from 'serialize-javascript'

// TODO: verify this.

interface IHTMLProps {
  assets: any,
  component: any,
  store: any
}

export default class Html extends React.Component<IHTMLProps, {}> {
  static propTypes = {
    assets    : PropTypes.object,
    component : PropTypes.object,
    store     : PropTypes.object
  }

  // a sidenote for "advanced" users:
  // (you may skip this)
  //
  // this file is usually not included in your Webpack build
  // because this React component is only needed for server side React rendering.
  //
  // so, if this React component is not `require()`d from anywhere in your client code,
  // then Webpack won't ever get here
  // which means Webpack won't detect and parse any of the `require()` calls here,
  // which in turn means that if you `require()` any unique assets here
  // you should also `require()` those assets somewhere in your client code,
  // otherwise those assets won't be present in your Webpack bundle and won't be found.
  //
  render() {
    const { assets, component, store } = this.props;

    // "import" will work here too
    // but if you want hot reloading to work while developing your project
    // then you need to use require()
    // because import will only be executed a single time
    // (when the application launches)
    // you can refer to the "Require() vs import" section for more explanation
    const picture = require('../assets/images/cat.jpg');

    // favicon
    const icon = require('../assets/images/icon/32x32.png');

    const html = (
      <html lang="en-us">
        <head>
          <meta charSet="utf-8"/>
          <title>xHamster</title>

          {/* favicon */}
          <link rel="shortcut icon" href={icon} />

          {/* styles (will be present only in production with webpack extract text plugin) */}
          {Object.keys(assets.styles).map((style, i) =>
            <link href={assets.styles[style]} key={i} media="screen, projection"
                  rel="stylesheet" type="text/css"/>)}

          {/* resolves the initial style flash (flicker) on page load in development mode */}
          { Object.keys(assets.styles).length === 0 ? <style dangerouslySetInnerHTML={{__html: require('../assets/styles/main_style.css')}}/> : null }
        </head>

        <body>
          {/* image requiring demonstration */}
          <img src={picture}/>

          {/* rendered React page */}
          <div id="content" dangerouslySetInnerHTML={{__html: renderToString(component)}}/>

          {/* Flux store data will be reloaded into the store on the client */}
          <script dangerouslySetInnerHTML={{__html: `window._flux_store_data=${serialize(store.getState())};`}} />

          {/* javascripts */}
          {/* (usually one for each "entry" in webpack configuration) */}
          {/* (for more informations on "entries" see https://github.com/petehunt/webpack-howto/) */}
          {Object.keys(assets.javascript).map((script, i) =>
            <script src={assets.javascript[script]} key={i}/>
          )}
        </body>
      </html>
    );

    return html;
  }
}
