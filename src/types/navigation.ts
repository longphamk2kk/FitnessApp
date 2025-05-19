import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type MainAppParamList = {
  Home: undefined;
  Progress: undefined;
  Favourite: undefined;
  Support: undefined;
};

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
  MainApp: { screen: keyof MainAppParamList } | undefined;
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
  ProfileEdit: undefined;
  Settings: undefined;
  NotificationSetting: undefined;
  PasswordSetting: undefined;
  HelpFAQ: undefined;
};

export type HomeStackParamList = {
  HomeScreen: undefined;
  Search: undefined;
  Notification: undefined;
  Profile: undefined;
  ProfileEdit: undefined;
  Settings: undefined;
  NotificationSetting: undefined;
  PasswordSetting: undefined;
  Workout: undefined;
  Nutrition: undefined;
  Community: undefined;
  Recommendation: undefined;
  WeeklyChallenge: undefined;
  ArticleAndTips: undefined;
  TrainingDetail: { level: string };
  ExerciseDetail: {
    name: string;
    time: string;
    repetition: string;
    level: string;
  };
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
