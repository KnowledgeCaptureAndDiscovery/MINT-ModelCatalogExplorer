/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import './my-icons.js';

// import './loading-screen.js';
// import './model-search.js';
// import './view-model.js';
// import './model-configuration.js';
// import './variable-presentation.js';
// import './variable-search.js';
// import './my-about.js';
// import './not-found.js';


import '@polymer/app-layout/app-layout.js'
import '@polymer/app-layout/app-header/app-header.js'
import '@polymer/app-layout/app-header-layout/app-header-layout.js'
import '@polymer/app-layout/app-toolbar/app-toolbar.js'
import '@polymer/iron-flex-layout/iron-flex-layout.js'
import '@polymer/paper-input/paper-input.js'
import '@polymer/paper-button/paper-button.js'
import '@polymer/paper-icon-button/paper-icon-button.js'
import '@polymer/iron-icon/iron-icon.js'
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js'
import '@polymer/paper-listbox/paper-listbox.js'
import '@polymer/paper-item/paper-item.js'
//import '@polymer/neon-animation/web-animations.js'
import '@polymer/paper-toggle-button/paper-toggle-button.js'
import '@polymer/paper-card/paper-card.js'
import '@polymer/iron-ajax/iron-ajax.js'

import { dom } from '@polymer/polymer/lib/legacy/polymer.dom.js';

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

class MintExplorerApp extends PolymerElement {
    static get template() {
        return html`
      <style>
        html, body {
          margin: 0;
          font-family: 'Roboto', 'Noto', sans-serif;
          -webkit-font-smoothing: antialiased;
          max-height: 368px;
          background-color: #4285f4;
        }

        app-header-layout {
          margin: 10px;
          padding: 10px;
        }

        app-toolbar {
          background-color: #fff;
          color: #706f6d;
        }
        #links{
          position: absolute;
          right: 5%;
        }
      </style>

      <app-location
      route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route
        route="{{route}}"
        pattern="[[routePath]]/:page"
        data="{{routeData}}"
        tail="{{subroute}}">
      </app-route>
      <app-header-layout>
      <app-header>
        <app-toolbar>
          <img height="40" src="images/logo.png">
          <div id="heading">MINT</div>
          <div id="links">
            <a href="[[routePath]]model-search" style="text-decoration: none; color: #000;">Models</a>&nbsp;&nbsp;&nbsp;
            <a href="[[routePath]]variable-search" style="text-decoration: none; color: #000;">Variables</a>&nbsp;&nbsp;&nbsp;
            <a href="[[routePath]]my-about" style="text-decoration: none; color: #000;">About</a>&nbsp;&nbsp;&nbsp;
             <template is="dom-if" if="{{!login}}">
              <a href="[[routePath]]my-login" style="text-decoration: none; color: #000;">Login</a>
               </template>
                <template is="dom-if" if="{{login}}">
                <a href="" style="text-decoration: none; color: #000;">Logout</a>
                </template>
          </div>
        </app-toolbar>
      </app-header>
       <!--<template is="dom-if" if="[[loading]]">-->
  <loading-screen loading="[[loading]]" id="pageLoading"></loading-screen>
  <!--</template>-->
      <iron-pages id="pages"
        selected="{{page}}"
        attr-for-selected="name"
        fallback-selection="not-found"
        role="main">
        <model-search id="modelSearch" name="model-search" route="{{subroute}}"></model-search>
        <view-model id="viewModel" data="{{modelSelected}}" name="view-model" route="{{subroute}}"></view-model>
        <model-configuration id="modelConfiguration" data="{{variableSelected}}" tempmodel="{{configSelected}}" name="model-configuration" route="{{subroute}}"></model-configuration>
        <variable-presentation id="variablePresentation" data="{{variableSelected}}" name="variable-presentation" route="{{subroute}}"></variable-presentation>
        <variable-search id="variableSearch" name="variable-search" route="{{subroute}}"></variable-search>
        <my-about name="my-about" route="{{subroute}}"></my-about>
       
         <my-login name="my-login" route="{{subroute}}"></my-login>
        
        <not-found name="not-found"></not-found>
      </iron-pages>
      </app-header-layout>
    `;
    }

    static get properties() {
        return {
            page: {
                type: String,
                reflectToAttribute: true,
                observer: '_pageChanged',
            },
            routeData: Object,
            subroute: Object,
            modelSelected: {
                model: String,
                label: String,
            },
            rootPath: String,
            configSelected: {
                model: String,
                config: Object
            },
            loadedPages: {
                type: Object,
                value: {}
            },
            variableSelected:{
                variable:String,
            },
            rowIndexes: {
                type: String,
                observer: '_rowIndexChanged'
            },
            versionSelected: String,
            modelConfigSelected: String,
            queries: Array,
            varAndUnits: Object,
            modelDescriptions: Array,
            endpoint: {
                type: String,
                value: "https://endpoint.mint.isi.edu/ds"
            },
            loading:Boolean,
            login:Boolean,
            token:String
        };
    }

    static get observers() {
        return [
            '_routePageChanged(routeData.page)'
        ];
    }

    _routePageChanged(page) {
        if (!page) {
            this.page = 'model-search';
        } else if (['model-search', 'view-model', 'model-configuration', 'variable-presentation', 'variable-search', 'my-about','my-login'].indexOf(page) !== -1) {
            this.page = page;
        } else {
            this.page = 'not-found';
        }
    }

    _rowIndexChanged(data){
        var _self = this
        var v = document.querySelector('mint-explorer-app');
        var vk = v.varAndUnits;
        v.varForDialog = vk.results.bindings[data-2].vp.value
        //console.log(vk.results.bindings[data-2].vp.value)
        var vsp = dom(_self.root).querySelector("#variableSearch");
        //console.log(vsp);
        vsp.dialogVal = vk.results.bindings[data-2].vp.value
        var _pages = dom(_self.root).querySelector("#pages");
        _pages.selected = "variable-search";
    }

    _pageChanged(page, oldPage) {
        if (page != null) {

            if(!this.loadedPages[page]) {
                //this.$.pageLoading.loading = true;
                this.loadedPages[page] = true;
                let cb = this._pageLoaded.bind(this, Boolean(oldPage));
                switch (page) {
                    case 'model-search':
                        import('./model-search.js').then(cb, cb, true);
                        break;
                    case 'view-model':
                        import('./view-model.js').then(cb, cb, true);
                        break;
                    case 'model-configuration':
                        import('./model-configuration.js').then(cb, cb, true);
                        break;
                    case 'variable-presentation':
                        import('./variable-presentation.js').then(cb, cb, true);
                        break;
                    case 'variable-search':
                        import('./variable-search.js').then(cb, cb, true);
                        break;
                    case 'my-about':
                        import('./my-about.js').then(cb, cb, true);
                        break;
                    case 'my-login':
                        import('./my-login.js').then(cb, cb, true);
                        break;
                    case 'not-found':

                        import('./not-found.js').then(cb, cb, true);
                        break;
                }
            }
        }
    }

    _pageLoaded(page) {
        this.loading=false;
        //this.$.pageLoading.loading = false;
        this.style.zIndex = 2;

        //console.log("LOADED", this.$.pageLoading.loading)
    }

    ready() {
        super.ready();
        this.loading=true;
        this.login=false;

    }
}

window.customElements.define('mint-explorer-app', MintExplorerApp);

