import React from "react";
import { animateFlyingButton } from "@/utils";
import Icon from "./Icon";
import Image from "./Image";
import useCartStore from "cart-mfe/store";

const ShoeCart = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const onAdd = (e) => {
    animateFlyingButton(e, () => addToCart(product));
  };
  return (
    <div className="w-full flex flex-col shadow-md rounded-md cursor-pointer group">
      <div className="relative w-full aspect-square overflow-hidden rounded-md rounded-b-none">
        <Image
          src={product.img}
          alt={product.title}
          className="w-full h-full object-cover rounded-md rounded-b-none group-hover:scale-125 group-hover:filter transition-all duration-200"
        />
      </div>
      <div className="flex justify-between items-start p-3">
        <div className="flex flex-col">
          <p className="font-medium">{product.title}</p>
          <p className="font-thin text-gray-400 text-sm">{product.type}</p>
          <p className="font-thin text-gray-400 text-sm">{product.variants}</p>
        </div>
        <div className="flex flex-col items-between">
          <p className="">${product.price}</p>
          <button className="p-2" onClick={onAdd}>
            <Icon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoeCart;
