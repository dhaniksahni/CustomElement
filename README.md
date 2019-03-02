# CustomElement
Custom Element is core concept for Lightning Web Component. 

//MyCustomElement.js 
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
  
//MyCustomElement.html 
<my-custom-element>
    I have not been clicked yet.
</my-custom-element>
<script src="custom-element1.js"></script>

//AnimatedButton.js
class AnimatedButton extends HTMLButtonElement {
    constructor() {
      super();
      this.className="button";
      this.addEventListener("click", () => {
        alert('I am clicked');
      });
    }
  }
  customElements.define("animated-button", AnimatedButton, { extends: "button" });

//AnimatedButton.css
.button {
    position: relative;
    background-color: #4CAF50;
    border: none;
    font-size: 28px;
    color: #FFFFFF;
    padding: 20px;
    width: 200px;
    text-align: center;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
  }
  
  .button:after {
    content: "";
    background: #90EE90;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px!important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s
  }
  
  .button:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
  }
  
//AnimatedButton.html
<button is="animated-button">Click Me!</button>

<script src="AnimatedButton.js"></script>
<link href="AnimatedButton.css" rel="stylesheet">
