class cardNotImg extends HTMLElement {
    constructor() {
        super();
        this._icon;
        this._text1;
        this._text2;
        this._text3="";
    }

    static get observedAttributes() {
        return [ "_icon", "_text1", "_text2", "_text3" ];
    }

    attributeChangedCallback( nameAtr, oldValue, newValue ) {
        switch (nameAtr) {
            case "_icon":
                this._icon = newValue;
            break;
            case "_text1":
                this._text1 = newValue;
            break;
            case "_text2":
                this._text2 = newValue;
            break
            case "_text3":
                this._text3 = newValue;
            break;
        

        }
    }

    connectedCallback() {
        // const text3 = this.getAttribute('')
        this.innerHTML = /*html*/ `
        <div class="Card d-flex flex-column _shadow-bg-light-l p-4 border bg-light animalo" data-animate-effect="fadeInUp">
            <div class="card--head d-flex align-items-center">
                <i class="icon ${this._icon}"></i>
                <h3>${this._text1}</h3>
            </div>
            <div class="mt-3 text2">
                <p>${this._text2}</p>
            </div>
            <div class="mt-3 text3 mt-auto">
                <h5>${this._text3}</h5>
            </div>

        </div>
        `;
    }
}

window.customElements.define("card-not-img", cardNotImg);