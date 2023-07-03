var targetLink3=document.querySelectorAll('.tab-menu3 a');
var tabContent3 =document.querySelectorAll('.tab_contents3>div');

for(var i=0 ; i<targetLink3.length; i++){
    targetLink3[i].addEventListener('click',function(e){
        e.preventDefault();
        var orgTarget3=e.target.getAttribute('href');
        //console.log(orgTarget);

        var tabTarget3=orgTarget3.replace('#','');
        
        for(var x=0; x<tabContent3.length; x++){
            tabContent3[x].style.display='none';
        }
        document.getElementById(tabTarget3).style.display="block";

        for(var j=0 ; j<targetLink3.length; j++){
            targetLink3[j].classList.remove('active');
            e.target.classList.add('active');
        }
    });
}   
document.getElementById('tabs-13').style.display="block";