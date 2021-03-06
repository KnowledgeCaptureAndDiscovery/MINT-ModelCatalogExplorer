/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/*<link rel="stylesheet" href="../src/css/components.css">*/
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
import './paper-chip.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@vaadin/vaadin-combo-box/vaadin-combo-box.js';

import './model-search.js';
import './view-model.js';
import './model-configuration.js';
import './not-found.js';
import './regex-highlighter.js';

import '@polymer/app-layout/app-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-toggle-button/paper-toggle-button.js';
import '@polymer/paper-card/paper-card.js';
import './my-icons.js';
import '@vaadin/vaadin-button/vaadin-button.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { dom } from '@polymer/polymer/lib/legacy/polymer.dom.js';

class VariableSearch extends PolymerElement {
  static get template() {
    return html`
    <style include="shared-styles">
      html, body {
          margin: 0;
          font-family: 'Roboto', sans-serif;
          -webkit-font-smoothing: antialiased;
          max-height: 368px;
        }

        paper-card{
          color: black;
          width: 50%;
          word-wrap: break-word;
          margin: 10px;
        }

        paper-input{
          width: 25%;
        }

        paper-button{
          background-color: #eee
        }

        paper-toolbar {
          background-color: #f2f1ed;
          padding: 10px;
        }

        .card-body {
          padding: 15px;
        }

        .card-actions {
          padding: 10px;
        }

        .card-content {
          padding: 10px;
        }

        #search-bar {
          width: 50%;
        }

        #options {
          width: 50%;
        }

        #search-input {
          width: 1000%;
        }
        #searchIcon {
          width: 50%;
        }
        #clearIcon {
          margin-top: -40px;
          margin-left: 51%;
          width: 50%;
        }

        #heading {
          margin-left: 20px;
        }

        #category {
          margin-right: 10px;
          width: 100%
        }

        #version {
          margin-left: 10px;
        }

        #styled{
          width: 35%;
        }
        .primary{
          cursor: pointer;
          border: 1px solid transparent;
          font-size: 14px;
          line-height: 1.846;
          border-radius: 3px;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          color: #ffffff;
          background-color: #2196f3;
        }

        .dropdown-content{
          width: 100%;
        }

        .grid {
          margin-left: 20px;
          margin-right: 20px;
          @apply --layout-horizontal;
          @apply --layout-wrap;
          @apply --layout-justified;
          -webkit-flex-basis: 50%;
          flex-basis: 50%;
          max-width: 100%;
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
          width: 100%;
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
        paper-chip.custom-background-u {
          --paper-chip-background-color: orange;
          --paper-chip-label-color: white;
          cursor: pointer;
          --paper-chip-avatar-background-color: #dc3545;
        }
        paper-chip.custom-background-l {
            --paper-chip-background-color: #ffc107;
            --paper-chip-label-color: #fff;
        }
        paper-chip.custom-background-k {
          --paper-chip-background-color: #007bff;
          --paper-chip-label-color: #fff;
          cursor: pointer;
          --paper-chip-avatar-background-color: #dc3545;
        }
        .incL {
          width: 50%;
        }
       .pointer{
          cursor: pointer;
        }
    </style>
   <div class="container flex-center-justified">
      <div><h1>Variable Search</h1></div>
    </div>
    <div class="container flex-center-justified">
      <center><p style="width: 50%;">This interface provides a way to search variable presentation and standard names from all the models. Try it out by specifying a variable presentation or standard name in the search bar. For example: Type <b>PRCP</b> in search bar to obtain it's metadata. </p></center>
    </div>
    <div class="container flex-center-justified">
      <vaadin-combo-box label="Search Variable Name" filter="{{filter}}" id="searchVariable" class="incL" items="[[data]]">
        <template>
          <style>
            span[focused] {
              color: var(--lumo-primary-color);
            }

            span[selected] {
              font-weight: bold;
            }
          </style>
          <span selected$="[[selected]]" focused$="[[focused]]">[[item]]</span>
        </template>
      </vaadin-combo-box>
    </div>
    <br>
    <div class="container flex-center-justified">
      <div id="search-bar">
        <div class="grid">
          <vaadin-button class="pointer" theme="contrast primary" class="search-icon" id="searchIcon" title="Search" on-click="searchHandler" slot="suffix" prefix="" icon="search"><iron-icon icon="icons:search" slot="prefix"></iron-icon>Search
          </vaadin-button>
          <vaadin-button class="pointer" theme="error primary" class="clear-icon" id="clearIcon" title="Clear" on-click="clearHandler" slot="suffix" prefix="" icon="search"><iron-icon icon="icons:close" slot="prefix"></iron-icon>Clear
          </vaadin-button>
        </div>
      </div> 
    </div>
    <br><br>
    <div id="displayRes" style="display: none;">
      <div class="container flex-center-justified">
        <div><h2>{{variableAndUnits.label}} &nbsp;&nbsp;&nbsp;<paper-chip label="[[verType]]" class="custom-background-m" no-hover=""></paper-chip></h2></div>
      </div>
      <div class="container flex-center-justified">
        <div> <a href="[[variableAndUnits.uri]]" target="_blank" rel="noopener noreferrer"><paper-chip label="URI: [[variableAndUnits.uri]]" no-hover=""></paper-chip></a></div>
      </div>
      <br>
      <div class="container flex-center-justified">
        <a href="[[routePath]]variable-presentation" title="View Data Set Specification">
          <paper-chip label="[[dataSetSpecLk]]" no-hover="" class="custom-background-u" on-click="reachVarPresentation">
            <span class="chip-background" slot="avatar">
              <iron-icon icon="icons:launch"></iron-icon>
            </span>
          </paper-chip>
        </a>
      </div>
      <br>
      <div class="container flex-center-justified">
        <div>
          <a href="[[routePath]]view-model" title="View [[variableAndUnits.model]]">
              <paper-chip label="Model: [[variableAndUnits.model]]" class="custom-background-k" on-click="reachModel" no-hover="">
                <span class="chip-background" slot="avatar">
                  <iron-icon icon="icons:launch"></iron-icon>
                </span>
              </paper-chip>
          </a>
      </div>
        <div><paper-chip label="Version: [[variableAndUnits.version]]" class="custom-background-k" no-hover=""></paper-chip></div>
        <div><a href="[[routePath]]model-configuration" title="View [[variableAndUnits.config]]"><paper-chip label="Configuration: [[variableAndUnits.config]]" class="custom-background-k" on-click="reachConfig" no-hover=""><span class="chip-background" slot="avatar">
                  <iron-icon icon="icons:launch"></iron-icon>
                </span></paper-chip></a></div>
      </div>
      <br>
      <div class="container flex-center-justified">
        <div class="grid">
          <template is="dom-if" if="[[_checkValue(variableAndUnits)]]">
            <div class="box">
              <div class="card-content">
                <div class="body">
                  <div>
                    <template is="dom-if" if="[[_checkValue(variableAndUnits.shortName)]]">
                      <h4>Short Name:</h4>
                      {{variableAndUnits.shortName}}
                    </template>
                      <template is="dom-if" if="[[_checkNegValue(variableAndUnits.shortName)]]">
                        <!--<h4>Short Name:</h4>
                      <paper-chip label="Not Found" class="custom-background" no-hover=""></paper-chip>-->
                    </template>
                  </div>
                  <div>
                    <template is="dom-if" if="[[_checkValue(variableAndUnits.longName)]]">
                      <h4>Long Name:</h4>
                      {{variableAndUnits.longName}}
                    </template>
                      <template is="dom-if" if="[[_checkNegValue(variableAndUnits.longName)]]">
                        <!--<h4>Long Name:</h4>
                      <paper-chip label="Not Found" class="custom-background" no-hover=""></paper-chip>-->
                    </template>
                  </div>
                  <div>
                    <template is="dom-if" if="[[_checkValue(variableAndUnits.description)]]">
                      <h4>Description:</h4>
                      {{variableAndUnits.description}}
                    </template>
                      <template is="dom-if" if="[[_checkNegValue(variableAndUnits.description)]]">
                        <!--<h4>Description:</h4>
                        <paper-chip label="Not Found" class="custom-background" no-hover=""></paper-chip>-->
                    </template>
                  </div>
                  <div>
                    <template is="dom-if" if="[[_checkValue(variableAndUnits.sn)]]">
                      <h4>Standard Name:</h4>
                      {{variableAndUnits.sn}}
                    </template>
                      <template is="dom-if" if="[[_checkNegValue(variableAndUnits.sn)]]">
                        <!--<h4>Standard Name:</h4>
                      <paper-chip label="Not Found" class="custom-background" no-hover=""></paper-chip>-->
                    </template>
                  </div>
                  <div>
                    <template is="dom-if" if="[[_checkValue(variableAndUnits.unit)]]">
                      <h4>Unit:</h4>
                      {{variableAndUnits.unit}}
                    </template>
                      <template is="dom-if" if="[[_checkNegValue(variableAndUnits.unit)]]">
                        <!--<h4>Unit:</h4>
                        <paper-chip label="Not Found" class="custom-background" no-hover=""></paper-chip>-->
                    </template>
                  </div>
                </div>
              </div>
            </div>
          
        </template>
        <template is="dom-if" if="[[_checkNegValue(variableAndUnits)]]">
          <paper-chip label="Currently, there is no data available" class="custom-background" no-hover=""></paper-chip>
        </template>
      </div>
    </div>
    </div>
    <div id="dispSN" style="display: none;">
      <div class="container flex-center-justified">
        <div><h2>{{inpVal}} &nbsp;&nbsp;&nbsp;<paper-chip label="Standard Name" class="custom-background-j" no-hover=""></paper-chip></h2></div>
      </div>
      <div class="container flex-center-justified">
        <div class="grid">
          <div class="box">
            <div class="card-content">
              <div class="body">
                <div>
                  <h4>Variable Presentation:</h4>{{sntoLabel}}
                </div>
                <div>
                  <h4>Variable Presentation URI :</h4> {{sntoURI}}
                </div>
                <div>
                  <h4>Metadata :</h4> <paper-chip label="Currently Not Available" class="custom-background" no-hover=""></paper-chip>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
`;
  }

