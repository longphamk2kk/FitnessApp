import { StyleSheet } from 'react-native';
import { FONTS } from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 50,
    marginBottom: 15,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fitText: {
    fontFamily: FONTS.POPPINS.blackItalic,
    fontSize: 48,
    color: '#E2F163',
    // fontStyle: 'italic',
    letterSpacing: 1,
  },
  bodyText: {
    fontFamily: FONTS.POPPINS.thinItalic,
    fontSize: 48,
    color: '#E2F163',
    letterSpacing: 1,
  },
}); 