/*kiem tra diem nguoi dung nhap vao
neu: 
diem >=10 => xep loai xuat sac
diem <10 va diem >=9 xep loai xuat sac
diem <9  va diem >=8 xep loai gioi
diem <8 va diem >=7 xep loai kha
diem <7 va diem >=5 xep loaij trung binh
diem <5 xep loai yeu
*/
//lay gia tri tu o input ma nguoi dung nhap vao

function check(){
    let diem = document.getElementById('diem').value;

if(diem>=9 && diem <=10){
    document.getElementById('show').innerHTML = "Xep loai xuat sac";
    }
else if(diem<10 && diem>=9){
    document.getElementById('show').innerHTML = "Xep loai xuat sac";
    }
else if(diem<9 && diem>=8){
    document.getElementById('show').innerHTML = "Xep loai gioi";
    }
else if(diem<=8 && diem>=7){
    document.getElementById('show').innerHTML = "Xep loai kha";
    }
else if(diem<7 && diem>=5){
    document.getElementById('show').innerHTML = "Xep loai trung binh";
    }
else if(diem<5 && diem >=0){
    document.getElementById('show').innerHTML = "Xep loai yeu";
    }
    else {
        document.getElementById('show').innerHTML = "Diem khong hop le";
    }
}