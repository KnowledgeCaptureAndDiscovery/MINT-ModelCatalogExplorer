/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/*
      The `<base>` tag below is present to support two advanced deployment options:
      1) Differential serving. 2) Serving from a non-root path.

      Instead of manually editing the `<base>` tag yourself, you should generally either:
      a) Add a `basePath` property to the build configuration in your `polymer.json`.
      b) Use the `--base-path` command-line option for `polymer build`.

      Note: If you intend to serve from a non-root path, see [polymer-root-path] below.
    */
/* See https://goo.gl/OOhYW5 */
/* See https://goo.gl/qRE0vM */
/* Add to homescreen for Chrome on Android. Fallback for manifest.json */
/* Add to homescreen for Safari on iOS */
/* Homescreen icons */
/* Tile icon for Windows 8 (144x144 + tile color) */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import './src/mint-explorer-app.js';

import { rootPath as rootPath$0 } from '@polymer/polymer/lib/utils/settings.js';
import '@webcomponents/webcomponentsjs/webcomponents-loader.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<title>MINT | Model Catalog Explorer</title><style>
      body {
        margin: 0;
        font-family: 'Roboto', 'Noto', sans-serif;
        line-height: 1.5;
        min-height: 100vh;
        background-color: #eeeeee;
      }
    </style><mint-explorer-app></mint-explorer-app><noscript>
      Please enable JavaScript to view this website.
    </noscript>`;

document.head.appendChild($_documentContainer.content);

/**
 * [polymer-root-path]
 *
 * By default, we set `Polymer.rootPath` to the server root path (`/`).
 * Leave this line unchanged if you intend to serve your app from the root
 * path (e.g., with URLs like `my.domain/` and `my.domain/view1`).
 *
 * If you intend to serve your app from a non-root path (e.g., with URLs
 * like `my.domain/my-app/` and `my.domain/my-app/view1`), edit this line
 * to indicate the path from which you'll be serving, including leading
 * and trailing slashes (e.g., `/my-app/`).
 */

export const Polymer = {rootPath: '/'};

// Load and register pre-caching Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('service-worker.js', {
      scope: rootPath$0,
    });
  });
}

/* Load webcomponents-loader.js to check and load any polyfills your browser needs */
/* Load your application shell */
/* Add any global styles for body, document, etc. */
/* Built with love using Polymer Starter Kit */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
;
