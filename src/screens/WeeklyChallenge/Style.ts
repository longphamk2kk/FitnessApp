import { StyleSheet } from "react-native";
import { FONTS } from "../../constants/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
  },
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
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: "#E2F163",
  },
  headerTitle: {
    flex: 1,
    fontSize: 24,
    fontFamily: FONTS.POPPINS.semiBold,
    color: "#FFFFFF",
    marginLeft: 16,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  challengeCard: {
    width: "100%",
    borderRadius: 24,
    overflow: "hidden",
    backgroundColor: "#2C2C2E",
    marginTop: 16,
  },
  challengeImage: {
    width: "100%",
    height: 200,
  },
  challengeInfo: {
    padding: 16,
  },
  challengeTitle: {
    fontSize: 20,
    fontFamily: FONTS.POPPINS.semiBold,
    color: "#FFFFFF",
    marginBottom: 12,
  },
  statsContainer: {
    flexDirection: "row",
    gap: 16,
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  statIcon: {
    width: 16,
    height: 16,
    tintColor: "#B3A0FF",
    marginRight: 4,
  },
  statText: {
    fontSize: 14,
    fontFamily: FONTS.POPPINS.regular,
    color: "#FFFFFF",
  },
});
