class headSection extends HTMLElement {
    constructor() {
        super();
        this._con;
        this._banner
        this._text1;
        this._text2;
        this._section;
    }

    static get observedAttributes() {
        return [ "_con", '_banner', "_text1", "_text2", '_section' ];
    }

    attributeChangedCallback( nameAtr, oldValue, newValue ) {
        switch (nameAtr) {
            case "_con":
                this._con = newValue;
            break;
            case "_banner":
                this._banner = newValue;
            break;
            case "_text1":
                this._text1 = newValue;
            break;
            case "_text2":
                this._text2 = newValue;
            break;
            case "_section":
                this._section = newValue;
            break;
        

        }
    }

    connectedCallback() {
        this.innerHTML = /*html*/ `
        <div id="head" class="container-fluid  ${this._section}" style="background-image:url(${this._banner});">
            <div class="mask"></div>
            <div class="contenedor">
                <div class="section__header">
                    <h2 class="section__title animalo" data-animate-effect="fadeIn">${this._text1}</h2>
                    <p class="section__icon animalo" data-animate-effect="fadeIn"> --^⌄⌃⌄-- <i class="fas fa-user-md"></i> --⌄⌃⌄^-- </p>
                    <h3 class="section__subtitle animalo" data-animate-effect="fadeIn">${this._text2}</h3>
                </div>
            </div>
            <div class="${this._con} padin-bottom"></div>
        </div>
        `;
    }
}

window.customElements.define("head-section", headSection);