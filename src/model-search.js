import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/app-layout/app-drawer/app-drawer.js'
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js'
import '@polymer/app-layout/app-header/app-header.js'
import '@polymer/app-layout/app-header-layout/app-header-layout.js'
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js'
import '@polymer/app-layout/app-toolbar/app-toolbar.js'
import '@polymer/app-route/app-location.js'
import '@polymer/app-route/app-route.js'
import '@polymer/iron-pages/iron-pages.js'
import '@polymer/iron-selector/iron-selector.js'
import '@polymer/paper-icon-button/paper-icon-button.js'
import '@polymer/iron-flex-layout/iron-flex-layout.js'
import '@vaadin/vaadin-button/vaadin-button.js'
import '@vaadin/vaadin-combo-box/vaadin-combo-box.js'
import '@vaadin/vaadin-checkbox/vaadin-checkbox.js'
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
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/paper-dialog-behavior/paper-dialog-behavior.js';
import './paper-chip.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/neon-animation/animations/scale-up-animation.js';
import '@polymer/neon-animation/animations/fade-out-animation.js';

import '@vaadin/vaadin-button/vaadin-button.js'
import '@vaadin/vaadin-grid/vaadin-grid.js';
import '@vaadin/vaadin-grid/vaadin-grid-column.js';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout.js';
import './my-icons.js';
import { dom } from '@polymer/polymer/lib/legacy/polymer.dom.js';


//import './loading-screen.js'import './view-model.js'
//import './model-configuration.js'
import './not-found.js'


