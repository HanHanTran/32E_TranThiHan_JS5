// Bài tập 1: Quản lý tuyển sinh
// input: diemChuan: Number, monA: Number, monB: Number, khuVuc: String, doiTuong: String
// output: dau: string or rot: string và tongDiem: Number
// xử lý: tongDiem = monA + monB + monC + doiTuong + khuVuc;
document.getElementById('ketQuaB1').onclick = function() {
    var monA = Number(document.getElementById('monA').value);
    var monB = Number(document.getElementById('monB').value);
    var monC = Number(document.getElementById('monC').value);
    var khuVuc =Number( document.getElementById('khuVuc').value);
    var doiTuong = Number(document.getElementById('doiTuong').value);
    var diemChuan = Number(document.getElementById('diemChuan').value);
    var tongDiem = 0;
    tongDiem = monA + monB + monC + doiTuong + khuVuc;
    var ketquab1 = '';
    if (tongDiem >= diemChuan && monA !== 0 && monB !==0 && monB !==0) {
        ketquab1 = 'ĐẬU';
    } else if (tongDiem < diemChuan || monA == 0 || monB ==0 || monC == 0){
        ketquab1 = 'RỚT';


    } else {
        ketquab1 = 'Không xác định';
    }
    document.getElementById('inketQuaB1').innerHTML ='Bạn đã: '+ '' + ketquab1 + ' ' + 'Tổng điểm là: '  + tongDiem ;

}

// Bài tập 2: Tính tiền điện
// input: hoTen: String, soKw: Number
// output: xuất ra số tiền điện: ketQuaB2 = soKw * giá tiền tính teheo mức Kw đã dùng
// xử lý:
// - nếu 50Kw đầu thì: ketQuaB2 = soKw * 500
// - nếu 50Kw kế thì: ketQuaB2 = soKw * 650
// - nếu 100KW kế thì: ketQuaB2 = soKw * 850
// - nếu 150Kw đầu thì: ketQuaB2 = soKw * 1100
// - nếu > 150Kw thì: ketQuaB2 = soKw * 1300
document.getElementById('btnTienDien').onclick = function() {
    var hoTen = document.getElementById('hoTen').value;
    var soKw = Number(document.getElementById('soKw').value);
    ketquaB2 = 0;
    if (soKw <= 50) {
        ketQuaB2 = soKw * 500;
    }else if (soKw <= 100){
        ketQuaB2 = (50 * 500) + (soKw - 50) * 650;
    }else if(soKw > 100 && soKw <= 200 ) {
        ketQuaB2 = (50 * 500) + (50 * 650) + (soKw - 100)*850;

    }else if(soKw <= 350){
        ketQuaB2 = (50 * 500) + (50 * 650) + (100*850) + (soKw - 200)*1100;

    }else if(soKw > 350){
        ketQuaB2 = (50 * 500) + (50 * 650) + (100*850) + (150*1100) + (soKw-350)*1300;

        
    }
    document.getElementById('ketQuab2').innerHTML =hoTen + ' Có số tiền điện là: ' + ketQuaB2.toLocaleString();
}