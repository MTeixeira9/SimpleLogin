import { LitElement, html, css } from 'lit';
import './login-lit';

export class SimpleLogin extends LitElement {
  static get properties() {
    return {
    };
  }

  static get styles() {
    return css`
      login-lit {
        display: flex;
        position: absolute;
        right: 38%;
        top: 10%;
      }
    `;
  }

  constructor() {
    super();
    this.title = 'My app';
  }

  render() {
    return html`
      <login-lit></login-lit>
    `;
  }
}
