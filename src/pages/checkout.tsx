import React, { useState, useContext } from 'react';
import { UserContext } from '../utils/UserContext';
import { useRouter } from 'next/router'; // Import useRouter from next/router
import ConfirmationModal from './ConfirmationModel';
import { useCartContext } from 'src/utils/CartContext';

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  postalCode: string;
  city: string;
  country: string;
}

const Checkout = () => {

  const { clearCart } = useCartContext();

  const [userData, setUserData] = useState<UserData>({
    firstName: '',
    lastName: '', 
    email: '',
    phone: '', 
    address: '', 
    postalCode: '',
    city: '', 
    country: ''
  });

  const router = useRouter(); // Use useRouter hook
  const [userDataProps, setUserDataProps] = useContext(UserContext); // Get userDataProps from UserContext
  const profile = userDataProps.user; // Access user profile from userDataProps
  const [showConfirmationModal, setShowConfirmationModal] = useState(false); // Declare showConfirmationModal state variable

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowConfirmationModal(true);
    clearCart();
  };

  const closeConfirmationModal = () => {
    setShowConfirmationModal(false);
    router.push('/'); // Use router.push for navigation
  };

  return (
    <div className="CheckoutContainer">
      <div className="Checkout">
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input 
            type="text" 
            name="firstName" 
            id="firstName"
            value={userData.firstName} 
            onChange={handleChange}
          />

          {/* Remaining input fields */}
          
          <button type="submit" className="ContinueButton">Submit Order</button>
        </form>
      </div>
      {showConfirmationModal && (
        <ConfirmationModal closeModal={closeConfirmationModal} />
      )}
    </div>
  );
};

export default Checkout;
