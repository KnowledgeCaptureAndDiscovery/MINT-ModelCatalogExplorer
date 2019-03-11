/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/* <link rel="import" href="/bower_components/vaadin-grid/vaadin-grid-sorter.html"> */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import { PolymerElement } from '@polymer/polymer/polymer-element.js';

import './shared-styles.js';
import '@polymer/app-layout/app-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-toggle-button/paper-toggle-button.js';
import '@polymer/paper-card/paper-card.js';
import './paper-chip.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';

import '@vaadin/vaadin-button/vaadin-button.js'
import '@vaadin/vaadin-grid/vaadin-grid.js';
import '@vaadin/vaadin-grid/vaadin-grid-column.js';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout.js';
import './my-icons.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { dom } from '@polymer/polymer/lib/legacy/polymer.dom.js';

console.log("Hello")
String.prototype.format = function () {
  var i = 0, args = arguments;
  return this.replace(/{}/g, function () {
    return typeof args[i] != 'undefined' ? args[i++] : '';
  });
};

/**
 * @customElement
 * @polymer
 */

class ViewModel extends PolymerElement {
  static get template() {
    return html`
    <style include="shared-styles">
      html, body {
          margin: 0;
          font-family: 'Roboto', 'Noto', sans-serif;
          -webkit-font-smoothing: antialiased;
          max-height: 368px;
        }

        app-toolbar {
          background-color: #f2f1ed;
          color: #706f6d;
        }

        paper-card{
          color: black;
          width: 50%;
          word-wrap: break-word;
          margin: 20px;
        }

        paper-toolbar {
          background-color: #f2f1ed;
        }

      .flex-center-justified {
        @apply --layout-horizontal;

      }


        #search-bar {
          display: flex;
          flex-direction: column;
          width: 50%;
        }

        #search-input {
          width: 1000%;
        }
        #search-icon {
          background-color: #377ff2;
          color: #fff;
        }

        #heading {
          margin-left: 20px;
        }

        #options {
          display: inline-flex;
        }

        #category {
          margin-right: 10px;
        }

        #version {
          margin-left: 10px;
        }

        #results {
          display: flex;
          flex-direction: column;
        }

        .table-responsive {
          max-width: 500px;
        }

        .table {
          display: block;
        }

        .danger{
          color: #ffffff;
          background-color: #e51c23;
        }

      .title{
        display: inline-block;
      }
      .box {
          @apply --layout-vertical;

          background-color: #FEFEFE;
          border: 1px solid var(--app-accent-color);
          border-radius: 4px;
          background-size: 100% auto;
          background-position: 0px 24px;

          margin: 5px;
          margin-left: 0px;
          min-height: 190px;

          display: block;
          text-decoration: none;
          text-align: center;
          position: relative;
          width: 47.5%;
          padding: 15px;
        }
        .box .inner {
          background: rgba(255,255,255,0.5);
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .flex-center-justified {
          @apply --layout-horizontal;
          @apply --layout-center-justified;
        }

        .flex-end-justified {
          margin-right: 40px;
          @apply --layout-horizontal;
          @apply --layout-end-justified;
        }
        #options{
          width: 50%;
        }
        #version {
          margin-right: 10px;
          width: 50%
        }
        paper-chip.custom-background {
          --paper-chip-background-color: #dc3545;
          --paper-chip-label-color: #fff;
        }
        paper-chip.custom-background-m {
          --paper-chip-background-color: #28a745;
          --paper-chip-label-color: #fff;
        }
        paper-chip.custom-background-j {
          --paper-chip-background-color: purple;
          --paper-chip-label-color: #fff;
        }
        
        .pointer{
          cursor: pointer;
        }
    </style>
    <br>

    <!--<a href="[[routePath]]/model-search"><vaadin-button theme="error primary" on-click="goBack" raised="">&lt;&lt; Back</vaadin-button></a>-->
    <div class="flex-center-justified">
      <h1 style="text-align:center;">[[modelSelected.label]] &nbsp;&nbsp;<div id="showAllVer"><center><paper-chip label="Showing All Versions" class="custom-background-j"></paper-chip></center></div><div id="changeVer" style="display: none;"><center><paper-chip id="verC" class="custom-background-m"></paper-chip></center></div></h1>
    </div>
    <div class="flex-center-justified">
      <a href="[[modelSelected.model]]" target="_blank" rel="noopener noreferrer"><paper-chip label="URI: [[modelSelected.model]]" no-hover=""></paper-chip></a>
    </div>
    <div class="container flex-center-justified">
      <paper-dropdown-menu id="version" label="Select Version" on-iron-select="_itemChanged">
        <paper-listbox slot="dropdown-content" selected="0" class="dropdown-content" id="tempor">
          <paper-item>All</paper-item>
          <dom-repeat items="{{finVersions}}">
            <template>
              <paper-item>[[item]]</paper-item>
            </template>
          </dom-repeat>
        </paper-listbox>
      </paper-dropdown-menu>
    </div>
    <br><br>
    <div id="content"></div>
    <div class="grid flex-center-justified">
     <!--<div id="configuration">-->
      <template is="dom-repeat" items="{{configurationResults.results.bindings}}">
        <template is="dom-if" if="[[_checkVal(item.version.value)]]">
          <div class="box" id="[[item.version.value]]">
            <div class="card-content">
              <div class="title">
                <div id="showVer">
                  <h4>Version: <paper-chip label="[[item.version.value]]" class="custom-background-m"></paper-chip></h4>
                </div>
              </div>
              <div class="body">
                <div>
                  <h4>Model Configuration: </h4>
                  <template is="dom-repeat" items="{{item.config.value}}" as="stuff">
                    <a href="[[routePath]]model-configuration"><vaadin-button class="pointer" variable\$="{{stuff}}" on-click="openConfigForUri" raised="">[[stuff]]</vaadin-button></a>
                  </template>
                </div>
                <div>
                  <template is="dom-if" if="[[_checkValue(item.configDesc.value)]]">
                  <h4>Description:</h4>
                  {{item.configDesc.value}}
                  </template>
                  <template is="dom-if" if="[[_checkNegValue(item.configDesc.value)]]">
                    <h4>Description:</h4>
                    <paper-chip label="Not Found" class="custom-background" no-hover=""></paper-chip>
                  </template>
                </div>

                <div>
                  <template is="dom-if" if="[[_checkValue(item.input_files.value)]]">
                    <h4>Input Files:</h4>
                    <template is="dom-repeat" items="{{item.input_files.value}}" as="stuff">
                      <a href="[[routePath]]variable-presentation"><vaadin-button class="pointer" variable\$="{{stuff}}" on-click="openConfigForUri" raised="">[[stuff]]</vaadin-button></a>
                    </template>
                  </template>
                  <template is="dom-if" if="[[_checkNegValue(item.input_files.value)]]">
                    <h4>Input Files:</h4>
                    <paper-chip label="Not Found" class="custom-background" no-hover=""></paper-chip>
                  </template>
                </div>
                <div>
                  <template is="dom-if" if="[[_checkValue(item.output_files.value)]]">
                    <h4>Output Files:</h4>
                    <template is="dom-repeat" items="{{item.output_files.value}}" as="stuff">
                      <a href="[[routePath]]variable-presentation"><vaadin-button class="pointer" variable\$="{{stuff}}" on-click="openConfigForUri" raised="">[[stuff]]</vaadin-button></a>
                    </template>
                  </template>
                  <template is="dom-if" if="[[_checkNegValue(item.output_files.value)]]">
                    <h4>Output Files:</h4>
                    <paper-chip label="Not Found" class="custom-background" no-hover=""></paper-chip>
                  </template>
                </div>
                <div>
                  <template is="dom-if" if="[[_checkArray(item.parameter)]]">
                    <h4>Parameters:</h4>
                    <template is="dom-repeat" items="{{item.parameter}}" as="stuff">
                      <a href="[[stuff.p.value]]" target="_blank" rel="noopener noreferrer"><vaadin-button class="pointer" raised="">[[stuff.paramlabel.value]]</vaadin-button></a>
                    </template>
                  </template>
                  <template is="dom-if" if="[[_checkNegArray(item.parameter)]]">
                    <!--<h4>Parameters:</h4>-->
                    <!--<paper-chip label="Not Found" class="custom-background" no-hover=""></paper-chip>-->
                  </template>
                </div>
              </div>
            </div>
          </div>
      </template>
    </template>
    </div>
    <!--<div id="configuration">-->
    <!--<h3>Configurations</h3>-->
    <!--<vaadin-grid heightByRows="true" items="[[configurationResults.results.bindings]]">-->
      <!--<vaadin-grid-column flex-grow="0">-->
        <!--<template class="header">Inspect</template>-->
        <!--<template><a href="[[routePath]]model-configuration"><vaadin-button config\$="{{item.model_config.value}}" on-click="openConfig" raised><iron-icon icon="icons:open-in-new"></iron-icon></vaadin-button></a></template>-->
      <!--</vaadin-grid-column>-->

      <!--<vaadin-grid-column resizable>-->
        <!--<template class="header">-->
          <!--Model Configuration-->
        <!--</template>-->
        <!--<template>[[item.config.value]]</template>-->
      <!--</vaadin-grid-column>-->

      <!--<vaadin-grid-column resizable>-->
        <!--<template class="header">-->
          <!--Input Variables-->
        <!--</template>-->
          <!--<template>-->
            <!--<a href="[[routePath]]variable-configuration"><vaadin-button variable\$="[[item.input_variable.value]]" on-click="openConfigForUri" raised>[[item.input_variables.value]]</vaadin-button></a>-->

          <!--</template>-->

      <!--</vaadin-grid-column>-->

      <!--<vaadin-grid-column resizable>-->
        <!--<template class="header">-->
          <!--Output Variables-->
        <!--</template>-->
        <!--<template>-->
        <!--<a href="[[routePath]]variable-configuration">-->
          <!--<span>[[item.output_variables.value]]</span>-->
        <!--</a>-->
        <!--</template>-->
      <!--</vaadin-grid-column>-->

    <!--</vaadin-grid>-->
    <!--</div>-->
`;
  }

