import React from 'react';
import Link from 'next/link'; // Import Link from next/link

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
  imageUrl: string;
}

interface Props {
  cartItems: CartItem[];
}

const Cart: React.FC<Props> = ({ cartItems }) => {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <div className="Cart">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length === 0 ? (
            <tr>
              <td colSpan={4}>Your cart is empty.</td>
            </tr>
          ) : (
            cartItems.map((item) => (
              <tr key={item.id}>
                <td><img src={item.imageUrl} alt={item.name} /></td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>${item.price}</td>
              </tr>
            ))
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Total</td>
            <td>${getTotalPrice()}</td>
          </tr>
        </tfoot>
      </table>
      <Link href="/checkout"> {/* Use Link component for navigation */}
        <a>
          <button disabled={cartItems.length === 0}>Go to Checkout</button>
        </a>
      </Link>
    </div>
  );
};

export default Cart;
