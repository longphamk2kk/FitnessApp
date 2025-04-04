import { StyleSheet, Dimensions } from "react-native";
import { FONTS } from '../../constants/fonts';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  skipButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
  },
  skipText: {
    color: '#E2F163',
    fontSize: 16,
    fontFamily: FONTS.POPPINS.medium,
    marginRight: 5,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
  },
  contentWrapper: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: 'rgba(179, 160, 255, 0.9)',
    paddingVertical: 40,
    marginTop: '70%',
    alignItems: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  nutritionIcon: {
    width: 48,
    height: 48,
    tintColor: '#E2F163',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontFamily: FONTS.POPPINS.bold,
    textAlign: 'center',
    marginHorizontal: 20,
    lineHeight: 32,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  indicator: {
    width: 20,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(102, 51, 204, 0.9)',
    marginHorizontal: 3,
  },
  activeIndicator: {
    backgroundColor: '#fff',
    width: 30,
  },
  nextButton: {
    backgroundColor: 'rgba(252, 250, 250, 0.41)',
    width: width * 0.5,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: FONTS.POPPINS.bold,
  },
}); 