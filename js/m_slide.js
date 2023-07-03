var slides1=document.querySelector('.slides1'),
    slide1=document.querySelectorAll('.slides1 li'),
    currentIdx1 = 0,
    slideCount1 = slide1.length,
    prevBtn1 = document.querySelector('.prev1'),
    nextBtn1 = document.querySelector('.next1');


    function moveSlide1(num){
        slides1.style.left=-num*370+'px';
        currentIdx1=num;
    }
    nextBtn1.addEventListener('click',function(){
        if(currentIdx1<slideCount1-1){
            moveSlide1(currentIdx1+1);
        }else{
            moveSlide1(0);
        }
    });
    prevBtn1.addEventListener('click',function(){
        if(currentIdx1>0){
            moveSlide1(currentIdx1-1);
        }else{
            moveSlide1(slideCount1-1);
        }
    });

