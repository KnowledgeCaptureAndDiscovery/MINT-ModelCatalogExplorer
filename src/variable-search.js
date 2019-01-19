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
import '@polymer/neon-animation/web-animations.js';

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
import 'paper-autocomplete/paper-autocomplete.js';
import 'paper-autocomplete-chips/paper-autocomplete-chips.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import 'vaadin-checkbox/vaadin-checkbox.js';
import '/node_modules/paper-chip/paper-chip.js';
import 'vaadin-combo-box/vaadin-combo-box.js';
import './model-search.js';
import './view-model.js';
import './model-configuration.js';
import './not-found.js';
import '/node_modules/@polymer/app-layout/app-layout.js';
import '/node_modules/@polymer/app-layout/app-header/app-header.js';
import '/node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js';
import '/node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js';
import '/node_modules/@polymer/iron-flex-layout/iron-flex-layout.js';
import '/node_modules/paper-chip/paper-chip.js';
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
import './my-icons.js';
import 'vaadin-button/vaadin-button.js';
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
        paper-chip.custom-background-l {
            --paper-chip-background-color: #ffc107;
            --paper-chip-label-color: #fff;
        }
        paper-chip.custom-background-k {
          --paper-chip-background-color: #007bff;
          --paper-chip-label-color: #fff;
        }
        .incL {
          width: 50%;
        }
    </style>
   <div class="container flex-center-justified">
      <div><h1>Variable Search</h1></div>
    </div>
    <div class="container flex-center-justified">
      <center><p style="width: 50%;">This interface provides a way to search variable presentation and standard names from all the models. Try it out by specifying a variable presentation or standard name in the search bar. For example: Type <b>SRAD</b> in search bar to obtain it's metadata. </p></center>
    </div>
    <div class="container flex-center-justified">
      <vaadin-combo-box label="Model Search" class="incL" items="[[data]]"></vaadin-combo-box>
    </div>
    <br>
    <div class="container flex-center-justified">
      <div id="search-bar">
        <!--<paper-input id="searchInput" label="Search Model Name" value="{{searchParameter}}"></paper-input>-->
        <paper-autocomplete-chips id="searchVariable" label="Search Variable Name" for="searchInput" source="[[accounts]]">
        </paper-autocomplete-chips>
        <br>
        <div class="grid">
          <vaadin-button theme="contrast primary" class="search-icon" id="searchIcon" title="Search" on-click="searchHandler" slot="suffix" prefix="" icon="search"><iron-icon icon="icons:search" slot="prefix"></iron-icon>Search
          </vaadin-button>
          <vaadin-button theme="error primary" class="clear-icon" id="clearIcon" title="Clear" on-click="clearHandler" slot="suffix" prefix="" icon="search"><iron-icon icon="icons:close" slot="prefix"></iron-icon>Clear
          </vaadin-button>
        </div>
      </div> 
    </div>
    <br><br>
    <div id="displayRes" style="display: none;">
      <div class="container flex-center-justified">
        <div><h2>{{variableAndUnits.label}} &nbsp;&nbsp;&nbsp;<paper-chip label="Variable Presentation" class="custom-background-m" no-hover=""></paper-chip></h2></div>
      </div>
      <div class="container flex-center-justified">
        <div><paper-chip label="URI: [[variableAndUnits.uri]]" no-hover=""></paper-chip></div>
      </div>
      <br>
      <div class="container flex-center-justified">
        <div><paper-chip label="Model: [[variableAndUnits.model]]" class="custom-background-k" no-hover=""></paper-chip></div>
        <div><paper-chip label="Version: [[variableAndUnits.version]]" class="custom-background-k" no-hover=""></paper-chip></div>
        <div><paper-chip label="Configuration: [[variableAndUnits.config]]" class="custom-background-k" no-hover=""></paper-chip></div>
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
                        <h4>Short Name:</h4>
                      <paper-chip label="Not Found" class="custom-background" no-hover=""></paper-chip>
                    </template>
                  </div>
                  <div>
                    <template is="dom-if" if="[[_checkValue(variableAndUnits.longName)]]">
                      <h4>Long Name:</h4>
                      {{variableAndUnits.longName}}
                    </template>
                      <template is="dom-if" if="[[_checkNegValue(variableAndUnits.longName)]]">
                        <h4>Long Name:</h4>
                      <paper-chip label="Not Found" class="custom-background" no-hover=""></paper-chip>
                    </template>
                  </div>
                  <div>
                    <template is="dom-if" if="[[_checkValue(variableAndUnits.description)]]">
                      <h4>Description:</h4>
                      {{variableAndUnits.description}}
                    </template>
                      <template is="dom-if" if="[[_checkNegValue(variableAndUnits.description)]]">
                        <h4>Description:</h4>
                      <paper-chip label="Not Found" class="custom-background" no-hover=""></paper-chip>
                    </template>
                  </div>
                  <div>
                    <template is="dom-if" if="[[_checkValue(variableAndUnits.sn)]]">
                      <h4>Standard Name:</h4>
                      {{variableAndUnits.sn}}
                    </template>
                      <template is="dom-if" if="[[_checkNegValue(variableAndUnits.sn)]]">
                        <h4>Standard Name:</h4>
                      <paper-chip label="Not Found" class="custom-background" no-hover=""></paper-chip>
                    </template>
                  </div>
                  <div>
                    <template is="dom-if" if="[[_checkValue(variableAndUnits.unit)]]">
                      <h4>Unit:</h4>
                      {{variableAndUnits.unit}}
                    </template>
                      <template is="dom-if" if="[[_checkNegValue(variableAndUnits.unit)]]">
                        <h4>Unit:</h4>
                      <paper-chip label="Not Found" class="custom-background" no-hover=""></paper-chip>
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
     inpVal: String,
     URI: String
    };
  }

  _checkValue(stuff){
      return typeof stuff !== 'undefined';
    }

  _checkNegValue(stuff){
    return typeof stuff === 'undefined';
  }

  getAllVariables(){
    console.log("Hello")
    var _parent = document.querySelector("mint-explorer-app");
    var qt = _parent.queries[9].query;
    var searchRes = []
    var test = {}
    $.ajax({
      url: qt,
      type: "GET",
      cache: false,
      timeout: 5000,
      async: false,
      complete: function() {
          console.log("GET request sent");
      },

      success: function(data) {
        console.log(data)
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
          console.log(msg);
      }
    });
    console.log(searchRes)
    this.variables = searchRes
    this.dictMap = test
    console.log(this.dictMap)
  }

  getMetadata(uri){
    var _parent = document.querySelector("mint-explorer-app");
    var qt = _parent.queries[6].query;
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
          console.log(msg);
      }
    });
    return ts
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
        var kj = kmp[i].val.split("#")
        jump.push(kj[1])
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
    var qt = _parent.queries[10].query;
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
          console.log(msg);
      }
    });
    console.log("KMP", kmp)

    var yes = {}
    yes = _self.processMetadata(kmp)
    console.log("Acheived", yes)

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
    console.log(obj)
    this.variableAndUnits = obj;
  }

  fetchConfiguration(e){
      var _self = this;
      var _parent = document.querySelector("mint-explorer-app");
      var query = _parent.queries[6].query;
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
            console.log(data);
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
    console.log("Hello")
    var _parent = document.querySelector("mint-explorer-app");
    var qt = _parent.queries[9].query;
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
          console.log("GET request sent");
      },

      success: function(data) {
        console.log(data)
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
          console.log(msg);
      }
    });
    this.sntoLabel = sntoLabel
    this.sntoURI = sntoURI
    this.inpVal = vsn
    console.log(sntoLabel, sntoURI)
    return flag
  }



  ready() {
    super.ready();
    var _self = this;
    _self.getAllVariables()

    var autocompleteSuggestions = dom(this.root).querySelector('paper-autocomplete-chips');
    autocompleteSuggestions.source = this.variables;

    var combobox = dom(this.root).querySelector('vaadin-combo-box');
    combobox.items = this.variables;

    var temp = this.dictMap
    var ks = this.variables

    autocompleteSuggestions.addEventListener('autocomplete-selected', function (event) {
      var input = dom(_self.root).querySelector("#searchVariable");
      input.value = event.detail.value;
      this.URI = temp[input.value]
      var flag = _self.checkSN(input.value)
      if(flag === false){
        _self.fetchConfiguration(temp[input.value])
        var data = dom(_self.root).querySelector("#displayRes");
        data.style.display = "block"
        console.log(this.variableAndUnits)
        var kisp = dom(_self.root).querySelector("#dispSN");
        kisp.style.display = "none"
      }
      else{
        console.log("Standard Variable Found")
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