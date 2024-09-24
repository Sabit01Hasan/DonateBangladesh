// Donate Button 1
document.getElementById('d-btn1').addEventListener('click', function(event){
    event.preventDefault;
    let donation = checkInput('d-in1');
    let total = parseFloat(document.getElementById('t-donation').innerText) + donation;
    document.getElementById('t-donation').innerText = total;
    let total2 = parseFloat(document.getElementById('donation1').innerText) + donation;
    document.getElementById('donation1').innerText = total2;

})
document.getElementById('d-btn2').addEventListener('click', function(event){
    event.preventDefault;
    let donation = checkInput('d-in2');
    let total = parseFloat(document.getElementById('t-donation').innerText) + donation;
    document.getElementById('t-donation').innerText = total;
    let total2 = parseFloat(document.getElementById('donation2').innerText) + donation;
    document.getElementById('donation2').innerText = total2;
})
document.getElementById('d-btn3').addEventListener('click', function(event){
    event.preventDefault;
    let donation = checkInput('d-in3');
    let total = parseFloat(document.getElementById('t-donation').innerText) + donation;
    document.getElementById('t-donation').innerText = total;
    let total2 = parseFloat(document.getElementById('donation3').innerText) + donation;
    document.getElementById('donation3').innerText = total2;
})