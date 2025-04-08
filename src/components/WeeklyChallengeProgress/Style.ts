import { StyleSheet } from "react-native";
import { FONTS } from "../../constants/fonts";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2C2C2E",
    borderRadius: 24,
    padding: 16,
    marginTop: 16,
  },
  weekHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  weekTitle: {
    fontSize: 18,
    fontFamily: FONTS.POPPINS.semiBold,
    color: "#FFFFFF",
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 4,
  },
  statusText: {
    fontSize: 14,
    fontFamily: FONTS.POPPINS.regular,
    color: "#FFFFFF",
  },
  progressContainer: {
    marginVertical: 12,
  },
  progressBar: {
    height: 8,
    backgroundColor: "#3A3A3C",
    borderRadius: 4,
    marginTop: 8,
  },
  progressFill: {
    height: "100%",
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    fontFamily: FONTS.POPPINS.regular,
    color: "#B3B3B3",
  },
  targetContainer: {
    marginTop: 16,
  },
  targetTitle: {
    fontSize: 16,
    fontFamily: FONTS.POPPINS.medium,
    color: "#FFFFFF",
    marginBottom: 8,
  },
  targetItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  targetIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
    tintColor: "#B3A0FF",
  },
  targetText: {
    fontSize: 14,
    fontFamily: FONTS.POPPINS.regular,
    color: "#FFFFFF",
  },
  addButton: {
    backgroundColor: "#B3A0FF",
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
    marginTop: 16,
  },
  addButtonText: {
    fontSize: 16,
    fontFamily: FONTS.POPPINS.medium,
    color: "#FFFFFF",
  },
});
