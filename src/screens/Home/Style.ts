import { StyleSheet, Dimensions } from "react-native";
import { FONTS } from "../../constants/fonts";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
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
    fontSize: 18,
    fontWeight: "bold",
    color: "#E2F163",
    marginBottom: 10,
  },
  seeAllButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  seeAllText: {
    fontSize: 14,
    color: "#E2F163",
    marginRight: 5,
  },
  arrowIcon: {
    width: 12,
    height: 12,
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
  articleContainer: {
    paddingHorizontal: 20,
    marginTop: 24,
  },
  articleGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    flexWrap: "wrap",
  },
  articleCard: {
    width: (width - 60) / 2,
    backgroundColor: "#1C1C1E",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 20,
  },
  articleImage: {
    width: "100%",
    height: 120,
  },
  articleContent: {
    padding: 10,
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#E5E5E5",
    marginBottom: 5,
  },
  articleSubtitle: {
    fontSize: 12,
    color: "#E5E5E5",
    opacity: 0.7,
  },
  sectionContainer: {
    marginVertical: 20,
    paddingHorizontal: 16,
  },
});
