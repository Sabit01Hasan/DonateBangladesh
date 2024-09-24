function checkInput(id){
    const donation = document.getElementById(id).value;
    if(isNaN(donation) || donation === '' || donation <= 0){
        alert("Invalid Amount Input");
        return 0;
    }
    else{
        return parseFloat(donation);
    }
}