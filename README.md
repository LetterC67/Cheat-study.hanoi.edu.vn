# Lấy đáp án cho study.hanoi.edu.vn
## :warning: CHÚ Ý: DO WEBSITE ĐÃ CẬP NHẬT NÊN CÁC BẠN KHÔNG THỂ SỬ DỤNG CODE ĐƯỢC NỮA! ĐANG KHẮC PHỤC, CÁC BẠN CHÚ Ý THEO DÕI REPO NÀY ĐỂ CÓ THÔNG TIN SỚM NHẤT
## N/ Thông báo
- **CH 07/04/2020 GMT+7**:
   + Chỉ vừa một buổi thông báo ngừng hỗ trợ mà mình đã nhận được nhiều thông tin phản hồi từ các bạn. Với một số lí do mà không tiện nói ra mình quyết định sẽ tiếp tục lại dự án. 
   + Thật sự khi tiếp tục, mình chỉ mong các bạn đừng gian lận nhiều quá. Một vị hiền triết phương Đông đã có câu: “Cần lao vi thiên tủ, năng cán dĩ đắc thực, vô vi thực đb, thực c** thế cho nhanh” - “Ở xã hội này, phải có làm thì mới có ăn, không làm thì có mà ăn đb nhá, ăn c**, thế cho nhanh”. Các bạn mà gian lận nhiều quá sẽ nhận lại hậu quả không mấy tốt đẹp đâu!
   + Mình sẽ cố gắng hoàn thiện nhanh nhất có thể, các bạn chú ý theo dõi các thông báo để có được cập nhật mới nhất!
   + **FROM _♕RED♚QUEEN♕_  !**
   
- **SA 07/04/2020 GMT+7:**
   - Đầu tiên mình xin gửi lời cảm ơn các bạn đã tin tưởng và sử dụng code của mình!
   - Qua đợt cập nhật hệ thông vừa rồi của study.hanoi.edu.vn, code của mình đã không còn sử dụng được nữa. Chính vì vậy, mình đã bắt tay vào tìm ra hướng giải quyết, viết ra code mới. Tuy nhiên, trong quá trình đó, mình đã để ý thấy hệ thống đã có nhiểu thay đổi tích cực về giao diện,... và trong đó có cả phần hiện đáp án rất chi tiết, đầy đủ, vô cùng tiện lợi cho các bạn tham khảo do đó code của mình gần như không còn tác dụng mấy.
   - Mình quyết định sẽ tạm thời ngừng lại dự án (vì mình buồn ngủ quá rồi và ngủ dậy còn nhiều việc khác phải làm nữa) và mình vẫn sẽ để code ở đây coi như kỉ niệm một thời học sinh nông nổi :smile: Nếu các bạn có yêu cầu hay có điều gì muốn nói thì hãy gửi vào phần "Issues" hoặc về email của mình. Mình vẫn sẽ tiếp nhận và có thể khởi động lại dự án nếu có yêu cầu (hợp lí)
   + **FROM _♕RED♚QUEEN♕_  !**

## I/ Giới thiệu
- Đầu tiên, đây là một sản phẩm nho nhỏ được tạo ra bởi sự rảnh rỗi, một chút lười biến cùng với một ý tưởng đột ngột vào một buổi trưa khá-là-đẹp-trời. Nó được tạo ra với ban đầu mục đích lấy đáp án đúng sau khi làm bài xong (vì hệ thống khá là bất cập khi không hiện đáp án)
- Bạn có thể lấy được toàn bộ đáp án của một đề bất kì trên trang web làm bài trực tuyến study.hanoi.edu.vn hoặc đơn giản chỉ là được rất nhiều con 10
- Khuyến khích sử dụng với mục đích tích cực (lấy đáp án tham khảo, học tập). Có thể dùng với việc giải trí, đua top, khoe profile với bạn bè??... Đương nhiên là làm như vậy tốn thời gian vô ích, không mang lại mấy kiến thức nên bạn nên suy nghĩ trước khi sử dụng vào những mục đích như vậy!!
- Một lần nữa xin nhắc lại là **gian lận KHÔNG HỀ tốt một tí nào cả**(mặc dù có chữ **cheat** đấy vì đặt như thế khá là nhanh và ngắn gon!) và bạn phải tự chịu trách nhiệm cho việc gian lận khi làm bài của mình . Bạn cũng không được quá lạm dụng, phải tự mình tìm hiểu, làm bài, chỉ dùng code để **xem đáp án để học tập**, thi thoảng lấy 1, 2 điểm 10 cho vui cũng được (không khuyến khích) nhưng mà nếu giáo viên đã bảo hoặc các bạn đang tập trung ôn thi làm thì ~~**tuyệt đối không nhé!!!**~~

