/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
import './my-icons.js';

import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-button/vaadin-button.js'
import './shared-styles.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { dom } from '@polymer/polymer/lib/legacy/polymer.dom.js';
class ModelConfiguration extends PolymerElement {
  static get template() {
    return html`
    <style include="shared-styles">
      .danger{
        color: #ffffff;
        background-color: #e51c23;
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
          min-height: 100px;

          display: block;
          text-decoration: none;
          text-align: center;
          position: relative;
          width: 47.5%;
          padding: 15px;
          word-wrap: break-word;
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
        paper-chip.custom-background {
            --paper-chip-background-color: #007bff;
            --paper-chip-label-color: #fff;
        }
        paper-chip.custom-background-l {
            --paper-chip-background-color: #ffc107;
            --paper-chip-label-color: #fff;
        }
        paper-chip.custom-background-b {
          --paper-chip-background-color: #dc3545;
          --paper-chip-label-color: #fff;
        }
        paper-chip.custom-background-m {
          --paper-chip-background-color: #28a745;
          --paper-chip-label-color: #fff;
        }
    </style>
    <br>
    <div>
    <!--<a href="[[routePath]]view-model"><vaadin-button theme="error primary" on-click="goBack" raised="">&lt;&lt; Back</vaadin-button></a>-->
    </div>
    <!--<h2>Configurations</h2>-->
    <!--<h4>[[configSelected.model.label]]</h4>-->
    <!--<h4>[[configSelected.model.model]]</h4>-->
    <!--<h4>[[configSelected.config]]</h4>-->
    <br>
    <div class="flex-center-justified">
      <h1>[[tempVar]]</h1>
    </div>
    <div class="flex-center-justified">
      <paper-chip label="Model: [[modelName]]" class="custom-background" no-hover=""></paper-chip>
      <paper-chip label="Version: [[verSelected]]" class="custom-background-m" no-hover=""></paper-chip>
    </div>
    <div class="flex-center-justified">
      <paper-chip label="Label: [[varSelected]]" class="custom-background-l" no-hover=""></paper-chip>
    </div>
    <br>
    <div class="container flex-center-justified">
      <template is="dom-if" if="[[configurationResults.results.bindings]]">
        <template is="dom-repeat" items="[[configurationResults.results.bindings]]">
          <div class="box">
              <div class="card-content">
                <div>
                  <template is="dom-if" if="[[_checkInpValue(item.cag.value)]]">
                    <b>CAG </b>: [[item.cag.value]]
                  </template>
                  <template is="dom-if" if="[[_checkNegInpValue(item.cag.value)]]">
                    <b>CAG : <paper-chip label="Not Found" class="custom-background-b" no-hover=""></paper-chip></b>
                  </template>
                </div>
                <div>
                  <template is="dom-if" if="[[_checkInpValue(item.desc.value)]]">
                    <b>Description </b>: [[item.desc.value]]
                  </template>
                  <template is="dom-if" if="[[_checkNegInpValue(item.desc.value)]]">
                    <b>Description : <paper-chip label="Not Found" class="custom-background-b" no-hover=""></paper-chip></b>
                  </template>
                </div>
                <div>
                  <template is="dom-if" if="[[_checkInpValue(item.input_variables.value)]]">
                    <b>Input Variables </b>: [[item.input_variables.value]]
                  </template>
                  <template is="dom-if" if="[[_checkNegInpValue(item.input_variables.value)]]">
                    <b>Input Variables : <paper-chip label="Not Found" class="custom-background-b" no-hover=""></paper-chip></b>
                  </template>
                </div>
                <div>
                  <template is="dom-if" if="[[_checkInpValue(item.output_variables.value)]]">
                    <b>Output Variables </b>: [[item.output_variables.value]]
                  </template>
                  <template is="dom-if" if="[[_checkNegInpValue(item.output_variables.value)]]">
                    <b>Output Variables : <paper-chip label="Not Found" class="custom-background-b" no-hover=""></paper-chip></b>
                  </template>
                </div>
              </div>
          </div>
        </template>
      </template>
      <template is="dom-if" if="[[_checkConf(configurationResults.results.bindings)]]">
        <paper-chip label="Currently there is no data for [[tempVar]]" class="custom-background-b" no-hover=""></paper-chip>
      </template>
    </div>
`;
  }

