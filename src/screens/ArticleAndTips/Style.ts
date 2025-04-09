import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    gap: 8,
  },
  pageButton: {
    padding: 8,
    backgroundColor: "#333",
    borderRadius: 4,
  },
  pageText: {
    color: "#FFF",
  },
  ellipsis: {
    color: "#FFF",
    paddingHorizontal: 4,
  },
  tipGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  tipCard: {
    width: "110%",
    padding: 10,
    backgroundColor: "#1C1C1E",
    borderRadius: 8,
    marginBottom: 10,
  },
});
