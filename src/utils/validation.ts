import { parsePhoneNumberFromString } from "libphonenumber-js";
import { CountryCode } from "../types/country";

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhoneNumber = (
  phoneNumber: string,
  countryCode: CountryCode
): boolean => {
  try {
    const phoneNumberObj = parsePhoneNumberFromString(phoneNumber, countryCode);
    return phoneNumberObj ? phoneNumberObj.isValid() : false;
  } catch {
    return false;
  }
};

export const formatPhoneNumber = (
  phoneNumber: string,
  countryCode: CountryCode
): string => {
  try {
    const phoneNumberObj = parsePhoneNumberFromString(phoneNumber, countryCode);
    return phoneNumberObj ? phoneNumberObj.formatInternational() : phoneNumber;
  } catch {
    return phoneNumber;
  }
};

export const validateDateOfBirth = (date: string): boolean => {
  // Format: DD/MM/YYYY
  const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
  if (!dateRegex.test(date)) return false;

  const [day, month, year] = date.split("/").map(Number);
  const dateObj = new Date(year, month - 1, day);

  return (
    dateObj.getDate() === day &&
    dateObj.getMonth() === month - 1 &&
    dateObj.getFullYear() === year
  );
};

export const validateWeight = (weight: string): boolean => {
  const weightNum = parseFloat(weight);
  return !isNaN(weightNum) && weightNum > 0 && weightNum < 500;
};

export const validateHeight = (height: string): boolean => {
  const heightNum = parseFloat(height);
  return !isNaN(heightNum) && heightNum > 0 && heightNum < 3;
};

export const formatWeight = (weight: string): string => {
  const weightNum = parseFloat(weight);
  return isNaN(weightNum) ? weight : weightNum.toFixed(1);
};

export const formatHeight = (height: string): string => {
  const heightNum = parseFloat(height);
  return isNaN(heightNum) ? height : heightNum.toFixed(2);
};
