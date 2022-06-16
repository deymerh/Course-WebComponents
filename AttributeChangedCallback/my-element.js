class myElement extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({mode: 'open'});
    this.title = this.getAttribute('title');
    this.paragraph = this.getAttribute('paragraph');
    this.image = this.getAttribute('img');
  }
  getTemplate(){
    const template = document.createElement("template");
    template.innerHTML = `
      <section>
        <h2>${this.title}</h2>
        <div>
          <p>${this.paragraph}</p>
          <img src="${this.image}" />
        </div>
      </section>
      ${this.getStyle()}
    `;
    return template;
  }
  getStyle(){
    return `
      <style>
        h2 {
          color: rgba(0,0,0,0.7);
        }
        p{
          cursor: pointer;
          color: rgba(0,0,0,0.7);
          font-size: 20px;
          text-decoration: underline;
        }
        img{
          width: 200px;
          border-radius: 10px;
          box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
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
