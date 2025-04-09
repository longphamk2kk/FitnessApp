import { StyleSheet } from "react-native";
import { FONTS } from "../../constants/fonts";

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 20,
  },
  backButton: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    tintColor: "#E2F163",
  },
  headerTitle: {
    flex: 1,
    fontSize: 24,
    fontFamily: FONTS.POPPINS.semiBold,
    color: "#E2F163",
    marginLeft: 8,
    textAlign: "center",
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  iconButton: {
    padding: 4,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: "#FFFFFF",
  },
});
