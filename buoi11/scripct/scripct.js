/*function showmet(){
    alert ("Ok thang dau buoi")
}
function tong(a,b){
    return document.write(a+b)
}*/


function tong(){
    let soa = parseFloat(document.getElementById('soa').value);
    let sob = parseFloat(document.getElementById('sob').value);

    let tong = soa+sob
    return document.getElementById('ketqua').innerHTML = tong;
}