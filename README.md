# Lấy đáp án cho study.hanoi.edu.vn
## I/ Giới thiệu
- Đầu tiên, đây là một sản phẩm nho nhỏ được tạo ra bởi sự rảnh rỗi, một chút lười biến cùng với một ý tưởng đột ngột vào một buổi trưa khá-là-đẹp-trời. Nó được tạo ra với ban đầu mục đích lấy đáp án đúng sau khi làm bài xong (vì hệ thống khá là bất cập khi không hiện đáp án)
- Bạn có thể lấy được toàn bộ đáp án của một đề bất kì trên trang web làm bài trực tuyến study.hanoi.edu.vn hoặc đơn giản chỉ là được rất nhiều con 10
- Khuyến khích sử dụng với mục đích tích cực (lấy đáp án tham khảo, học tập). Có thể dùng với việc giải trí, đua top, khoe profile với bạn bè??... Đương nhiên là làm như vậy tốn thời gian vô ích, không mang lại mấy kiến thức nên bạn nên suy nghĩ trước khi sử dụng vào những mục đích như vậy!!
- Một lần nữa xin nhắc lại là **gian lận KHÔNG HỀ tốt một tí nào cả**(mặc dù có chữ **cheat** đấy vì đặt như thế khá là nhanh và ngắn gon!) và bạn phải tự chịu trách nhiệm cho việc gian lận khi làm bài của mình . Bạn cũng không được quá lạm dụng, phải tự mình tìm hiểu, làm bài, chỉ dùng code để **xem đáp án để học tập**, thi thoảng lấy 1, 2 điểm 10 cho vui cũng được (không khuyến khích) nhưng mà nếu giáo viên đã bảo hoặc các bạn đang tập trung ôn thi làm thì ~~**tuyệt đối không nhé!!!**~~

**:x: KHÔNG DÙNG VÀO MỤC ĐÍCH XẤU!!! :x:**

- Đừng quên đọc kĩ hướng dẫn trước khi sử dụng!
## II/ Cách sử dụng
### :warning: :warning: Nếu có thắc mắc, hãy vào phần "Issues"hoặc gửi về email nhé! :warning: :warning:
### 1. Cách lấy hàm đáp án của một bài bất kì (Không đọc phần này nếu quá lười hoặc không muốn đóng góp cho cộng đồng!!!)
#### *_- Cách 1 (Dành cho những bạn chăm chỉ làm bài, nên đây là cách được khuyến nghị!)_* 
   
  - B1: Đăng nhập, chọn một đề và làm đúng 100% nhưng chưa nộp bài vội
  - B2: Bấm F12 hoặc Ctrl + Shift + I để bật Chrome DevTools

  ![Chrome DevTools](img/cdb.png)
  <p align = "center"><b>Sau khi bật Chrome DevTools</b></p>

  - B3: Vào mục Console, copy phần code trong file 'cheatCode.js', paste vào và Enter
  - B4: Copy phần output, đó là hàm để chạy lần sau (có thể chia sẻ cho các bạn hoặc gửi về email liên hệ!)

  ![Chrome DevTools](img/out.PNG)
  <p align = "center"><b>Mục Console khoanh màu đỏ, phần hàm cần copy tô màu vàng nhạt</b></p>

  - B5: Copy xong thì nộp bài đi hoặc không thích thì tắt đi cũng được
  
#### *_- Cách 2 (Dành cho những bạn không muốn tự làm bài, không khuyến khích nên hãy tự sức mình làm bài trước nhé! Muốn dùng được cách này hãy bật 100% công suất não lên và đọc kĩ!!! Lưu ý: Nếu đề đã có trong thư mục "cheat code" thì hãy chuyển xuống mục 2 ở dưới cho nhanh)_*
  - B1: Vào 'cheatCode_v2.js', copy phần code ra
  - B2: Vào study.hanoi.edu.vn, vào một đề bất kì, bật Chrome DevTools, vào mục console, paste đoạn code này vào
   
   **_:exclamation: :exclamation: :exclamation: Lưu ý: Trước khi paste đoạn code vào lần đầu tiên vầ chạy, hãy chạy lệnh dưới đây để đảm bảo khả năng thành công:_**
  ```javascript
  ClearStore();
  ```
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
    - B3.9: Ở lần chạy thứ 4 (aka cuối cùng), copy toàn bộ phần cheat code, dùng cho các bạn khác hoặc có thể gửi về email để up lên đây, các đáp án được tick đúng hoàn toàn (theo như hệ thông thôi!) cho các bạn tham khảo!
    
    __*Video hướng dẫn: https://drive.google.com/file/d/1fxACUJK5tv3L6m-eY56s1mlthyBldjah/preview*__
   
  
### 2. Cách hiện đáp án sử dụng hàm có sẵn (chỉ áp dụng cho khối 9)
  - B1: Đăng nhập, vào một đề (đúng với đề của hàm đã tìm được hoặc ở trong thư mục cheat code. Ví dụ tên file là "anh_de_3.txt" thì dùng cho đề anh số 3)
  - B2: Bấm F12 hoặc Ctrl + Shift + I để bật Chrome DevTools
  - B3: Paste phần hàm vào Console (hàm tự tạo hoặc lấy trong thư mục 'cheat code'), bấm Enter

_- Note (Khi nộp bấm Enter thì hệ thống sẽ nộp bài luôn): Có thể xóa dòng 'SubmitTestResultClick()' để không cho tự động nộp bài và bấm Enter. Tiếp tục vào file 'showAnswerKey.js' và copy vào console, bấm Enter, toàn bộ đáp án đúng sẽ được chọn và nộp bài như bình thường_
  
  ***Lưu ý: Làm càng nhanh càng tốt!!!***

## III/ Liên hệ
   - Email: congtytotovietnam@gmail.com
