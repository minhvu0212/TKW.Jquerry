# Hướng dẫn chạy Bài 2 & Bài 5

## 1. Không cần cài đặt gì cả (CDN)

Cả hai bài đều dùng **CDN**, nên:

- Không cần Node.js
- Không cần npm / yarn
- Không cần Vite / Webpack
- Chỉ cần trình duyệt (Chrome, Edge, Firefox...)

---

## 2. Cách chạy nhanh nhất

### Cách A: Mở trực tiếp file HTML (đơn giản nhất)

1. Vào thư mục bài tập:
   - Bài 2: `BaiTap2_MSSV_HoTen_BakeryTailwind/html/index.html`
   - Bài 5: `BaiTap5_MSSV_HoTen_ShopVue/html/index.html`

2. **Double-click** file `index.html` → mở bằng trình duyệt.

> Lưu ý: Một số trình duyệt chặn local file khi load CDN. Nếu bị lỗi, dùng Cách B.

### Cách B: Dùng Live Server (khuyên dùng)

#### Nếu bạn dùng VS Code / Cursor:

1. Cài extension **Live Server** (bởi Ritwick Dey)
2. Mở thư mục bài tập
3. Chuột phải vào `html/index.html` → **Open with Live Server**
4. Trình duyệt sẽ tự mở `http://127.0.0.1:5500/...`

#### Nếu bạn dùng terminal (có Python):

```bash
# Vào thư mục html của bài
cd BaiTap2_MSSV_HoTen_BakeryTailwind/html
python -m http.server 8000

# Sau đó mở trình duyệt: http://localhost:8000
```

Hoặc với Node:

```bash
npx serve .
```

---

## 3. Kiểm tra từng bài

### Bài 2 – Tailwind Bakery

- Thu nhỏ màn hình → icon hamburger hiện ra
- Click hamburger → menu mobile mở/đóng
- Form focus → viền màu amber
- Responsive 3 kích thước: mobile (~375px), tablet (~768px), desktop (~1280px)

### Bài 5 – Vue Shop

- Thêm sản phẩm vào giỏ → số lượng ở header + danh sách + tổng tiền cập nhật **ngay lập tức** (không reload)
- Xóa sản phẩm → cập nhật tức thì
- Gõ từ khóa tìm kiếm → danh sách lọc realtime
- Mở DevTools → xem reactivity hoạt động

---

## 4. Đổi tên thư mục theo MSSV + Họ tên

Ví dụ:

```
BaiTap2_21520123_NguyenVanA_BakeryTailwind
BaiTap5_21520123_NguyenVanA_ShopVue
```

Chỉ cần rename folder là được.

---

## 5. Ảnh

Hiện đang dùng ảnh Unsplash (cần internet).  
Nếu muốn offline, tải ảnh về thư mục `images/` rồi sửa đường dẫn trong HTML/JS.