  static get is() { return 'view-model'; }
  static get properties() {
    return {
      modelSelected: {
        model: String,
        label: String,
        observer: '_activeChanged'
      },
      data : {
        model: String,
        label: String,
        observer: '_modelChanged'
      },
      finVersions: Array,
      queryResults: {
        type: Array,
        value: []
      },
      versionSelected: {
        "val": String,
        observer: '_versionChanged'
      },
      finConfigs: Object,
      configurationResults: {
        observer: '_configChanged'
      },
      unModifiedConfigurationResults:Object

    };
  }

  _activeChanged(modelSelected){

  }

  _configChanged(data){
    console.log("changed")
  }

  _versionChanged(data){
    console.log("Version Selected Changed")
  }

  _checkValue(stuff){
    console.log("Detected", stuff)
    return typeof stuff !== 'undefined';
  }

  _checkNegValue(stuff){
    console.log("Detected", stuff)
    return typeof stuff === 'undefined';
  }
  _checkArray(stuff){
      return stuff.length!=0;
  }
  _checkNegArray(stuff){
      return stuff.length==0;
  }

  _checkVal(ver){
    console.log("DOund", ver, this.versionSelected);
    return true
  }

  _modelChanged(data){
    this.finVersions = []
    var _self = this
    var dropdownContents = dom(this.root).querySelector('paper-dropdown-menu');
    var inp = dom(_self.root).querySelector('#tempor')
    inp.selected = "0"
    var _parent = document.querySelector("mint-explorer-app");
    this.modelSelected = data;
    console.log("Ojj", data);
    this.fetchConfiguration(data);
    this.finConfigs = this.configurationResults
  }

