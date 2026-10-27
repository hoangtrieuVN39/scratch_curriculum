# Giáo án: AI với Python — Buổi 2
## Người phân loại tin nhắn câu lạc bộ (Dành cho Học sinh THCS)

> **Hình thức học tập:** 100% Thực hành Cá nhân trên máy tính (Google Colab / Jupyter Notebook).  
> **Lứa tuổi:** Học sinh THCS (Lớp 6–9, 11–15 tuổi).  
> **Thời lượng:** 90 phút.  
> **Mục tiêu:** Mỗi học sinh hiểu bản chất bài toán phân loại văn bản (Text Classification), tự xây dựng và huấn luyện mô hình Machine Learning với thư viện `scikit-learn`, nhận diện được giới hạn và tư duy thiết kế của sản phẩm AI.

---

### 3.1. Chuẩn đầu ra và Lịch trình 90 phút

#### Chuẩn đầu ra cá nhân:
- **Kiến thức:** Hiểu được sự khác biệt giữa mô hình phân loại (chọn nhãn/ngăn) và mô hình sinh ngôn ngữ (chatbot); hiểu cách máy tính biến văn bản thành con số qua bảng đếm từ (Bag of Words / `CountVectorizer`).
- **Kỹ năng:** Mỗi học sinh tự mở notebook, chạy và điều chỉnh các ô code T0 đến T6; tự định nghĩa được hàm `phan_loai_tin_nhan(cau)` nhận chuỗi văn bản và trả về tên nhãn; đo lường và báo cáo tỷ lệ chính xác trên 30 câu giữ riêng.
- **Tư duy phản biện:** Giải thích được vì sao câu có nhiều ý định hoặc câu nằm ngoài phạm vi huấn luyện (viết tắt, tiếng lóng, câu trò chuyện) vẫn bị máy gán một nhãn, từ đó nhận ra giới hạn của mô hình và đưa ra giải pháp cải tiến sản phẩm.

#### Phân bổ thời gian (90 phút):

| Phút | Hoạt động cá nhân | Ô Notebook | Trọng tâm học sinh |
|---|---|---|---|
| **0–8** | Kết nối bài cũ, thử thách phân loại bằng tay | **T0** | Thử đóng vai "người phụ việc" xếp thư vào 3 ngăn |
| **8–20** | Thống nhất quy ước nhãn, xem tập dữ liệu | **T1** | Tự tạo 3 câu mới trên giấy/vở nháp |
| **20–32** | Biến chữ thành số (Bảng đếm từ) | **T2** | Điền bảng đếm từ, phát hiện mất thứ tự từ |
| **32–45** | Ghép dây chuyền (Pipeline) & Cho máy học (`fit`) | **T3** | Tự viết dòng lệnh huấn luyện với tập học |
| **45–58** | Viết hàm dùng thử cá nhân & Thử câu mới | **T4** | Tự hoàn thiện hàm `phan_loai_tin_nhan(cau)` |
| **58–70** | Chấm điểm mô hình trên 30 câu giữ riêng | **T5** | Đếm số câu đúng, phân tích câu máy dự đoán sai |
| **70–83** | Thử thách câu khó & Khám phá giới hạn AI | **T6** | Tự test câu 2 ý định, teencode, câu troll |
| **83–90** | Báo cáo kết quả cá nhân & Điền phiếu ra cửa | **Ô văn bản** | Đúc kết bài học và gửi phiếu ra cửa |

---

### 3.2. Phút 0–8: Hòm thư của câu lạc bộ (T0)

#### 🎯 Mục tiêu:
Kết nối với Buổi 1 (phân loại ảnh chữ số viết tay), dẫn dắt học sinh bước vào bài toán phân loại văn bản (tin nhắn câu lạc bộ) qua tình huống thực tế.

