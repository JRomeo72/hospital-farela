class footer extends HTMLElement {
    constructor() {
        super();
        this._link1;
        this._link2;
        this._link3;
        this._link4;

    }

    static get observedAttributes() {
        return [ "_link1", "_link2", "_link3", "_link4" ];
    }

    attributeChangedCallback( nameAtr, oldValue, newValue ) {
        switch (nameAtr) {
            case "_link1":
                this._link1 = newValue;
            break;
            case "_link2":
                this._link2 = newValue;
            break;
            case "_link3":
                this._link3 = newValue;
            break;
            case "_link4":
                this._link4 = newValue;
            break;
        

        }
    }

    connectedCallback() {
        this.innerHTML = /*html*/ `
        <section id="footer" class="container-fluid">
            <div class="mask"></div>
            <div class="container">
                <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4">
        
                    <div class="col _col-1">
                        <div class="block-1 m-auto" style="max-width:320px;">
                            <div class="logo">
                                <div class="logo__text1">
                                    <p class="display-6">Hospital</p>
                                </div>
                                <div class="logo__text2">
                                    <h2 class="display-5">Farela</h2>
                                </div>
                            </div>
                            <p>Somos un hospital con más de 27 años de experiencia, prestando servicios hospitalarios con calidad técnica y humana al gremio médico y a la población en general.</p>
                            <div class="icons text-center">
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
        
                    <div class="col _col-2">
                        <div class="block-2 m-auto" style="width:180px;">
                            <h4>Links</h4>
                            <ul>
                                <li><a href=${this._link1} >- Inicio</a></li>
                                <li><a href=${this._link2} >- Conócenos</a></li>
                                <li><a href=${this._link3} >- Hospitalización</a></li>
                                <li><a href=${this._link4} >- Contáctanos</a></li>
                            </ul>
                        </div>
                    </div>
        
                    <div class="col _col-3">
                        <div class="block-3 m-auto" style="width:270px;">
                            <h4>Contáctanos</h4>
                            <div class="info__locatio d-flex">
                                <div class="info__location__icon mx-3">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <div><p>info@hospitalfarela.com.sv</p></div>
                            </div>
                            <div class="icon-locatio">
                                <div class="info__locatio d-flex">
                                    <div class="info__location__icon mx-3">
                                        <i class="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div><p>27 Av. Nte #1317 San Salvador, El Salvador</p></div>
                                </div>
                            </div>
                            <div class="icon-locatio">
                                <div class="icon-locatio">
                                    <div class="info__locatio d-flex">
                                        <div class="info__location__icon mx-3">
                                            <i class="fas fa-phone-alt"></i>
                                        </div>
                                        <div><p>PBX 2225-2133 / 2513-3771</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        
                    <div class="col _col-4">
                        <div class="block-4 m-auto" style="width:270px;">
                            <!--<h4>Horarios</h4>
                            <div class="hour border-bottom">
                                <div><p>Lunes - Viernes</p></div>
                                <div><p>08:00-20:00</p></div>
                            </div>
                            <div class="hour border-bottom">
                                <div><p>Sabado</p></div>
                                <div><p>08:00-18:00</p></div>
                            </div>
                            <div class="hour border-bottom">
                                <div><p>Domingo</p></div>
                                <div><p>10:00-18:00</p></div>
                            </div>
                            <div class="hour border-bottom">
                                <div><p>Emergencia</p></div>
                                <div><p>2256-9874</p></div>
                            </div>-->
                            <h4>Ultimos artículos</h4>
                            <div class="art">
                                <div class="img img-1"></div>
                                <div class="caption">
                                    <p>Texto de informacion de la publicacion ...</p>
                                </div>
                            </div>
                            <div class="art">
                                <div class="img img-1"></div>
                                <div class="caption">
                                    <p>Texto de informacion de la publicacion ...</p>
                                </div>
                            </div>
                            <div class="art">
                                <div class="img img-1"></div>
                                <div class="caption">
                                    <p>Texto de informacion de la publicacion ...</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
        
                </div>
                <hr class="text-white" />
                <div class="text-center">
                    <span class="copyright text-center">Design 2U - Octubre 2021.</span>
                </div>
            </div>
        </section>
        `;
    }
}

window.customElements.define("wc-footer", footer);