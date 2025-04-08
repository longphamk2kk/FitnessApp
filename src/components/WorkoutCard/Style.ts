import { StyleSheet, Dimensions } from "react-native";
import { FONTS } from "../../constants/fonts";

const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - 60) / 2; // 20px padding on each side, 20px gap

export const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    height: CARD_WIDTH * 1.2,
    borderRadius: 32,
    overflow: "hidden",
    marginBottom: 20,
  },
  background: {
    flex: 1,
    position: "relative",
  },
  backgroundImage: {
    borderRadius: 32,
  },
  favoriteButton: {
    position: "absolute",
    top: 16,
    right: 16,
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  starIcon: {
    width: 20,
    height: 20,
  },
  playButton: {
    position: "absolute",
    right: 16,
    bottom: 90,
    width: 40,
    height: 40,
    borderRadius: 20,
    // backgroundColor: "#7C57FF",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  playIcon: {
    width: 40,
    height: 40,
    // tintColor: "#7C57FF",
  },
  content: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    paddingBottom: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  title: {
    fontSize: 16,
    fontFamily: FONTS.POPPINS.semiBold,
    color: "#E2F163",
    marginBottom: 12,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 16,
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  statIcon: {
    width: 16,
    height: 16,
    marginRight: 2,
    tintColor: "#7C57FF",
  },
  statText: {
    fontSize: 12,
    fontFamily: FONTS.POPPINS.regular,
    color: "#FFFFFF",
  },
});
