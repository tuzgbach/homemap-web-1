import React from "react";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    // Xử lý logic gửi email ở đây (có thể gửi dữ liệu lên server hoặc xử lý nó trực tiếp)
    console.log(`Email đã nhập: ${email}`);
  };

  return (
    <footer className="bg-gradient-to-r from-blue-400 to-purple-400 text-white">
      <div className="container mx-auto py-8 flex justify-between items-center">
        <div className="logo-description-container text-black">
          <img
            className="w-24 sm:w-35 md:w-28 lg:w-25 xl:w-34"
            src="/images/Homemap.svg"
            alt="Logo"
          />
          <p className="description text-base font-bold mt-2">
            Lựa chọn những điều tốt nhất
          </p>
          <img
            className="w-24 sm:w-35 md:w-28 lg:w-25 xl:w-34 qr-code"
            src="/images/homemap.png"
            alt="QR Code"
          />
        </div>
        <div className="menu-container text-black ">
          <div className="menu-column">
            <h4 className="menu-header text-base font-bold">Thanh Toán</h4>
            <ul className="menu-list">
              <li>Sau khi nhận hàng</li>
              <li>Điều khoản bảo mật</li>
              <li>Trung tâm hỗ trợ</li>
            </ul>
          </div>
          <div className="menu-column text-black">
            <h4 className="menu-header text-base font-bold">Mua hàng</h4>
            <ul className="menu-list">
              <li>Cửa hàng chúng tôi</li>
              <li>Mua sắp qua tiktok</li>
              <li>Affiliates</li>
            </ul>
          </div>
          <div className="menu-column text-black">
            <h4 className="menu-header text-base font-bold text-black">
              Homemap.asia
            </h4>
            <ul className="menu-list text-black">
              <li>Thông tin liên hệ</li>
              <li>Tin tức</li>
              <li>Investors</li>
              <li>Tuyển dụng</li>
              <li>Tiếp thị liên kết</li>
            </ul>
          </div>
          <div className="menu-column">
            <h4 className="menu-header text-base font-bold text-black">
              Chúng tôi có mặt
            </h4>
            <ul className="menu-list text-black">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="email-signup-container mt-6">
        <h4 className="email-signup-header text-base font-bold text-center text-black">
          Đăng ký để nhận thông tin mới nhất
        </h4>
        <form onSubmit={handleSubmit} className="email-form flex items-cente">
          <input
            type="email"
            name="email"
            placeholder="Nhập địa chỉ email của bạn"
            className="email-input p-2 rounded-l-md border-r-0 focus:ring focus:border-blue-300 outline-none text-gray-800"
            required
          />
          <button
            type="submit"
            className="email-button bg-guardian-green text-black p-2 rounded-r-md hover:bg-guardian-dark-green focus:ring focus:border-blue-300">
            Đăng ký
          </button>
        </form>
      </div>
      <style jsx>{`
        footer {
          padding: 30px 20px;
          margin-top: 50px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        }

        .bg-gradient-to-r {
          background: linear-gradient(to right, #fdebd2, #fdebd2);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .logo-description-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .logo {
          max-width: 100%;
        }

        .description {
          margin-top: 10px;
          font-size: 12px;
          font-weight: 500;
        }

        .menu-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 20px;
          margin-top: 20px;
        }

        .menu-column {
          flex: 1;
          min-width: 200px;
          margin-bottom: 20px;
        }

        .menu-header {
          font-size: 15px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .menu-list {
          list-style: none;
          padding: 0;
        }

        .menu-list li {
          margin-bottom: 10px;
          font-size: 13px;
          transition: color 0.2s, transform 0.2s;
        }

        .menu-list li:hover {
          color: #ff6600;
          transform: translateX(5px);
        }

        .email-signup-container {
          text-align: center;
          margin-top: 20px;
        }

        .email-signup-header {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .email-form {
          max-width: 400px;
          margin: 0 auto;
        }

        .email-input {
          flex: 1;
          border: 1px solid #ccc;
          border-radius: 4px;
          padding: 8px; /* Kích thước nhỏ hơn */
          font-size: 12px; /* Cỡ chữ nhỏ hơn */
        }

        .email-button {
          background-color: #4facfe;
          border: none;
          border-radius: 4px;
          color: white;
          cursor: pointer;
          padding: 8px 16px; /* Kích thước nhỏ hơn */
          font-size: 12px; /* Cỡ chữ nhỏ hơn */
        }

        .email-button:hover {
          background-color: #223;
        }

        /* Màu Guardian */
        .bg-guardian-green {
          background-color: #222;
        }

        .bg-guardian-dark-green {
          background-color: #222;
        }

        .qr-code {
          max-width: 100%;
          display: block;
          margin: 10px auto;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
