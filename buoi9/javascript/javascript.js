//hiển thị thông tin ra trình duyệt
//cách 1
// document.write("Lập trình web");
//cách 2
// alert("Xin chào thằng ngu...!");
//cách 3
// confirm("Bạn có chắc chắn muốn đăng xuất khỏi trái đất không?");
//cách 4
//prompt("Nhập tuổi");
//cách 5
//hiển thị  dòng chữ
// document.getElementById("h1").innerHTML = "Chào thằng lol";
// document.getElementById("thongtin").innerHTML = "hé lô mọi người"
//class
demo1 = document.getElementsByClassName("thongtina");
demo1[0].innerHTML = "xin chao moi nguoi";
demo1[1].innerHTML = "chao lan 2";
demo1[2].innerHTML = "chao lan 3";

let a = 100;
let b = 200;
//hằng
const c = 300;
//tính tổng 2 số a và b
let tong = a + b;
//hien thị tổng ra trình duyệt
document.write("Tong a+b = "+tong);