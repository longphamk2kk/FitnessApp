import { StyleSheet, Dimensions } from "react-native";
import { FONTS } from "../../constants/fonts";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
  },
  scrollView: {
    flex: 1,
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
    flexDirection: "row",
    alignItems: "center",
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
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  title: {
    fontSize: 32,
    fontFamily: FONTS.POPPINS.bold,
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 16,
    marginTop: 20,
  },
  subtitleContainer: {
    marginBottom: 32,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: FONTS.POPPINS.regular,
    color: "#FFFFFF",
    textAlign: "center",
    lineHeight: 20,
    opacity: 0.6,
    paddingHorizontal: 40,
  },
  avatarContainer: {
    width: "100%",
    height: 160,
    backgroundColor: "#B3A0FF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32,
  },
  avatarWrapper: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  editAvatarButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#E2F163",
    justifyContent: "center",
    alignItems: "center",
    transform: [{ translateX: 6 }, { translateY: 6 }],
  },
  editAvatarIcon: {
    width: 16,
    height: 16,
    tintColor: "#1C1C1E",
  },
  form: {
    width: "100%",
    paddingHorizontal: 16,
  },
  inputGroup: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontFamily: FONTS.POPPINS.medium,
    color: "#B3A0FF",
    marginBottom: 8,
  },
  input: {
    width: "100%",
    height: 52,
    backgroundColor: "#FFFFFF",
    borderRadius: 100,
    paddingHorizontal: 24,
    fontSize: 16,
    fontFamily: FONTS.POPPINS.regular,
    color: "#1C1C1E",
  },
  startButton: {
    backgroundColor: "#E2F163",
    borderRadius: 100,
    height: 52,
    width: width * 0.4,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 40,
  },
  startButtonDisabled: {
    opacity: 0.5,
  },
  startButtonText: {
    color: "#1C1C1E",
    fontSize: 18,
    fontFamily: FONTS.POPPINS.bold,
  },
});