#### 💬 Lời dẫn của Giáo viên:
> *"Ở buổi trước, các bạn đã dạy máy tính nhìn ảnh và đoán chữ số. Hôm nay, câu lạc bộ của trường chúng ta nhận được hàng trăm tin nhắn mỗi ngày từ các bạn học sinh khác. Chúng ta muốn tạo ra một 'người phụ việc ảo' để tự động xếp từng tin nhắn vào đúng ngăn cho ban cán sự xử lý. Lưu ý: Người phụ việc này **chưa trả lời thay con người** như ChatGPT, mà nhiệm vụ quan trọng nhất lúc này là: **chọn đúng ngăn**!"*

#### 📮 Hoạt động phân loại bằng tay:
Giáo viên chiếu hoặc viết 3 ngăn lên bảng:
1. **Hỏi lịch** (Ngăn 1)
2. **Đăng ký tham gia** (Ngăn 2)
3. **Hỏi dụng cụ** (Ngăn 3)

Giáo viên đọc nhanh 3 tin nhắn, mỗi học sinh suy nghĩ độc lập và giơ ngón tay (1, 2 hoặc 3 ngón) để chọn ngăn:
- *"Buổi sinh hoạt bắt đầu lúc mấy giờ?"* ➜ Giơ 1 ngón (Hỏi lịch)
- *"Em muốn gia nhập câu lạc bộ tin học."* ➜ Giơ 2 ngón (Đăng ký tham gia)
- *"Có cần mang laptop đi học không ạ?"* ➜ Giơ 3 ngón (Hỏi dụng cụ)

#### ❓ Câu hỏi kết nối tư duy:
- **Câu hỏi:** *"Ở buổi 1, đầu vào là ảnh, đầu ra là chữ số (0–9). Lần này trong bài toán tin nhắn, đầu vào của máy là gì, và nhãn đầu ra là gì?"*
- **Học sinh trả lời:** Đầu vào là một chuỗi văn bản (tin nhắn); đầu ra là tên nhãn (1 trong 3 ngăn).
- **Thao tác máy tính:** Mỗi học sinh mở file notebook Buổi 2 trên máy của mình, chạy ô **T0** để khởi động môi trường.

---

### 3.3. Phút 8–20: Gắn nhãn nhất quán (T1)

#### 🎯 Mục tiêu:
Học sinh hiểu được nguyên tắc "Rác vào thì rác ra" (Garbage In, Garbage Out) trong AI: Dữ liệu huấn luyện do con người chuẩn bị phải cực kỳ nhất quán và rõ ràng.

#### 📋 Quy ước 3 nhãn chuẩn:

| Tên Nhãn | Phạm vi các câu thuộc nhãn này | Ví dụ minh họa |
|---|---|---|
| **Hỏi lịch** | Hỏi về ngày, giờ, thời lượng, địa điểm hoặc thông báo thay đổi lịch sinh hoạt. | *"Mai câu lạc bộ gặp nhau ở phòng nào?"* |
| **Đăng ký tham gia** | Xin gia nhập nhóm, hỏi thủ tục, điều kiện, sửa đổi hoặc hủy đơn đăng ký. | *"Lớp 7 có được nộp đơn tham gia không ạ?"* |
| **Hỏi dụng cụ** | Hỏi về thiết bị, tập vở, phần mềm cần cài đặt hoặc mượn của trường. | *"Hôm nay có cần mang theo bảng vẽ điện tử không?"* |

#### 💬 Lời thoại giáo viên:
> *"Đáp án để dạy máy học đều do con người chuẩn bị. Nếu bạn gắn câu này là 'Hỏi lịch', nhưng bạn khác lại coi là 'Đăng ký', mô hình AI sẽ nhận những ví dụ mâu thuẫn và bị 'loạn'. Trước khi dạy máy, chúng ta phải thống nhất tuyệt đối luật chia ngăn."*

