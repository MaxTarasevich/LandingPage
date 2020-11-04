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
    logIn.addEventListener('click',()=>{
        console.log('login')
    })