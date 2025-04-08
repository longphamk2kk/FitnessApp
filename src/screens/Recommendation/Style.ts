import { StyleSheet, Dimensions } from "react-native";
import { FONTS } from "../../constants/fonts";

const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - 48) / 2; // 48 = padding 16 * 2 + gap 16

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  workoutGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 16,
    paddingVertical: 16,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    gap: 8,
  },
  pageButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2C2C2E",
  },
  activePageButton: {
    backgroundColor: "#E2F163",
  },
  pageText: {
    fontSize: 14,
    fontFamily: FONTS.POPPINS.semiBold,
    color: "#FFFFFF",
  },
  activePageText: {
    color: "#1C1C1E",
  },
  ellipsis: {
    fontSize: 14,
    fontFamily: FONTS.POPPINS.semiBold,
    color: "#FFFFFF",
  },
});
