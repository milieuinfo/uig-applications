import {VlCheckboxComponent} from "@domg-wc/components/dist/libs/components";

export class ComponentsElement extends HTMLElement {
    public static observedAttributes = [];

    constructor() {
        super();
        const checkbox = new VlCheckboxComponent();
        checkbox.connectedCallback();
    }

    connectedCallback() {
        const title = 'Integratie van @domg-wc/webpack-components';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt data-vl-no-space-bottom>${title}</h2>
                    <br>
                    <div class="container">
                        <h3 is="vl-h3" data-vl-has-border>Checkbox</h3>
                        <vl-checkbox
                            data-vl-label="checkbox-label"
                            data-vl-name="checkbox-name"
                            data-vl-value="checkbox-value"
                        ></vl-checkbox>
<!--                        <h3 is="vl-h3" data-vl-has-border>Breadcrumb</h3>-->
<!--                        <vl-breadcrumb>-->
<!--                            <vl-breadcrumb-item data-vl-href="#">Vlaanderen Intern</vl-breadcrumb-item>-->
<!--                            <vl-breadcrumb-item data-vl-href="#">Regelgeving</vl-breadcrumb-item>-->
<!--                            <vl-breadcrumb-item data-vl-href="#">Webuniversum</vl-breadcrumb-item>-->
<!--                            <vl-breadcrumb-item data-vl-href="#">Componenten</vl-breadcrumb-item>-->
<!--                        </vl-breadcrumb>-->
                    </div>
                    <div>
                        <textarea
                            id="textarea-rich"
                            is="vl-textarea"
                            cols="40"
                            rows="50"
                            data-vl-rich
                            data-vl-block
                        >
                          <p>
                              <h1>h1 title</h1>
                              <h2>h2 title</h2>
                              <h3>h3 title</h3>
                              <h4>h4 title</h4>
                              <h5>h5 title</h5>
                              <h6>h6 title</h6>
                          </p>
                          <p><b>b-tag</b></p>
                          <p><i>i-tag</i></p>
                          <p><u>u-tag</u></p>
                          <p><hr/></p>
                          <p><s>s-tag</s></p>
                          <p><blockquote>blockquote-tag</blockquote></p>
                          <p><hr/></p>
                          <p>
                              <ul>
                                  <li>unsorted list item</li>
                                  <li>unsorted list item</li>
                                  <ul>
                                      <li>unsorted list subitem</li>
                                      <li>unsorted list subitem</li>
                                  </ul>
                                  <li>unsorted list item</li>
                              </ul>
                          </p>
                          <p><hr/></p>
                          <p>
                              <ol>
                                  <li>ordered list item</li>
                                  <li>ordered list item</li>
                                  <ol>
                                      <li>ordered list subitem</li>
                                      <li>ordered list subitem</li>
                                  </ol>
                                  <li>ordered list item</li>
                              </ol>
                          </p>
                      </textarea>
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('alliance-components', ComponentsElement);
