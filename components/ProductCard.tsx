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
  showDescription?: boolean;
  showPrice?: boolean;
  showActions?: boolean;
  showCategory?: boolean;
  showBrand?: boolean;
  showDiscount?: boolean;
  showTags?: boolean;
  imagePosition?: "left" | "right"; // New prop for image position
};

const ProductCard: React.FC<CardProps> = ({
  product,
  showActions,
  imagePosition = "left",
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
    <Card className="group relative group/item w-[15rem] p-4 flex flex-col md:flex-row">
      {/* Conditional layout based on imagePosition prop */}
      {imagePosition === "left" && (
        <div className="md:w-1/2 w-full order-1 md:order-none">
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 h-full">
            <Image
              src={
                product.images.main
                  ? `data:image/jpeg;base64,${product.images.main}`
                  : "/placeholder-image.jpg"
              }
              alt={product.name}
              width={200}
              height={200}
              objectFit="fill"
              className={cn(
                "duration-700 ease-in-out group-hover:opacity-75 w-full h-full",
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              )}
              onLoadingComplete={() => setLoading(false)}
            />
          </div>
        </div>
      )}

      <div className="md:w-1/2 w-full flex flex-col justify-between p-4">
        <div>
          <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
          <p className="mt-1 text-sm font-medium text-gray-900">
            {product.price}
          </p>
        </div>

        {showActions && (
          <div className="absolute top-4 right-3 grid grid-flow-row gap-3 group/edit invisible group-hover/item:visible p-1">
            {/* Action buttons */}
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
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 6.58 6.586c-.004 3.634-2.959 6.584-6.584 6.584z" />
                <path d="M11.797 9.547c-.194-.097-1.148-.567-1.327-.632-.18-.066-.311-.097-.441.098-.128.193-.508.632-.623.762-.114.13-.23.146-.425.049a5.47 5.47 0 0 1-1.604-.99 5.965 5.965 0 0 1-1.111-1.383c-.115-.195-.012-.3.085-.396.087-.087.193-.23.29-.345.097-.115.13-.195.196-.326.066-.13.033-.244-.017-.341-.049-.097-.44-1.061-.605-1.46-.159-.383-.322-.33-.441-.337-.114-.004-.244-.005-.373-.005a.718.718 0 0 0-.524.244c-.18.195-.689.674-.689 1.647s.705 1.91.804 2.046c.098.13 1.392 2.127 3.376 2.979.472.204.84.325 1.128.417.475.15.908.129 1.247.079.38-.057 1.148-.469 1.311-.923.164-.454.164-.844.115-.923-.049-.08-.18-.13-.373-.228z" />
              </svg>
              <p className="absolute invisible group-hover/icon:visible right-8 top-2 bottom-0 text-xs 2xl:text-md text-center w-40 my-auto text-white font-semibold">
                Share Product on WhatsApp
              </p>
            </button>
          </div>
        )}
      </div>

      {imagePosition === "right" && (
        <div className="md:w-1/2 w-full order-1 md:order-last">
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 h-full">
            <Image
              src={
                product.images.main
                  ? `data:image/jpeg;base64,${product.images.main}`
                  : "/placeholder-image.jpg"
              }
              alt={product.name}
              width={200}
              height={200}
              objectFit="fill"
              className={cn(
                "duration-700 ease-in-out group-hover:opacity-75 w-full h-full",
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              )}
              onLoadingComplete={() => setLoading(false)}
            />
          </div>
        </div>
      )}
    </Card>
  );
};

export default ProductCard;
