var slides=document.querySelector('.slides'),
    slide=document.querySelectorAll('.slides li'),
    currentIdx = 0,
    slideCount = slide.length,
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next');


    function moveSlide(num){
        slides.style.left=-num*306+'px';
        currentIdx=num;
    }
    nextBtn.addEventListener('click',function(){
        if(currentIdx<slideCount-4){
            moveSlide(currentIdx+1);
        }else{
            moveSlide(0);
        }

    });
    prevBtn.addEventListener('click',function(){
        if(currentIdx>0){
            moveSlide(currentIdx-1);
        }else{
            moveSlide(slideCount-4);
        }

    });

    

    