#### ✍️ Hoạt động thực hành cá nhân (4 phút):
- Mỗi học sinh tự mở vở nháp hoặc ô ghi chú cá nhân, tự viết ra **3 câu tin nhắn hoàn toàn mới** theo phong cách của riêng mình (1 câu Hỏi lịch, 1 câu Đăng ký, 1 câu Hỏi dụng cụ).
- Ghi rõ nhãn dự kiến bên cạnh.
- **Giữ lại 3 câu này** để làm dữ liệu thử nghiệm cá nhân ở phút 45 (chưa đưa vào code lúc này).

#### 🧠 Thử thách tư duy:
Giáo viên chiếu câu: *"Mai học lúc mấy giờ và cần mang gì?"*  
Hỏi học sinh: *"Câu này có thể xếp dứt khoát vào một ngăn duy nhất được không?"*  
**Chốt kiến thức:** Câu này chứa **hai ý định** cùng lúc (vừa hỏi lịch, vừa hỏi dụng cụ). Thiết kế 3 ngăn đơn lẻ chưa thể xử lý hoàn hảo câu này. Đây là giới hạn thực tế của bài toán phân loại đơn nhãn mà các kỹ sư AI thường gặp!

#### 💻 Thao tác học sinh:
Chạy ô **T1** trong notebook để quan sát bộ dữ liệu mẫu: gồm **60 câu học** (mỗi nhãn 20 câu) và **30 câu kiểm tra** (mỗi nhãn 10 câu). Học sinh không cần gõ lại các câu này.

---

### 3.4. Phút 20–32: Văn bản trở thành những con số (T2)

#### 🎯 Mục tiêu:
Hiểu được nguyên lý hoạt động của `CountVectorizer` (kỹ thuật Bag of Words - Chiếc túi đếm từ): Biến văn bản chữ cái thành các vector số để máy tính tính toán được.

#### 💬 Lời dẫn của Giáo viên:
> *"Máy tính không biết đọc chữ như chúng ta; nó chỉ hiểu các con số. Ở buổi trước, ảnh đen trắng vốn dĩ đã là ma trận các điểm sáng tối từ 0 đến 255. Vậy làm sao biến một câu văn thành những con số? Cách đơn giản nhất: Lập danh sách các từ vựng xuất hiện, và đếm xem mỗi từ xuất hiện bao nhiêu lần trong câu!"*

#### 📊 Bài tập điền bảng cá nhân:
Học sinh tự điền vào bảng số với 3 từ vựng `bút`, `giấy`, `mang`:

| Câu văn bản | Số từ `bút` | Số từ `giấy` | Số từ `mang` | Vector số máy nhận |
|---|:---:|:---:|:---:|:---:|
| *"mang bút"* | 1 | 0 | 1 | `[1, 0, 1]` |
| *"mang giấy"* | 0 | 1 | 1 | `[0, 1, 1]` |
| *"mang bút bút"* | 2 | 0 | 1 | `[2, 0, 1]` |

#### 💻 Thao tác học sinh:
Chạy ô **T2** trong notebook cá nhân để xem `CountVectorizer` của Python tự động trích xuất các từ vựng và tạo ma trận đếm từ cho một vài câu ví dụ.

#### ❓ Câu hỏi thảo luận phản biện:
- **Câu hỏi:** *"Cách đếm từ này đã giúp máy hiểu được ngữ pháp và thứ tự của câu chưa? Ví dụ câu 'mèo đuổi chó' và 'chó đuổi mèo' thì bảng đếm từ ra kết quả thế nào?"*
- **Học sinh đúc kết:** Cả 2 câu đều có 1 từ `mèo`, 1 từ `đuổi`, 1 từ `chó` ➜ Vector đếm từ hoàn toàn giống hệt nhau! Bag of Words **làm mất thông tin về thứ tự từ**. Tuy đơn giản, nhưng với các câu ngắn trong câu lạc bộ, phương pháp này vẫn mang lại hiệu quả đáng kinh ngạc!

---

### 3.5. Phút 32–45: Ghép dây chuyền và Cho máy học (T3)

