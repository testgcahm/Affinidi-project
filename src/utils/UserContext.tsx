// UserContext.tsx
import { Dispatch, SetStateAction, createContext } from "react";
import { UserInfo } from "./affinidi/types/types";

// Define the interface for the profile information
export interface ProfileInfo {
    email: string;
    familyName: string;
    givenName: string;
    middleName: string;
    picture: string;
    country: string;
    nickname: string;
    phoneNumber: string;
    gender: string;
    birthdate: string;
    postalCode: string;
    city: string;
    address: string;
    verified: boolean;
}

// Define the interface for user data
export interface UserDataProps {
    userId: string;
    user: UserInfo & { profile: ProfileInfo }; // Include the profile property here
}

// Default values for UserDataProps
export const UserDataValues: UserDataProps = {
    userId: '',
    user: {
        email: "",
        familyName: "",
        givenName: "",
        middleName: "",
        picture: "",
        country: "",
        nickname: "",
        phoneNumber: "",
        gender: "",
        birthdate: "",
        postalCode: "",
        city: "",
        address: "",
        verified: false,
        profile: {  // Initialize the profile property with empty values
            email: "",
            familyName: "",
            givenName: "",
            middleName: "",
            picture: "",
            country: "",
            nickname: "",
            phoneNumber: "",
            gender: "",
            birthdate: "",
            postalCode: "",
            city: "",
            address: "",
            verified: false,
        }
    }
}

// Create the context
export const UserContext = createContext<[UserDataProps, Dispatch<SetStateAction<UserDataProps>>]>([UserDataValues, () => { }]);