  static get is() { return 'variable-search'; }
  static get properties() {
    return {
     variables: Array,
     dictMap: Object,
     variableAndUnits: Object,
     varSN: Object,
     sntoURI: String,
     sntoLabel: String,
     dialogVal: {
        type: String,
        observer: '_dialogChanged'
      },
     inpVal: String,
     URI: String,
     label: String,
     configURI: String,
     verName: String,
     verType: String,
     dataSetSpecLk: String,
     dataSetSpec: String
    };
  }

  _checkValue(stuff){
      return typeof stuff !== 'undefined';
    }

  _checkNegValue(stuff){
    return typeof stuff === 'undefined';
  }

  _dialogChanged(data){
      //console.log("From", data)
      var _self = this
      this.URI = data
      var arr = data.split("/")
      var flag = _self.checkSN(arr[arr.length - 1])
      if(flag === false){
        _self.fetchConfiguration(data)
        var data = dom(_self.root).querySelector("#displayRes");
        data.style.display = "block"
        //console.log(this.variableAndUnits)
        var kisp = dom(_self.root).querySelector("#dispSN");
        kisp.style.display = "none"
      }
      else{
        //console.log("Standard Variable Found")
        var ksp = dom(_self.root).querySelector("#displayRes");
        ksp.style.display = "none"
        var tr = dom(_self.root).querySelector("#dispSN");
        tr.style.display = "block"
        //var kisp = Polymer.dom(_self.root).querySelector("#displayRes");
        //kisp.style.display = "none"
      }
    }

