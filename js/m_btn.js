document.addEventListener('DOMContentLoaded', function(){
    document.querySelector(".mobile-menu1").addEventListener("click", function(e){
        if ( document.querySelector('.menuwrap1').classList.contains('on') ){
            //메뉴닫힘
            document.querySelector('.menuwrap1').classList.remove('on');

        } else {
            //메뉴펼처짐
            document.querySelector('.menuwrap1').classList.add('on');
        }
    
        //x버튼 클릭 메뉴 닫기
        document.querySelector('.xbtn1').addEventListener('click', function(e){
            document.querySelector(".mobile-menu1").click();
        });             
    });
});