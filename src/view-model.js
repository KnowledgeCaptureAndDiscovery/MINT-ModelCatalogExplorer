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
import '/node_modules/vaadin-grid/vaadin-grid.js';
import '/node_modules/paper-chip/paper-chip.js';
import '/node_modules/vaadin-grid/vaadin-grid-column.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import './my-icons.js';
import 'vaadin-button/vaadin-button.js';
import 'vaadin-ordered-layout/vaadin-horizontal-layout.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
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
    </style>
    <br>

    <a href="[[routePath]]/model-search"><vaadin-button theme="error primary" on-click="goBack" raised="">&lt;&lt; Back</vaadin-button></a>
    <div class="flex-center-justified">
      <h1>[[modelSelected.label]]</h1>
    </div>
    <div class="flex-center-justified">
      <paper-chip label="Label: [[modelSelected.model]]" no-hover=""></paper-chip>
    </div>
    <div class="container flex-center-justified">
      <paper-dropdown-menu id="version" label="Select Version">
        <paper-listbox slot="dropdown-content" class="dropdown-content">
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
        <div class="box">
          <div class="card-content">
            <div class="title">
              <h4>Model Configuration: </h4>
              <template is="dom-repeat" items="{{item.config.value}}" as="stuff">
                <a href="[[routePath]]model-configuration"><vaadin-button variable\$="{{stuff}}" on-click="openConfigForUri" raised="">[[stuff]]</vaadin-button></a>
              </template>
            </div>
            <div class="body">
              <div>
                <h4>Version: <paper-chip label="[[item.version.value]]" class="custom-background-m"></paper-chip></h4>
              </div>
              <div>
                <template is="dom-if" if="[[_checkValue(item.input_variables.value)]]">
                  <h4>Input Variables:</h4>
                  <template is="dom-repeat" items="{{item.input_variables.value}}" as="stuff">
                    <a href="[[routePath]]variable-configuration"><vaadin-button variable\$="{{stuff}}" on-click="openConfigForUri" raised="">[[stuff]]</vaadin-button></a>
                  </template>
                </template>
                <template is="dom-if" if="[[_checkNegValue(item.input_variables.value)]]">
                  <h4>Input Variables:</h4>
                  <paper-chip label="Not Found" class="custom-background" no-hover=""></paper-chip>
                </template>
              </div>
              <div>
                <template is="dom-if" if="[[_checkValue(item.output_variables.value)]]">
                  <h4>Output Variables:</h4>
                  <template is="dom-repeat" items="{{item.output_variables.value}}" as="stuff">
                    <a href="[[routePath]]variable-configuration"><vaadin-button variable\$="{{stuff}}" on-click="openConfigForUri" raised="">[[stuff]]</vaadin-button></a>
                  </template>
                </template>
                <template is="dom-if" if="[[_checkNegValue(item.output_variables.value)]]">
                  <h4>Output Variables:</h4>
                  <paper-chip label="Not Found" class="custom-background" no-hover=""></paper-chip>
                </template>
              </div>
            </div>
          </div>
        </div>
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
      configurationResults: Object,
      unModifiedConfigurationResults:Object
    };
  }

  _activeChanged(modelSelected){

  }

  _checkValue(stuff){
    console.log("Detected", stuff)
    return typeof stuff !== 'undefined';
  }

  _checkNegValue(stuff){
    console.log("Detected", stuff)
    return typeof stuff === 'undefined';
  }

  _modelChanged(data){
    this.finVersions = []
    var _parent = document.querySelector("mint-explorer-app");
    this.modelSelected = data;
    console.log("Ojj", data);
    this.fetchConfiguration(data);
  }

  goBack(){
    var _parent = document.querySelector("mint-explorer-app");
    var _pages = dom(_parent.root).querySelector("#pages");
    _pages.selected = "model-search";
    this.finVersions = []
  }

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
                          var parts = strs[j].split("#");
                         if(parts[1]===configuration){
                             _parent.variableSelected=strs[j];
                             console.log("hello" + _parent.variableSelected);
                             break;
                         }
                      }
                  }else{
                      var str = this.unModifiedConfigurationResults.results.bindings[i][key].value;
                      var arr = str.split("#");
                      if(arr[1]===configuration){
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
      console.log("Ok Done", this.unModifiedConfigurationResults)
      for(var i = 0; i < obj.results.bindings.length; ++i) {
        for(var key in obj.results.bindings[i]) {
          var temp = []
          if(key === "version"){
            var _self = this;
            var _parent = document.querySelector("mint-explorer-app");
            // Get Versions
            var qs = _parent.queries[6].query
            var r = []
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
            obj.results.bindings[i][key].value = cs
            this.unModifiedConfigurationResults.results.bindings[i][key].value = cs
          }
          else{
            if(obj.results.bindings[i][key].value.includes(",")) {
              var strs = obj.results.bindings[i][key].value.split(",");

              var vars = [];

              for(var j = 0; j<strs.length; ++j){
                var parts = strs[j].split("#");
                vars.push(parts[1]);
              }
              obj.results.bindings[i][key].value = vars;
            }
            else {
              var str = obj.results.bindings[i][key].value;
              var arr = str.split("#");
                var vars = [];
                vars.push(arr[1]);
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
    var qs = _parent.queries[6].query
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
    var qs = _parent.queries[6].query
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

    var query = _parent.queries[5].query;
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

  ready() {
    super.ready();
    this.finVersions = []
    var _parent = document.querySelector("mint-explorer-app");
    console.log("Loaded")
    this.modelSelected = _parent.modelSelected;
    console.log(_parent.modelSelected);
    console.log("Data Finished")
    // console.log(this.modelSelected);
    //this.fetchData();
    this.fetchConfiguration(_parent.modelSelected);
    console.log("Product", this.configurationResults)
  }

  attributeChangedCallback(){
    super.attributeChangedCallback();
    console.log("attached");
  }
}
window.customElements.define(ViewModel.is, ViewModel);