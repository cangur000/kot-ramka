document.getElementById(`nieramka`).onclick = function() {
    document.getElementById(`kot`).style.border = `none`;
    document.getElementById(`kot`).style.borderRadius = `0px`;
}
document.getElementById(`ramka`).onclick = function() {
    document.getElementById(`kot`).style.border = `3px dashed red`;
    document.getElementById(`kot`).style.borderRadius = `100px`;
}