import { StyleSheet, Dimensions } from "react-native";
import { FONTS } from '../../constants/fonts';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 40,
    marginBottom: 40,
  },
  backButton: {
    padding: 8,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: "#E2F163"
  },
  headerTitle: {
    fontSize: 32,
    fontFamily: "Poppins-Bold",
    color: "#E2F163",
    flex: 1,
    textAlign: 'center',
    marginRight: 40,
  },
  content: {
    flex: 1,
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 32,
    fontFamily: "Poppins-Bold",
    color: "#FFFFFF",
    marginBottom: 16,
  },
  welcomeDescription: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#FFFFFF",
    textAlign: "center",
    paddingHorizontal: 40,
    lineHeight: 24,
  },
  inputSection: {
    backgroundColor: '#B3A0FF',
    padding: 20,
    width: width,
    alignSelf: 'center',
  },
  inputLabel: {
    color: '#1C1C1E',
    fontSize: 16,
    fontFamily: FONTS.POPPINS.medium,
    marginBottom: 12,
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 20,
    fontFamily: FONTS.POPPINS.regular,
    fontSize: 16,
    width: '100%',
    borderRadius: 30,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 8,
    paddingRight: 20,
  },
  forgotPasswordText: {
    color: '#1C1C1E',
    fontSize: 14,
    fontFamily: FONTS.POPPINS.regular,
  },
  loginButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 30,
    height: 56,
    width: width * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: FONTS.POPPINS.bold,
  },
  orText: {
    color: '#8E8E93',
    textAlign: 'center',
    marginTop: 40,
    fontFamily: FONTS.POPPINS.regular,
    fontSize: 14,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginTop: 20,
  },
  socialButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  signupText: {
    color: '#8E8E93',
    fontFamily: FONTS.POPPINS.regular,
    fontSize: 14,
  },
  signupLink: {
    color: '#E2F163',
    fontFamily: FONTS.POPPINS.bold,
    fontSize: 14,
  },
}); 