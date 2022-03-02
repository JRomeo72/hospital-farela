class topBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = /*html*/ `
        <div id="top-bar" class="container-fluid pt-3">
            <div class="contenedor">
                <div class="banner d-flex">
                    <div class="logo">
                        <img class="logo-img" src="/assets/img/Farela-logo.jpeg" alt="logo">
                    </div>
                    <div class="left d-flex flex-column pt-2">
                        <div class="info d-flex justify-content-center mb-auto">
                            <!-- <div class="info-items d-flex justify-content-center _shadow-m border"> -->
                            <div class="info-items d-flex justify-content-center">
                                <div class="info--item d-flex align-items-center">
                                    <div class="info--item--icon">
                                        <i class="fas fa-envelope"></i>
                                    </div>
                                    <div><p>info@hospitalfarela.com.sv</p></div>
                                </div>
                                <div class="info--item d-flex align-items-center">
                                    <div class="info--item--icon">
                                        <i class="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div><p>27 Av. Nte #1317 San Salvador, El Salvador</p></div>
                                </div>
                                <div class="info--item d-flex align-items-center">
                                    <div class="info--item--icon">
                                        <i class="fas fa-phone-volume"></i>
                                    </div>
                                    <div><p>PBX 2225-2133 y 2513-3771</p></div>
                                </div>
                            </div>
                        </div>
                        <div class="socials d-flex justify-content-center">
                            <a href="https://www.facebook.com/HospitalFarela/" target="blank">
                                <!--<i class="fab fa-facebook-square"></i>-->
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://twitter.com/hospitalfarela" target="blank">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.youtube.com/channel/UC59V4mwVQq-nm03PrVQXCuQ" target="blank">
                                <i class="fab fa-youtube"></i>
                            </a>
                            <a href="https://www.instagram.com/hospital_farela" target="blank">
                                <i class="fab fa-instagram"></i>
                                <!--<i class="fab fa-instagram-square"></i>-->
                            </a>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
        `;
    }
}

window.customElements.define("top-bar", topBar);