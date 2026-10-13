/**
 * PhoneCase Shop - Vue.js 3 (CDN)
 * 
 * So sánh với Vanilla JS:
 * Nếu dùng Vanilla JS, mỗi lần thêm/xóa giỏ hàng phải tự querySelector + cập nhật DOM thủ công.
 * Vue tự động làm điều này nhờ reactivity — UI = function của data.
 */

const { createApp } = Vue;

createApp({
  data() {
    return {
      // Từ khóa tìm kiếm (v-model)
      tuKhoa: '',

      // Danh sách sản phẩm (tối thiểu 8)
      products: [
        {
          id: 1,
          ten: 'Ốp lưng Silicon Clear',
          anh: '../images/op-silicon.jpg',
          gia: 89000,
          moTa: 'Ốp lưng trong suốt, chống sốc, hỗ trợ sạc không dây'
        },
        {
          id: 2,
          ten: 'Ốp lưng MagSafe Carbon',
          anh: '../images/op-magsafe.jpg',
          gia: 249000,
          moTa: 'Chất liệu carbon fiber, hỗ trợ MagSafe đầy đủ'
        },
        {
          id: 3,
          ten: 'Tai nghe Bluetooth Pro',
          anh: '../images/tai-nghe.jpg',
          gia: 599000,
          moTa: 'Chống ồn chủ động, pin 30 giờ, sạc nhanh'
        },
        {
          id: 4,
          ten: 'Sạc nhanh 65W GaN',
          anh: '../images/sac-gan.jpg',
          gia: 399000,
          moTa: 'Công nghệ GaN, sạc laptop + điện thoại cùng lúc'
        },
        {
          id: 5,
          ten: 'Cáp Type-C 100W',
          anh: '../images/cap-typec.jpg',
          gia: 129000,
          moTa: 'Dây bện dù chắc chắn, hỗ trợ sạc 100W + truyền dữ liệu'
        },
        {
          id: 6,
          ten: 'Miếng dán cường lực 9H',
          anh: '../images/mieng-dan.jpg',
          gia: 79000,
          moTa: 'Kính cường lực 9H, phủ oleophobic, lắp dễ dàng'
        },
        {
          id: 7,
          ten: 'Pin dự phòng 20000mAh',
          anh: '../images/pin-duphong.jpg',
          gia: 449000,
          moTa: 'Sạc nhanh 22.5W, màn hình LED hiển thị % pin'
        },
        {
          id: 8,
          ten: 'Giá đỡ MagSafe xe hơi',
          anh: '../images/gia-do.jpg',
          gia: 199000,
          moTa: 'Hít MagSafe chắc chắn, xoay 360°, lắp trên cửa gió'
        }
      ],

      // Giỏ hàng
      cart: []
    };
  },

  computed: {
    /**
     * Số lượng sản phẩm trong giỏ (hiển thị ở header)
     */
    cartCount() {
      return this.cart.length;
    },

    /**
     * Tổng tiền giỏ hàng
     */
    tongTien() {
      return this.cart.reduce((sum, item) => sum + item.gia, 0);
    },

    /**
     * Danh sách sản phẩm đã lọc theo từ khóa (không phân biệt hoa thường)
     * UI = function của data → gõ tìm kiếm là danh sách cập nhật ngay
     */
    danhSachLoc() {
      if (!this.tuKhoa.trim()) {
        return this.products;
      }
      const keyword = this.tuKhoa.toLowerCase().trim();
      return this.products.filter(sp =>
        sp.ten.toLowerCase().includes(keyword) ||
        sp.moTa.toLowerCase().includes(keyword)
      );
    }
  },

  methods: {
    /**
     * Thêm sản phẩm vào giỏ hàng
     * Reactivity: chỉ cần push vào mảng cart → UI (số lượng + danh sách) tự cập nhật
     */
    themVaoGio(sanPham) {
      this.cart.push({ ...sanPham });
    },

    /**
     * Xóa sản phẩm khỏi giỏ theo index
     */
    xoaKhoiGio(index) {
      this.cart.splice(index, 1);
    },

    /**
     * Format giá tiền VND
     */
    formatGia(gia) {
      return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
      }).format(gia);
    }
  }
}).mount('#app');

/**
 * Ghi chú quan trọng:
 * - Header số lượng giỏ hàng cũng nằm trong #app nên có thể dùng {{ cartCount }}
 * - Nếu muốn header nằm ngoài #app thì cần dùng provide/inject hoặc Pinia,
 *   nhưng với phạm vi bài tập CDN đơn giản, đặt header trong #app là hợp lý nhất.
 */
