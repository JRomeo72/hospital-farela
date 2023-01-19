class cardWithImg extends HTMLElement {
    constructor() {
        super();
        this._img;
        this._text1;
        this._text2;
        this._url;
    }

    static get observedAttributes() {
        return [ "_img", "_text1", "_text2", "_url" ];
    }

    attributeChangedCallback( nameAtr, oldValue, newValue ) {
        switch (nameAtr) {
            case "_img":
                this._img = newValue;
            break;
            case "_text1":
                this._text1 = newValue;
            break;
            case "_text2":
                this._text2 = newValue;
            break;
            case "_url":
                this._url = newValue;
            break;
        

        }
    }

    connectedCallback() {
        this.innerHTML = /*html*/ `
        <div class="card _shadow-bg-light-l animalo" data-animate-effect="fadeInUp">
            <img src=${this._img} class="card-img-top" alt="img-card">
            <div class="card-body">
                <h5 class="card-title">${this._text1}</h5>
                <p class="card-text">${this._text2}</p>
                
            </div>
            <div>
                <a href=${this._url} class="btn btn-primary">Leer más</a>
            </div>
        </div>
        `;
    }
}

window.customElements.define("card-with-img", cardWithImg);