import '@polymer/app-layout/app-layout.js'
import '@polymer/app-layout/app-header/app-header.js'
import '@polymer/app-layout/app-header-layout/app-header-layout.js'
import '@polymer/app-layout/app-toolbar/app-toolbar.js'
import '@polymer/iron-flex-layout/iron-flex-layout.js'
import './paper-chip.js'
import '@polymer/paper-input/paper-input.js'
import '@polymer/paper-button/paper-button.js'
import '@polymer/paper-icon-button/paper-icon-button.js'
import '@polymer/iron-icon/iron-icon.js'
import '@polymer/iron-icons/iron-icons.js'
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js'
import '@polymer/paper-listbox/paper-listbox.js'
import '@polymer/paper-item/paper-item.js'
import '@polymer/paper-toggle-button/paper-toggle-button.js'
import '@polymer/paper-card/paper-card.js'
class ModelSearch extends PolymerElement {
    static get template() {
        return html`
    <!DOCTYPE html>
    <html>
    <head>
    <style>
      html, body {
          margin: 0;
          -webkit-font-smoothing: antialiased;
          max-height: 500px;
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
          
        p {
        overflow: hidden;
        text-align: justify;
        text-justify: inter-word;
        }

        paper-button{
          background-color: #eee
        }

        paper-dialog.colored {
          border: 2px solid;
          border-color: #4caf50;
          background-color: #f1f8e9;
          color: #4caf50;
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

        #searchInput {
          width: 100%;
        }
        #searchIcon {
          width: 15%;
        }
        #clearIcon {
          width: 15%;
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

        #placeNoOfResults {
          position:absolute; 
          right:5%;
        }

        .bottom {
          bottom: 0px;
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

        #small-font{
          font-size:14px;
        }

        .grid {
          margin-left: 5px;
          margin-right: 5px;
          @apply --layout-horizontal;
          @apply --layout-wrap;
          @apply --layout-justified;
          -webkit-flex-basis: 85%;
          flex-basis: 85%;
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
          width: 85%;
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
          --paper-chip-background-color: #eee;
        }
        paper-chip{
          font-weight: bold;
        }

        .searchBar{
          float:right; 
          width: 88%;
        }

        .buttons{
          position: relative; 
          vertical-align: bottom; 
          float:center; 
          width: 10%;
        }

        .placeButtons{
          position: absolute; 
          left: 0; 
          bottom: 0;
        }

        .placeVersions{
          position: absolute; 
          top: 3%; 
          left: 4%;
        }

        .placeLogo{
          position: absolute; 
          top: 27%; 
          left: 3%;
        }

        .placeLabel{
          position: absolute;
          top:3%; 
          left: 40%; 
          font-size: 18px;
        }

        .placeDescription{
          position: absolute; 
          top:15%; 
          left:20%; 
          width: 60%; 
          text-overflow:ellipsis; 
          overflow: hidden; 
          text-align: justify; 
          text-justify: inter-word;
        }

        .placeMoreDetailsButton{
          position: absolute;
          bottom: 5%; 
          right: 3%;
        }

        .placeLink {
          position: absolute; 
          top: 4%; 
          right: 4%;
        }

        .placeGithubLogo{
          position: absolute; 
          top:3%; 
          right:7%;
        }

        .placeCategory{
          position: absolute; 
          bottom:10%; 
          left:3%;
        }

        .search-icon{
          cursor: pointer;
        }

        .clear-icon{
          cursor: pointer;
        }

        .oneLine{
          display:inline-block;
        }
        
    </style>
    </head>
    <body>
    <div class="container flex-center-justified">
      <div><h1>Model Search</h1></div>
    </div>
    <center> 
    <div class="container flex-center-justified">
    <center><p style="width: 85%;">This interface allows searching information about scientific and economic models, organized by categories. Try it out by specifying a model name in the search model name. For example: Type <b>Topoflow</b> in search bar to explore more information about the model.</p></center>
    </center>
    </div>
    <div class="container flex-center-justified">
      <div class="grid" id="search-bar">
      <div class="searchBar">
       <vaadin-combo-box label="Search Model Name" id="searchInput" items="[[data]]" on-iron-select="_fillData">
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
        <div class="buttons">
          <div class="placeButtons">
          <vaadin-button theme="contrast primary" class="search-icon" id="searchIcon" title="Search" on-click="searchHandler" slot="suffix" prefix="" icon="search"><iron-icon icon="icons:search" slot="prefix"></iron-icon>
          </vaadin-button>
          </div>
        </div>
      </div>
    </div>
    <div class="container flex-center-justified">
      <div class="grid" id="options">
        <div class="searchBar">
        <paper-dropdown-menu id="category" label="Filter Models by Category" on-iron-select="_itemSelected">
          <paper-listbox slot="dropdown-content" class="dropdown-content">
          <dom-repeat items="{{cts}}">
            <template>
              <paper-item>[[item.name]]</paper-item>
            </template>
          </dom-repeat>
          </paper-listbox>
        </paper-dropdown-menu>
        </div>
        <!--<vaadin-checkbox id="version" checked="">Retrieve latest version</vaadin-checkbox>-->
        <div class="buttons">
          <div class="placeButtons">
          <vaadin-button theme="error primary" class="clear-icon" id="clearIcon" title="Clear" on-click="clearHandler" slot="suffix" prefix="" icon="search"><iron-icon icon="icons:close" slot="prefix"></iron-icon>Clear
          </vaadin-button>
          </div>
        </div>
      </div>
    </div>
    <br>
    <div class="container flex-end-justified" id="placeNoOfResults">
      <div><b>Displaying [[numberofRes]]/[[totalRes]] results</b></div>
    </div>
    <br>
    <div class="grid flex-center-justified">
      <dom-repeat items="{{tempResults}}">
      <template>
        <div class="box">
         <div class="card-content" identity\$="{{index}}">
              <div class="placeVersions">
                <h4><strong>versions: {{item.version.len}}</strong></h4>
              </div>
              <div class="placeLogo">
              <img src="../images/no_logo.png" width="100 px" height="100px"/>                 
              </div>
              <div class="placeLabel">
              <strong><center>[[item.label]]</center></strong>
              </div>
              <div class="placeCategory" id="small-font">
              Category: [[_getAns(assoc, item.label)]]
              </div>
              <div class="placeDescription">
              <p>[[item.description]]</p>
              </div>
              <div class="placeMoreDetailsButton">
              <a href="[[routePath]]view-model"><vaadin-button class="clear-icon" theme="primary" label\$="{{item.label}}" model\$="{{item.model}}" desc$="{{item.description}}" on-click="goToModel" raised="">More Details</vaadin-button></a>
              </div>
              <div class="placeLink">
              <a href="[[item.link]]" target="_blank" title="View Documentation" hidden="[[item.avail]]" style="color: #000;"><iron-icon icon="book"></iron-icon></a>
              </div>
              <div class="placeGithubLogo">
              <!--<img src="../images/github.png" height="30px" width="35px"/>-->
              </div>

        </div>
    </div>
        </template>
      </dom-repeat>
      </div>
    </body>
    </html>
`;
    }

    static get is() { return 'model-search'; }
    static get properties() {
        return {
            queries: {
                  type: Array,
                value: [],
                observer: "queriesChange"
            },
            assoc: Array,
            searchParameter: String,
            models: Array,
            dummy: Array,
            queriedModels: Array,
            modelSelected: String,
            searchResults: Array,
            tempResults: Array,
            numberofRes: String,
            totalRes: String,
            results: Array,
            cts: Array,
            finResults: Array,
            allOpts: Array,
            login:Boolean
        };
    }

   
    queriesChange(newValue, oldValue) {
        //console.log(newValue);
        //console.log(oldValue);
    }
    _getAns(passoc,key){
      return passoc[key];
    }

