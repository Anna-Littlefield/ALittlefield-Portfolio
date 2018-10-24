alert('connected');

var redButton = document.querySelector('#red');
var blueButton = document.querySelector('#blue');
var greenButton = document.querySelector('#green');

redButton.addEventListener('click', function(){
    alert('button clicked');
    changeColor = 'red';
})
function changeColor(color){
    document.body.style.backgroundColor = color;
})