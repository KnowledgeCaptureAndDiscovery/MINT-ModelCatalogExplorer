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

        paper-dialog.colored {
          border: 2px solid;
          border-color: #4caf50;
          background-color: #f1f8e9;
          color: #4caf50;
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

        .link {
          stroke: #aaa;
          }

          .node text {
          stroke:#333;
          cursos:pointer;
          }

          .node circle{
          stroke:#fff;
          stroke-width:3px;
          fill:#555;
        }
        
        .pointer{
          cursor: pointer;
        }

        #graph {
          margin-left: 30px;
          margin-right: 30px;
          max-width: 1200px;
          max-height 700px;
          border: 2px solid black; 
          overflow-y: hidden;
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
      <template is="dom-repeat" items="{{configurationResults.results.bindings}}" id="r">
        <template is="dom-if" if="[[_checkVal(item.version.value)]]" id="k">
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
                  <!--<template is="dom-repeat" items="{{item.config.value}}" as="stuff">-->
                    <!--<a href="[[routePath]]model-configuration"><vaadin-button class="pointer" variable\$="{{stuff}}" on-click="openConfigForUri" raised="">[[item.label]]</vaadin-button></a>-->
                 <a href="[[item.config.value]]" target="_blank" rel="noopener noreferrer"><vaadin-button class="pointer">[[item.label]]</vaadin-button></a>
                 <a href="[[item.compLoc.value]]"  title="Download" style="color: #000;"><iron-icon icon="get-app"></iron-icon></a>
                  <!--</template>-->
                </div>
                
                <div>
                  <template is="dom-if" if="[[_checkValue(item.configDesc.value)]]">
                  <h4>Description:</h4>
                  {{item.configDesc.value}}
                  </template>
                  <template is="dom-if" if="[[_checkNegValue(item.configDesc.value)]]">
                    <!--<h4>Description:</h4>
                    <paper-chip label="Not Found" class="custom-background" no-hover=""></paper-chip>-->
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
                    <!--<h4>Input Files:</h4>
                    <paper-chip label="Not Found" class="custom-background" no-hover=""></paper-chip>-->
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
                    <!--<h4>Output Files:</h4>
                    <paper-chip label="Not Found" class="custom-background" no-hover=""></paper-chip>-->
                  </template>
                </div>
                <div>
                  <template is="dom-if" if="[[_checkArray(item.cags.value)]]">
                    <h4>CAGs:</h4>
                    <template is="dom-repeat" items="{{item.cags.value}}" as="stuff" id="t">
                      <vaadin-button class="pointer" on-click="openDialog" variable\$="{{stuff}}" raised="">[[stuff]]</vaadin-button>
                    </template>
                  </template>
                  <template is="dom-if" if="[[_checkNegArray(item.cags.value)]]">
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
    <paper-dialog id="dialog" class="colored" entry-animation="scale-up-animation" exit-animation="fade-out-animation">
      <h2>Causal Analysis Graph</h2>
      <p><ul style='color: #000'>
      <li>Click and hold on the nodes to visualize the influences of a specific process node</li>
      <li>Hover on the nodes to highlight the influences of a specific process node</li></ul></p>
      <div id="graph"></div>
      <div class="buttons">
        <paper-button dialog-dismiss>Cancel</paper-button>
      </div>
    </paper-dialog>
    
    </div>
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
      unModifiedConfigurationResults:Object,
      cags: Array
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

  uriSplit(x){
    var j = x.split("/")
    return j[j.length - 1]
  }

  openDialog(e){
    console.log("Ok")
    var cag = e.target.getAttribute("variable");
    var cagURI;
    for(var i = 0; i < this.cags.length; i++){
      if(this.cags[i].includes(cag)){
          cagURI = this.cags[i]
      }
    }

    var qs = "http://ontosoft.isi.edu:8001/api/mintproject/MINT-ModelCatalogQueries/getProcessForCAG?endpoint=http%3A%2F%2Fontosoft.isi.edu%3A3030%2Fds%2Fquery"
    var cagData;
    $.ajax({
        url: qs,
        type: "GET",
        data:{
            cag: cagURI
        },
        cache: false,
        timeout: 5000,
        async: false,
        success: function(data) {
            console.log(data)
            cagData = data
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

    var processes = []
    var influences = []
    var obj = {}
    var cagh = cagData.results.bindings
    for(var i=0; i<cagh.length; i++){
        processes.push(this.uriSplit(cagh[i].e.value))
        obj[this.uriSplit(cagh[i].e.value)] = []
        var inf = cagh[i].process_influences.value
        if(inf.includes(",")){
          var jmp = inf.split(", ")
          for(var j=0; j<jmp.length; j++){
            influences.push(this.uriSplit(jmp[j]))
            obj[this.uriSplit(cagh[i].e.value)].push(this.uriSplit(jmp[j]))
          }
        }
        else{
          influences.push(this.uriSplit(inf))
          obj[this.uriSplit(cagh[i].e.value)].push(this.uriSplit(inf))
        }

    }
    console.log(processes)
    console.log(influences)
    console.log(obj)

    var ks = processes.concat(influences)

    var uInf = Array.from(new Set(ks));
    console.log(uInf)

    var data = {}
    data["nodes"] = []
    data["links"] = []

    for(var i=0; i< uInf.length; i++){
      data["nodes"].push({"name": uInf[i], "id": i})
    }

    var objMap = {}
    for(var i=0;i < data.nodes.length; i++){
        objMap[data.nodes[i].name] = data.nodes[i].id
    }
    console.log(objMap)

    for(var key in obj){
      for (var i=0; i < obj[key].length; i++){
         data["links"].push({"source": objMap[key], "target": objMap[obj[key][i]], "weight": 1})
      }

    }

    console.log(data)

    /*var width = 700,height = 700
    d3.select(this.$.graph).select("svg").remove();
    var svg = d3.select(this.$.graph).append("svg")
                .attr("width", width)
                .attr("height", height);

    var force = d3.layout.force()
        //.gravity(.05)
        .distance(300)
        //.charge(-100)
        .size([width, height]);

      force
          .nodes(data.nodes)
          .links(data.links)
          .start();

      var link = svg.selectAll(".link")
          .data(data.links)
        .enter().append("line")
          .attr("class", "link")
        .style("stroke-width", function(d) { return Math.sqrt(d.weight); });

      var node = svg.selectAll(".node")
          .data(data.nodes)
        .enter().append("g")
          .attr("class", "node")
          .call(force.drag);

      node.append("circle")
          .attr("r","10");

      node.append("text")
          .attr("dx", 12)
          .attr("dy", ".35em")
          .text(function(d) { return d.name });

      force.on("tick", function() {
        link.attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });

        node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
      });*/


    //var colors = d3.scaleOrdinal(d3.schemeCategory10);

    var w = 1200, h = 700;
    var size = d3.scale.pow().exponent(1)
  .domain([1,100])
  .range([8,24]);
    var focus_node = null, highlight_node = null;
    var highlight_color = "blue";
    var highlight_trans = 0.1;
    var text_center = false;
    var outline = false;
    var default_node_color = "rgb(204, 204, 204)";
    var default_link_color = "#888";
    var nominal_base_node_size = 20;
    var nominal_text_size = 10;
    var max_text_size = 24;
    var nominal_stroke = 1.5;
    var max_stroke = 4.5;
    var max_base_node_size = 36;
    var min_zoom = 0.1;
    var max_zoom = 7;
    var zoom = d3.behavior.zoom().scaleExtent([min_zoom,max_zoom])
    d3.select(this.$.graph).select("svg").remove();
    var svg = d3.select(this.$.graph).append("svg")
                .attr("width", w)
                .attr("height", h),
                node,
                link,
                text,
                edgepaths;

    var g = svg.append("g");

    svg.append('defs').append('marker')
        .attrs({'id':'arrowhead',
            'viewBox':'0 -5 10 10',
            'refX': 20,
            'refY': 0,
            'orient':'auto',
            'markerWidth': 20,
            'markerHeight': 20,
            'xoverflow':'visible'})
        .append('svg:path')
        .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
        .attr('fill', '#999')
        .style('stroke','none');

    var simulation = d3.layout.force()
        .linkDistance(400)
        .charge(-300)
        .size([w,h]);

    update(data.links, data.nodes);

    function update(links, nodes) {
      var linkedByIndex = {};
      links.forEach(function(d) {
          linkedByIndex[d.source + "," + d.target] = true;
      });

      function isConnected(a, b) {
          return linkedByIndex[a.index + "," + b.index] || linkedByIndex[b.index + "," + a.index] || a.index == b.index;
      }

      function hasConnections(a) {
          for (var property in linkedByIndex) {
              s = property.split(",");
              if ((s[0] == a.index || s[1] == a.index) && linkedByIndex[property]) return true;
          }
          return false;
      }

      simulation
        .nodes(nodes)
        .links(links)
        .start();


      link = g.selectAll(".link")
          .data(links)
          .enter()
          .append("line")
          .attr("class", "link")
          .attr('marker-end','url(#arrowhead)')

      edgepaths = g.selectAll(".edgepath")
          .data(links)
          .enter()
          .append('path')
          .attrs({
              'class': 'edgepath',
              'fill-opacity': 0,
              'stroke-opacity': 0,
              'id': function (d, i) {return 'edgepath' + i}
          })
          .style("pointer-events", "none");

      node = g.selectAll(".node")
          .data(nodes)
          .enter()
          .append("g")
          .attr("class", "node")
          .call(simulation.drag)

      node.on("dblclick.zoom", function(d) { d3.event.stopPropagation();
        var dcx = (w/2-d.x*zoom.scale());
        var dcy = (h/2-d.y*zoom.scale());
        zoom.translate([dcx,dcy]);
         g.attr("transform", "translate("+ dcx + "," + dcy  + ")scale(" + zoom.scale() + ")");


        });

      var tocolor = "fill";
      var towhite = "stroke";
      if (outline) {
          tocolor = "stroke"
          towhite = "fill"
      }

      var circle = node.append("path")
        .attr("d", d3.svg.symbol()
          .size(function(d) { return Math.PI*Math.pow(size(d.size)||nominal_base_node_size,2); })
          .type(function(d) { return d.type; }))
        .style(tocolor, default_node_color)
        .style("stroke-width", nominal_stroke)
        .style(towhite, "white");

      text = g.selectAll(".text")
        .data(nodes)
        .enter().append("text")
        .attr("dy", ".35em")
        .style("font-size", nominal_text_size + "px")

      if (text_center)
        text.text(function(d) {
            return d.name;
        })
        .style("text-anchor", "middle");
      else
        text.attr("dx", function(d) {
            return (size(d.size) || nominal_base_node_size);
        })
        .text(function(d) {
            return '\u2002' + d.name;
        });

      node.on("mouseover", function(d) {
          set_highlight(d);
      })
      .on("mousedown", function(d) {
          d3.event.stopPropagation();
          focus_node = d;
          set_focus(d)
          if (highlight_node === null) set_highlight(d)

      }).on("mouseout", function(d) {
          exit_highlight();

      });

      d3.select(window).on("mouseup",
          function() {
              if (focus_node !== null) {
                  focus_node = null;
                  if (highlight_trans < 1) {

                      circle.style("opacity", 1);
                      text.style("opacity", 1);
                      link.style("opacity", 1);
                  }
              }

              if (highlight_node === null) exit_highlight();
          });

      function exit_highlight() {
          highlight_node = null;
          if (focus_node === null) {
            svg.style("cursor", "move");
            if (highlight_color != "white") {
              circle.style(towhite, "white");
              text.style("font-weight", "normal");
              text.style("font-size", nominal_text_size + 'px');
              link.style("stroke", function(o) {
                return default_link_color
              });
            }
          }
      }

      function set_focus(d) {
        if (highlight_trans < 1) {
          circle.style("opacity", function(o) {
            return isConnected(d, o) ? 1 : highlight_trans;
          });

          text.style("opacity", function(o) {
            return isConnected(d, o) ? 1 : highlight_trans;
          });

          link.style("opacity", function(o) {
            return o.source.index == d.index || o.target.index == d.index ? 1 : highlight_trans;
          });
        }
      }


      function set_highlight(d) {
        svg.style("cursor", "pointer");
        if (focus_node !== null) d = focus_node;
        highlight_node = d;
        var x = 1.3 * nominal_text_size + "px"
        var y = nominal_text_size + "px"
        if (highlight_color != "white") {
          circle.style(towhite, function(o) {
            return isConnected(d, o) ? highlight_color : "white";
          });
          text.style("font-weight", function(o) {
            return isConnected(d, o) ? "bold" : "normal";
          });
          text.style("font-size", function(o) {
            return isConnected(d, o) ? x : y
          });
          link.style("stroke", function(o) {
            return o.source.index == d.index || o.target.index == d.index ? highlight_color : ((isNumber(o.score) && o.score >= 0) ? color(o.score) : default_link_color);
          });
        }
      }

      simulation
        .on("tick", ticked);

    }

    function ticked() {
      link
        .attr("x1", function (d) {return d.source.x;})
        .attr("y1", function (d) {return d.source.y;})
        .attr("x2", function (d) {return d.target.x;})
        .attr("y2", function (d) {return d.target.y;});

      node
        .attr("transform", function (d) {return "translate(" + d.x + ", " + d.y + ")";});

      text.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

      edgepaths.attr('d', function (d) {
        return 'M ' + d.source.x + ' ' + d.source.y + ' L ' + d.target.x + ' ' + d.target.y;
      });
    }

    function resize() {
      var width = window.innerWidth,
          height = window.innerHeight;
      svg.attr("width", width).attr("height", height);

      simulation.size([simulation.size()[0] + (width - w) / zoom.scale(), simulation.size()[1] + (height - h) / zoom.scale()]).resume();
      w = width;
      h = height;
    }

    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart()
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    function isNumber(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }

    this.$.dialog.open()
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
            console.log("Completed", this.unModifiedConfigurationResults)
          }


          else{
              if (key==='compLoc' || key==='config') {

              }
            else if(obj.results.bindings[i][key].value.includes(",")) {
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
    var conf = []
    for(var i=0; i < this.unModifiedConfigurationResults.results.bindings.length; i++){
      conf.push(this.unModifiedConfigurationResults.results.bindings[i].config.value)
    }

    console.log("this is config");
    console.log(obj);
    this.configurationResults = obj;
    _self.fetchMetaDataConfiguration(conf)
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


  fetchMetaDataConfiguration(e){
    var kmp = []
    for(var j =0; j < e.length; j++){
      var _self = this;
      var _parent = document.querySelector("mint-explorer-app");
      //var query = _parent.queries[8].query;
      var query = "http://ontosoft.isi.edu:8001/api/mintproject/MINT-ModelCatalogQueries/getModelConfigurationMetadata";
      var endpoint = _parent.endpoint;
      var arr = []
      $.ajax({
          url: query,
          type: "GET",
          data:{
              modelConfig: e[j].trim()
          },
          cache: false,
          timeout: 5000,
          async: false,
          complete: function() {
              // console.log("GET request sent");
          },

          success: function(data) {
              //console.log("GET success");
              /*if(data.results.length === 0) {
                  Polymer.dom(_self.root).querySelector("#configuration").innerHTML = "<h3>Configuration</h3>No configurations available";
              }*/
              //else {
                 // console.log("sjgf");
             // alert('hi');
                  console.log(data);
                  for(var i=0; i < data.results.bindings.length; i++){
                    if(data.results.bindings[i].cag){
                      arr.push(data.results.bindings[i].cag.value);
                      kmp.push(data.results.bindings[i].cag.value);
                    }
                    if(data.results.bindings[i].label){
                        _self.configurationResults.results.bindings[j].label = data.results.bindings[i].label.value;
                       // alert(data.results.bindings[i].compLoc)
                    }

                  }

                 // console.log(arr)
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
      var ans = [];
      for(var i = 0; i<arr.length; i++){
        var x = arr[i].split("/");
        ans.push(x[x.length-1])
      }
      var pc = {type: "uri", value: ans}
      this.configurationResults.results.bindings[j].cags = pc

    }
     this.cags = kmp
      console.log(this.configurationResults.results);
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