#### 🎯 Mục tiêu:
Hiểu khái niệm `Pipeline` trong thư viện `scikit-learn` (dây chuyền tự động hóa nối từ khâu chuyển chữ sang số đến khâu phân loại) và thực hiện lệnh `fit` để mô hình học tập.

#### 🔄 Sơ đồ dây chuyền (Pipeline):
```text
Tin nhắn (Text) ──▶ [CountVectorizer] ──▶ Bảng đếm số ──▶ [MultinomialNB] ──▶ Nhãn dự đoán
```

#### 💬 Lời dẫn của Giáo viên:
> *"Thay vì tự tay đếm từ rồi bê bảng số sang cho thuật toán phân loại, Python có một công cụ tuyệt vời gọi là Pipeline (Dây chuyền). Nó kết nối 2 công đoạn lại thành một đường thẳng duy nhất. Thuật toán phân loại chúng ta dùng hôm nay tên là Multinomial Naive Bayes — một mô hình tính toán xác suất xem từ vựng nào hay đi cùng nhãn nào."*

#### 💻 Thao tác học sinh:
Mỗi học sinh tự viết và thực thi ô code **T3**:

```python
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import make_pipeline

# Tạo dây chuyền xử lý gồm 2 bước: Đếm từ -> Phân loại Naive Bayes
mo_hinh = make_pipeline(CountVectorizer(), MultinomialNB())

# Huấn luyện mô hình CHỈ trên tập học (X_hoc, y_hoc)
mo_hinh.fit(X_hoc, y_hoc)
print("Đã huấn luyện xong mô hình!")
```

#### ⚠️ Cảnh báo gian lận dữ liệu (Data Leakage):
- **Câu hỏi giáo viên:** *"Có được cho luôn cả 30 câu kiểm tra vào lệnh `fit` để mô hình học nhiều hơn rồi mới chấm điểm không?"*
- **Học sinh trả lời:** Tuyệt đối không! Giống như việc học sinh biết trước đề thi học kỳ, mô hình học vẹt sẽ đạt điểm tối đa giả tạo nhưng khi gặp câu thực tế ngoài đời sẽ sai be bét. Dữ liệu kiểm tra phải được giữ kín độc lập!
- **Nghỉ mắt 30 giây:** Học sinh nhìn ra xa màn hình để thư giãn mắt sau khi hoàn thành T3.

---

### 3.6. Phút 45–58: Viết hàm dự đoán và Dùng thử cá nhân (T4)

#### 🎯 Mục tiêu:
Mỗi học sinh tự viết được một hàm Python hoàn chỉnh `phan_loai_tin_nhan(cau)` có khả năng nhận một câu mới và trả về tên tiếng Việt của ngăn chứa; kiểm thử với 3 câu cá nhân đã tạo ở phút 8.

#### 💻 Thao tác học sinh:
Học sinh tự viết hàm vào ô **T4**:

```python
def phan_loai_tin_nhan(cau):
    # Đưa câu vào danh sách [cau], mô hình dự đoán và lấy phần tử đầu tiên [0]
    ma_nhan = mo_hinh.predict([cau])[0]
    # Tra từ điển để trả về tên nhãn tiếng Việt thân thiện
    return ten_nhan[ma_nhan]
```

#### 🔍 Mổ xẻ chi tiết cú pháp quan trọng:
1. **Tại sao lại là `[cau]`?** Vì mô hình của `scikit-learn` luôn mong đợi một danh sách nhiều câu. Dù chỉ có 1 câu, ta vẫn phải bọc trong ngoặc vuông `[cau]` để biến nó thành danh sách 1 phần tử.
2. **Tại sao lại có `[0]`?** Vì kết quả trả về cũng là một danh sách dự đoán. Ta dùng chỉ số `[0]` để lấy nhãn của câu đầu tiên.
3. **Bảng tra `ten_nhan`:** Chuyển mã số kỹ thuật (`0, 1, 2`) thành tên nhãn rõ ràng (*"Hỏi lịch"*, *"Đăng ký tham gia"*, *"Hỏi dụng cụ"*).

