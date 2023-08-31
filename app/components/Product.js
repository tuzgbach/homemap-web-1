import Link from "next/link";

export default function Product({ product }) {
  return (
    <div className="product-container">
      <Link href={`/product/${product?.id}`}>
        {/* Remove the <a> tag */}
        <div className="product-link">
          {product?.url ? (
            <img
              className="product-image"
              src={product.url + "/190"}
              alt={product.title}
            />
          ) : null}

          <div className="product-details">
            <div className="product-title">{product?.title}</div>
            <div className="product-description">
              {product?.description}
            </div>{" "}
            {/* Thêm mô tả sản phẩm */}
            <div className="product-price">
              {(product?.price / 100).toFixed(2)} vnđ
            </div>
            <div className="product-discount">
              <span className="discount-price">
                {((product?.price * 1.2) / 100).toFixed(2)} vnđ
              </span>
              <span className="discount-percentage">-20%</span>
            </div>
          </div>
        </div>
      </Link>

      <style jsx>{`
      .product-container {
          margin: 12px;
          padding: 2px;
          background-color: #f2f2f2;
          border-radius: 5px;
          transition: background-color 0.3s, box-shadow 0.3s, transform 0.3s;
        }
        .product-container:hover {
          background-color: #ffffff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }
        .product-link {
          text-decoration: none;
          color: #333;
          display: block;
          cursor: pointer;
        }
        .product-image {
          width: 100%;
          max-width: 200px;
          border-radius: 5px;
          transition: transform 0.3s;
        }
        .product-image:hover {
          transform: scale(1.05);
        }
        .product-details {
          padding: 11px;
        }
        .product-title {
          font-weight: 600;
          font-size: 16px;
          margin-bottom: 4px;
        }
        .product-description {
          font-size: 14px;
          color: #555;
          margin-bottom: 10px;
          white-space: nowrap; /* Ngăn dòng trôi khi mô tả dài */
          overflow: hidden; /* Ẩn phần dư thừa của mô tả */
          text-overflow: ellipsis; /* Hiển thị dấu ba chấm (...) khi mô tả bị cắt */
        }
        .product-price {
          font-weight: 500;
          font-size: 14px;
        }
        .product-discount {
          font-size: 12px;
          color: #888;
          text-decoration: line-through;
        }
        .discount-price {
          color: #ff1c15;
          font-size: 12px;
          font-weight: normal;
        }
        .discount-percentage {
          margin-left: 50px;
          color: #fe0129;
        }
        .product-actions {
          margin-top: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .add-to-cart-button {
          background-color: #007bff;
          color: #fff;
          border: none;
          padding: 8px 16px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 14px;
          transition: background-color 0.3s;
        }
        .add-to-cart-button:hover {
          background-color: #0056b3;
        }
        .favorite-icon {
          font-size: 24px;
          color: #ff6347;
        }

        @media (max-width: 768px) {
          .product-image {
            max-width: 100%;
          }
          .product-title {
            font-size: 14px;
          }
      `}</style>
    </div>
  );
}
