window.onload = function() {

    // document.querySelector(".navbar").classList.remove("switchColor");
    // ! Esta funcio un TOGGLE de la clase 'switchColor del Navbar'
    window.addEventListener("scroll", () => {
		let scrollTop = document.documentElement.scrollTop;
		let refer = document.querySelector(".socials");
		let nav = document.querySelector(".navbar");
		
		let scrollElement = refer.offsetTop + 20;

		nav.classList.toggle("switchColor", scrollTop >= scrollElement)
	})


	// ! Este codigo hace que el menu colapse al hacer click
	setTimeout(() => {

		let links = document.querySelectorAll('._link');
		let ele1 = document.querySelector('.navbar-collapse');
		let ele2 = document.querySelector('.navbar-toggler');

		// Se puede de esta forma
		// links.forEach( link => {
		// 	link.addEventListener('click', () => {
		// 		ele1.classList.remove('show');
		// 		ele2.classList.add('collapsed');
		// 		ele2.setAttribute('aria-expanded', 'false');
		// 	} )
		// })


		// O de esta otra forma
		document.getElementById('navbar').addEventListener('click', e => {
				// if( e.target.tagName == 'LI' ) {
				if( e.target.classList.contains('_link') ) {
					ele1.classList.remove('show');
					ele2.classList.add('collapsed');
					ele2.setAttribute('aria-expanded', 'false');
				}
			})

	}, 500);

	((d) => {
		setTimeout(() => {
			
			let _links = d.querySelectorAll('._link');
			d.getElementById('navbar').addEventListener('click', e => {
				// if( e.target.tagName == 'LI' ) {
				if( e.target.classList.contains('_link') ) {
					_links.forEach( link => link.classList.remove('active'));
					_links.forEach( link => console.log(link));
					e.target.classList.add('active')
				}
			})
			
		}, 500);

	})(document);




    // ! Codigo que hace funcionar el Slider
    if( document.querySelector("#slider") ) {

        let _area = document.querySelector(".mask");
        const _slider_ = document.querySelector("#slider");
        let sliderSection = document.querySelectorAll(".slider__section");
        let sliderSectionLast = sliderSection[sliderSection.length -1];
        const btnPrev = document.querySelector("#prev");
        const btnNext = document.querySelector("#next");
        _slider_.insertAdjacentElement("afterbegin", sliderSectionLast);
        
        let sliderSectionActive = document.querySelectorAll(".slider__section")[1];
        let _h = sliderSectionActive.children[1].children[0];
        let _p = sliderSectionActive.children[1].children[1];
        
        _h.classList.remove('hidden');
        _p.classList.remove('hidden');
        
        
        const Next = () => {
        
            let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
        
            _slider_.style.marginLeft = "-200%";
            _slider_.style.transition = "margin-left 1.3s ease-in-out";
        
            setTimeout(() => {
                _slider_.style.transition = "none";
                _slider_.insertAdjacentElement('beforeend', sliderSectionFirst);
                _slider_.style.marginLeft = "-100%"
        
                removeClass()
        
        
            }, 1300);
        }
        
        const Prev = () => {
            let sliderSection = document.querySelectorAll(".slider__section");
            let sliderSectionLast = sliderSection[sliderSection.length -1];
            _slider_.style.marginLeft = "0";
            _slider_.style.transition = "margin-left 1.3s ease";
        
            setTimeout(() => {
                _slider_.style.transition = "none";
                _slider_.insertAdjacentElement("afterbegin", sliderSectionLast);
                _slider_.style.marginLeft = "-100%"
        
                removeClass()
        
            }, 1300);
        }
        
        btnNext.addEventListener('click', () => {
            intervalStop();
            btnNext.disabled = 'true';
            btnPrev.disabled = 'true';
            Next();
            setTimeout(() => {
                intervalInit();
            }, 500);
        });
        
        btnPrev.addEventListener('click', () => {
            intervalStop();
            btnNext.disabled = 'true';
            btnPrev.disabled = 'true';
            Prev();
            setTimeout(() => {
                intervalInit();
            }, 500);
        });
        
        const removeClass = () => {
        
            let _Class = document.querySelectorAll('.slider__element.animated')
            _Class.forEach( _element => {
                _element.classList.add('hidden');
            } )
        
            let sliderSectionActive = document.querySelectorAll(".slider__section")[1];
            let _h = sliderSectionActive.children[1].children[0];
            let _p = sliderSectionActive.children[1].children[1];
        
            _h.classList.remove('hidden');
            _p.classList.remove('hidden');
        
            btnNext.disabled = 'false'
            btnPrev.disabled = 'false'
        
        }
        
        const intervalInit = () => {
            _init = setInterval(() => {
                Next()
            }, 60000 );
        }
        
        const intervalStop = () => {
            clearInterval(_init)
        }
        
        intervalInit();
        
        _area.onmouseover = () => {
            // console.log('mouse-over')
            intervalStop()
        }
        _area.onmouseout = () => {
            // console.log('mouse-out')
            intervalInit()
        }
    }


    // ! Codigo para las animaciones al hacer scroll
    const contentWayPointAnimalo = () => {
        // ! Con Javascript
        var waypoints = document.querySelectorAll('.animalo');
        waypoints.forEach( waypoint => {
            let _waypoint = new Waypoint ({
                element: waypoint,
                handler: function(direction){
    
                    if(direction === 'down' && !this.element.classList.contains('animated')){
    
                        waypoint.classList.add('item-animate');
                        
                        setTimeout(() => {
                            let el = document.querySelectorAll('.animalo.item-animate');
    
                            el.forEach((e, index) =>{
                                
                                setTimeout( () => {
                                    let effect = e.dataset.animateEffect;
                                    e.classList.add(effect, 'animated');
                                    e.classList.remove('item-animate');
                                },  index * 350 , 'easeInOutExpo');
    
                            })
    
                        }, 100);
                    }
                }, offset: '80%'
            })
        } )
    }
    contentWayPointAnimalo()

    
}


