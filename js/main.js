document.querySelector("button").onclick = function dane() {
    var input1 = document.getElementById('imie');
    var p1 = document.getElementById('name');
    p1.innerText = input1.value;
    
    var input2 = document.getElementById('nazwisko');
    var p2 = document.getElementById('surname');
    p2.innerText = input2.value;
    
    var input3 = document.getElementById('telefon');
    var p3 = document.getElementById('phone');
    p3.innerText = input3.value;
}