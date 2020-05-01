import { LitElement, html ,css} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {RippleCss} from './mdc-ripple-css';
import {MDCRipple,MDCRippleFoundation} from '@material/ripple';
export class DkRipple extends LitElement {

  static get styles(){
    return[
      RippleCss,
      css`
        .mdc-ripple-surface {
          position: absolute;
          top: 0px;
          right: 0px;
          bottom: 0px;
          left: 0px;
        }

        :host([disabled]) {
          --mdc-theme-on-surface: transparent;
        }

        :host([primary]) {
          --mdc-theme-on-surface: var(--mdc-theme-primary,#6200ee);
        }

        :host([secondary]) {
          --mdc-theme-on-surface: var(--mdc-theme-secondary,#018786);
        }

        :host([unbounded]) .mdc-ripple-surface{
          border-radius:50%;
        }

        .mdc-ripple-surface::before, .mdc-ripple-surface::after {
          background-color: var(--mdc-theme-on-surface, #000);
        }
      `,
      
    ]
  }

  static get properties() {
    return {
      primary: { type: Boolean },
      secondary: { type: Boolean },
      unbounded: { type: Boolean },
      disabled: { type: Boolean },
    };
  }

  constructor(){
    super();
    this.primary=false;
    this.secondary = false;
    this.disabled = false;
  }
  

  render() {
    const classes = {
      'mdc-ripple-surface--primary':this.primary,
      'mdc-ripple-surface--accent':this.secondary
    };

    return html`
      <div class="mdc-ripple-surface	${classMap(classes)}"></div>
    `;
  }

  firstUpdated(){
    const surface = this.shadowRoot.querySelector('.mdc-ripple-surface');
    const ripple = new MDCRipple(surface);
    setTimeout(()=>{
      ripple.layout()
    })
    if(this.unbounded){
      ripple.unbounded = true;
    }
  }
}
customElements.define('dk-ripple', DkRipple);