const _linkActive = (link = null, section = null) => {

    if( link ) {
        const e = document.querySelector(link);
        e.classList.add('active');
    }

    if(section) {
        const e = document.querySelector(section);
        e.classList.add('active');
    }

}


function validateForm() {

    // document.getElementById('status').innerHTML = "Enviando...";
    // formData = {
    // 'name'     : $('input[name=name]').val(),
    // 'email'    : $('input[name=email]').val(),
    // 'subject'  : $('input[name=subject]').val(),
    // 'message'  : $('textarea[name=message]').val()
    // };


    // $.ajax({
    // url : "../../mail.php",
    // type: "POST",
    // data : formData,
    // success: function(data, textStatus, jqXHR){
    //     $('#status').text(data.message);
    //     if (data.code) //If mail was sent successfully, reset the form.
    //     $('#contact-form').closest('form').find("input[id=name], input[id=email]").val("");
    // },
    // error: function (jqXHR, textStatus, errorThrown)
    // {
    //     $('#status').text(jqXHR);
    // }

    // });

}

let formulario = document.getElementById('contact-form');
if(formulario) {

    let _status = document.getElementById('status');
    console.log(_status)
    
    formulario.addEventListener('submit', e => {
        e.preventDefault();
        _status.innerHTML = `
            <div class="alert alert-success mt-3" role="alert">
                <p>Emviando email ...</p>
            </div>
        `;
        let datos = new FormData(formulario);
        console.log(datos)
        fetch('php/mail.php', {
            method: 'POST',
            body: datos
        })
        .then( res => res.json() )
        .then( data => {
            if( data.code === 0  ) {
                _status.innerHTML = `
                    <div class="alert alert-danger mt-3" role="alert">
                        <p>${data.message}</p>
                    </div>
                `
            }
    
            if( data.code === 1 ) {
                _status.innerHTML = `
                    <div class="alert alert-primary mt-3" role="alert">
                        <p>${data.message}</p>
                    </div>
                `
                // formulario.reset();
            }
    
            setTimeout(() => {
                _status.innerHTML = ""
            }, 3000);
        } )
    
    })

}