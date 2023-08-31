"use client";

import MainLayout from "../../layouts/MainLayout";
import SimilarProducts from "../../components/SimilarProducts";
import { useEffect, useState } from "react";
import useIsLoading from "../../hooks/useIsLoading";
import { useCart } from "../../context/cart";
import { toast } from "react-toastify";

export default function Product({ params }) {
  const cart = useCart();

  const [product, setProduct] = useState({});

  const getProduct = async () => {
    useIsLoading(true);
    setProduct({});

    const response = await fetch(`/api/product/${params.id}`);
    const prod = await response.json();
    setProduct(prod);
    cart.isItemAddedToCart(prod);
    useIsLoading(false);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <MainLayout>
        <div className="max-w-[1200px] mx-auto">
          <div className="flex px-4 py-8">
            {product?.url ? (
              <img className="w-[40%] rounded-lg" src={product?.url + "/280"} />
            ) : (
              <div className="w-[40%]"></div>
            )}

            <div className="px-9 w-full">
              <div className="font-bold text-xl">{product?.title}</div>
              <div className="text-sm text-gray-700 pt-2">
                <span className="font-light text-xs text-gray-500">
                  Sản phẩm chữa lành
                </span>
              </div>

              <div className="border-b py-1" />

              <div className="pt-3 pb-2">
                <div className="flex items-center">
                  <span className="font-semibold text-gray-700">
                    Tình trạng:
                  </span>
                  <span className="font-bold text-sm text-green-600 ml-2">
                    Mới 100%
                  </span>
                </div>
              </div>

              <div className="border-b py-1" />

              <div className="pt-3">
                <div className="w-full flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="font-semibold text-gray-600">
                      Giá sản phẩm:
                    </span>
                    {product?.price ? (
                      <div className="font-bold text-lg text-red-600 ml-2">
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(product?.price / 100)}
                      </div>
                    ) : null}
                  </div>

                  <button
                    onClick={() => {
                      if (cart.isItemAdded) {
                        cart.removeFromCart(product);
                        toast.info("Removed from cart", { autoClose: 3000 });
                      } else {
                        cart.addToCart(product);
                        toast.success("Added to cart", { autoClose: 3000 });
                      }
                    }}
                    className={`
                      py-2 px-4 rounded-md cursor-pointer text-white font-semibold
                      bg-red-500 hover:bg-red-600
                    `}>
                    {cart.isItemAdded ? (
                      <>
                        <span className="mr-2">Xoá khỏi giỏ hàng</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 inline-block"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </>
                    ) : (
                      <>
                        <span className="mr-2">Thêm vào giỏ hàng</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 inline-block"
                          viewBox="0 0 20 20"
                          fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M10 2C5.03 2 1 6.03 1 11a9 9 0 0 0 9 9c4.97 0 9-4.03 9-9a9 9 0 0 0-9-9zM8 14a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm4-7a1 1 0 0 0-2 0v3H8a1 1 0 1 0 0 2h2v3a1 1 0 1 0 2 0v-3h2a1 1 0 1 0 0-2h-2V7z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="border-b py-1" />

              <div className="pt-3">
                <div className="text-gray-700 font-medium mb-1">
                  Mô tả sản phẩm:
                </div>
                <p className="text-sm text-gray-600">{product?.description}</p>
              </div>
            </div>
          </div>
        </div>

        <SimilarProducts />
      </MainLayout>
    </>
  );
}
