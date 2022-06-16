class MyCustomElement extends HTMLElement {
  constructor(){
    super();
    console.log('constructor - Memoria');
  }
  connectedCallback(){
    console.log('connectedCallback - Hola DOM');
  }
  disconnectedCallback(){
    console.log('disconnectedCallback - Adios DOM');
  }
}
customElements.define('my-custom-element', MyCustomElement);
document.querySelector('my-custom-element').remove();