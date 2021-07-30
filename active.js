var input = document.querySelector('.input');
var encode = document.querySelector('.encode');
var decode = document.querySelector('.decode');
var output = document.querySelector('.output');
var textResult = '';
encode.addEventListener('click',encodeFunction);
decode.addEventListener('click',decodeFunction);
function encodeFunction(){
     output.value = window.btoa(input.value).toString();
}
function decodeFunction(){
    output.value = window.atob(input.value).toString();
}