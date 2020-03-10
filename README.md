# Giảm thời gian làm bài cho study.hanoi.edu.vn
## I/ Giới thiệu
- Đầu tiên, đây là một sản phẩm nho nhỏ được tạo ra bởi sự rảnh rỗi, một chút lười biến cùng với một ý tưởng đột ngột vào một buổi trưa khá-là-đẹp-trời 
- Bạn có thể lấy được toàn bộ đáp án của một đề bất kì trên trang web làm bài trực tuyến study.hanoi.edu.vn hoặc đơn giản chỉ là được rất nhiều con 10
- Khuyến khích sử dụng với mục đích tích cực (lấy đáp án tham khảo, học tập). Có thể dùng với việc giải trí, đua top, khoe profile với bạn bè hay cô bắt làm ??... Đương nhiên là làm như vậy tốn thời gian vô ích, không mang lại mấy kiến thức nên bạn nên suy nghĩ trước khi sử dụng vào những mục đích như vậy!!
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
    - B3.1: Ở tab 'Elements', tìm đến dòng '<script>...</script>' thứ 2 từ dưới lên(trong ảnh), bấm đúp chuột vào

    ![](img/script.PNG)

    - B3.2: Bấm chuột phải vào phần lệnh vừa hiện ra, chọn 'Edit as HTML'
    - B3.3: Tìm đến hàm 'SendUserTestResultToServer' (trong ảnh)
    
    ![](img/func.PNG)
    
    - B3.4: Copy từ dòng '$.ajax...' đến '});' (trong ảnh, chỗ này trước hàm 'SaveUserAnswer' một ít), paste chỗ đó vào notepad
    
    ![](img/func2.PNG)
     
    - B3.5: Tìm dòng 'SubmitType: type', sửa thành 'SubmitType: 2' và xóa dòng 'ClearStore();' (Giữ đoạn code này lại để tái sử dụng)
    - B3.6: Vào tab 'Console'(đã có sẵn code trong file 'cheatCode_v2.js') bấm Enter. Tiếp tục lấy đoạn code ở B3.5 paste vào, Enter
    - B3.7: Đợi vài giây sẽ có kết quả, tiếp tục vào 'Console', chạy dòng lệnh trong 'getWrongAnswers.js' hay chính là dòng dưới đây( _Lưu ý: Một số đề sẽ được 10 luôn!_)
    
    ```javascript
    localStorage.setItem("wrong",document.getElementById("lblFalseAnser").innerText);
    ```
    - B3.8: Lặp lại B3.6 cho đến lần thứ 4 
    - B3.9: Ở lần chạy thứ 4 (aka cuối cùng), copy toàn bộ phần cheat code, dùng cho các bạn khác, có thể tham khảo đáp án đã được tick đúng
    
   
  
### 2. Cách cheat
  - B1: Đăng nhập, vào một đề (đúng với đề của hàm đã tìm được)
  - B2: Bấm F12 hoặc Ctrl + Shift + I để bật Chrome DevTools
  - B3: Paste phần hàm vào Console (hàm tự tạo hoặc lấy trong thư mục 'cheat code'), bấm Enter

_- Note (Dành cho các bạn chăm chỉ muốn xem đáp án để học hỏi): Có thể xóa dòng 'SubmitTestResultClick()', vào file 'showAnswerKey.js' và copy vào console, bấm Enter, toàn bộ đáp án đúng sẽ được chọn và nộp bài như bình thường_
  
  ***Lưu ý: Làm càng nhanh càng tốt!!!***
