class ManualWc extends HTMLElement {
    constructor() {
        super();
    }

    log(...messages) {
        console.log("MANUAL-WC", ...messages)
    }

    connectedCallback() {
        this.log("connected", this.attributes)
    }

    disconnectedCallback() {
        this.log("disconnected", this.attributes)
    }

    adoptedCallback() {
        this.log("adopted")
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.log(`Attribute ${name} changed from '${oldValue}' to '${newValue}'`)
    }
};

customElements.define("manual-wc", ManualWc);