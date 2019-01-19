import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-styles/paper-styles.js';
import '@polymer/iron-icon/iron-icon.js';

class PaperChip extends PolymerElement {
  static get template() {
    return html`
      <style>
      .chip {
        font-family: var(--paper-chip-font-family, "Roboto", sans-serif);
        display: inline-block;
        height: 32px;
        font-size: var(--paper-chip-font-size, 13px);
        font-weight: 500;
        color: var(--paper-chip-label-color, rgba(0, 0, 0, 0.6));
        line-height: 32px;
        padding: 0 4px 0 12px;
        border-radius: 16px;
        background-color: var(--paper-chip-background-color, #E0E0E0);
        margin-bottom: 5px;
        margin-right: 5px;
        @apply --paper-chip;
      }

      .chip:active {
        background: var(--paper-chip-active-background-color, #D6D6D6);
      }

      .chip .closeIcon {
        margin-left: 4px;
        cursor: pointer;
        float: right;
        width: 12px;
      }

      .chip .inline {
        display: -webkit-inline-box;
      }

      .hoverEffect:hover {
        @apply --shadow-elevation-2dp;
        cursor: default;
      }

      .unselectable {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      .close {
        top: -1px;
        @apply --paper-chip-close-label;
      }

      iron-icon {
        --iron-icon-height: 16px;
        --iron-icon-width: 16px;
        position: relative;
        right: 8px;
        color: var(--paper-chip-background-color, #E0E0E0);
        background-color: var(--paper-chip-close-color, #A6A6A6);
        border-radius: 50%;
      }

      .label {
        margin-right: 12px;
      }

      .avatar ::slotted(.chip-image) {
        float: left;
        margin: 0 8px 0 -12px;
        height: 32px;
        width: 32px;
        border-radius: 50%;
      }

      .avatar ::slotted(.chip-background) {
        --iron-icon-height: 19px;
        --iron-icon-width: 19px;
        background: var(--paper-chip-avatar-background-color, #989898);
        border-radius: 50%;
        color: var(--paper-chip-avatar-font-color, #ffffff);
        float: left;
        font-weight: bold;
        font-size: 16px;
        height: 32px;
        margin: 0 8px 0 -12px;
        text-align: center;
        width: 32px;
      }

      [hidden] {
        display: none;
      }
    </style>

    <div class$="[[_computePaperChipClass(noHover)]]">
      <span class="label">[[label]]</span>
      <span class="avatar"><slot name="avatar"></slot></span>
      <div hidden$="[[!closable]]" class="closeIcon" on-click="_remove">
        <iron-icon class="close" icon="icons:clear"></iron-icon>
      </div>
    </div>
    `;
  }

  static get properties() {
    return {
      /**
      * The label for this paper-chip. The default value is 'Default Label'.
      */
      label: {
        type: String,
        value: 'Default Label'
      },

      /**
      * If true, the paper-chips can be closed.
      */
      closable: {
        type: Boolean,
        value: false
      },

      /**
      * If true, the element will not produce a hover effect.
      */
      noHover: {
        type: Boolean,
        value: false
      }
    };
  }

  _computePaperChipClass(noHover) {
    if (noHover == true) {
      return 'chip unselectable';
    } else {
      return 'chip unselectable hoverEffect';
    }
  }

  _remove(event) {
    this.dispatchEvent(new CustomEvent('chip-removed', {
      detail: {
        'chipLabel': this.label
      },
      composed: true,
      bubbles: true
    }));
    if (this.parentNode.id != 'slot2' && this.parentNode.querySelector("dom-repeat") === null) {
      this.parentNode.removeChild(this);
    }
  }
}

window.customElements.define('paper-chip', PaperChip);
