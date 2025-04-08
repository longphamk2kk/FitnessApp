import { StyleSheet, Dimensions } from "react-native";
import { FONTS } from "../../constants/fonts";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontFamily: FONTS.POPPINS.semiBold,
    color: "#B3A0FF",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: FONTS.POPPINS.regular,
    color: "#FFFFFF",
    opacity: 0.6,
  },
  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  iconButton: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  menuItem: {
    alignItems: "center",
    width: 80,
    height: 80,
    justifyContent: "center",
  },
  menuIcon: {
    width: 80,
    height: 80,
    tintColor: "#B3A0FF",
  },
  recommendationSection: {
    paddingHorizontal: 20,
    marginTop: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: FONTS.POPPINS.semiBold,
    color: "#FFFFFF",
  },
  seeAllButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  seeAllText: {
    fontSize: 14,
    fontFamily: FONTS.POPPINS.medium,
    color: "#E2F163",
    marginRight: 4,
  },
  arrowIcon: {
    width: 16,
    height: 16,
    tintColor: "#E2F163",
    transform: [{ rotate: "180deg" }],
  },
  workoutGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  // Weekly Challenge Section
  weeklySection: {
    paddingHorizontal: 20,
    marginTop: 24,
    marginBottom: 24,
    backgroundColor: "#B3A0FF",
    // borderRadius: 24,
    padding: 12,
    height: 180,
  },
  weeklyCard: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    overflow: "hidden",
    flexDirection: "row",
  },
  weeklyOverlay: {
    width: "50%",
    height: "100%",
    backgroundColor: "#1C1C1E",
    padding: 16,
    borderBottomLeftRadius: 20,
  },
  weeklyImage: {
    width: "50%",
    height: "100%",
  },
  weeklyContent: {
    flex: 1,
    justifyContent: "center",
  },
  weeklyTitle: {
    fontSize: 24,
    lineHeight: 28,
    fontFamily: FONTS.POPPINS.semiBold,
    color: "#E2F163",
    marginBottom: 4,
  },
  weeklySubtitle: {
    fontSize: 14,
    fontFamily: FONTS.POPPINS.regular,
    color: "#FFFFFF",
  },
});
