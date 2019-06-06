import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js'
import '@polymer/iron-flex-layout/iron-flex-layout.js'
import './my-icons.js'
import './shared-styles.js'
import '@polymer/paper-input/paper-input.js';
import '@vaadin/vaadin-button/vaadin-button.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/paper-toast/paper-toast.js';


// import './model-search.js'
import {dom} from "@polymer/polymer/lib/legacy/polymer.dom";


class MyLogin extends PolymerElement {
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
        
         paper-toast {
           --paper-toast-background-color:red;
      width: 300px;
      margin-left: calc(50vw - 150px);
      --paper-toast-color: #fff;
      font-size: 15px;
    }
    </style>
<div class="card flex-center-justified">
  <iron-form id = "login">
  <form>
                    <paper-input id="username" name="Username" placeholder="Username"></paper-input>
                       <paper-input type="password" id="password" name="Password" placeholder="Password"></paper-input>
                       </br>
                    <vaadin-button on-tap="_submitHandler">Submit</vaadin-button>
                    </form>
                </iron-form>
                 <template is="dom-if" if="{{login}}">
                 <a href="[[routePath]]model-search"></a>
                 </template>
           
            </div>
            
       <paper-toast id="toast" text="Username or password is incorrect" class="fit-top" > </paper-toast>      
            
    `;
    }
    static get properties() {
        return {
            login:Boolean
        };
    }

    ready() {
        super.ready();

    }

    _submitHandler(){
        var  _self=this;
        var some= this.$.login.serializeForm();
        console.log(some);

        //var query = _parent.queries[7].query;
        var query = "https://api.models.mint.isi.edu/v0.0.2/user/login";

        $.ajax({
            crossOrigin:true,
            dataType : "json",
            contentType: "application/json; charset=utf-8",
            url: "https://api.models.mint.isi.edu/v0.0.2/user/login",
            type: "GET",
            data: {username: some.Username,password:some.Password},
            cache: false,
            timeout: 5000,
            async: true,
            // headers:{
            //     "Access-Control-Allow-Origin":"*",
            //     "Access-Control-Allow-Methods": "POST, GET, OPTIONS, PUT, DELETE, HEAD"
            // },
            complete: function () {
                // console.log("GET request sent");
            },

            success: function (data) {
                _self.setData(data);

                //console.log(_parent.login);

            },

            error: function (jqXHR, exception) {
                var msg = '';
                if (jqXHR.status === 0) {
                    msg = 'Not connected.\n Verify Network.';
                }
                else if (jqXHR.status == 401) {
                    msg = 'Requested page not found. [404]';
                    console.log("hii");
                    _self.$.toast.show();
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
        })
    }

    setData(data){
        var _parent = document.querySelector("mint-explorer-app");
        _parent.login=true;
        _parent.token=data;
        var _self=this;
        //this.set('route.path','/model-search');
        // window.location.href = "/model-search";
        var _pages = dom(_parent.root).querySelector("#pages");
        _pages.selected = "model-search";
        //  var _pages = dom(_parent.root).querySelector("#pages");
        //  //console.log(_pages);
        //  //console.log(_pages.selected);
        //  _pages.selected = "model-search";
        //window.dispatchEvent(new CustomEvent('location-changed'));
    }

}
window.customElements.define('my-login', MyLogin);

