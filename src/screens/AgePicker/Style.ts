import { StyleSheet, Dimensions } from "react-native";
import { FONTS } from '../../constants/fonts';

const { width, height } = Dimensions.get('window');
const ITEM_WIDTH = 80;
const INDICATOR_WIDTH = 2;

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
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 20,
  },
  agePickerContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  selectedAgeText: {
    fontSize: 80,
    fontFamily: FONTS.POPPINS.bold,
    color: '#FFFFFF',
    marginBottom: 16,
  },
  triangleIcon: {
    width: 24,
    height: 24,
    tintColor: '#E2F163',
    marginBottom: 16,
    transform: [{ rotate: '90deg' }],
  },
  ageSliderContainer: {
    width: width,
    height: 80,
    justifyContent: 'center',
    backgroundColor: '#B3A0FF',
    position: 'relative',
  },
  ageSlider: {
    paddingHorizontal: (width - ITEM_WIDTH) / 2,
  },
  ageItem: {
    width: ITEM_WIDTH,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ageText: {
    fontSize: 32,
    fontFamily: FONTS.POPPINS.medium,
    color: '#1C1C1E',
  },
  ageTextSelected: {
    color: '#FFFFFF',
    fontFamily: FONTS.POPPINS.bold,
  },
  selectedAgeIndicator: {
    position: 'absolute',
    left: (width - ITEM_WIDTH) / 2,
    width: INDICATOR_WIDTH,
    height: 80,
    backgroundColor: '#FFFFFF',
  },
  selectedAgeIndicatorRight: {
    position: 'absolute',
    left: (width + ITEM_WIDTH) / 2 - INDICATOR_WIDTH,
    width: INDICATOR_WIDTH,
    height: 80,
    backgroundColor: '#FFFFFF',
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
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: FONTS.POPPINS.bold,
  },
}); 