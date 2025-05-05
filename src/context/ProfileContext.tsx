import React, { createContext, useContext, useState } from "react";

interface ProfileData {
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  weight: string;
  height: string;
}

interface ProfileContextType {
  profileData: ProfileData;
  updateProfile: (data: ProfileData) => void;
}

const defaultProfileData: ProfileData = {
  fullName: "Madison Smith",
  email: "madisons@example.com",
  phone: "+123 567 89000",
  dateOfBirth: "01/04/199X",
  weight: "75",
  height: "1.65",
};

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [profileData, setProfileData] =
    useState<ProfileData>(defaultProfileData);

  const updateProfile = (data: ProfileData) => {
    setProfileData(data);
  };

  return (
    <ProfileContext.Provider value={{ profileData, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
};
