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
        :host{
          display: inline-block;
          background-color: #f5f5f5;
          padding: 20px;
          border-radius: 5px;
          margin-bottom: 5px;
        }
        :host(.blue){
          background-color: #00f;
          color: #fff;
        }
        :host([yellow]){
          background-color: #ff0;
        }
        :host([yellow]) p{
          color: red;
        }
        :host-context(article.card){
          display: block;
          background-color: rgba(0,0,0,0.1);
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
