"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/slices/cartSlice";
import { addToWish } from "@/lib/slices/wishSlice";
import Image from "next/image";
import { Product } from "@/lib/definitions";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { IoIosExpand } from "react-icons/io";

type CardProps = {
  product: Product;
  imageLeft?: boolean; // Add a prop to control the image position
  showDescription?: boolean;
  showPrice?: boolean;
  showActions?: boolean;
  showCategory?: boolean;
  showBrand?: boolean;
  showDiscount?: boolean;
  showTags?: boolean;
};

const ProductCard: React.FC<CardProps> = ({
  product,
  imageLeft,
  showActions,
}) => {
  const [isLoading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const cartItem = {
      ...product,
      cartQuantity: 1,
    };
    dispatch(addToCart(cartItem));
  };

  const handleAddToWish = () => {
    const wishItem = {
      ...product,
      wishQuantity: 1,
    };
    dispatch(addToWish(wishItem));
  };

  const handleCompare = () => {
    // Implement compare functionality
  };

  const handleQuickView = () => {
    // Implement quick view functionality (e.g., open a modal)
  };

  const handleWhatsapp = () => {
    const url = `https://wa.me/?text=I%20am%20interested%20in%20the%20product:%20${product.name}%20(${product.id})`;
    window.open(url, "_blank");
  };

  return (
    <Card className="group group/item relative p-4">
      <div
        className={cn(
          "block",
          imageLeft
            ? "flex justify-center items-center gap-5 h-48 w-auto"
            : "flex-row"
        )}>
        <div
          className={
            "aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 h-3/4"
          }>
          <Image
            src={`data:image/jpeg;base64,${product.images.main}`}
            alt={product.name}
            width={200}
            objectFit="fill"
            height={200}
            className={cn(
              "duration-700 ease-in-out group-hover:opacity-75 w-full h-auto",
              isLoading
                ? "scale-110 blur-2xl grayscale"
                : "scale-100 blur-0 grayscale-0"
            )}
            onLoadingComplete={() => setLoading(false)}
          />
        </div>
        <div className="flex flex-col justify-between p-4">
          <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
          <p className="mt-1 text-sm font-medium text-gray-900">
            {product.price}
          </p>

          {showActions && (
            <div className="absolute top-4 right-3 grid grid-flow-row gap-3 group/edit invisible group-hover/item:visible p-1">
              <a
                className="relative bg-yellow-400 p-1 group/icon"
                href={`/product/${product.id}`}>
                <IoIosExpand className="w-5 h-5 " />
                <p className="absolute invisible group-hover/icon:visible right-8 top-2 bottom-0 text-xs 2xl:text-md text-center w-28 my-auto text-white font-semibold">
                  Product Details
                </p>
              </a>
              <button
                onClick={handleAddToWish}
                className="bg-yellow-400 p-1 relative group/icon">
                <svg
                  className="fill-black"
                  xmlns="http://www.w3.org/2000/svg"
                  height="22"
                  viewBox="0 -960 960 960"
                  width="22">
                  <path d="M440-501Zm0 381L313-234q-72-65-123.5-116t-85-96q-33.5-45-49-87T40-621q0-94 63-156.5T260-840q52 0 99 22t81 62q34-40 81-62t99-22q81 0 136 45.5T831-680h-85q-18-40-53-60t-73-20q-51 0-88 27.5T463-660h-46q-31-45-70.5-72.5T260-760q-57 0-98.5 39.5T120-621q0 33 14 67t50 78.5q36 44.5 98 104T440-228q26-23 61-53t56-50l9 9 19.5 19.5L605-283l9 9q-22 20-56 49.5T498-172l-58 52Zm280-160v-120H600v-80h120v-120h80v120h120v80H800v120h-80Z" />
                </svg>
                <p className="absolute invisible group-hover/icon:visible right-8 top-2 bottom-0 text-xs 2xl:text-md text-center w-32 my-auto text-white font-semibold">
                  Add to Wishlist
                </p>
              </button>
              <button
                className="bg-yellow-400 p-1 relative group/icon"
                onClick={handleCompare}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="22"
                  viewBox="0 -960 960 960"
                  width="22">
                  <path d="M314-115q-104-48-169-145T80-479q0-26 2.5-51t8.5-49l-46 27-40-69 191-110 110 190-70 40-54-94q-11 27-16.5 56t-5.5 60q0 97 53 176.5T354-185l-40 70Zm306-485v-80h109q-46-57-111-88.5T480-800q-55 0-104 17t-90 48l-40-70q50-35 109-55t125-20q79 0 151 29.5T760-765v-55h80v220H620ZM594 0 403-110l110-190 69 40-57 98q118-17 196.5-107T800-480q0-11-.5-20.5T797-520h81q1 10 1.5 19.5t.5 20.5q0 135-80.5 241.5T590-95l44 26-40 69Z" />
                </svg>
                <p className="absolute invisible  group-hover/icon:visible right-8 top-2 bottom-0 text-xs 2xl:text-md text-center w-36 my-auto text-white font-semibold">
                  Compare Products
                </p>
              </button>
              <button
                className="bg-yellow-400 p-1 relative group/icon"
                onClick={handleWhatsapp}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.63-4.836c-.198-.099-1.173-.579-1.356-.646-.182-.066-.315-.099-.447.099-.132.198-.514.646-.63.779-.116.132-.232.149-.43.05-.198-.099-.84-.309-1.6-.984-.591-.527-.99-1.178-1.107-1.376-.115-.198-.013-.305.087-.403.089-.088.198-.232.297-.347.099-.116.132-.198.198-.33.065-.132.033-.248-.017-.347-.05-.099-.447-1.079-.611-1.474-.165-.397-.333-.344-.447-.35-.116-.006-.247-.007-.38-.007a.729.729 0 0 0-.528.248c-.182.198-.694.678-.694 1.654s.711 1.915.811 2.05c.099.132 1.399 2.136 3.39 2.995.474.205.843.328 1.13.42.475.151.907.13 1.247.08.38-.058 1.173-.479 1.338-.942.165-.464.165-.86.115-.942-.05-.083-.182-.132-.38-.232z" />
                </svg>
                <p className="absolute invisible group-hover/icon:visible right-8 top-2 bottom-0 text-xs 2xl:text-md text-center w-32 my-auto text-white font-semibold">
                  Share via WhatsApp
                </p>
              </button>
            </div>
          )}

          <button
            onClick={handleAddToCart}
            className="group/btn invisible group-hover/item:visible absolute bottom-0 left-0 right-0 text-white hover:text-white bg-yellow-400 w-full hover:bg-black focus:ring-4 focus:ring-blue-300 font-medium text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add to cart
          </button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