  /*goBack(){
    var _self = this
    var _parent = document.querySelector("mint-explorer-app");
    var _pages = dom(_parent.root).querySelector("#pages");
    _pages.selected = "model-search";
    this.finVersions = []
    var dropdownContents = dom(this.root).querySelector('paper-dropdown-menu');
    var inp = dom(_self.root).querySelector('#tempor')
    inp.selected = "0"
  }*/

  openConfig(e) {
    var configuration = e.target.getAttribute("config");

    var _parent = document.querySelector("mint-explorer-app");
    // console.log(_parent);
    // this.modelSelected = this.models[index].label.value;
    // console.log("Model");
    // console.log(configuration);
    _parent.configSelected = {
      model: _parent.modelSelected,
      config: configuration
    }
    console.log(_parent.configSelected);
    var _pages = dom(_parent.root).querySelector("#pages");
    // console.log(_pages);
    // console.log(_pages.selected);
    _pages.selected = "model-configuration";
    // console.log(_pages.selected);
  }

  openConfigForUri(e) {
      var configuration = e.target.getAttribute("variable");
      if(configuration.constructor===Array){
          console.log("hyttr");
          configuration=configuration[0];
          configuration=configuration.trim();
      }
      console.log("ygayfdadaad");
      console.log(configuration);
      console.log(this.unModifiedConfigurationResults);
      var _parent = document.querySelector("mint-explorer-app");

          for (var i = 0; i < this.unModifiedConfigurationResults.results.bindings.length; ++i) {
              for (var key in this.unModifiedConfigurationResults.results.bindings[i]) {
                  if(this.unModifiedConfigurationResults.results.bindings[i][key].value.includes(",")) {
                      var strs = this.unModifiedConfigurationResults.results.bindings[i][key].value.split(",");
                      for(var j = 0; j<strs.length; ++j){
                          var vars = [];
                          var parts = strs[j].split("/");
                         if(parts[parts.length - 1]===configuration){
                             _parent.variableSelected=strs[j];
                             console.log("hello" + _parent.variableSelected);
                             break;
                         }
                      }
                  }else{
                      var str = this.unModifiedConfigurationResults.results.bindings[i][key].value;
                      var arr = str.split("/");
                      if(arr[arr.length - 1]===configuration){
                          _parent.variableSelected = str;
                          _parent.versionSelected = this.unModifiedConfigurationResults.results.bindings[i]["version"].value
                          break;
                      }
                  }
              }
          }
        console.log("jhfgdf"+_parent.variableSelected);
  }

