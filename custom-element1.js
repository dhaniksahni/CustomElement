class MyCustomElement extends HTMLElement {
    constructor() {
      super();
  
      var self = this;
  
      self.addEventListener('click', _ => {
        self.innerHTML = '<b> I have been clicked </b>';
      });
    }
  }
  customElements.define('my-custom-element', MyCustomElement);
  