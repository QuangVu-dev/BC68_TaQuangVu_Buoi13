// BÀI 1 - TÍNH TIỀN LƯƠNG NHÂN VIÊN
// Sơ đồ 3 khối
/**
 * Đầu vào: Lương 1 ngày, Số ngày làm
 *
 * Các bước xử lí:
 * =>Công thức tính lương: lương 1 ngày * số ngày làm
 *
 * Đầu ra: tiền lương nhân viên
 *
 */
document.querySelector("#btnTinhLuong").onclick = function () {
  const luongMotNgay = "100000";
  let soNgayLam = document.getElementById("soNgayLam").value * 1;
  let tienLuongNhanVien = luongMotNgay * soNgayLam;
  document.querySelector(".ketQuaLuong").innerHTML =
    "👉 Tiền lương tháng này của bạn: " +
    tienLuongNhanVien.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    });
};

// BÀI 2 - TÍNH GIÁ TRỊ TRUNG BÌNH
// Sơ đồ 3 khối
/**
 * Đầu vào: Giá trị số thứ 1, số thứ 2, số thứ 3, số thứ 4, số thứ 5
 *
 * Các bước xử lí
 * =>Giá trị trung bình: (số thứ 1 + số thứ 2 + số thứ 3 + số thứ 4 + số thứ 5)/5
 *
 * Đầu ra: giá trị trung bình của 5 số
 */

document.getElementById("btnGiaTriTrungBinh").onclick = function () {
  let soThuNhat = Number(document.getElementById("soThuNhat").value);
  let soThuHai = Number(document.getElementById("soThuHai").value);
  let soThuBa = Number(document.getElementById("soThuBa").value);
  let soThuTu = Number(document.getElementById("soThuTu").value);
  let soThuNam = Number(document.getElementById("soThuNam").value);
  let giaTriTrungBinh =
    (soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam) / 5;
  document.getElementById("ketQuaTrungBinh").innerHTML =
    "👉 Giá trị trung bình: " + giaTriTrungBinh;
};

// BÀI 3 - QUY ĐỔI TIỀN
/**
 * Đầu vào: Giá đô hiện nay, số tiền đô
 *
 * Các bước xử lí
 * =>Giá trị quy đổi: giá đô hiện nay * số tiền đô
 *
 * Đầu ra: số tiền sau khi quy đổi VNĐ
 */

document.querySelector("#btnGiaTriQuyDoi").onclick = function () {
  const giaUSDHienNay = "23500";
  let soTienQuyDoi = document.querySelector("#soTienQuyDoi").value * 1;
  let quyDoiTien = giaUSDHienNay * soTienQuyDoi;
  new Intl.NumberFormat("vn-VN").format(quyDoiTien);
  document.querySelector("#ketQuaQuyDoi").innerHTML =
    "Số tiền quy đổi sang VND: " +
    quyDoiTien.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    });
};

// BÀI 4 - TÍNH DIỆN TÍCH, CHU VI HÌNH CHỮ NHẬT
// Sơ đồ 3 khối
/**
 * Đầu vào: Hình chữ nhật, chiều dài, chiều rộng
 *
 *
 * Các bước xử lý:
 * => Công thức diện tích= dài * rộng
 * => Công thức tính chu vi = (dài + rộng) * 2
 *
 *
 * Đầu ra: Diện tích và chu vi của hình chữ nhật
 *
 */
document.querySelector("#btnTinhKichThuoc").onclick = function () {
  let chieuDai = Number(document.querySelector("#chieuDai").value);
  let chieuRong = Number(document.querySelector("#chieuRong").value);
  let chuVi = (chieuDai + chieuRong) * 2;
  let dienTich = chieuDai * chieuRong;
  // document.querySelector("#ketQuaTinh").innerHTML =
  //   "Chu vi: " + chuVi + "Diện tích: " + dienTich;
  document.querySelector("#ketQuaTinh").innerHTML =
    "Chu vi: " + chuVi + "; Diện tích: " + dienTich;
};

// BÀI 5 - TÍNH TỔNG 2 KÝ SỐ
/**
 *
 * Đầu vào: số có 2 chữ số
 *
 * Các bước xử lí
 * => Tổng 2 ký số = số hàng chục + số hàng đơn vị
 *
 * Đầu ra: tổng 2 ký số vừa nhập
 */

document.getElementById("btnTongHaiKySo").onclick = function () {
  let soCoHaiChuSo = document.getElementById("soCoHaiChuSo").value * 1;
  let soHangDonVi = soCoHaiChuSo % 10;
  let soHangChuc = Math.floor(soCoHaiChuSo / 10);
  if (soCoHaiChuSo > 10 && soCoHaiChuSo < 100) {
    let tongKySo = soHangChuc + soHangDonVi;
    document.getElementById("ketQuaTong").innerHTML =
      "Tổng 2 ký số của số vừa nhập là: " + tongKySo;
  } else {
    document.getElementById("ketQuaTong").innerHTML = "Vui lòng nhập lại !!!";
  }
};
