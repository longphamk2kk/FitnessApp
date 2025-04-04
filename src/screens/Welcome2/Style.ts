import { StyleSheet } from 'react-native';
import { FONTS } from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay tối
  },
  welcomeText: {
    color: '#E2F163',
    fontSize: 24,
    fontFamily: FONTS.POPPINS.regular,
    marginBottom: 10,
  },
  logoContainer: {
    alignItems: 'center',
  },
  fbContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  fbLogo: {
    width: 100,
    height: 50,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fitText: {
    fontFamily: FONTS.POPPINS.blackItalic,
    fontSize: 48,
    color: '#E2F163',
    letterSpacing: 1,
  },
  bodyText: {
    fontFamily: FONTS.POPPINS.thinItalic,
    fontSize: 48,
    color: '#E2F163',
    letterSpacing: 1,
  },
}); 