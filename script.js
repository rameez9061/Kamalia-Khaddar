let circle =document.getElementById('circle1');
let img = document.querySelector('#circle>img')

circle.addEventListener('mouseover', function(){

    circle.style.transform = 'scale(1.5)';
    img.style.transform = 'scale(1.5)';
    console.log('yes');
})