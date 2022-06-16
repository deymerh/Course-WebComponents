const container = document.createElement('div');
container.innerHTML = `
  <style>
    .color-red{
      color: red;
    }
    p{
      color: blue;
    }
  </style>
  <p class="color-red">Hola con Inner HTML - Párrafo 1</p>
  <p>Hola con Inner HTML - Párrafo 2</p>
`;

class myElement extends HTMLElement{
  constructor(){
    super();
  }
  getTemplate(){
    const template = document.createElement("template");
    template.innerHTML = `
      <section>
        <h2>Hola Mundo!</h2>
        <div>
          <p>I am paragraph of example!</p>
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
          color: red;
        }
        p{
          font-size: 20px;
          text-decoration: underline;
        }
      </style>
    `;
  }
  render(){
    this.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback(){
    this.render();
  }
}
customElements.define("my-element", myElement);