#### 🧪 Thử nghiệm 3 câu cá nhân:
- Mỗi học sinh lần lượt gọi hàm với 3 câu mình đã tự nghĩ ra ở phút 8:
  ```python
  print(phan_loai_tin_nhan("Mai mấy giờ tập trung ạ?"))
  ```
- Đối chiếu xem máy đoán có khớp với nhãn nháp ban đầu không.
- Thử thay đổi cách diễn đạt (ví dụ: đổi *"tập trung"* thành *"có mặt"*, *"bắt đầu"*) và xem máy phản ứng ra sao.

---

### 3.7. Phút 58–70: Chấm điểm trên 30 câu giữ riêng (T5)

#### 🎯 Mục tiêu:
Học sinh tự chạy kiểm thử trên 30 câu giữ riêng (Test set), tính tỷ lệ chính xác (Accuracy) và phân tích các trường hợp máy đoán sai nếu có.

#### 💻 Thao tác học sinh:
Mở và chạy ô **T5** để mô hình tự động dự đoán toàn bộ 30 câu trong `X_kiem_tra`, sau đó so sánh với đáp án chuẩn `y_kiem_tra`.

```python
du_doan = mo_hinh.predict(X_kiem_tra)
so_cau_dung = (du_doan == y_kiem_tra).sum()
tong_so_cau = len(y_kiem_tra)

print(f"Kết quả kiểm tra: {so_cau_dung}/{tong_so_cau} câu đúng (Tỷ lệ: {so_cau_dung/tong_so_cau * 100:.1f}%)")
```

#### 📝 Học sinh tự ghi chép vào notebook:
- Số câu đúng tổng thể: `.../30`.
- Số câu đúng của từng ngăn (Lịch: `.../10`, Đăng ký: `.../10`, Dụng cụ: `.../10`).
- Ghi lại 1 câu bị đoán sai (nếu có) và thử suy nghĩ xem từ khóa nào đã đánh lừa mô hình.

#### 🧠 Đúc kết tư duy kỹ sư AI:
- **Câu hỏi giáo viên:** *"Nếu mô hình của bạn đạt 30/30 câu đúng (100%), bạn đã có thể tự tin giao toàn bộ hòm thư thật của trường cho nó tự chạy mà không cần người giám sát chưa?"*
- **Học sinh đúc kết:** **Chưa thể!** 30 câu này là do giáo viên tự soạn, các câu đều rõ ràng, chuẩn ngữ pháp. Ngoài đời thực, học sinh gửi tin nhắn viết tắt, sai chính tả, câu đùa vui hoặc nhiều ý định. Điểm số 100% trên tập nhỏ không chứng minh mô hình hoàn hảo trong mọi hoàn cảnh!

---

### 3.8. Phút 70–83: Thử thách giới hạn của "Người phụ việc" (T6)

#### 🎯 Mục tiêu:
Học sinh tự trải nghiệm và phân tích 6 trường hợp câu khó kinh điển để hiểu sâu sắc bản chất và giới hạn của AI phân loại văn bản.

#### 🧪 Bảng 6 câu thử thách trong T6:

