import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/polymer-element.js';
import '@polymer/paper-spinner/paper-spinner.js';

class RegexHighlighter extends PolymerElement {
  static get template() {
    return html`
       <style>
        p {
          font-size: 0;
        }
        
        p > * {
          font-size: 14px;
        }
      
        [matches] {
          font-weight: bold;
          color: var(--default-primary-color);
        }
      </style>
      <p>
        <template is="dom-repeat" items="[[_items]]">
          <span matches$="[[_matches(regex, item)]]">[[item]]</span>
        </template>
      </p>
    `;
  }

  static get properties() {
    return {
      regex: String,
      string: String,
      caseSensitive: {
        type: Boolean,
        value: function() {
          return false;
        }
      },
      _items: {
        type: Array,
        observer: '_regexChanged(regex, string)'
      }
    };
  }


 _matches(regex, item) {
    try {
      return new RegExp(regex, this.caseSensitive ? '' : 'i').test(item);
    } catch (err) {
      return false;
    }
  }
  
  _regexChanged(regex, string) {
    console.log("L")
    try {
      this._items = string.split(new RegExp(regex, this.caseSensitive ? '' : 'i'));
    } catch (err) {
      this._items = [string];
    }
  }

  ready(){
    console.log("K")
  }
}

window.customElements.define('regex-highlighter', RegexHighlighter);
