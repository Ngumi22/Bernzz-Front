export interface Product {
  id: number;
  sku: string;
  name: string;
  description: string;
  category: string;
  status: string;
  brand: string;
  price: number;
  discount: number;
  quantity: number;
  createdAt: string;
  updatedAt: string;
  images: {
    main: string | null;
    thumbnails: string[];
  };
}
export interface ItemListProps {
  defaultCategory: string | null;
}

export interface Slide {
  name: string;
  imgSrc: string;
}

export interface Category {
  name: string;
  href: string;
  id: number;
}
export interface Subcategory {
  id: number;
  name: string;
  href: string;
}

export interface CartItem {
  id: number; // Unique identifier for the cart item
  name: string; // Name of the product
  description: string; // Description of the product
  brand: string; // Brand of the product
  price: number; // Price of the product
  category: string; // Category of the product
  image: string; // URL of the product image
  discountPercentage: number; // Discount percentage for the product
  new: boolean; // Indicates if the product is new
  bestSeller: boolean; // Indicates if the product is a best seller
  rating: number; // Rating of the product
  stock: number; // Stock quantity of the product
  cartQuantity: number; // Quantity of the product in the cart

  discount: number;
  quantity: number;
  createdAt: string;
  updatedAt: string;
  images: {
    main: string | null;
    thumbnails: string[];
  };
}

export interface CartState {
  cartItems: CartItem[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
}
export interface wishItem {
  id: number; // Unique identifier for the wish item
  name: string; // Name of the product
  description: string; // Description of the product
  brand: string; // Brand of the product
  price: number; // Price of the product
  category: string; // Category of the product
  image: string; // URL of the product image
  discountPercentage: number; // Discount percentage for the product
  new: boolean; // Indicates if the product is new
  bestSeller: boolean; // Indicates if the product is a best seller
  rating: number; // Rating of the product
  stock: number; // Stock quantity of the product
  wishQuantity: number; // Quantity of the product in the wish
}
export interface wishState {
  wishItems: wishItem[];
  wishTotalQuantity: number;
  wishTotalAmount: number;
}

export interface Category {
  id: number;
  name: string;
}
