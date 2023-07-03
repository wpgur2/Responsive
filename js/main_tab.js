/*링크를 클릭하면 클릭한 그 요소의 href속성의 값을 변수 tabTarget에 저장
저장된 값에서 #을 삭제하고
*/
var targetLink=document.querySelectorAll('.tab-menu a');
var tabContent =document.querySelectorAll('.tab_contents > div');

for(var i=0 ; i<targetLink.length; i++){
    targetLink[i].addEventListener('click',function(e){
        e.preventDefault();
        var orgTarget=e.target.getAttribute('href');
        //console.log(orgTarget);

        var tabTarget=orgTarget.replace('#','');
        
        for(var x=0; x<tabContent.length; x++){
            tabContent[x].style.display='none';
        }
        document.getElementById(tabTarget).style.display="block";

        for(var j=0 ; j<targetLink.length; j++){
            targetLink[j].classList.remove('active');
            e.target.classList.add('active');
        }
    });
}   
document.getElementById('tabs-1').style.display="block";
///


