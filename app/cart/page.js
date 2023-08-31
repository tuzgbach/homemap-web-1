"use client";

import MainLayout from "../layouts/MainLayout";
import SimilarProducts from "../components/SimilarProducts";
import CartItem from "../components/CartItem";
import { useCart } from "../context/cart";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useIsLoading from "../hooks/useIsLoading";
import ClientOnly from "../components/ClientOnly";
import "./cart.css";

export default function Cart() {
  const router = useRouter();
  const cart = useCart();

  useEffect(() => {
    useIsLoading(true);
    cart.getCart();
    cart.cartTotal();
    useIsLoading(false);
  }, [cart]);

  const goToCheckout = () => {
    if (!cart.cartTotal()) {
      alert("You don't have any items in the cart.");
      return;
    }
    router.push("/checkout");
  };

  return (
    <>
      <MainLayout>
        <div className="max-w-[1200px] mx-auto mb-8 min-h-[300px]">
          <div className="text-2xl font-bold my-4">Giỏ hàng của bạn</div>
          <div className="relative flex items-baseline justify-between gap-2">
            <ClientOnly>
              <div className="w-[65%] euro-style">
                {cart.getCart().map((product) => (
                  <CartItem key={product.id} product={product} />
                ))}
              </div>
            </ClientOnly>

            <div
              id="GoToCheckout"
              className="md:w-[33%] absolute top-0 right-0 m-2">
              <ClientOnly>
                <div className="bg-white p-4 border">
                  <button
                    onClick={() => goToCheckout()}
                    className="flex items-center justify-center bg-red-500 w-32 text-white font-semibold text-base p-2 rounded-md mt-4 hover:bg-red-600">
                    Thanh toán
                  </button>

                  <div className="flex items-center justify-between mt-4 text-sm mb-1">
                    <div>Số lượng ({cart.getCart().length})</div>
                    <div>{(cart.cartTotal() / 100).toFixed(2)} vnđ</div>
                  </div>
                  <div className="flex items-center justify-between mb-4 text-sm">
                    <div>Giao hàng:</div>
                    <div>15,000</div>
                  </div>

                  <div className="border-b border-gray-300" />

                  <div id="total-order">
                    <div className="total-text">Tổng đơn hàng</div>
                    <div className="total-price">
                      {(cart.cartTotal() / 100).toFixed(2)} vnđ
                    </div>
                  </div>
                </div>
              </ClientOnly>
            </div>
          </div>
        </div>

        <SimilarProducts />
      </MainLayout>
    </>
  );
}
