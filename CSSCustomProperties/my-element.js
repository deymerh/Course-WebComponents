class myElement extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({mode: 'open'});
  }
  getTemplate(){
    const template = document.createElement("template");
    template.innerHTML = `
      <section>
        <h2><slot name="title"></slot></h2>
        <div>
          <p> <slot name="paragraph"></slot> </p>
        </div>
      </section>
      ${this.getStyle()}
    `;
    return template;
  }
  getStyle(){
    return `
      <style>
        :host {
          --primary-color: tomato;
          --secondary-color: salmon;
          --heading-primary-font-size: 30px;
          --heading-secondary-font-size: 25px;
          display: inline-block;
          width: 100%;
          min-width: 300px;
          max-width: 450px;
        }
        section {
          background-color: var(--primary-color);
        }
        section div {
          background-color: var(--secondary-color);
        }
        h2 {
          font-size: var(--heading-primary-font-size);
        }
        p {
          font-size: var(--heading-secondary-font-size);
        }
      </style>
    `;
  }
  render(){
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback(){
    this.render();
  }
}
customElements.define("my-element", myElement);