**:x: KHÔNG DÙNG VÀO MỤC ĐÍCH XẤU!!! :x:**

- Đừng quên đọc kĩ hướng dẫn trước khi sử dụng!
## II/ Cách sử dụng
### :warning: :warning: Nếu có thắc mắc, hãy vào phần "Issues"hoặc gửi về email nhé! :warning: :warning:
### 0. Tính năng mới!
   - Để thuận tiện cho việc học, ôn tập của các bạn, mình đã làm thêm chức năng tải đề cùng đáp án xuống. Khi bạn chạy code trong file "downloadAnswerKey.js", (chỉ khi bạn chạy các code để lấy đáp án, _**mời bạn đọc phần dưới để rõ hơn!**_), hệ thống sẽ tải file "dap_an.txt" xuống gồm đề và đáp án. Bạn có thể dúng làm tư liệu học tập hoặc gửi cho bạn bè tham khảo dễ dàng hơn! 
   - File "showAnswerKey.js" đã không còn nữa vì bạn chỉ cần bấm F5 sau khi chạy các code lấy đáp án là đáp án được chọn!
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
  - B2: Vào study.hanoi.edu.vn, vào một đề bất kì, bật Chrome DevTools, vào mục console, paste đoạn code trong file "cheatCode_v2.js" vào
   
   **_:exclamation: :exclamation: :exclamation: Lưu ý: Trước khi đến với bước 3, hãy chạy dòng lệnh dưới đây để đảm bảo khả năng thành công!_**
  ```javascript
  ClearStore();
  ```
  - B3: Chỉnh sửa đoạn code **_(Cần đọc kĩ đây này, nhất là mấy bạn chưa vọc vạch mấy cái này bao giờ)_**:
    - B3.1: Ở tab 'Elements', tìm đến dòng '<script>...</script>' thứ 2 từ dưới lên(trong ảnh), bấm đúp chuột vào (Nếu không thấy, hãy bấm đúp chuột vào dòng '\<body>...\</body>')

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
    - B3.9: Ở lần chạy thứ 4 (aka cuối cùng), copy toàn bộ phần cheat code, dùng cho các bạn khác hoặc có thể gửi về email để up lên đây, các đáp án được tick đúng hoàn toàn (theo như hệ thống thôi!) cho các bạn tham khảo! Bạn có thể chạy code "downloadAnswerKey.js" để tải dáp án về!
    
    __*:tv: :tv: Video hướng dẫn: https://drive.google.com/file/d/1fxACUJK5tv3L6m-eY56s1mlthyBldjah/preview*__
   
  
### 2. Cách hiện đáp án sử dụng hàm có sẵn (chỉ áp dụng cho khối 9)
  - B1: Đăng nhập, vào một đề (đúng với đề của hàm đã tìm được hoặc ở trong thư mục cheat code. Ví dụ tên file là "anh_de_3.txt" thì dùng cho đề anh số 3)
  - B2: Bấm F12 hoặc Ctrl + Shift + I để bật Chrome DevTools
  - B3: Paste phần hàm vào Console (hàm tự tạo hoặc lấy trong thư mục 'cheat code'), bấm Enter

_**- Chú ý!!: Khi sử dụng code thì hệ thống sẽ nộp bài luôn. Trước khi chạy code thì có thể xóa đoạn "SubmitTestResultClick()" để không cho hệ thống nộp bài luôn. Tiếp theo bấm F5 để refresh lại trang, các đáp án đúng sẽ được chọn! **_
  
### 3. FAQ
   - Nếu như một đề chỉ cần chạy "cheatCode_v2.js" một lần là được 10, vậy làm thế nào để lấy đáp án ?
     + Bạn cần vào để đó và chỉ cần chạy lại "cheatCode_v2.js" một lần. Sau đó bấm F5 để refresh trang, các đáp án đúng sẽ được chọn
## III/ Liên hệ
   - Email: congtytotovietnam@gmail.com
