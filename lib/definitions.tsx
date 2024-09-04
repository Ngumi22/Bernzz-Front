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
  tags: string[];
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

export interface BaseItem {
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

export interface CartItem extends BaseItem {
  cartQuantity: number;
}

export interface wishItem extends BaseItem {
  wishQuantity: number;
}

export interface CartState {
  cartItems: CartItem[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
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
