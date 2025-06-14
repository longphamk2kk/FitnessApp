import AsyncStorage from '@react-native-async-storage/async-storage';
import api from './api';
import { LoginCredentials, RegisterCredentials, AuthResponse, User } from '../types/auth';
import { RegistrationData } from '../contexts/RegistrationContext';

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      // Debug logging
      console.log('🔐 Login attempt with credentials:', {
        username: credentials.username,
        passwordLength: credentials.password?.length || 0,
        hasUsername: !!credentials.username,
        hasPassword: !!credentials.password
      });

      // Validate input before sending
      if (!credentials.username || !credentials.password) {
        return {
          success: false,
          message: 'Username and password are required'
        };
      }

      // Ensure credentials are strings and trimmed
      const cleanCredentials = {
        username: String(credentials.username).trim(),
        password: String(credentials.password)
      };

      console.log('🌐 Sending login request to:', '/auth/login');
      console.log('📤 Request payload:', {
        username: cleanCredentials.username,
        passwordProvided: !!cleanCredentials.password
      });

      const response = await api.post('/auth/login', cleanCredentials);

      console.log('📥 Backend response status:', response.status);
      console.log('📥 Backend response data:', {
        statusCode: response.data?.statusCode,
        message: response.data?.message,
        hasData: !!response.data?.data,
        dataKeys: response.data?.data ? Object.keys(response.data.data) : []
      });

      // Backend returns: {statusCode: 200, message: string, data: User}
      // Check for successful login using statusCode
      if (response.data.statusCode === 200 && response.data.data) {
        // Store user data (no token needed for simple auth)
        await AsyncStorage.setItem('user', JSON.stringify(response.data.data));
        console.log('✅ Login successful, user data stored');

        // Return normalized response format for frontend
        return {
          success: true,
          user: response.data.data,
          message: response.data.message
        };
      } else {
        console.log('❌ Login failed - invalid response format');
        // Handle unsuccessful login
        return {
          success: false,
          message: response.data.message || 'Login failed'
        };
      }
    } catch (error: any) {
      console.error('🚨 Login error details:', {
        message: error.message,
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data,
        config: {
          url: error.config?.url,
          method: error.config?.method,
          baseURL: error.config?.baseURL,
          headers: error.config?.headers
        }
      });

      // Handle error response from backend
      if (error.response?.data?.message) {
        console.log('📝 Returning backend error message:', error.response.data.message);
        return {
          success: false,
          message: error.response.data.message
        };
      }

      // Handle network errors
      if (error.code === 'NETWORK_ERROR' || error.message.includes('Network Error')) {
        return {
          success: false,
          message: 'Network error. Please check your connection and server status.'
        };
      }

      // Re-throw unexpected errors
      throw error;
    }
  },

  async register(credentials: RegisterCredentials): Promise<AuthResponse> {
    try {
      // Debug logging
      console.log('📝 Registration attempt with credentials:', {
        username: credentials.username,
        full_name: credentials.full_name,
        email: credentials.email,
        phone: credentials.phone,
        passwordLength: credentials.password?.length || 0,
        confirmPasswordLength: credentials.confirmPassword?.length || 0
      });

      // Frontend validation
      if (!credentials.username || !credentials.password || !credentials.full_name) {
        return {
          success: false,
          message: 'Username, password, and full name are required'
        };
      }

      if (credentials.password !== credentials.confirmPassword) {
        return {
          success: false,
          message: 'Passwords do not match'
        };
      }

      if (credentials.password.length < 6) {
        return {
          success: false,
          message: 'Password must be at least 6 characters long'
        };
      }

      if (credentials.username.length < 6) {
        return {
          success: false,
          message: 'Username must be at least 6 characters long'
        };
      }

      // Prepare registration data as FormData (backend expects multipart/form-data)
      const formData = new FormData();
      formData.append('username', String(credentials.username).trim());
      formData.append('password', String(credentials.password));
      formData.append('full_name', String(credentials.full_name).trim());
      formData.append('level', 'beginner'); // Default level for new users

      // Add optional fields only if provided
      if (credentials.email && credentials.email.trim()) {
        formData.append('email', String(credentials.email).trim());
      }
      if (credentials.phone && credentials.phone.trim()) {
        formData.append('phone', String(credentials.phone).trim());
      }

      console.log('🌐 Sending registration request to:', '/auth/register');
      console.log('📤 Request payload (FormData):', {
        username: credentials.username.trim(),
        full_name: credentials.full_name.trim(),
        email: credentials.email?.trim() || 'not provided',
        phone: credentials.phone?.trim() || 'not provided',
        level: 'beginner',
        passwordProvided: !!credentials.password,
        contentType: 'multipart/form-data'
      });

      const response = await api.post('/auth/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('📥 Registration response status:', response.status);
      console.log('📥 Registration response data:', {
        statusCode: response.data?.statusCode,
        message: response.data?.message,
        hasData: !!response.data?.data,
        dataKeys: response.data?.data ? Object.keys(response.data.data) : []
      });

      // Backend returns: {statusCode: 200, message: string, data: User}
      if (response.data.statusCode === 200 && response.data.data) {
        // Store user data immediately after successful registration
        await AsyncStorage.setItem('user', JSON.stringify(response.data.data));
        console.log('✅ Registration successful, user data stored');

        // Return normalized response format for frontend
        return {
          success: true,
          user: response.data.data,
          message: response.data.message
        };
      } else {
        console.log('❌ Registration failed - invalid response format');
        return {
          success: false,
          message: response.data.message || 'Registration failed'
        };
      }
    } catch (error: any) {
      console.error('🚨 Registration error details:', {
        message: error.message,
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data,
        config: {
          url: error.config?.url,
          method: error.config?.method,
          baseURL: error.config?.baseURL
        }
      });

      // Handle error response from backend
      if (error.response?.data?.message) {
        console.log('📝 Returning backend error message:', error.response.data.message);
        return {
          success: false,
          message: error.response.data.message
        };
      }

      // Handle network errors
      if (error.code === 'NETWORK_ERROR' || error.message.includes('Network Error')) {
        return {
          success: false,
          message: 'Network error. Please check your connection and server status.'
        };
      }

      // Re-throw unexpected errors
      throw error;
    }
  },

  async registerWithSetup(registrationData: RegistrationData): Promise<AuthResponse> {
    try {
      console.log('📝 Complete registration with setup data:', {
        username: registrationData.username,
        full_name: registrationData.full_name,
        email: registrationData.email,
        phone: registrationData.phone,
        gender: registrationData.gender,
        age: registrationData.age,
        weight: registrationData.weight,
        height: registrationData.height,
        goal: registrationData.goal,
        level: registrationData.level,
        passwordProvided: !!registrationData.password
      });

      // Frontend validation
      if (!registrationData.username || !registrationData.password || !registrationData.full_name) {
        return {
          success: false,
          message: 'Username, password, and full name are required'
        };
      }

      if (registrationData.password !== registrationData.confirmPassword) {
        return {
          success: false,
          message: 'Passwords do not match'
        };
      }

      // Prepare complete registration data as FormData
      const formData = new FormData();

      // Basic registration fields
      formData.append('username', String(registrationData.username).trim());
      formData.append('password', String(registrationData.password));
      formData.append('full_name', String(registrationData.full_name).trim());

      // Optional contact fields
      if (registrationData.email && registrationData.email.trim()) {
        formData.append('email', String(registrationData.email).trim());
      }
      if (registrationData.phone && registrationData.phone.trim()) {
        formData.append('phone', String(registrationData.phone).trim());
      }

      // Setup/profile fields
      if (registrationData.gender) {
        formData.append('gender', registrationData.gender);
      }
      if (registrationData.age) {
        // Convert age to date of birth (approximate)
        const currentYear = new Date().getFullYear();
        const birthYear = currentYear - registrationData.age;
        formData.append('dob', `01-01-${birthYear}`);
      }
      if (registrationData.weight) {
        formData.append('weight', String(registrationData.weight));
      }
      if (registrationData.height) {
        formData.append('height', String(registrationData.height));
      }
      if (registrationData.goal) {
        formData.append('goal', registrationData.goal);
      }
      if (registrationData.level) {
        formData.append('level', registrationData.level);
      }

      console.log('🌐 Sending complete registration request to:', '/auth/register');

      const response = await api.post('/auth/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('📥 Registration response status:', response.status);
      console.log('📥 Registration response data:', {
        statusCode: response.data?.statusCode,
        message: response.data?.message,
        hasData: !!response.data?.data
      });

      // Backend returns: {statusCode: 200, message: string, data: User}
      if (response.data.statusCode === 200 && response.data.data) {
        // Store user data immediately after successful registration
        await AsyncStorage.setItem('user', JSON.stringify(response.data.data));
        console.log('✅ Complete registration successful, user data stored');

        // Return normalized response format for frontend
        return {
          success: true,
          user: response.data.data,
          message: response.data.message
        };
      } else {
        console.log('❌ Registration failed - invalid response format');
        return {
          success: false,
          message: response.data.message || 'Registration failed'
        };
      }
    } catch (error: any) {
      console.error('🚨 Complete registration error details:', {
        message: error.message,
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data
      });

      // Handle error response from backend
      if (error.response?.data?.message) {
        console.log('📝 Returning backend error message:', error.response.data.message);
        return {
          success: false,
          message: error.response.data.message
        };
      }

      // Handle network errors
      if (error.code === 'NETWORK_ERROR' || error.message.includes('Network Error')) {
        return {
          success: false,
          message: 'Network error. Please check your connection and server status.'
        };
      }

      // Re-throw unexpected errors
      throw error;
    }
  },

  async logout(): Promise<void> {
    try {
      // Only remove user data (no token to remove)
      await AsyncStorage.removeItem('user');
    } catch (error) {
      console.error('Logout error:', error);
    }
  },

  async getStoredUser(): Promise<User | null> {
    try {
      const userString = await AsyncStorage.getItem('user');
      return userString ? JSON.parse(userString) : null;
    } catch (error) {
      console.error('Get user error:', error);
      return null;
    }
  },

  async isAuthenticated(): Promise<boolean> {
    try {
      // Base authentication on stored user data instead of token
      const user = await this.getStoredUser();
      return !!user;
    } catch (error) {
      return false;
    }
  }
};