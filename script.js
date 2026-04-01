var allelems=document.querySelectorAll('.elem')
var allfullelems=document.querySelectorAll('.fullelem')

allelems.forEach(function(elem){
    
    elem.addEventListener('click',function(){
        allfullelems[elem.id].style.display='block'
    })

})