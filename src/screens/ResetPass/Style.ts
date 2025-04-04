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
    marginBottom: 30,
    paddingHorizontal: 40,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: FONTS.POPPINS.regular,
    color: "#8E8E93",
    textAlign: 'center',
    lineHeight: 20,
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
    justifyContent: 'flex-start',
    paddingTop: 30,
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderRadius: 30,
    height: 52,
    width: width * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  resetButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: FONTS.POPPINS.bold,
  },
}); 