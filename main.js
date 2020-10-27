/*********************** slider*******************************/
    let sliderItem = document.getElementsByClassName('slider-item');
    console.log(sliderItem)
    for(i=0;i<sliderItem.length;i++){
        sliderItem[i].style.order = i;
        sliderItem[i].addEventListener('click',function(){
            let sliderElem = this;
            let order = sliderElem.style.order;
            console.log( order);
            console.log( sliderElem);
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