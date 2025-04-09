import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    width: 160,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#1C1C1E",
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 120,
  },
  title: {
    fontSize: 14,
    color: "#FFFFFF",
    padding: 8,
  },
  starContainer: {
    position: "absolute",
    top: 8,
    right: 8,
  },
  starIcon: {
    width: 24,
    height: 24,
    tintColor: "#E2F163",
  },
});
