import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  SafeAreaView,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../types/navigation";
import { MaterialIcons } from "@expo/vector-icons";
import { FONTS } from "../../constants/fonts";
import Header from "../../components/Header";
import { useProfile } from "../../context/ProfileContext";
import CountryPicker from "react-native-country-picker-modal";
import { CountryCode, CountryInfo } from "../../types/country";
import {
  validateEmail,
  validatePhoneNumber,
  validateDateOfBirth,
  validateWeight,
  validateHeight,
  formatPhoneNumber,
  formatWeight,
  formatHeight,
} from "../../utils/validation";

const DEFAULT_COUNTRY_CODE: CountryCode = "VN";

const ProfileEdit = () => {
  const navigation = useNavigation<NavigationProps>();
  const { profileData, updateProfile } = useProfile();

  const [fullName, setFullName] = useState(profileData.fullName);
  const [email, setEmail] = useState(profileData.email);
  const [phone, setPhone] = useState(profileData.phone);
  const [dateOfBirth, setDateOfBirth] = useState(profileData.dateOfBirth);
  const [weight, setWeight] = useState(profileData.weight);
  const [height, setHeight] = useState(profileData.height);

  const [countryCode, setCountryCode] =
    useState<CountryCode>(DEFAULT_COUNTRY_CODE);
  const [countryPickerVisible, setCountryPickerVisible] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!fullName.trim()) {
      newErrors.fullName = "Họ tên không được để trống";
    }

    if (!validateEmail(email)) {
      newErrors.email = "Email không hợp lệ";
    }

    if (!validatePhoneNumber(phone, countryCode)) {
      newErrors.phone = "Số điện thoại không hợp lệ";
    }

    if (!validateDateOfBirth(dateOfBirth)) {
      newErrors.dateOfBirth = "Ngày sinh không hợp lệ (DD/MM/YYYY)";
    }

    if (!validateWeight(weight)) {
      newErrors.weight = "Cân nặng không hợp lệ (0-500 kg)";
    }

    if (!validateHeight(height)) {
      newErrors.height = "Chiều cao không hợp lệ (0-3 m)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleUpdateProfile = () => {
    if (validateForm()) {
      updateProfile({
        fullName: fullName.trim(),
        email: email.trim(),
        phone: formatPhoneNumber(phone, countryCode),
        dateOfBirth,
        weight: formatWeight(weight),
        height: formatHeight(height),
      });
      navigation.goBack();
    } else {
      Alert.alert("Lỗi", "Vui lòng kiểm tra lại thông tin đã nhập", [
        { text: "OK" },
      ]);
    }
  };

  const onSelectCountry = (country: CountryInfo) => {
    setCountryCode(country.cca2);
    setCountryPickerVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView style={styles.scrollView}>
          {/* Header */}
          <View style={[styles.header]}>
            <Header
              title="My Profile"
              onBack={() => navigation.goBack()}
              style={{ bottom: 25 }}
            />
          </View>

          {/* Profile Info */}
          <View style={styles.profileContainer}>
            <View style={styles.avatarContainer}>
              <View style={styles.avatarWrapper}>
                <MaterialIcons name="person" size={60} color="#B3A0FF" />
                <TouchableOpacity style={styles.editAvatarButton}>
                  <MaterialIcons name="edit" size={16} color="#1C1C1E" />
                </TouchableOpacity>
              </View>
              <Text style={styles.name}>{fullName}</Text>
              <Text style={styles.email}>{email}</Text>
              <Text style={styles.birthday}>Birthday: {dateOfBirth}</Text>
            </View>

            <View style={styles.infoContainer}>
              <View style={styles.infoBox}>
                <Text style={styles.infoNumber}>{weight} Kg</Text>
                <Text style={styles.infoLabel}>Weight</Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.infoBox}>
                <Text style={styles.infoNumber}>28</Text>
                <Text style={styles.infoLabel}>Years Old</Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.infoBox}>
                <Text style={styles.infoNumber}>{height} CM</Text>
                <Text style={styles.infoLabel}>Height</Text>
              </View>
            </View>
          </View>

          {/* Form */}
          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Full name</Text>
              <TextInput
                style={[styles.input, errors.fullName && styles.inputError]}
                value={fullName}
                onChangeText={setFullName}
                placeholder="Enter your full name"
                placeholderTextColor="#666"
              />
              {errors.fullName && (
                <Text style={styles.errorText}>{errors.fullName}</Text>
              )}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={[styles.input, errors.email && styles.inputError]}
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                placeholderTextColor="#666"
                keyboardType="email-address"
                autoCapitalize="none"
              />
              {errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Mobile Number</Text>
              <View style={styles.phoneInputContainer}>
                <TouchableOpacity
                  style={styles.countryPickerButton}
                  onPress={() => setCountryPickerVisible(true)}
                >
                  <CountryPicker
                    countryCode={countryCode}
                    withFilter
                    withFlag
                    withCallingCodeButton
                    onSelect={onSelectCountry}
                    visible={countryPickerVisible}
                    onClose={() => setCountryPickerVisible(false)}
                  />
                </TouchableOpacity>
                <TextInput
                  style={[styles.phoneInput, errors.phone && styles.inputError]}
                  value={phone}
                  onChangeText={setPhone}
                  placeholder="Enter your mobile number"
                  placeholderTextColor="#666"
                  keyboardType="phone-pad"
                />
              </View>
              {errors.phone && (
                <Text style={styles.errorText}>{errors.phone}</Text>
              )}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Date of birth</Text>
              <TextInput
                style={[styles.input, errors.dateOfBirth && styles.inputError]}
                value={dateOfBirth}
                onChangeText={setDateOfBirth}
                placeholder="DD/MM/YYYY"
                placeholderTextColor="#666"
              />
              {errors.dateOfBirth && (
                <Text style={styles.errorText}>{errors.dateOfBirth}</Text>
              )}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Weight</Text>
              <TextInput
                style={[styles.input, errors.weight && styles.inputError]}
                value={weight}
                onChangeText={setWeight}
                placeholder="Enter your weight (kg)"
                placeholderTextColor="#666"
                keyboardType="numeric"
              />
              {errors.weight && (
                <Text style={styles.errorText}>{errors.weight}</Text>
              )}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Height</Text>
              <TextInput
                style={[styles.input, errors.height && styles.inputError]}
                value={height}
                onChangeText={setHeight}
                placeholder="Enter your height (m)"
                placeholderTextColor="#666"
                keyboardType="numeric"
              />
              {errors.height && (
                <Text style={styles.errorText}>{errors.height}</Text>
              )}
            </View>
          </View>

          <TouchableOpacity
            style={styles.updateButton}
            onPress={handleUpdateProfile}
          >
            <Text style={styles.updateButtonText}>Update Profile</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
  },
  scrollView: {
    flex: 1,
  },
  header: {
    backgroundColor: "#B3A0FF",
    paddingBottom: 15,
  },
  profileContainer: {
    backgroundColor: "#B3A0FF",
  },
  avatarContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  avatarWrapper: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  editAvatarButton: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#E2F163",
    justifyContent: "center",
    alignItems: "center",
    transform: [{ translateX: 6 }, { translateY: 6 }],
  },
  name: {
    color: "#FFFFFF",
    fontSize: 22,
    fontFamily: FONTS.POPPINS.bold,
    marginTop: 10,
  },
  email: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: FONTS.POPPINS.regular,
  },
  birthday: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: FONTS.POPPINS.regular,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#7C57FF",
    marginHorizontal: 20,
    borderRadius: 12,
    paddingVertical: 15,
    marginBottom: 25,
    marginTop: 20,
  },
  infoBox: {
    alignItems: "center",
    flex: 1,
  },
  divider: {
    width: 1,
    backgroundColor: "#FFFFFF",
    marginVertical: 5,
  },
  infoNumber: {
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: FONTS.POPPINS.bold,
  },
  infoLabel: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: FONTS.POPPINS.regular,
    marginTop: 4,
  },
  form: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontFamily: FONTS.POPPINS.medium,
    color: "#B3A0FF",
    marginBottom: 8,
  },
  input: {
    width: "100%",
    height: 52,
    backgroundColor: "#FFFFFF",
    borderRadius: 100,
    paddingHorizontal: 24,
    fontSize: 16,
    fontFamily: FONTS.POPPINS.regular,
    color: "#1C1C1E",
  },
  updateButton: {
    backgroundColor: "#E2F163",
    borderRadius: 100,
    height: 52,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 32,
    marginBottom: 40,
  },
  updateButtonText: {
    color: "#1C1C1E",
    fontSize: 18,
    fontFamily: FONTS.POPPINS.bold,
  },
  phoneInputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  countryPickerButton: {
    paddingHorizontal: 10,
    height: 52,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    justifyContent: "center",
  },
  phoneInput: {
    flex: 1,
    height: 52,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    paddingHorizontal: 24,
    fontSize: 16,
    fontFamily: FONTS.POPPINS.regular,
    color: "#1C1C1E",
  },
  inputError: {
    borderWidth: 1,
    borderColor: "#FF3B30",
  },
  errorText: {
    color: "#FF3B30",
    fontSize: 12,
    fontFamily: FONTS.POPPINS.regular,
    marginTop: 4,
    marginLeft: 8,
  },
});

export default ProfileEdit;
