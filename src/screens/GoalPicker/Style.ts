import { StyleSheet, Dimensions } from "react-native";
import { FONTS } from '../../constants/fonts';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 40,
    marginBottom: 20,
  },
  backButton: {
    padding: 8,
  },
  backContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: "#E2F163",
  },
  backText: {
    color: "#E2F163",
    fontSize: 16,
    fontFamily: FONTS.POPPINS.medium,
    marginLeft: 8,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontFamily: FONTS.POPPINS.bold,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitleContainer: {
    padding: 20,
    width: width,
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: FONTS.POPPINS.regular,
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 20,
    opacity: 0.6,
  },
  goalsContainer: {
    width: '100%',
    backgroundColor: '#B3A0FF',
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  goalOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  goalText: {
    fontSize: 17,
    fontFamily: FONTS.POPPINS.medium,
    color: '#1C1C1E',
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#1C1C1E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonSelected: {
    borderColor: '#1C1C1E',
  },
  radioButtonInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#1C1C1E',
  },
  continueButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderRadius: 30,
    height: 52,
    width: width * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  continueButtonDisabled: {
    opacity: 0.5,
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: FONTS.POPPINS.bold,
  },
  continueButtonTextDisabled: {
    opacity: 0.5,
  },
}); 