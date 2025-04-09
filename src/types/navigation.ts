import { NativeStackNavigationProp } from "@react-navigation/native-stack";

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
  Gender: undefined;
  Age: undefined;
  Height: undefined;
  Weight: undefined;
  GoalPicker: undefined;
  ActiveLevel: undefined;
  FillProfile: undefined;
  Home: undefined;
  MainApp: undefined;
  Workout: undefined;
  ProgressTracking: undefined;
  Nutrition: undefined;
  Community: undefined;
  Recommendation: undefined;
  WeeklyChallenge: undefined;
  ArticleAndTips: undefined;
  Search: undefined;
  Notification: undefined;
  Profile: undefined;
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
