import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { CartProvider } from "src/utils/CartContext";
import { UserDataProps, UserDataValues, UserContext } from "src/utils/UserContext";
import { useAuthentication } from "src/utils/affinidi/hooks/use-authentication";

export default function App({ Component, pageProps }: AppProps) {

  const [userData, setUserData] = useState<UserDataProps>(UserDataValues);

  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await useAuthentication();

      setUserData(prev => ({
        ...prev,
        userId: userInfo.userId,
        user: userInfo.user
      }));
    }

    fetchUser();
  }, []);

  return (
    <>
      <UserContext.Provider value={[userData, setUserData]}>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </UserContext.Provider>
    </>
  );
}