  processConfigurationResults(data) {
    var obj = JSON.parse(JSON.stringify(data));
      this.unModifiedConfigurationResults = JSON.parse(JSON.stringify(data));
      console.log("Ok Done", this.unModifiedConfigurationResults);
      for(var i = 0; i < obj.results.bindings.length; ++i) {
        for(var key in obj.results.bindings[i]) {
          var temp = [];
          if(key==="config"){
              var qs="http://ontosoft.isi.edu:8001/api/mintproject/MINT-ModelCatalogQueries/getConfigIParameters?endpoint=http%3A%2F%2Fontosoft.isi.edu%3A3030%2Fds%2Fquery";
              var originalParameters = [];
              var parameterDict={};
              $.ajax({
                  url: qs,
                  type: "GET",
                  data:{
                      config: obj.results.bindings[i][key].value
                  },
                  cache: false,
                  timeout: 5000,
                  async: false,
                  success: function(data) {
                      originalParameters = data.results.bindings;
                  },
                  error: function(jqXHR, exception) {
                  }
              });
              obj.results.bindings[i]["parameter"]=originalParameters;
          }
          if(key === "version"){
            var _self = this;
            var _parent = document.querySelector("mint-explorer-app");
            // Get Versions
            //var qs = _parent.queries[6].query
              var qs = "http://ontosoft.isi.edu:8001/api/mintproject/MINT-ModelCatalogQueries/getResourceMetadata?endpoint=http%3A%2F%2Fontosoft.isi.edu%3A3030%2Fds%2Fquery"
            var r = [];
            var cs;
            $.ajax({
              url: qs,
              type: "GET",
              data:{
                  mv: obj.results.bindings[i][key].value
              },
              cache: false,
              timeout: 5000,
              async: false,
              success: function(data) {
                r = data.results.bindings
                for(var i = 0; i < r.length; i++){
                  temp = r[i].prop.value.split("#")
                  if(temp[1] === "hasVersionId"){
                    cs = r[i].value.value;
                    break;
                  }
                }
              },
              error: function(jqXHR, exception) {
              }
            });

            obj.results.bindings[i][key].value = cs;
            this.unModifiedConfigurationResults.results.bindings[i][key].value = cs;
          }


          else{
            if(obj.results.bindings[i][key].value.includes(",")) {
              var strs = obj.results.bindings[i][key].value.split(",");

              var vars = [];

              for(var j = 0; j<strs.length; ++j){
                var parts = strs[j].split("/");
                vars.push(parts[parts.length-1]);
              }
              obj.results.bindings[i][key].value = vars;
            }
            else {
              var str = obj.results.bindings[i][key].value;
              //var arr = str.split("#");
              var vars = [];
              var parts = str.split("/")
              vars.push(parts[parts.length - 1]);
              //if(str.includes("#"))
                  //obj.results.bindings[i][key].value = vars;
              //else
              obj.results.bindings[i][key].value = vars;
            }
          }
        }
      }
    console.log("this is config");
    console.log(obj);
    this.configurationResults = obj;
  }


