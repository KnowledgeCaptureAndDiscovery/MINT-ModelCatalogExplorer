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
import 'vaadin-grid/vaadin-grid.js';
import 'vaadin-grid/vaadin-grid-column.js';
import 'vaadin-ordered-layout/vaadin-horizontal-layout.js';
import '/node_modules/@polymer/iron-flex-layout/iron-flex-layout.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { dom } from '@polymer/polymer/lib/legacy/polymer.dom.js';

class VariableConfiguration extends PolymerElement {
  static get template() {
    return html`
    <style include="shared-styles">
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
          --paper-chip-background-color: #dc3545;
          --paper-chip-label-color: #fff;
        }
        paper-chip.custom-background-l {
            --paper-chip-background-color: #ffc107;
            --paper-chip-label-color: #fff;
        }
    </style>
    <br>
    <div>
      <a href="[[routePath]]view-model"><vaadin-button theme="error primary" on-click="goBack" raised="">&lt;&lt; Back</vaadin-button></a>
    </div>
    <div class="flex-center-justified">
      <h1>[[tempVar]]</h1>
    </div>
    <div class="flex-center-justified">
      <paper-chip label="Label: [[varSelected]]" class="custom-background-l" no-hover=""></paper-chip>
    </div>
    <br>
    <div class="container flex-center-justified">
      <template is="dom-if" if="[[_checkBNegVal(variableAndUnits.results.bindings)]]">
        <vaadin-grid items="[[variableAndUnits.results.bindings]]">
          <vaadin-grid-column width="50px" flex-grow="0">
            <template class="header">#</template>
            <template>[[index]]</template>
          </vaadin-grid-column>
          <vaadin-grid-column flex-grow="2" text-align="center">
            <template class="header"><strong>Variable Presentation</strong></template>
            <template>[[item.vp.value]]</template>
          </vaadin-grid-column>
          <vaadin-grid-column width="9em" flex-grow="2" text-align="center">
            <template class="header"><strong>Unit</strong></template>
            <template>[[item.unit.value]]</template>
          </vaadin-grid-column>
        </vaadin-grid>
      </template>
      <template is="dom-if" if="[[_checkBVal(variableAndUnits.results.bindings)]]">
        <paper-chip label="Currently there is no data for [[tempVar]]" class="custom-background" no-hover=""></paper-chip>
      </template> 
    </div>
`;
  }

  static get is() { return 'variable-configuration'; }
  static get properties() {
    return {
      configSelected: {
        model: String,
        config: String
      },
      data: {
        variable:String,
        observer: '_variableChanged'
      },
      tempVar: String,
      varSelected:String,
      variableAndUnits:Object
    };
  }

  _variableChanged(data){
      var _parent = document.querySelector("mint-explorer-app");
      this.configSelected = _parent.configSelected;
      this.varSelected = _parent.variableSelected.trim();
      var x = []
      x = this.varSelected.split("#")
      this.tempVar = x[1]
      this.fetchConfiguration(this.varSelected);
  }

  _checkBVal(stuff){
    console.log("Found", stuff)
    if(stuff.length === 0){
      return true
    }
    return false
  }

  _checkBNegVal(stuff){
    console.log("Found", stuff)
    if(stuff.length === 0){
      return false
    }
    return true
  }

  goBack(){
      var _parent = document.querySelector("mint-explorer-app");
      var _pages = dom(_parent.root).querySelector("#pages");
      _pages.selected = "view-model";
    }

  ready() {
      super.ready();
      var _parent = document.querySelector("mint-explorer-app");
      this.configSelected = _parent.configSelected;
      this.varSelected=_parent.variableSelected.trim();
      var x = []
      x = this.varSelected.split("#")
      this.tempVar = x[1]
      this.fetchConfiguration(this.varSelected);
  }

  process(data){
      var obj = JSON.parse(JSON.stringify(data));
      this.variableAndUnits=obj;
  }

  fetchConfiguration(e){
      var _self = this;
      var _parent = document.querySelector("mint-explorer-app");
      var query = _parent.queries[7].query;
      var endpoint = _parent.endpoint;
      $.ajax({
          url: query,
          type: "GET",
          data:{
              io: e
          },
          cache: false,
          timeout: 5000,
          async: false,
          complete: function() {
              // console.log("GET request sent");
          },

          success: function(data) {
               console.log("GET success");
               console.log(data)
              /*if(data.results.bindings.length === 0) {
                  Polymer.dom(_self.root).querySelector("#configuration").innerHTML = "<h3>Configuration</h3>No configurations available";
              }*/
              //else {
                  console.log(data);
                 _self.process(data);
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

window.customElements.define(VariableConfiguration.is, VariableConfiguration);
