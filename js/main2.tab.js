var targetLink1=document.querySelectorAll('.tab-menu1 a');
var tabContent1 =document.querySelectorAll('.tab_contents1 > div');

for(var i=0 ; i<targetLink1.length; i++){
    targetLink1[i].addEventListener('click',function(e){
        e.preventDefault();
        var orgTarget1=e.target.getAttribute('href');
        //console.log(orgTarget);

        var tabTarget1=orgTarget1.replace('#','');
        
        for(var x=0; x<tabContent1.length; x++){
            tabContent1[x].style.display='none';
        }
        document.getElementById(tabTarget1).style.display="block";

        for(var j=0 ; j<targetLink1.length; j++){
            targetLink1[j].classList.remove('active');
            e.target.classList.add('active');
        }
    });
}   
document.getElementById('tabs-5').style.display="block";
