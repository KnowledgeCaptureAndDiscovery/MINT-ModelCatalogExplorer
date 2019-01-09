/*
The mint explorer app, which contains the pages for searching models,
viewing models, viewing model configuration, and viewing input and
output presentations.s
*/
/*<link rel="import" href="/bower_components/iron-ajax/iron-ajax.html">*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import { PolymerElement } from '@polymer/polymer/polymer-element.js';

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
import './loading-screen.js';
import './model-search.js';
import './view-model.js';
import './model-configuration.js';
import './variable-configuration.js';
import './not-found.js';
import './my-about.js';
import '/node_modules/@polymer/app-layout/app-layout.js';
import '/node_modules/@polymer/app-layout/app-header/app-header.js';
import '/node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js';
import '/node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js';
import '/node_modules/@polymer/iron-flex-layout/iron-flex-layout.js';
import '/node_modules/@polymer/paper-input/paper-input.js';
import '/node_modules/@polymer/paper-button/paper-button.js';
import '/node_modules/@polymer/paper-icon-button/paper-icon-button.js';
import '/node_modules/@polymer/iron-icons/iron-icons.js';
import '/node_modules/@polymer/iron-icon/iron-icon.js';
import '/node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '/node_modules/@polymer/paper-listbox/paper-listbox.js';
import '/node_modules/@polymer/paper-item/paper-item.js';
import '/node_modules/@polymer/neon-animation/web-animations.js';
import '/node_modules/@polymer/paper-toggle-button/paper-toggle-button.js';
import '/node_modules/@polymer/paper-card/paper-card.js';
import '/node_modules/@polymer/iron-meta/iron-meta.js';
import './my-icons.js';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { importHref } from '@polymer/polymer/lib/utils/import-href.js';
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
  }
]
var modelDescriptions = [
    {
        "model": "https://w3id.org/mint/instance#TOPOFLOW",
        "link": "https://github.com/peckhams/topoflow",
        "description": "TopoFlow is a powerful, spatially-distributed hydrologic model for various physical processes in a watershed with the goal of accurately predicting how various hydrologic variables will evolve in time in response to climatic forcings."
    },
    {
        "model": "https://w3id.org/mint/instance#ECONOMIC_LAND_QUALITY",
        "description": "The Economic Land Quality (ELQ) model is designed to assess agriculture and forestry land-use change. This land-use model allocates land of heterogeneous quality between single agricultural crops and timber production."
    },
    {
        "model": "https://w3id.org/mint/instance#PIHM",
        "link": "http://www.pihm.psu.edu",
        "description": "The Penn State Integrated Hydrologic Model (PIHM) is a multiprocess, multi-scale hydrologic model where the major processes are fully coupled using the semi-discrete finite volume method."
    },
    {
        "model": "https://w3id.org/mint/instance#KIMETRICA_LAND_USE",
        "description": "Kimetrica Land Use"
    },
    {
        "model": "https://w3id.org/mint/instance#DSSAT",
        "link": "https://dssat.net",
        "description": "The Decision Support System for Agrotechnology Transfer (DSSAT) comprises dynamic crop growth simulation models for over 40 crops. The models simulate growth, development, and yield as a function of the soil-plant-atmosphere dynamics."
    },
    {
        "model": "https://w3id.org/mint/instance#CYCLES",
        "link": "https://plantscience.psu.edu/research/labs/kemanian/models-and-tools/cycles",
        "description": "Cycles simulates the productivity and the water, carbon, and nitrogen balance of soil-crop systems subject to climate conditions and a large array of management constraints."
    }
]
// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

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

    <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
    </app-location>

    <app-route route="{{route}}" pattern="[[routePath]]/:page" data="{{routeData}}" tail="{{subroute}}">
    </app-route>

    <app-header-layout>
      <app-header>
        <app-toolbar>
          <img height="40" src="images/logo.png">
          <div id="heading">MINT</div>
          <div id="links">
            <a href="[[routePath]]model-search" style="text-decoration: none; color: #000;">Home</a>&nbsp;&nbsp;&nbsp;
            <a href="[[routePath]]my-about" style="text-decoration: none; color: #000;">About</a>
          </div>
        </app-toolbar>
      </app-header>

      <!--<iron-selector selected="{{routeData.page}}" attr-for-selected="data-page">
        <a date-page="art" href="#/art/list">Art</a>
        <a date-page="film" href="#/film/list">Film</a>
        <a date-page="photo" href="#/photo/list">Photo</a>
      </iron-selector>-->

      <!-- <dom-repeat items="{{modelDescriptions}}">
      	<template>
      		Query [[index]] - [[item.model]]
      	</template>
      </dom-repeat>  -->

      <!-- Loading screen -->
      <loading-screen loading="true" id="pageLoading"></loading-screen>

      <iron-pages id="pages" selected="{{page}}" attr-for-selected="name" fallback-selection="not-found" role="main">
        <model-search id="modelSearch" name="model-search" route="{{subroute}}"></model-search>
        <view-model id="viewModel" data="{{modelSelected}}" name="view-model" route="{{subroute}}"></view-model>
        <model-configuration id="modelConfiguration" data="{{variableSelected}}" tempmodel="{{configSelected}}" name="model-configuration" route="{{subroute}}"></model-configuration>
        <variable-configuration id="variableConfiguration" data="{{variableSelected}}" name="variable-configuration" route="{{subroute}}"></variable-configuration>
        <not-found name="not-found"></not-found>
        <my-about name="my-about" route="{{subroute}}"></my-about>
      </iron-pages>


    </app-header-layout>
`;
  }

  static get is() { return 'mint-explorer-app'; }
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
      '_routePageChanged(routeData.page)',
    ];
  }

  _routePageChanged(page) {
    // If no page was found in the route data, page will be an empty string.
    // Default to 'model-search' in that case.
    this.page = page || 'model-search';

  }

  _pageChanged(page, oldPage) {
    // Load page import on demand. Show 404 page if fails
     if (page != null) {
      if(!this.loadedPages[page]) {
      this.$.pageLoading.loading = true;
      this.loadedPages[page] = true;
      let cb = this._pageLoaded.bind(this, Boolean(oldPage));
      importHref(
        this.resolveUrl(page + '.html'),
        cb, cb, true);
      }
    }
  }
  _pageLoaded(page) {
    this.$.pageLoading.loading = false;
    console.log("LOADED", this.$.pageLoading.loading)
  }

  _showPage404() {
    this.page = 'not-found';
    this.set('route.path', '/404-not-found/')
  }

  ready() {
    super.ready();
    var _self = this;
    _self.queries = queries;
    _self.modelDescriptions = modelDescriptions;
  }
}

window.customElements.define(MintExplorerApp.is, MintExplorerApp);
