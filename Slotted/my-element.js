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
        ::slotted(span) {
          color: red;
        }
        ::slotted(.title) {
          color: blue;
          font-size: 20px;
          text-decoration: underline;
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