  static get is() { return 'model-configuration'; }
  static get properties() {
    return {
      configSelected: {
        model: String,
        config: String,
      },
      data: {
        variable:String,
        observer: '_varChanged'
      },
      modelName: String,
      varSelected:String,
      verSelected: String,
      tempVar: String,
      configurationResults:Object
    };
  }

  /*goBack(){
    var _parent = document.querySelector("mint-explorer-app");
    var _pages = dom(_parent.root).querySelector("#pages");
    _pages.selected = "view-model";
  }*/

  _varChanged(data){
      var _parent = document.querySelector("mint-explorer-app");
      this.configSelected = _parent.configSelected;
      this.modelName = _parent.modelSelected.label;
      this.varSelected =_parent.variableSelected;
      this.verSelected = _parent.versionSelected;
      var x = [];
      console.log("Got this", this.configSelected, this.modelName, this.varSelected)
      x = this.varSelected.split("/");
      this.tempVar = x[x.length - 1];
      this.fetchConfiguration(this.varSelected);
  }

  _checkInpValue(stuff){
      console.log("Detected", stuff)
      return typeof stuff !== 'undefined';
    }

  _checkNegInpValue(stuff){
    console.log("Detected", stuff)
    return typeof stuff === 'undefined';
  }

  _checkConf(stuff){
    console.log("This", stuff)
    if(stuff.length === 0){
      return true
    }
    return false
  }

  processConfigurationResults(data) {
          var obj = JSON.parse(JSON.stringify(data));
          //this.unModifiedConfigurationResults=JSON.parse(JSON.stringify(data));
          for(var i = 0; i < obj.results.bindings.length; ++i) {
              for(var key in obj.results.bindings[i]) {

                  if(obj.results.bindings[i][key].value.includes(",")) {
                      var strs = obj.results.bindings[i][key].value.split(",");

                      var vars = [];

                      for(var j = 0; j<strs.length; ++j){
                          var parts = strs[j].split("/");
                          vars.push(parts[parts.length - 1]);
                      }
                      obj.results.bindings[i][key].value = vars;
                  }
                  else {
                      var str = obj.results.bindings[i][key].value;
                      var arr = str.split("/");
                      var vars = [];
                      vars.push(arr[arr.length - 1]);
                      //if(str.includes("#"))
                      //obj.results.bindings[i][key].value = vars;
                      //else
                      obj.results.bindings[i][key].value = vars;
                  }
              }
          }
          console.log("this is config");
          console.log(obj);
          this.configurationResults = obj;
      }

  ready() {
      super.ready();
      var _parent = document.querySelector("mint-explorer-app");
      this.configSelected = _parent.configSelected;
      if(_parent.configSelected){
        this.modelName = _parent.modelSelected.label;
        this.varSelected=_parent.variableSelected;
        this.verSelected = _parent.versionSelected;
        var x = [];
        x = this.varSelected.split("/");
        this.tempVar = x[x.length - 1];
        this.fetchConfiguration(this.varSelected);
      }
  }

  fetchConfiguration(e){
      var _self = this;
      var _parent = document.querySelector("mint-explorer-app");
      //var query = _parent.queries[8].query;
      var query = "http://ontosoft.isi.edu:8001/api/KnowledgeCaptureAndDiscovery/MINT-ModelCatalogQueries/getModelConfigurationMetadata"
      var endpoint = _parent.endpoint;
      $.ajax({
          url: query,
          type: "GET",
          data:{
              modelConfig: e.trim()
          },
          cache: false,
          timeout: 5000,
          async: false,
          complete: function() {
              // console.log("GET request sent");
          },

          success: function(data) {
              console.log("GET success");
              /*if(data.results.length === 0) {
                  Polymer.dom(_self.root).querySelector("#configuration").innerHTML = "<h3>Configuration</h3>No configurations available";
              }*/
              //else {
                  console.log("sjgf");
                  console.log(data);
                  _self.processConfigurationResults(data);
              //}
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
}

window.customElements.define(ModelConfiguration.is, ModelConfiguration);
