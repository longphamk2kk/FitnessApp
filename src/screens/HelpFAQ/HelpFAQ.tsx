import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
  Animated,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../types/navigation";

const TABS = ["FAQ", "Contact Us"];
const FILTERS = ["General", "Account", "Services"];

const FAQ_LIST = [
  {
    question: "Lorem ipsum dolor sit amet?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt tortor placerat a. Proin ac diam quam. Aenean in sagittis magna, ut feugiat diam.",
  },
  {
    question: "Lorem ipsum dolor sit amet?",
    answer: "Câu trả lời mẫu cho câu hỏi 2.",
  },
  {
    question: "Lorem ipsum dolor sit amet?",
    answer: "Câu trả lời mẫu cho câu hỏi 3.",
  },
  {
    question: "Lorem ipsum dolor sit amet?",
    answer: "Câu trả lời mẫu cho câu hỏi 4.",
  },
  {
    question: "Lorem ipsum dolor sit amet?",
    answer: "Câu trả lời mẫu cho câu hỏi 5.",
  },
  {
    question: "Lorem ipsum dolor sit amet?",
    answer: "Câu trả lời mẫu cho câu hỏi 6.",
  },
];

const CONTACT_LIST = [
  {
    icon: require("../../assets/icons/Profile/icon_help.png"),
    label: "Customer service",
    detail: "Hotline: 1900 1234\nEmail: support@fitnessapp.com",
  },
  {
    icon: require("../../assets/icons/Profile/icon_website.png"),
    label: "Website",
    detail: "https://fitnessapp.com",
  },
  {
    icon: require("../../assets/icons/Profile/icon_phone.png"),
    label: "Whatsapp",
    detail: "+84 123 456 789",
  },
  {
    icon: require("../../assets/icons/Profile/icon_facebook.png"),
    label: "Facebook",
    detail: "facebook.com/fitnessapp",
  },
  {
    icon: require("../../assets/icons/Profile/icon_camera.png"),
    label: "Instagram",
    detail: "@fitnessapp",
  },
];

const HelpFAQ = () => {
  const navigation = useNavigation<NavigationProps>();
  const [activeTab, setActiveTab] = useState("FAQ");
  const [activeFilter, setActiveFilter] = useState("General");
  const [search, setSearch] = useState("");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const handleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 10,
          marginBottom: 0,
        }}
      >
        <Header title="Help & FAQs" style={styles.header} />
      </View>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>How Can We Help You?</Text>
        {/* Tabs */}
        <View style={styles.tabsContainer}>
          {TABS.map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, activeTab === tab && styles.tabActive]}
              onPress={() => setActiveTab(tab)}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.tabTextActive,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {activeTab === "FAQ" ? (
          <>
            {/* Filters */}
            <View style={styles.filtersContainer}>
              {FILTERS.map((filter) => (
                <TouchableOpacity
                  key={filter}
                  style={[
                    styles.filter,
                    activeFilter === filter && styles.filterActive,
                  ]}
                  onPress={() => setActiveFilter(filter)}
                >
                  <Text
                    style={[
                      styles.filterText,
                      activeFilter === filter && styles.filterTextActive,
                    ]}
                  >
                    {filter}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            {/* Search */}
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor="#B3B3B3"
              value={search}
              onChangeText={setSearch}
            />
            {/* FAQ List */}
            <View style={styles.divider} />
            {FAQ_LIST.filter((faq) =>
              faq.question.toLowerCase().includes(search.toLowerCase())
            ).map((faq, idx) => (
              <View key={idx}>
                <TouchableOpacity
                  style={styles.faqItem}
                  onPress={() => handleExpand(idx)}
                >
                  <Text
                    style={[
                      styles.faqQuestion,
                      idx === 0
                        ? styles.faqQuestionActive
                        : styles.faqQuestionDefault,
                    ]}
                  >
                    {faq.question}
                  </Text>
                  <MaterialIcons
                    name={expandedIndex === idx ? "expand-less" : "expand-more"}
                    size={24}
                    color={idx === 0 ? "#E2F163" : "#8E8EF3"}
                  />
                </TouchableOpacity>
                {expandedIndex === idx && (
                  <Text style={styles.faqAnswer}>{faq.answer}</Text>
                )}
                <View style={styles.divider} />
              </View>
            ))}
          </>
        ) : (
          <>
            {CONTACT_LIST.map((item, idx) => (
              <View key={idx}>
                <TouchableOpacity
                  style={styles.contactItem}
                  onPress={() => handleExpand(idx)}
                  activeOpacity={0.8}
                >
                  <View style={styles.contactLeft}>
                    <View style={styles.contactIconWrapper}>
                      <Animated.Image
                        source={item.icon}
                        style={styles.contactIcon}
                      />
                    </View>
                    <Text style={styles.contactLabel}>{item.label}</Text>
                  </View>
                  <MaterialIcons
                    name={expandedIndex === idx ? "expand-less" : "expand-more"}
                    size={24}
                    color="#E2F163"
                  />
                </TouchableOpacity>
                {expandedIndex === idx && (
                  <Text style={styles.contactDetail}>{item.detail}</Text>
                )}
              </View>
            ))}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
  },
  header: {
    bottom: 35,
    // backgroundColor: "white",
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
    bottom: 30,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 18,
    marginTop: 10,
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  tab: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 22,
    marginHorizontal: 5,
    paddingVertical: 10,
    alignItems: "center",
  },
  tabActive: {
    backgroundColor: "#E2F163",
  },
  tabText: {
    color: "#8E8EF3",
    fontSize: 16,
    fontWeight: "500",
  },
  tabTextActive: {
    color: "#000",
  },
  filtersContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  filter: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 22,
    marginHorizontal: 5,
    paddingVertical: 10,
    alignItems: "center",
  },
  filterActive: {
    backgroundColor: "#E2F163",
  },
  filterText: {
    color: "#8E8EF3",
    fontSize: 16,
    fontWeight: "500",
  },
  filterTextActive: {
    color: "#000",
  },
  searchInput: {
    backgroundColor: "#fff",
    borderRadius: 22,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 16,
    color: "#222",
    marginBottom: 18,
  },
  divider: {
    height: 2,
    backgroundColor: "#E2F163",
    marginVertical: 8,
    borderRadius: 1,
  },
  faqItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  faqQuestion: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
  },
  faqQuestionActive: {
    color: "#E2F163",
  },
  faqQuestionDefault: {
    color: "#8E8EF3",
  },
  faqAnswer: {
    color: "#fff",
    fontSize: 15,
    marginTop: 6,
    marginBottom: 4,
    lineHeight: 20,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    marginBottom: 8,
  },
  contactLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  contactIconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#8E8EF3",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  contactIcon: {
    width: 48,
    height: 48,
    resizeMode: "contain",
    // tintColor: "#fff",
  },
  contactLabel: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
  contactDetail: {
    color: "#fff",
    fontSize: 15,
    marginLeft: 64,
    marginBottom: 8,
    lineHeight: 20,
  },
});

export default HelpFAQ;
