import React, { useContext } from "react";
import { Myshop } from "./contextapi/Mywebsite";

const Cart = ({Deluser}) => {
  let{cart}=useContext(Myshop)
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">

        {/* Cart Items */}
        <div className="lg:col-span-2 bg-[#181818] rounded-3xl p-6 shadow-xl border border-gray-800">

          <h1 className="text-3xl font-bold mb-6">
            🛒 Shopping Cart
          </h1>

          {/* Product */}
          {cart.map((data)=>{
           return (<div className="flex items-center gap-4 bg-[#222] rounded-2xl p-4 hover:bg-[#2b2b2b] transition">

            {/* Image */}
            <div className="w-20 h-20 rounded-xl bg-[#333] flex items-center justify-center text-gray-500">
              <img className="h-full w-full object-cover" src={data.image} alt="" />
            </div>

            {/* Details */}
            <div className="flex-1">
              <h2 className="font-semibold text-lg">
                {data.title}
              </h2>

              <p className="text-gray-400 text-sm">
                {data.description}
              </p>

              <span className="text-xl font-bold text-green-400">
               {data.price}
              </span>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-2">

              <button className="w-8 h-8 rounded-lg bg-[#333] hover:bg-gray-700">
                -
              </button>

              <span className="w-8 text-center">
                {data.quantity}
              </span>

              <button className="w-8 h-8 rounded-lg bg-[#333] hover:bg-gray-700">
                +
              </button>

            </div>

            {/* Remove */}
            <button className="text-red-400 hover:text-red-500 text-sm cursor-pointer" onClick={()=>{
                Deluser(data.id)
            }}>
              ✕
            </button>

          </div>)
          })}
          

          {/* Map more products here */}

        </div>

        {/* Summary */}
        <div className="bg-[#181818] rounded-3xl p-6 shadow-xl border border-gray-800 h-fit sticky top-6">

          <h2 className="text-2xl font-bold mb-6">
            Order Summary
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between text-gray-400">
              <span>Subtotal</span>
              <span>$297</span>
            </div>

            <div className="flex justify-between text-gray-400">
              <span>Shipping</span>
              <span>$10</span>
            </div>

            <div className="flex justify-between text-gray-400">
              <span>Tax</span>
              <span>$15</span>
            </div>

            <hr className="border-gray-700" />

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span className="text-green-400">$322</span>
            </div>

          </div>

          <button className="w-full mt-8 bg-white text-black font-semibold py-3 rounded-xl hover:bg-gray-200 transition">
            Checkout
          </button>

          <button className="w-full mt-3 border border-gray-600 py-3 rounded-xl hover:bg-[#2b2b2b] transition">
            Continue Shopping
          </button>

        </div>

      </div>
    </div>
  );
};

export default Cart;