  getAllVariables(){
    //console.log("Hello")
    var _parent = document.querySelector("mint-explorer-app");
    //var qt = _parent.queries[9].query;
    var qt = "https://query.mint.isi.edu/api/mintproject/MINT-ModelCatalogQueries/getVariables?endpoint=https%3A%2F%2Fendpoint.mint.isi.edu%2Fds%2Fquery"
    var searchRes = []
    var test = {}
    $.ajax({
      url: qt,
      type: "GET",
      cache: false,
      timeout: 5000,
      async: false,
      complete: function() {
          //console.log("GET request sent");
      },

      success: function(data) {
        //console.log(data)
        var res = data.results.bindings
        for(var i=0; i<res.length; i++){
          if('sn' in res[i]){
            searchRes.push(res[i].sn.value)
          }
          else{
          }
          searchRes.push(res[i].label.value)
          test[res[i].label.value] = res[i].v.value
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
          //console.log(msg);
      }
    });
    //console.log(searchRes)
    this.variables = searchRes
    this.dictMap = test
    //console.log(this.dictMap)
  }

  getMetadata(uri){
    var _parent = document.querySelector("mint-explorer-app");
    //var qt = _parent.queries[6].query;
    var qt = "https://query.mint.isi.edu/api/mintproject/MINT-ModelCatalogQueries/getResourceMetadata?endpoint=https%3A%2F%2Fendpoint.mint.isi.edu%2Fds%2Fquery"
    var ts = {}
    $.ajax({
      url: qt,
      type: "GET",
      data: {
        mv: uri
      },
      cache: false,
      timeout: 5000,
      async: false,
      success: function(data) {
        ts = data
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
          //console.log(msg);
      }
    });
    return ts
  }

  clearHandler(){
    location.reload();
  }

  processMetadata(kmp){
    var jump = []
    var _self = this
    for(var i=0; i<kmp.length; i++){
      var u = {}
      if(i === 0){
        u = _self.getMetadata(kmp[i].val)
        for(var j=0; j<u.results.bindings.length; j++){
          var ty = u.results.bindings[j].prop.value.split("#")
          if(ty[1] === "label"){
            jump.push(u.results.bindings[j].value.value)
            break
          }
        }
      }
      else if(i === 1){
        var kj = kmp[i].val.split("/")
        jump.push(kj[kj.length - 1])
      }
      else if(i === 2){
        u = _self.getMetadata(kmp[i].val)
        for(var k=0; k<u.results.bindings.length; k++){
          var ty = u.results.bindings[k].prop.value.split("#")
          if(ty[1] === "hasVersionId"){
            jump.push(u.results.bindings[k].value.value)
            break
          }
        }
      }
    }
    return jump
  }

  process(data, uri){
    var _self = this
    var _parent = document.querySelector("mint-explorer-app");
    //var qt = _parent.queries[10].query;
    var qt = "https://query.mint.isi.edu/api/mintproject/MINT-ModelCatalogQueries/getModelConfigurationsForVariablePresentation?endpoint=https%3A%2F%2Fendpoint.mint.isi.edu%2Fds%2Fquery"
    var kmp = []
    $.ajax({
      url: qt,
      type: "GET",
      data: {
        var: uri
      },
      cache: false,
      timeout: 5000,
      async: false,
      success: function(data) {
        kmp.push({'val': data.results.bindings[0].model.value})
        kmp.push({'val': data.results.bindings[0].configuration.value})
        kmp.push({'val': data.results.bindings[0].version.value})
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
          //console.log(msg);
      }
    });
    //console.log("KMP", kmp)
    this.label = kmp[0];
    this.configURI = kmp[1];
    this.verName = kmp[2];
    var yes = {}
    yes = _self.processMetadata(kmp)
    //console.log("Acheived", yes)

    var obj = {"uri": uri, "model": yes[0], "config": yes[1], "version": yes[2]}
    for(var i=0; i<data.length; i++){
      var x = data[i].prop.value.split("#")
      if(data[i].prop.value.includes("description")){
        obj.description = data[i].value.value
      }
      else{
        if(x[1] == 'label'){
          obj.label = data[i].value.value
        }
        else if(x[1] == 'hasLongName'){
          obj.longName = data[i].value.value
        }
        else if(x[1] == 'hasShortName'){
          obj.shortName = data[i].value.value
        }
        else if(x[1] == 'hasStandardVariable'){
          obj.sn = data[i].value.value
        }
        else if(x[1] == 'usesUnit'){
          obj.unit = data[i].value.value
        }
      }
    }
    //console.log(obj)
    this.variableAndUnits = obj;
    _self.findIOVariable(this.label, this.verName, this.variableAndUnits.uri)
  }

  findIOVariable(model_name, version_name, var_name){
    //console.log(model_name.val, version_name.val)
    var _self = this;
    var flag = 0;
    var dsSpec = '';
    var query = "https://query.mint.isi.edu/api/mintproject/MINT-ModelCatalogQueries/getVariablePresentationsForModel?endpoint=https%3A%2F%2Fendpoint.mint.isi.edu%2Fds%2Fquery"
    $.ajax({
        url: query,
        type: "GET",
        data:{
            model: model_name.val
        },
        cache: false,
        timeout: 5000,
        async: false,

        success: function(data) {
          //console.log("mod", data);
          var x = []
          var inp_val = []
          var out_val = []
          x = data.results.bindings;
          for(var i=0; i<x.length; i++){
            if(x[i].version.value === version_name.val) {
              inp_val = x[i].input_files.value.split(", ")
              out_val = x[i].output_files.value.split(", ")
              break
            }
          }
          //console.log(inp_val, out_val)
          for(var i=0; i<inp_val.length; i++){
            if(_self.searchIO(inp_val[i], var_name) === true){
              dsSpec = inp_val[i]
              flag = 1
              break
            }
          }
          if(flag != 1) {
            for(var i=0; i<out_val.length; i++){
              if(_self.searchIO(out_val[i], var_name) === true){
                dsSpec = out_val[i]
                break
              }
            }
          }

          ////console.log(inp_val, out_val)
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
            // //console.log(msg);
        }
    });
    if(flag === 1){
      this.verType = "Input Variable"
    }
    else {
      this.verType = "Output Variable"
    }
    this.dataSetSpec = dsSpec
    var arr = []
    arr = dsSpec.split("/")
    this.dataSetSpecLk = arr[arr.length - 1]
    //console.log("DDDD", this.dataSetSpec)
  }

  searchIO(var_data, var_name){
    //console.log("Ok", var_name)
    var checker = 0
    var query = "https://query.mint.isi.edu/api/mintproject/MINT-ModelCatalogQueries/getI_OVariablesAndUnits"
    $.ajax({
        url: query,
        type: "GET",
        data:{
            io: var_data
        },
        cache: false,
        timeout: 5000,
        async: false,
        complete: function() {
            // console.log("GET request sent");
        },

        success: function(data) {
          var temp = data.results.bindings
          for(var j=0; j < temp.length; j++){
            //console.log(temp[j].vp.value)
            if(temp[j].vp.value === var_name){
              checker = 1
              break
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
            // //console.log(msg);
        }
    });
    console.log(checker)
    if(checker === 1){
      return true
    }
    else {
      return false
    }
  }

  fetchConfiguration(e){
      var _self = this;
      var _parent = document.querySelector("mint-explorer-app");
      //var query = _parent.queries[6].query;
      var query = "https://query.mint.isi.edu/api/mintproject/MINT-ModelCatalogQueries/getResourceMetadata?endpoint=https%3A%2F%2Fendpoint.mint.isi.edu%2Fds%2Fquery"
      var endpoint = _parent.endpoint;
      $.ajax({
          url: query,
          type: "GET",
          data:{
              mv: e
          },
          cache: false,
          timeout: 5000,
          async: false,

          success: function(data) {
            //console.log(data);
           _self.process(data.results.bindings, e);
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

  checkSN(vsn){
    //console.log("Hello")
    var _parent = document.querySelector("mint-explorer-app");
    //var qt = _parent.queries[9].query;
    var qt = "https://query.mint.isi.edu/api/mintproject/MINT-ModelCatalogQueries/getVariables?endpoint=https%3A%2F%2Fendpoint.mint.isi.edu%2Fds%2Fquery"
    var flag = false
    var sntoLabel = ''
    var sntoURI = ''
    $.ajax({
      url: qt,
      type: "GET",
      cache: false,
      timeout: 5000,
      async: false,
      complete: function() {
          //console.log("GET request sent");
      },

      success: function(data) {
        //console.log(data)
        var res = data.results.bindings
        for(var i=0; i<res.length; i++){
          if('sn' in res[i]){
            if(res[i].sn.value === vsn){
                flag = true
                sntoLabel = res[i].label.value
                sntoURI = res[i].v.value
                break
            }
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
          //console.log(msg);
      }
    });
    this.sntoLabel = sntoLabel
    this.sntoURI = sntoURI
    this.inpVal = vsn
    //console.log(sntoLabel, sntoURI)
    return flag
  }

  reachModel() {
    //console.log("Clicked");
    //console.log(this.label);
    var _parent = document.querySelector("mint-explorer-app");

    _parent.modelSelected = {
      label: this.variableAndUnits.model,
      model: this.label.val
    }
    //console.log("Here", _parent.modelSelected);
    var _pages = dom(_parent.root).querySelector("#pages");
    //console.log(_pages);
    //console.log(_pages.selected);
    //this.set('route.path', '/view-model');
    //console.log(_pages.selected);

  }

  reachVarPresentation() {
    var _parent = document.querySelector("mint-explorer-app");
    //console.log("TP", this.variableAndUnits.model)
    _parent.configSelected = this.configURI.val;
    _parent.modelSelected = {"label": this.variableAndUnits.model, "model": this.label.val }
    _parent.variableSelected = this.dataSetSpec;
  }

  reachConfig() {
    //console.log("LLllllllllllll")
    var _parent = document.querySelector("mint-explorer-app");
    _parent.modelSelected = {
      label: this.variableAndUnits.model,
      model: this.label.val
    }
    _parent.variableSelected = this.configURI.val;
    //console.log("Hello", this.configURI.val)
  }

  ready() {
    super.ready();
    var _self = this;
    _self.getAllVariables()

    var comboBox = this.$.searchVariable;
    comboBox.items = this.variables;

    var temp = this.dictMap
    var ks = this.variables

    comboBox.addEventListener('selected-item-changed', function(event){
      var input = dom(_self.root).querySelector("#searchVariable");
      input.value = event.detail.value;
      this.URI = temp[input.value]
      var flag = _self.checkSN(input.value)
      if(flag === false){
        _self.fetchConfiguration(temp[input.value])
        var data = dom(_self.root).querySelector("#displayRes");
        data.style.display = "block"
        //console.log(this.variableAndUnits)
        var kisp = dom(_self.root).querySelector("#dispSN");
        kisp.style.display = "none"
      }
      else{
        //console.log("Standard Variable Found")
        var ksp = dom(_self.root).querySelector("#displayRes");
        ksp.style.display = "none"
        var tr = dom(_self.root).querySelector("#dispSN");
        tr.style.display = "block"
        //var kisp = Polymer.dom(_self.root).querySelector("#displayRes");
        //kisp.style.display = "none"
      }
    });

  }
}

window.customElements.define(VariableSearch.is, VariableSearch);
