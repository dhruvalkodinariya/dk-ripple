import { LitElement, html ,css} from 'lit-element';
import '../dk-ripple';

export class DkRippleDemo extends LitElement {
  static get styles(){
    return[
      css`
        section{
          display:flex;
          flex-direction:row;
          flex:1;
          padding:4px;
        }

        section .main{
          display:flex;
        }

        .demo{
          width:120px;
          height:120px;
          border:1px solid rgba(0,0,0,0.12);
          position:relative;
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          margin:4px;
        } 
      `
    ]
  }

  

  render() {
    return html`
    <section>
      <div class="main">
        <div class="demo">
          <h4>Custom</h4>
          <dk-ripple></dk-ripple>
        </div>
        <div class="demo">
          <h4>Primary</h4>
          <dk-ripple primary></dk-ripple>
        </div>
        <div class="demo">
          <h4>Secondary</h4>
          <dk-ripple secondary></dk-ripple>
        </div>
        <div class="demo">
          <h4>Unbounded</h4>
          <dk-ripple unbounded></dk-ripple>
        </div>
        <div class="demo">
          <h4>Disabled</h4>
          <dk-ripple disabled></dk-ripple>
        </div>
      </div>
    </section>
    `;
  }
}
customElements.define('dk-ripple-demo', DkRippleDemo);