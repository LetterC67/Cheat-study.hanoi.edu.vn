# Giảm thời gian làm bài cho study.hanoi.edu.vn
## I/ Giới thiệu
- Không có gì ngoài việc thêm vào cho đầy đủ
## II/ Cách sử dụng
### 1. Cách lấy hàm để cheat của một bài bất kì (Không đọc phần này nếu quá lười hoặc không muốn đóng góp cho cộng đồng!!!)
#### *_- Cách 1 (Dành cho những bạn chăm chỉ học bài, nên đây là cách được khuyến nghị!)_* 
   
  - B1: Đăng nhập, chọn một đề và làm đúng 100% nhưng chưa nộp bài vội
  - B2: Bấm F12 hoặc Ctrl + Shift + I để bật Chrome DevTools

  ![Chrome DevTools](img/cdb.PNG)
  <p align = "center"><b>Sau khi bật Chrome DevTools</b></p>

  - B3: Vào mục Console, copy phần code trong file 'cheatCode.js', paste vào và Enter
  - B4: Copy phần output, đó là hàm để chạy lần sau

  ![Chrome DevTools](img/out.PNG)
  <p align = "center"><b>Mục Console khoanh màu đỏ, phần hàm cần copy tô màu vàng nhạt</b></p>

  - B5: Copy xong thì nộp bài đi hoặc không thích thì tắt đi cũng được
  
#### *_- Cách 2 (Dành cho những bạn lười, không muốn dùng não, nhưng muốn dùng được cách này hãy bật 100% công suất não lên và đọc kĩ!!!)_*
  - B1: Vào 'cheatCode_v2.js', copy phần code ra
  - B2: Vào study.hanoi.edu.vn, vào một đề bất kì, bật Chrome DevTools, vào mục console, paste đoạn code này vào
  - B3: Chỉnh sửa đoạn code **_(Cần đọc kĩ đây này, nhất là mấy bạn chưa vọc vạch mấy cái này bao giờ)_**:
    - B3.1: Vào tab 'Elements', ở hàng trên cùng, bấm vào mũi tên tận cùng bên trái
    - B3.2: Di chuyển chuột vào một đáp án (không bấm vào), ghi nhớ phần value được gạch đỏ trong ảnh
    - B3.3: Làm tương tự với 3 đáp án còn lại (phải trong cùng 1 câu hỏi), tìm ra giá trị value nhỏ nhất trong 4 đáp án
    - B3.4: Vào lại tab 'Console', thay số 66 ở dòng 'MinID = 66;' thành số nhỏ nhất bạn vửa tìm được. Ví dụ có bạn tìm được 4 ID là 12567, 12568, 12569, 12570 thì cần thay thành 'MinID = 12567;' (nhớ paste lại vào đâu đó nữa, sẽ cần ở bước 3.13)
    - B3.5: Bấm Enter
    - B3.6: Trở về tab 'Element', nháy đúp chuột vào phần '<script>...</script>' được gạch đỏ trong ảnh, nó là cái tag script thứ 2 từ dưới lên
    - B3.7: Bấm chuột phải vào phần lệnh vừa hiện ra, chọn 'Edit as HTML'
    - B3.8: Tìm đến hàm 'SendUserTestResultToServer' (trong ảnh)
    - B3.9: Copy từ dòng '$.ajax...' đến '});' (trong ảnh, chỗ này trước hàm 'SaveUserAnswer' một ít), paste chỗ đó vào notepad
    - B3.10: Tìm dòng 'SubmitType: type', sửa thành 'SubmitType: 2' và xóa dòng 'ClearStore();'
    - B3.11: Trở về 'Console', paste phần code vừa sửa vào và Enter
    - B3.12: Đợi vài giây sẽ có kết quả, copy toàn bộ câu trả lời sai, paste vào đâu đó
    - B3.13: Lấy phần code ở B3.4 sửa runtime thành 2, sửa 'wrong = "... " ' thành 'wrong = "những-câu-sai-ở-b3.12" ' (Nhớ có dâu ngoặc kép). Ví dụ: wrong = "Câu 2. C, Câu 3. B, Câu 5. C"
    - B3.14: Enter và paste phần code ở B3.9 vào và Enter tiếp
    - B3.15: Lặp lại B3.13 cho đến runtime = 4 (mỗi lần làm thì runtime tăng lên 1), vẫn tiếp tục lấy những đáp án sai thay thế vào wrong
    - B3.16: Ở lần chạy thứ 4, copy toàn bộ phần 'SaveUserAnswer('xxxxx','yyyyy');' màu đỏ, cheat code dùng cho các bạn khác
    
   
  
### 2. Cách cheat
  - B1: Đăng nhập, vào một đề (đúng với đề của hàm đã tìm được)
  - B2: Bấm F12 hoặc Ctrl + Shift + I để bật Chrome DevTools
  - B3: Paste phần hàm vào Console (hàm tự tạo hoặc lấy trong thư mục 'cheat code'), bấm Enter
  
  ***Lưu ý: Làm càng nhanh càng tốt!!!***
