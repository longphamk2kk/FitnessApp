import { StyleSheet, Dimensions } from "react-native";
import { FONTS } from '../../constants/fonts';

const { width, height } = Dimensions.get('window');

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
    marginBottom: 20,
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
    fontSize: 24,
    fontFamily: FONTS.POPPINS.bold,
    color: "#E2F163",
    flex: 1,
    textAlign: 'center',
    marginRight: 40,
  },
  content: {
    flex: 1,
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: FONTS.POPPINS.bold,
    color: "#FFFFFF",
  },
  inputSection: {
    backgroundColor: '#B3A0FF',
    padding: 20,
    width: width,
  },
  inputLabel: {
    color: '#1C1C1E',
    fontSize: 16,
    fontFamily: FONTS.POPPINS.medium,
    marginBottom: 8,
    marginLeft: 8,
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 16,
    fontFamily: FONTS.POPPINS.regular,
    fontSize: 16,
    width: '100%',
    borderRadius: 30,
    height: 50,
  },
  bottomSection: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 30,
  },
  authSection: {
    alignItems: 'center',
  },
  termsContainer: {
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 30,
  },
  termsText: {
    color: '#8E8E93',
    fontFamily: FONTS.POPPINS.regular,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 18,
    top:10
  },
  termsLink: {
    color: '#E2F163',
    fontFamily: FONTS.POPPINS.regular,
    fontSize:14,
  },
  signUpButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 30,
    height: 56,
    width: width * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    bottom:5,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  signUpButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: FONTS.POPPINS.bold,
  },
  orText: {
    color: '#8E8E93',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: FONTS.POPPINS.regular,
    fontSize: 14,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 30,
  },
  socialButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    width: 20,
    height: 20,
  },
  loginContainer: {
    alignItems: 'center',
    marginTop: 'auto',
    paddingVertical: 20,
  },
  loginText: {
    color: '#8E8E93',
    fontFamily: FONTS.POPPINS.regular,
    fontSize: 14,
  },
  loginLink: {
    color: '#E2F163',
    fontFamily: FONTS.POPPINS.bold,
    fontSize: 14,
    marginLeft: 4,
  },
}); 