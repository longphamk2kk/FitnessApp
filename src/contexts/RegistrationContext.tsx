import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface RegistrationData {
  // Basic registration fields
  username?: string;
  password?: string;
  confirmPassword?: string;
  full_name?: string;
  email?: string;
  phone?: string;
  
  // Setup/profile fields
  gender?: 'Male' | 'Female';
  age?: number;
  weight?: number;
  height?: number;
  goal?: string;
  level?: 'beginner' | 'intermediate' | 'advanced';
  avatar?: string;
  nickname?: string;
}

interface RegistrationContextType {
  registrationData: RegistrationData;
  updateRegistrationData: (data: Partial<RegistrationData>) => void;
  resetRegistrationData: () => void;
  isBasicInfoComplete: () => boolean;
  isSetupComplete: () => boolean;
}

const RegistrationContext = createContext<RegistrationContextType | undefined>(undefined);

export const useRegistration = () => {
  const context = useContext(RegistrationContext);
  if (!context) {
    throw new Error('useRegistration must be used within a RegistrationProvider');
  }
  return context;
};

interface RegistrationProviderProps {
  children: ReactNode;
}

export const RegistrationProvider: React.FC<RegistrationProviderProps> = ({ children }) => {
  const [registrationData, setRegistrationData] = useState<RegistrationData>({});

  const updateRegistrationData = (data: Partial<RegistrationData>) => {
    setRegistrationData(prev => ({ ...prev, ...data }));
  };

  const resetRegistrationData = () => {
    setRegistrationData({});
  };

  const isBasicInfoComplete = () => {
    return !!(
      registrationData.username &&
      registrationData.password &&
      registrationData.confirmPassword &&
      registrationData.full_name
    );
  };

  const isSetupComplete = () => {
    return !!(
      registrationData.gender &&
      registrationData.age &&
      registrationData.weight &&
      registrationData.height &&
      registrationData.goal &&
      registrationData.level
    );
  };

  return (
    <RegistrationContext.Provider
      value={{
        registrationData,
        updateRegistrationData,
        resetRegistrationData,
        isBasicInfoComplete,
        isSetupComplete,
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};
