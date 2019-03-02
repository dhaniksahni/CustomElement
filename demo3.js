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
