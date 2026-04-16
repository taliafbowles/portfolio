class PrimaryButton extends HTMLElements {
  constructor() {
    super()
    this.innerHTML = "Hi I am custom"
  }
}

customElements.define("primary-button, PrimaryButton")