    _getDesc(){
      $(document).ready(function(){
   $('#appendToThis').load("intro.html");
});
    }

    goToModel(e) {
        //console.log(e.target);
        var _label = e.target.getAttribute("label");
        //console.log("From", _label);
        var _model = e.target.getAttribute("model");
        var _desc=e.target.getAttribute("desc");
        var _parent = document.querySelector("mint-explorer-app");

        _parent.modelSelected = {
            model: _model,
            label: _label,
            desc:_desc
        };
        //console.log("Here", _parent.modelSelected);
        var _pages = dom(_parent.root).querySelector("#pages");
        //console.log(_pages);
        //console.log(_pages.selected);
        _pages.selected = "view-model";
        window.dispatchEvent(new CustomEvent('location-changed'));
        //this.set('route.path', '/view-model');
        //console.log(_pages.selected);

    }

    searchHandler(){
        var searchString = this.$.searchInput.value;
        //console.log("Done", searchString)
        if(searchString!="")  // This is called only if input is valid model
        {
        var filtered = [];
        //console.log(this.results)
        for(var i=0; i<this.results.length; ++i) {
            if(this.results[i].label === searchString){
                var obj = JSON.parse(JSON.stringify(this.results[i]));
                filtered.push(obj);
            }
        }
        this.tempResults = filtered;
        this.totalRes = this.tempResults.length.toString();
        this.numberofRes = this.tempResults.length.toString();
        //console.log(this.searchResults);
      }
      else{         //this is called when user deletes the input and all models of selected category are displayed
        this.displayLabel(this.getModelsByCategory(this.$.category.value));
      }
    }

    clearHandler(){   //this function is called when clear button is clicked. It resets the category to all and displays all the results and clears the input
      this.$.category.value='All';
      this.populateSearchResults();
      this.$.searchInput.value='';
    }

    displayLabel(tp){
        if(tp.length != 0){
            var temp = []
            for(var i=0; i < this.finResults.length; i++){
                for(var j=0; j < tp.length; j++){
                    if(tp[j] === this.finResults[i].model){
                        temp.push(this.finResults[i])
                        break
                    }
                }
            }
            //console.log("From Disp", this.finResults)
            this.results = temp;
            this.totalRes = temp.length.toString();
            this.searchResults = temp;
            var newArray = temp.slice();
            this.tempResults = newArray.splice(0, 10);
            this.numberofRes = this.tempResults.length.toString();
        }
    }  

    handle(data){
        var r = [];
        var finVersions = []
        //console.log(data);
        r = data.results.bindings;
        var temp = []
        for(var i = 0; i < r.length; i++){
            temp = r[i].prop.value.split("#");
            if(temp[1] === "hasVersionId"){
                finVersions.push(r[i].value.value)
            }
        }
    }


