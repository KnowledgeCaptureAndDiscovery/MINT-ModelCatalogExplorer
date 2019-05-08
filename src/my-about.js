import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js'
import '@polymer/iron-flex-layout/iron-flex-layout.js'
import '@polymer/paper-tooltip/paper-tooltip.js';
import './my-icons.js'
import './shared-styles.js'
import './paper-chip.js';


class MyAbout extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        .box {
          @apply --layout-vertical;

          background-color: #eee;
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
      .flex-center-justified {
          @apply --layout-horizontal;
          @apply --layout-center-justified;
        }
        .thumbnail{
          padding:.25rem;
          background-color:#fff;
          border:1px solid #dee2e6;
          border-radius:.25rem;
          width:50%;
          height:auto
        }

        paper-chip.custom-background {
          --paper-chip-background-color: #dc3545;
          --paper-chip-label-color: #fff;
        }
        paper-chip.custom-background-m {
          --paper-chip-background-color: #007bff;
          --paper-chip-label-color: #fff;
        }

        paper-tooltip {
          text-align: left;
          font-size: 30px;
        }

        paper-tooltip.giant {
        --paper-tooltip: {
          font-size: 14px;
          width: 40%;
        }
      }
    </style>

    <center><h1>What is MINT?<paper-chip label="v 0.0.2" class="custom-background-m" id="btn"></paper-chip><paper-tooltip class="giant" for="btn">This release consists of the following features:<br><ul><li>Adding Causal Diagrams using D3.js with zoom, drag and node highlighting.</li><br><li>View Model Page now has more detailed information regarding input output files.</li><br><li>UI Improvements to View Model Page.</li></ul></paper-tooltip></h1></center>
    <center>
      Major societal and environmental challenges require forecasting how natural processes and human activities affect one another. There are many areas of the globe where climate affects water resources and therefore food availability, with major economic and social implications. Today, such analyses require significant effort to integrate highly heterogeneous models from separate disciplines, including geosciences, agriculture, economics, and social sciences. Model integration requires resolving semantic, spatio-temporal, and execution mismatches, which are largely done by hand today and may take more than two years. The Model INTegration (MINT) project will develop a modeling environment which will significantly reduce the time needed to develop new integrated models, while ensuring their utility and accuracy.
    </center>
    <center><h1>Project Contributors</h1></center>
    <div class="grid">
      <div class="box">
        <div class="card-content">
          <div class="title"><img src="./images/shreyas.jpg" class="thumbnail"></div>
          <strong>Shreyas Kolpe</strong>
        </div>
      </div>
      <div class="box">
        <div class="card-content">
          <div class="title"><img src="./images/Rohit.jpg" class="thumbnail"></div>
          <strong>Rohit Maurya</strong>
        </div>
      </div>
      <div class="box">
        <div class="card-content">
          <div class="title"><img src="./images/Dhruv.jpg" class="thumbnail"></div>
          <strong>Dhruv Patel</strong>
        </div>
      </div>
      <div class="box">
        <div class="card-content">
          <div class="title"><img src="./images/Daniel.jpg" class="thumbnail"></div>
          <strong>Daniel Garijo</strong>
        </div>
      </div>
      <div class="box">
        <div class="card-content">
          <div class="title"><img src="./images/Deborah.jpg" class="thumbnail"></div>
          <strong>Deborah Khider</strong>
        </div>
      </div>
      <div class="box">
        <div class="card-content">
          <div class="title"><img src="./images/yolanda.png" class="thumbnail"></div>
          <strong>Yolanda Gil</strong>
        </div>
      </div>
    </div>
    <footer>
      <hr>
      <center><p>Copyright &copy; {{year}} Model Catalog Explorer <a href="https://github.com/mintproject/MINT-ModelCatalogExplorer/" target="_blank" title="View on GitHub" style="position: relative; top: 10px;"><img src= "./images/github.png" width="40"></a></p></center>
    </footer>
    `;
  }
  static get properties() {
    return {
     year: String
    };
  }
  ready() {
    super.ready();
    var currentTime = new Date()
    var year = currentTime.getFullYear()
    this.year = year
  }
}
window.customElements.define('my-about', MyAbout);