| # | Câu tin nhắn thử nghiệm | Dự đoán nhãn của học sinh | Máy sẽ phản ứng thế nào? | Bài học rút ra |
|---|---|---|---|---|
| 1 | *"Em muốn ghi danh vào nhóm, cần làm thủ tục gì?"* | Đăng ký tham gia | Máy đoán đúng nhờ các từ *"ghi danh"*, *"thủ tục"*. | Từ đồng nghĩa mới nhưng có chung ngữ cảnh với dữ liệu học. |
| 2 | *"Mình muốn đăng ký, mà lịch sinh hoạt là hôm nào?"* | Không xác định | Máy bắt buộc phải chọn 1 trong 3 nhãn (khó lường). | **Câu 2 ý định:** Thiết kế phân loại đơn nhãn không đáp ứng được. |
| 3 | *"Mình không hỏi lịch, mình muốn biết cần mang gì."* | Hỏi dụng cụ | Máy có thể bị từ *"lịch"* đánh lừa hoặc đoán sai. | **Từ phủ định:** Bag of Words đếm từ rời rạc nên dễ bị bẫy từ phủ định. |
| 4 | *"Hôm nay trời đẹp quá đi chơi thôi!"* | Ngoài phạm vi | Máy vẫn ép vào 1 trong 3 nhãn! | **Thiếu cơ chế từ chối:** Mô hình chưa có khả năng nói *"Tôi không biết"*. |
| 5 | *"zzzx qqqv blabla"* | Vô nghĩa | Máy vẫn chọn bừa 1 nhãn theo xác suất nền! | Khi không có từ nào trong từ điển, máy chọn nhãn xuất hiện nhiều nhất. |
| 6 | *"mai hoc may gio vay"* | Hỏi lịch (teencode) | Máy có thể không nhận ra do câu học có dấu tiếng Việt. | **Viết không dấu:** Dữ liệu học có dấu không tự hiểu được từ không dấu. |

#### 💬 Lời chốt quan trọng của Giáo viên:
> *"Máy trả ra một nhãn không có nghĩa là câu đó thật sự thuộc về nhóm đó. Trong mô hình hôm nay, chúng ta chưa dạy máy khả năng nói 'Câu này tôi không hiểu'. Khi người dùng gửi một câu ngoài lề, vấn đề không chỉ nằm ở thuật toán, mà nằm ở **cách chúng ta thiết kế sản phẩm AI**! Một sản phẩm thông minh cần biết hỏi lại khi câu có 2 ý hoặc từ chối lịch sự khi câu nằm ngoài phạm vi."*

---

### 3.9. Phút 83–90: Báo cáo cá nhân & Phiếu ra cửa

#### 📢 Báo cáo nhanh cá nhân (3 phút):
Mời 2–3 học sinh chia sẻ nhanh:
1. Điểm số trên 30 câu giữ riêng của em là bao nhiêu?
2. Em thấy bất ngờ nhất với kết quả của câu thử thách nào ở phần T6?

#### 🎫 Phiếu ra cửa cá nhân (Exit Ticket - 4 phút):
Mỗi học sinh tự điền vào ô văn bản cuối notebook hoặc form ngắn 3 câu hỏi:

1. **Dây chuyền (Pipeline) trong bài học gồm có 2 công đoạn nào?**  
   *(Đáp án: Đếm từ biến chữ thành số `CountVectorizer` ➜ Thuật toán phân loại `MultinomialNB`).*
2. **Tại sao câu "Hôm nay trời đẹp quá" hoàn toàn không liên quan gì đến CLB mà máy vẫn gán cho nó một nhãn?**  
   *(Đáp án: Vì mô hình được lập trình để luôn chọn 1 trong 3 nhãn có xác suất cao nhất, nó chưa được trang bị cơ chế nhận diện câu ngoài phạm vi để từ chối).*
3. **Nếu muốn người phụ việc này hiểu được tin nhắn không dấu của học sinh ("mai hoc may gio"), em sẽ đề xuất cách giải quyết nào và kiểm tra ra sao?**  
   *(Đáp án: Bổ sung thêm các câu viết không dấu vào tập học, rồi thu thập một bộ câu không dấu hoàn toàn mới để kiểm tra độc lập).*

#### 💾 Lưu bài và dọn dẹp:
- Học sinh bấm `Ctrl + S` để lưu toàn bộ kết quả notebook lên Google Drive hoặc thư mục cá nhân.
- Tắt notebook trước khi ra về.
