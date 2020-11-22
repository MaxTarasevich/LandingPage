/*********************** slider*******************************/
    let sliderItem = document.getElementsByClassName('slider-item');
    for(i=0;i<sliderItem.length;i++){
        sliderItem[i].style.order = i;
        sliderItem[i].addEventListener('click',function(){
            let sliderElem = this;
            let order = sliderElem.style.order;
            for(i=0;i<sliderItem.length;i++){
                if(sliderItem[i].style.order == 2){
                    sliderItem[i].style.order = order;
                    sliderItem[i].classList.toggle('activ')
                    sliderElem.style.order = 2;
                   sliderElem.classList.toggle('activ')
                }
            }
        })
    }
    /**********************login*************************** */
    let logIn = document.getElementById('login');
    let modalLogin = document.getElementsByClassName('modal-login');
    let modalLoginSubmit = document.getElementById('modal-login_submit');
    let modalLoginClose = document.getElementById('close-modal');
    let UserName = document.getElementById('userName-login');
    let LogOut = document.getElementsByClassName('LogOut');

    logIn.addEventListener('click',()=>{
        modalLogin[0].classList.remove('modal-login_open');
        document.body.style.overflowY = "hidden";
        document.body.style.paddingRight = "15px"
    });

    modalLoginClose.addEventListener('click',()=>{
        modalLogin[0].classList.add('modal-login_open');
        document.body.style.overflowY = "auto";
        document.body.style.paddingRight = "0px" ;
    });

    modalLoginSubmit.addEventListener('click',()=>{
        console.log(UserName.value);
        logIn.innerText = `Добро пожаловать ${UserName.value}`;
        LogOut[0].style.display = "block";
        modalLogin[0].classList.add('modal-login_open');
        document.body.style.overflowY = "auto";
        document.body.style.paddingRight = "0px" ;
    });

    LogOut[0].addEventListener('click', function (){
        LogOut[0].style.display = "none";
        logIn.innerText = `LogIn`;
    })
    