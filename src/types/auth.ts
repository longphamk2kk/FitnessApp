export interface LoginCredentials {
  username: string;
  password: string;
}

export interface RegisterCredentials {
  username: string;
  password: string;
  confirmPassword: string;
  full_name: string;
  email?: string;
  phone?: string;
}

export interface User {
  _id: string;
  username: string;
  email?: string;
  phone?: string;
  full_name?: string;
  gender?: string;
  dob?: string;
  weight?: number;
  height?: number;
  goal?: string;
  level?: string;
  avatar?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface AuthResponse {
  success: boolean;
  token?: string; // Optional - not used in simple auth
  user?: User;
  message?: string;
}