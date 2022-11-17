//let a = [1, 4, 7, 8, 3, 2, 5, 6, 10];
//let b = 10;


//alert(a);
//alert(a.length);
//alert(a.join('-'));
//alert(a.pop());//cắt lấy số cuối cùng tromg chuỗi

var matHang = [];
function them(){
    let name = document.getElementById("name1").value;
    matHang.push(name);
    document.getElementById("result").innerHTML += "<tr>" +
            "<td>"+ matHang.length+"</td>" +
            "<td>"+ name +"</td>" +
            " <td><button>Sửa</button></td>" +
            " <td><button>Xóa</button></td>" +
            "</tr>"
    }