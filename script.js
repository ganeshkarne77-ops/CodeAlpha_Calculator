function add(value) {
    document.getElementById("display").value += value;
}
function deletelast() {
    document.getElementById("display").value=document.getElementById("display").value.slice(0,-1);

}
function positiveNegative() {
    let display = document.getElementById("display");
        if (display.value !=="") {
            display.value=display.value * -1;
        }
}
