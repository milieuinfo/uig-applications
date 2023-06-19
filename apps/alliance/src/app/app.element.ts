import {vlElementsStyle} from '@domg-wc/elements';
import appStyle from './app.element.css';

export class AppElement extends HTMLElement {
    public static observedAttributes = [];

    constructor() {
        super();
        document.adoptedStyleSheets = [
            ...vlElementsStyle.map((style) => style.styleSheet),
            appStyle.styleSheet,
        ];
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="wrapper">
            <h1>Alliance App</h1>
<!--            <alliance-elements></alliance-elements>-->
            <alliance-components></alliance-components>
<!--            <alliance-sections></alliance-sections>-->
<!--            <alliance-map></alliance-map>-->
        </div>
      `;
    }
}
customElements.define('applications-root', AppElement);