    populateSearchResults() {
        var arr={};
        var results = [];
        var cats = [];
        var versions = [];
        var _self = this;
        var categories = new Set();

        //console.log(_parent.queries)
        //var query = _parent.queries[3].query
        // console.log("hfkjdf")
        //console.log(query)
        $.ajax({
            url: "https://query.mint.isi.edu/api/mintproject/MINT-ModelCatalogQueries/getModels?endpoint=https%3A%2F%2Fendpoint.mint.isi.edu%2Fds%2Fquery",
            type: "GET",
            cache: false,
            timeout: 5000,
            async: false,
            complete: function() {
                //  console.log("GET request sent");
            },

            success: function(data) {
                var x = data.results.bindings

                //  console.log(x);
                var res = []
                for(var i = 0;i < x.length; i++){
                    var result = {};
                    versions = [];
                    result.model = x[i].model.value;
                    result.label = x[i].label.value;
                    result.description = x[i].desc.value;
                    result.category = x[i].categories.value;
                    //inter=result.label;
                    arr[result.label]=result.category;  //model-name mapped to categories
                    if ("assumptions" in x[i])
                        result.assumptions=x[i].assumptions.value;
                    if('doc' in x[i]){
                        result.link = x[i].doc.value;
                        result.avail = false
                    }
                    else{
                        result.avail = true
                    }
                    categories.add(x[i].categories.value);
                    if(x[i].versions.value.includes(",")){
                        versions = x[i].versions.value.split(", ")
                    }
                    else{
                        versions.push(x[i].versions.value.trim())
                    }
                    result.tVersion = versions
                    //res = _self.getVersion(versions);
                    //console.log("KK", res);
                    var h = {
                        data: versions,
                        len: versions.length
                    }
                    result.version = h
                    results.push(result)
                }
                // console.log("This", results);
                cats = Array.from(categories);
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

        var cts = [{'name': 'All'}]
        // console.log(cats)
        cats.sort();
        for(var i = 0; i < cats.length; i++){
            cts.push({
                "name": cats[i]
            })
        }
        this.cts = cts
        this.results = results;

        /* async function getVersion(versions) {
           // Get All the related Versions for the model
           // console.log("Temp", versions)
           var _self = this;
           var _parent = document.querySelector("mint-explorer-app");
           // Get Versions
           //var qs = _parent.queries[6].query
           var qs = "https://query.mint.isi.edu/api/mintproject/MINT-ModelCatalogQueries/getResourceMetadata?endpoint=https%3A%2F%2Fendpoint.mint.isi.edu%2Fds%2Fquery"
           var r = []
           var finVersions = []
           for (var i = 0; i < versions.length; i++) {
             $.ajax({
               url: qs,
               type: "GET",
               data: {
                 mv: versions[i]
               },
               cache: false,
               timeout: 5000,
               async: false,
               //success:_self.handle,
               success: function (data) {
                 r = data.results.bindings;
                 var temp = []
                 for (var i = 0; i < r.length; i++) {
                   temp = r[i].prop.value.split("#");
                   if (temp[1] === "hasVersionId") {
                     finVersions.push(r[i].value.value)
                   }
                 }
               },
               error: function (jqXHR, exception) {
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
           //
           //console.log("Final Versions", finVersions)
           return finVersions
         }
         console.log(this.results);
         let promises = [];
         for(var i = 0; i < this.results.length; i++){
           promises.push(getVersion(this.results.tVersion))
         }
         console.log(promises);
         Promise.all(promises).then((res) => {
           for(let j = 0; j < res.length; j++) {
             this.results[j].version = res;
             console.log(res)
           }
         })*/
         //var object=JSON.parse(map);
         this.assoc=arr;        //model name mapped to categories stored in associate array named 'assoc'
         //console.log(this.maps);
        this.totalRes = results.length.toString();
        this.searchResults = results;
        var newArray = results.slice();
        this.tempResults = newArray.splice(0, 10);
        this.numberofRes = this.tempResults.length.toString();
        // console.log("Got", this.results)
        //console.log("Complete", this.numberofRes)
    }

    getModelsByCategory(category){
        var _parent = document.querySelector("mint-explorer-app");

        //var qt = _parent.queries[4].query;
        var qt = "https://query.mint.isi.edu/api/mintproject/MINT-ModelCatalogQueries/getModelsForCategory?endpoint=https%3A%2F%2Fendpoint.mint.isi.edu%2Fds%2Fquery";
        var query = qt + "&cat=" + category
        var catsByModel = []
        // console.log("Done", query)
        $.ajax({
            url: query,
            type: "GET",
            cache: false,
            timeout: 5000,
            async: false,
            complete: function() {
                // console.log("GET request sent");
            },

            success: function(data) {
                var x = []
                x = data.results.bindings
                for(var i=0; i< x.length; i++){
                    catsByModel.push(x[i].model.value)
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
        // console.log("BOB" + catsByModel)
        return catsByModel;
    }

    _fillData(e) {
        // console.log("ok")
    }

    _itemSelected(e) {
        this.$.searchInput.value='';
        var _self = this;
        var selectedItem = e.target.selectedItem;
        var category = selectedItem.innerText
        var tp = [];
        if(category != 'All'){
            tp = _self.getModelsByCategory(category);
            _self.displayLabel(tp);
        }
        else{
            // console.log("Empty String")
            _self.populateSearchResults();
            this.finResults = this.results
        }
    }

    ready() {
        super.ready();
        var _self = this;
        _self.populateSearchResults();
        var _parent = document.querySelector("mint-explorer-app");
        console.log(_parent.login);
        console.log(_parent.token);
        this.login=_parent.login;
        this.finResults = this.results;
        var states = [];
        var opts = [];
        //console.log("Hellop");
        //console.log(this.results);
        //console.log(this.cts)
        for(var i = 0; i < this.results.length; ++i) {
            states.push({
                "text": this.results[i].label+" "+this.results[i].description,
                "value": this.results[i].label
            });
            opts.push(this.results[i].label)
        }
        this.allOpts = opts

        var comboBox = this.$.searchInput;
        comboBox.items = this.allOpts;

        comboBox.addEventListener('selected-item-changed', function(event){
            var input = event.target.value;
            // console.log(input)
            _self.searchHandler()
        });
    }
}

window.customElements.define(ModelSearch.is, ModelSearch);

