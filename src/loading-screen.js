import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/polymer-element.js';
import '@polymer/paper-spinner/paper-spinner.js';

class LoadingScreen extends PolymerElement {
  static get template() {
    return html`
      <style is="custom-style">
        .text {
          color: var(--loading-screen-color, "#999");
          font-weight: bold;
          padding-bottom:5px;
        }
        .screen{
          margin-top: 25%;
          position: absolute;
          left: 50%;
          margin-right: -50%;
          transform: translate(-50%, -50%)
        }
        .temp{
          padding-left:13px;
        }
    </style>

    <div class="screen" id="textscreen">
      <div class="text">Loading</div>
      <paper-spinner alt="[[alt]]" active="[[loading]]" class="temp"></paper-spinner-lite>
    </div>
    `;
  }

  static get properties() {
    return {
      loading: {
        type: Boolean,
        value: false,
        notify: true,
        observer: '_loadingChanged'
      },
      alt: {
        type: String,
        value: 'loading'
      }
    }
  }

 _loadingChanged(loading) {
    if (!loading) {
      this.style.display = "none";
    }
    else{
      this.style.display = "block";
    }
  }
}

window.customElements.define('loading-screen', LoadingScreen);
