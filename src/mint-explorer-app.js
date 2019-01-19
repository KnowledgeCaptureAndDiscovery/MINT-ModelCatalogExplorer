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

import './model-search.js';
import './view-model.js';
import './my-about.js';
import './loading-screen.js';
import './not-found.js';


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
            <a href="[[routePath]]my-about" style="text-decoration: none; color: #000;">About</a>
          </div>
        </app-toolbar>
      </app-header>

      <loading-screen loading="true" id="pageLoading"></loading-screen>

      <iron-pages id="pages"
        selected="{{page}}"
        attr-for-selected="name"
        fallback-selection="not-found"
        role="main">
        <model-search id="modelSearch" name="model-search" route="{{subroute}}"></model-search>
        <view-model id="viewModel" data="{{modelSelected}}" name="view-model" route="{{subroute}}"></view-model>
        <my-about name="my-about" route="{{subroute}}"></my-about>
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
      versionSelected: String,
      queries: Array,
      modelDescriptions: Array,
      endpoint: {
        type: String,
        value: "http://ontosoft.isi.edu:3030/ds"
      }
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
    } else if (['model-search', 'view-model', 'my-about'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'not-found';
    }
  }

  _pageChanged(page, oldPage) {
    if (page != null) {
      if(!this.loadedPages[page]) {
        this.$.pageLoading.loading = true;
        this.loadedPages[page] = true;
        let cb = this._pageLoaded.bind(this, Boolean(oldPage));
        switch (page) {
          case 'model-search':
            import('./model-search.js').then(cb, cb, true);
            break;
          case 'view-model':
            import('./view-model.js').then(cb, cb, true);
            break;
          case 'my-about':
            import('./my-about.js').then(cb, cb, true);
            break;
          case 'not-found':
            import('./not-found.js').then(cb, cb, true);
            break;
        }
      }
    }
  }

  _pageLoaded(page) {
    this.$.pageLoading.loading = false;
    console.log("LOADED", this.$.pageLoading.loading)
  }

  ready() {
    super.ready();
    var _self = this;
    var queries = [
      {
        "description": "What are all the models currently described in the catalog ?",
        "query":"PREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+model%3A+%3Chttps%3A%2F%2Fw3id.org%2Fmint%2FmodelCatalog%23%3E%0D%0ASELECT+%3Fmodel+%3Flabel%0D%0AWHERE+%7B%0D%0A++%3Fmodel+a+model%3AModel.%0D%0A++%3Fmodel+rdfs%3Alabel+%3Flabel%0D%0A%7D"
      },
      {
        "description": "Fetch data about this model",
        "query": "PREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+model%3A+%3Chttps%3A%2F%2Fw3id.org%2Fmint%2FmodelCatalog%23%3E%0D%0ASELECT+%3Fmodel+%24reln+%3Fprop%0D%0AWHERE+%7B%0D%0A++%3Fmodel+rdfs%3Alabel+%22{}%22.%0D%0A++%3Fmodel+%3Freln+%3Fprop%0D%0A%7D"
      },
      {
        "description": "Fetch this model configuration",
        "query": "PREFIX+inst%3A+%3Chttps%3A%2F%2Fw3id.org%2Fmint%2Finstance%23%3E%0D%0APREFIX+model%3A+%3Chttps%3A%2F%2Fw3id.org%2Fmint%2FmodelCatalog%23%3E%0D%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0ASELECT+%3Fmodel_config%0D%0A%28GROUP_CONCAT%28DISTINCT+%3Finput%3BSEPARATOR%3D%27%2C+%27%29+AS+%3Finput_variables%29%0D%0A%28GROUP_CONCAT%28DISTINCT+%3Foutput%3BSEPARATOR%3D%27%2C+%27%29+AS+%3Foutput_variables%29%0D%0AWHERE+%7B%0D%0A++%3Fmodel+rdfs%3Alabel+%22{}%22.%0D%0A++%3Fmodel+model%3AhasConfiguration+%3Fmodel_config+.%0D%0A++%3Fmodel_config+model%3AhasInput+%3Finput+.%0D%0A++%3Fmodel_config+model%3AhasOutput+%3Foutput%0D%0A%7D%0D%0AGROUP+BY%28%3Fmodel_config%29"
      },
      {
        "description": "Get all the models with their descriptions",
        "query": "http://ontosoft.isi.edu:8001/api/KnowledgeCaptureAndDiscovery/MINT-ModelCatalogQueries/getModels?endpoint=http%3A%2F%2Fontosoft.isi.edu%3A3030%2Fds%2Fquery"
      },
      {
        "description": "Get all the models related to a specific Category",
        "query": "http://ontosoft.isi.edu:8001/api/KnowledgeCaptureAndDiscovery/MINT-ModelCatalogQueries/getModelsForCategory?endpoint=http%3A%2F%2Fontosoft.isi.edu%3A3030%2Fds%2Fquery"
      },
      {
        "description": "Fetch model configuration",
        "query": "http://ontosoft.isi.edu:8001/api/KnowledgeCaptureAndDiscovery/MINT-ModelCatalogQueries/getVariablePresentationsForModel"
      },
      {
        "description": "Fetch version of a model",
        "query": "http://ontosoft.isi.edu:8001/api/KnowledgeCaptureAndDiscovery/MINT-ModelCatalogQueries/getResourceMetadata?endpoint=http%3A%2F%2Fontosoft.isi.edu%3A3030%2Fds%2Fquery"
      },
      {
        "decription":"Fetch variable configuration",
        "query":"http://ontosoft.isi.edu:8001/api/KnowledgeCaptureAndDiscovery/MINT-ModelCatalogQueries/getI_OVariablesAndUnits"
      },
      {
        "description":"Fetch model-configuration data",
        "query":"http://ontosoft.isi.edu:8001/api/KnowledgeCaptureAndDiscovery/MINT-ModelCatalogQueries/getModelConfigurationMetadata"
      },
      {
        "description": "Fetch all the variables",
        "query": "http://ontosoft.isi.edu:8001/api/KnowledgeCaptureAndDiscovery/MINT-ModelCatalogQueries/getVariables?endpoint=http%3A%2F%2Fontosoft.isi.edu%3A3030%2Fds%2Fquery"
      },
      {
        "description": "Fetch model and configs from variable presentation",
        "query": "http://ontosoft.isi.edu:8001/api/KnowledgeCaptureAndDiscovery/MINT-ModelCatalogQueries/getModelConfigurationsForVariablePresentation?endpoint=http%3A%2F%2Fontosoft.isi.edu%3A3030%2Fds%2Fquery"
      }
    ]

    _self.queries = queries;
  }
}

window.customElements.define('mint-explorer-app', MintExplorerApp);
