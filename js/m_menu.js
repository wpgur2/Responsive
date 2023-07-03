var targetLink2=document.querySelectorAll('.tab-menu2 a');
var tabContent2 =document.querySelectorAll('.tab_contents2 > div');

for(var i=0 ; i<targetLink2.length; i++){
    targetLink2[i].addEventListener('click',function(e){
        e.preventDefault();
        var orgTarget2=e.target.getAttribute('href');
        //console.log(orgTarget);

        var tabTarget2=orgTarget2.replace('#','');
        
        for(var x=0; x<tabContent2.length; x++){
            tabContent2[x].style.display='none';
        }
        document.getElementById(tabTarget2).style.display="block";

        for(var j=0 ; j<targetLink2.length; j++){
            targetLink2[j].classList.remove('active');
            e.target.classList.add('active');
        }
    });
}   
document.getElementById('tabs-9').style.display="block";