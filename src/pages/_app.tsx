import "../styles/globals.css";
import { UserContext, UserDataProps, UserDataValues } from "@/src/utils/UserContext";
import { useAuthentication } from "@/src/utils/affinidi/hooks/use-authentication";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

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
        <Component {...pageProps} />
      </UserContext.Provider>
    </>
  );
}