  getVersion(versions){
    var _self = this;
    var _parent = document.querySelector("mint-explorer-app");
    // Get Versions
    //var qs = _parent.queries[6].query
    var qs = "http://ontosoft.isi.edu:8001/api/mintproject/MINT-ModelCatalogQueries/getResourceMetadata?endpoint=http%3A%2F%2Fontosoft.isi.edu%3A3030%2Fds%2Fquery"
    var r = []
    var finVersions = []
    for(var i = 0; i < versions.length; i++){
      $.ajax({
        url: qs,
        type: "GET",
        data:{
            mv: versions[i]
        },
        cache: false,
        timeout: 5000,
        async: false,
        success: function(data) {
          r = data.results.bindings
          var temp = []
          for(var i = 0; i < r.length; i++){
            temp = r[i].prop.value.split("#")
            if(temp[1] === "hasVersionId"){
              finVersions.push(r[i].value.value)
            }
          }
        },
        error: function(jqXHR, exception) {
            var msg = '';
            if (jqXHR.status === 0) {
                msg = 'Not connected.\n Verify Network.';
            }
            else if (jqXHR.status == 404) {
                msg = 'Requested page not found. [404]';
            }
            else if (jqXHR.status == 500) {
                msg = 'Internal Server Error [500].';
            }
            else if (exception === 'parsererror') {
                msg = 'Requested JSON parse failed.';
            }
            else if (exception === 'timeout') {
                msg = 'Time out error.';
            }
            else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            }
            else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
        }
      });
    }
    console.log("Final Versions", finVersions)
    this.finVersions = finVersions
  }

  fetchConfiguration(parentConfig) {
    var _self = this;
    var _parent = document.querySelector("mint-explorer-app");
    // Get Versions
    //var qs = _parent.queries[6].query
    var qs = "http://ontosoft.isi.edu:8001/api/mintproject/MINT-ModelCatalogQueries/getResourceMetadata?endpoint=http%3A%2F%2Fontosoft.isi.edu%3A3030%2Fds%2Fquery"
    var versions = []
    var r = []
    $.ajax({
        url: qs,
        type: "GET",
        data:{
            mv: parentConfig.model
        },
        cache: false,
        timeout: 5000,
        async: false,
        success: function(data) {
            console.log("Versions", data)
            r = data.results.bindings
            var temp = []
            for(var i = 0; i < r.length; i++){
              temp = r[i].prop.value.split("#")
              if(temp[1] === "hasSoftwareVersion"){
                versions.push(r[i].value.value)
              }
            }
            _self.getVersion(versions)
        },

        error: function(jqXHR, exception) {
            var msg = '';
            if (jqXHR.status === 0) {
                msg = 'Not connected.\n Verify Network.';
            }
            else if (jqXHR.status == 404) {
                msg = 'Requested page not found. [404]';
            }
            else if (jqXHR.status == 500) {
                msg = 'Internal Server Error [500].';
            }
            else if (exception === 'parsererror') {
                msg = 'Requested JSON parse failed.';
            }
            else if (exception === 'timeout') {
                msg = 'Time out error.';
            }
            else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            }
            else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
            // console.log(msg);
        }
      });

    //var query = _parent.queries[5].query;
    var query = "http://ontosoft.isi.edu:8001/api/mintproject/MINT-ModelCatalogQueries/getVariablePresentationsForModel"
    var endpoint = _parent.endpoint;
    $.ajax({
        url: query,
        type: "GET",
        data:{
            model: parentConfig.model
        },
        cache: false,
        timeout: 5000,
        async: false,
        complete: function() {
            // console.log("GET request sent");
        },

        success: function(data) {
            // console.log("GET success");
            /*if(data.results.bindings.length === 0) {
              Polymer.dom(_self.root).querySelector("#configuration").innerHTML = "<h3>Configuration</h3>No configurations available";
            }*/
            //else {
                _self.processConfigurationResults(data);

             // console.log(this.unModifiedConfigurationResult);
            //}
            // _self.configurationResults= JSON.parse(JSON.stringify(data));
            // console.log(_self.configurationResults);
            // _self.populateConfigurations();
        },

        error: function(jqXHR, exception) {
            var msg = '';
            if (jqXHR.status === 0) {
                msg = 'Not connected.\n Verify Network.';
            }
            else if (jqXHR.status == 404) {
                msg = 'Requested page not found. [404]';
            }
            else if (jqXHR.status == 500) {
                msg = 'Internal Server Error [500].';
            }
            else if (exception === 'parsererror') {
                msg = 'Requested JSON parse failed.';
            }
            else if (exception === 'timeout') {
                msg = 'Time out error.';
            }
            else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            }
            else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
            // console.log(msg);
        }
      });
  }

  // }
  /*fetchData() {

    var _self = this;
    var _parent = document.querySelector("mint-explorer-app");
    var query = _parent.queries[1].query.format(encodeURI(_self.modelSelected.label));
    console.log("Ok", _self.modelSelected.label);
    // var queries = [
    //   {
    //     description: "What are some of the things related to this model ?",
    //     query: "PREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+model%3A+%3Chttps%3A%2F%2Fw3id.org%2Fmint%2FmodelCatalog%23%3E%0D%0ASELECT+%3Fmodel+%24reln+%3Fprop%0D%0AWHERE+%7B%0D%0A++%3Fmodel+rdfs%3Alabel+%22"+encodeURI(_self.modelSelected.label)+"%22.%0D%0A++%3Fmodel+%3Freln+%3Fprop%0D%0A%7D"
    //   }
    // ]
    console.log(query);
    var endpoint = _parent.endpoint;

      $.ajax({
        url: endpoint + "/query?query=" + query,
        type: "GET",
        cache: false,
        timeout: 5000,
        async: false,
        complete: function() {
            // console.log("GET request sent");
        },

        success: function(data) {
            // console.log("GET success");
            var obj = JSON.parse(JSON.stringify(data));
            _self.queryResults.push(obj);
            console.log(_self.queryResults);

           // _self.populateData();
        },

        error: function(jqXHR, exception) {
            var msg = '';
            if (jqXHR.status === 0) {
                msg = 'Not connected.\n Verify Network.';
            }
            else if (jqXHR.status == 404) {
                msg = 'Requested page not found. [404]';
            }
            else if (jqXHR.status == 500) {
                msg = 'Internal Server Error [500].';
            }
            else if (exception === 'parsererror') {
                msg = 'Requested JSON parse failed.';
            }
            else if (exception === 'timeout') {
                msg = 'Time out error.';
            }
            else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            }
            else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
            // console.log(msg);
        }
      });

  }*/

  //   populateData() {
  //     var result = this.queryResults[0];
  //
  //     var vars = result.head.vars;
  //     for(var i=0; i<vars.length; ++i){
  //       // console.log(vars[i]);
  //     }
  //     var lines = []
  //     for(var i=0; i<result.results.bindings.length; ++i) {
  //       var string = " : ";
  //       var obj = result.results.bindings[i];
  //       // console.log(obj);
  //       for(var k=1; k<vars.length; ++k) {
  //         var tuple = obj[vars[k]].value;
  //         if(obj[vars[k]].type === "literal"){
  //           string += tuple + " : ";
  //         }
  //         else if(obj[vars[k]].type === "uri"){
  //           var arr = tuple.split("#");
  //           string += arr[1] + " : ";
  //         }
  //       }
  //
  //       lines.push(string);
  //     }
  //
  //       var div="#content";
  //       var elem = Polymer.dom(this.root).querySelector(div);
  //       for(var j=0; j<lines.length; ++j) {
  //       var paragraph = document.createElement("p");
  //       paragraph.innerHTML = lines[j];
  //       elem.appendChild(paragraph);
  //
  //   }
  // }

  // populateConfigurationResults() {
  //
  //   var result = this.configurationResults;
  //     var string = "<table class='table'><thead><tr>";
  //     var vars = result.head.vars;
  //     for(var i=0; i<vars.length; ++i){
  //       string += "<th>" + vars[i] + "</th>";
  //     }
  //     string += "</tr></thead><tbody>";
  //     for(var i=0; i<result.results.bindings.length; ++i) {
  //       string += "<tr>";
  //       var obj = result.results.bindings[i];
  //       // console.log(obj);
  //       for(var k=0; k<vars.length; ++k) {
  //         var tuple = obj[vars[k]].value;
  //         if(obj[vars[k]].type === "literal"){
  //           string += "<td>"+tuple + "</td>";
  //         }
  //         else if(obj[vars[k]].type === "uri"){
  //           var arr = tuple.split("#");
  //           string += "<td>" + arr[1] + "</td>";
  //         }
  //       }
  //       string += "</tr>"
  //     }
  //
  //     var div=".table-responsive";
  //     var elem = Polymer.dom(this.root).querySelector(div);
  //     string = "<h3>Configurations</h3>" + string;
  //     string += "</tbody></table>";
  //     elem.innerHTML = string;
  // }
  //
  // populateConfiguration() {
  //
  //   var result = this.configurationResults;
  //     var string = "<table border='1'><tr>";
  //     var vars = result.head.vars;
  //     for(var i=0; i<vars.length; ++i){
  //       string += "<th>" + vars[i] + "</th>";
  //     }
  //     string += "</tr>";
  //     for(var i=0; i<result.results.bindings.length; ++i) {
  //       string += "<tr>";
  //       var obj = result.results.bindings[i];
  //       // console.log(obj);
  //       for(var k=0; k<vars.length; ++k) {
  //         var tuple = obj[vars[k]].value;
  //         if(obj[vars[k]].type === "literal"){
  //           string += "<td>"+tuple + "</td>";
  //         }
  //         else if(obj[vars[k]].type === "uri"){
  //           var arr = tuple.split("#");
  //           string += "<td>" + arr[1] + "</td>";
  //         }
  //       }
  //       string += "</tr>"
  //     }
  //
  //     var div="#configuration";
  //     var elem = Polymer.dom(this.root).querySelector(div);
  //     string = "<h3>Configurations</h3>" + string;
  //     string += "</table>";
  //     elem.innerHTML = string;
  //   }
  getDataFromVersion(inpV){
    console.log(inpV, this.finConfigs)
    var arr = []
    if(inpV != ''){
      for(var i=0; i<this.finConfigs.results.bindings.length; i++){
        console.log("hi")
        if(this.finConfigs.results.bindings[i].version.value === inpV){
          arr.push(this.finConfigs.results.bindings[i])
        }
      }
    var obj = {"head": this.finConfigs.head, "results": {"bindings": arr}}
    this.configurationResults = obj
    }
  }

  _itemChanged(e) {
    var _self = this;
    var selectedItem = e.target.selectedItem;
    var versionNo = selectedItem.innerText
    this.versionSelected = {"val": versionNo}
    console.log(this.versionSelected)
    if(versionNo != "All"){
      console.log("Do Something")
      _self.getDataFromVersion(versionNo)
      var showVer = dom(_self.root).querySelectorAll('#showVer')
      for(var i=0; i<showVer.length; i++){
        showVer[i].style.display = "none"
      }
      var verC = dom(_self.root).querySelector('#verC')
      verC.label = versionNo
      var showAllVer = this.$.showAllVer
      showAllVer.style.display = "none"
      var changeVer = this.$.changeVer
      changeVer.style.display = "block"
    }
    else{
      console.log("Show All")
      this.finVersions = []
      var _parent = document.querySelector("mint-explorer-app");
      this.modelSelected = _parent.modelSelected;
      // console.log(this.modelSelected);
      //this.fetchData();
      if(this.modelSelected) {
       _self.fetchConfiguration(_parent.modelSelected);
      this.finConfigs = this.configurationResults
      var showVer = this.$.showAllVer
      for(var i=0; i<showVer.length; i++){
        showVer[i].style.display = "block"
      }
      var changeVer = this.$.changeVer
      changeVer.style.display = "none"
      var showAllVer = this.$.showAllVer
      showAllVer.style.display = "block"
      }

    }
  }

  ready() {
    super.ready();
    var _self = this
    this.finVersions = []
    var _parent = document.querySelector('mint-explorer-app')
    this.modelSelected = _parent.modelSelected;
    console.log("Hell", _parent.modelSelected);
    // console.log(this.modelSelected);
    //this.fetchData();

    if(_parent.modelSelected != undefined) {
      this.fetchConfiguration(_parent.modelSelected);
      this.finConfigs = this.configurationResults
      console.log("Ok Show the Val", this.finConfigs)
    }
  }

  attributeChangedCallback(){
    super.attributeChangedCallback();
    console.log("attached");
  }
}
window.customElements.define(ViewModel.is, ViewModel);
