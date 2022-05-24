import { CartItem } from "../context/CartContext";

class LocalStore {
  isLoggedIn: boolean = false;
  cartItems: CartItem[] = [];
  constructor() {
    if (this.getItem("isLoggedIn") === true) {
      this.isLoggedIn = true;
    }
    this.cartItems = this.getItem("cartItems") || [];
  }

  getItem(key: string) {
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
    return null;
  }
  setItem(key: string, value: string | object | boolean) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  removeItem(key: string) {
    localStorage.removeItem(key);
  }
}

const ls = new LocalStore();
export default ls;
