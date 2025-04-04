import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Welcome: undefined;
  Welcome2: undefined;
  Onboarding1: undefined;
  Onboarding2: undefined;
  Onboarding3: undefined;
  Login: undefined;
  SignUp: undefined;
  ForgotPass: undefined;
  ResetPass: undefined;
  ResetSuccess: undefined;
  SetUp: undefined;
  Home: undefined;
  GenderPick: undefined;
  AgePicker: undefined;
  WeightPicker: undefined;
  HeightPicker: undefined;
};

export type NavigationProps = StackNavigationProp<RootStackParamList>; 