import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const expert = {
  name: "Chuyên gia Hùng",
  avatar: "", // Có thể thêm avatar sau
};

const initialMessages = [
  {
    id: "1",
    text: "Chào bạn! Bạn cần tư vấn gì về dinh dưỡng hoặc tập luyện?",
    from: "expert",
  },
  { id: "2", text: "Em muốn hỏi về chế độ ăn tăng cơ ạ.", from: "user" },
  {
    id: "3",
    text: "Bạn cao bao nhiêu, nặng bao nhiêu và tập mấy buổi/tuần?",
    from: "expert",
  },
];

export default function ExpertChatScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const flatListRef = useRef(null);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([
      ...messages,
      { id: Date.now().toString(), text: input, from: "user" },
    ]);
    setInput("");
    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#1C1C1E" }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{expert.name}</Text>
      </View>
      {/* Danh sách tin nhắn */}
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.bubbleWrap,
              item.from === "user" ? styles.bubbleRight : styles.bubbleLeft,
            ]}
          >
            <Text
              style={[
                styles.bubbleText,
                item.from === "user"
                  ? styles.bubbleTextUser
                  : styles.bubbleTextExpert,
              ]}
            >
              {item.text}
            </Text>
          </View>
        )}
        contentContainerStyle={{ padding: 16, paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
      />
      {/* Input gửi tin nhắn */}
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Nhập tin nhắn..."
          placeholderTextColor="#8E8E93"
        />
        <TouchableOpacity style={styles.sendBtn} onPress={sendMessage}>
          <Text style={styles.sendText}>Gửi</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#BBA3FF",
    paddingTop: 48,
    paddingBottom: 18,
    alignItems: "center",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    marginBottom: 8,
  },
  headerTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22,
  },
  bubbleWrap: {
    maxWidth: "75%",
    marginBottom: 12,
    borderRadius: 18,
    padding: 12,
  },
  bubbleLeft: {
    backgroundColor: "#fff",
    alignSelf: "flex-start",
    borderTopLeftRadius: 4,
  },
  bubbleRight: {
    backgroundColor: "#E2F163",
    alignSelf: "flex-end",
    borderTopRightRadius: 4,
  },
  bubbleText: {
    fontSize: 15,
  },
  bubbleTextExpert: {
    color: "#7B61FF",
    fontWeight: "bold",
  },
  bubbleTextUser: {
    color: "#232325",
    fontWeight: "bold",
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#232325",
    borderTopWidth: 1,
    borderColor: "#BBA3FF",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 15,
    color: "#232325",
    marginRight: 8,
  },
  sendBtn: {
    backgroundColor: "#E2F163",
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  sendText: {
    color: "#232325",
    fontWeight: "bold",
    fontSize: 15,
  },
});
