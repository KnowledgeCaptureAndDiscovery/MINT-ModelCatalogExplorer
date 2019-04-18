import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@vaadin/vaadin-grid/vaadin-grid.js';
import '@vaadin/vaadin-grid/vaadin-grid-sorter.js';
import '@vaadin/vaadin-grid/vaadin-grid-column.js';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { dom } from '@polymer/polymer/lib/legacy/polymer.dom.js';


class VariablePresentation extends PolymerElement {
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


      paper-chip.custom-background {
        --paper-chip-background-color: #dc3545;
        --paper-chip-label-color: #fff;
      }
      paper-chip.custom-background-m {
        --paper-chip-background-color: #28a745;
        --paper-chip-label-color: #fff;
      }

      .grid {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 20px;
        margin-right: 20px;
        @apply --layout-vertical;
        @apply --layout-center-justified;
        -webkit-flex-basis: 50%;
        flex-basis: 50%;
        max-width: 100%;
      }

      vaadin-grid {
        cursor: pointer;
      }
      vaadin-grid-column {
        cursor: pointer;
      }
      vaadin-grid-cell-content {
        cursor: pointer;
      }
    </style>
    <br>
    <div>
    <!--<a href="[[routePath]]view-model"><vaadin-button theme="error primary" on-click="goBack" raised="">&lt;&lt; Back</vaadin-button></a>-->
    </div>
    <div class="container flex-center-justified">
      <h1>[[tempVar]]</h1>
      
    </div>
    <!--<div class="flex-center-justified">-->
    <!--[[description]]-->
<!--</div>-->
    <div class="container flex-center-justified">
       <a href="[[varSelected]]" target="_blank" rel="noopener noreferrer"><paper-chip label="URI: [[varSelected]]" class="custom-background-l" no-hover=""></paper-chip></a>
    </div>
    <br>
    <div class="container flex-center-justified">
      <template is="dom-if" if="[[_checkBNegVal(variableAndUnits.results.bindings)]]">
        <vaadin-grid items="[[variableAndUnits.results.bindings]]" theme="column-borders wrap-cell-content">
          <vaadin-grid-column text-align="center" resizable="">
            <template class="header"><strong>Label</strong></template>
            <template>[[item.label.value]]</template>
          </vaadin-grid-column>
          <vaadin-grid-column text-align="center" resizable="">
            <template class="header"><strong>Long Name</strong></template>
            <template>[[item.longName.value]]</template>
          </vaadin-grid-column>
          <vaadin-grid-column text-align="center" resizable="">
            <template class="header"><strong>Description</strong></template>
            <template>[[item.description.value]]</template>
          </vaadin-grid-column>
          <vaadin-grid-column text-align="center" resizable="">
            <template class="header"><strong>Standard Name</strong></template>
            <template>[[item.sn.value]]</template>
          </vaadin-grid-column>
          <vaadin-grid-column width="9em" flex-grow="2" text-align="center" resizable="">
            <template class="header"><strong>Unit</strong></template>
            <template>[[item.unit.value]]</template>
          </vaadin-grid-column>
        </vaadin-grid>
      </template>

      <template is="dom-if" if="[[_checkBVal(variableAndUnits.results.bindings)]]">
        <paper-chip label="Currently there is no data for [[tempVar]]" class="custom-background" no-hover=""></paper-chip>
      </template>
    </div>



    <!--<div class="grid">
        <template is="dom-if" if="[[_checkBNegVal(variableAndUnits.results.bindings)]]">
        <template is="dom-repeat" items={{variableAndUnits.results.bindings}}>
          <div class="box">
            <div class="card-content">
              <div class="title">
                <h4>Label:&nbsp;{{item.label.value}}</h4>
              </div>
              <div class="body">
              <div>
                <h4>Short Name:{{item.shortName.value}}</h4>
              </div>
              <div>
                <h4>Long Name:</h4> {{item.longName.value}}
              </div>
              <div>
                <h4>Description:</h4>{{item.description.value}}
              </div>
              <div>
                <h4>Standard Name:</h4>{{item.sn.value}}
              </div>
              <div>
                <h4>Variable Presentation:</h4>{{item.vp.value}}
              </div>
              <div>
                <h4>Unit:</h4>{{item.unit.value}}
              </div>
            </div>
            </div>
          </div>
        </template>
        </template>
        <template is="dom-if" if="[[_checkBVal(variableAndUnits.results.bindings)]]">
        <paper-chip label="Currently there is no data for [[tempVar]]" class="custom-background" no-hover></paper-chip>
        </template>
    </div>-->
`;
  }

  static get is() { return 'variable-presentation'; }
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
      variableAndUnits:Object,
        description:String
    };
  }

  _variableChanged(data){
      var _parent = document.querySelector("mint-explorer-app");
      this.configSelected = _parent.configSelected;
      this.varSelected = _parent.variableSelected.variable.trim();
      var x = []
      x = this.varSelected.split("/");
     // this.tempVar = x[x.length - 1]
      this.tempVar=_parent.variableSelected.label;
      this.description=_parent.modelDescriptions;
      this.fetchConfiguration(this.varSelected);
      this.description=_parent.modelDescriptions;
      //console.log("yaha aaya####");
  }

  _checkBVal(stuff){
    //console.log("Found", stuff)
    if(stuff.length === 0){
      return true
    }
    return false
  }

  _checkBNegVal(stuff){
    //console.log("Found", stuff)
    if(stuff.length === 0){
      return false
    }
    return true
  }

  /*goBack(){
      var _parent = document.querySelector("mint-explorer-app");
      var _pages = dom(_parent.root).querySelector("#pages");
      _pages.selected = "view-model";
    }*/

  ready() {
      super.ready();
      var _parent = document.querySelector("mint-explorer-app");
      this.configSelected = _parent.configSelected;
        //console.log("yaha aaya");
      if(_parent.configSelected){
          //console.log(_parent.variableSelected);
        this.varSelected=_parent.variableSelected.variable.trim();
        var x = []
        x = this.varSelected.split("/");
       // this.tempVar = x[x.length - 1];
          this.tempVar=_parent.variableSelected.label;
        this.fetchConfiguration(this.varSelected);

      }
      this.description=_parent.modelDescriptions;

  }

  process(data){
      var obj = JSON.parse(JSON.stringify(data));
      this.variableAndUnits=obj;
      var _parent = document.querySelector("mint-explorer-app")
      _parent.varAndUnits = obj;
      this.description=_parent.modelDescriptions;
  }

  fetchConfiguration(e){
      var _self = this;
      var _parent = document.querySelector("mint-explorer-app");
      //var query = _parent.queries[7].query;
      var query = "https://query.mint.isi.edu/api/mintproject/MINT-ModelCatalogQueries/getI_OVariablesAndUnits";
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
              // //console.log("GET request sent");
          },

          success: function(data) {
               //console.log("GET success");
               //console.log(data)
              /*if(data.results.bindings.length === 0) {
                  Polymer.dom(_self.root).querySelector("#configuration").innerHTML = "<h3>Configuration</h3>No configurations available";
              }*/
              //else {
                 // console.log(data);
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

window.customElements.define(VariablePresentation.is, VariablePresentation);



