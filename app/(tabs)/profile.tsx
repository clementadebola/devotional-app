import {
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Switch,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfilePic from "../../assets/images/Perss.jpg";
import CustomScrollView from "@/components/CustomScrollView";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function ProfileScreen() {
  const [name, setName] = useState("Clement");
  const [isEditingName, setIsEditingName] = useState(false);
  const [dailyReadingPlan, setDailyReadingPlan] = useState(true);
  const [anxietyHelpPlan, setAnxietyHelpPlan] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Enhanced color scheme
  const theme = {
    primary: darkMode ? "#ff8c42" : "#cc5200",
    background: darkMode ? "#1e1e1e" : "#f5f5f5",
    cardBackground: darkMode ? "#2d2d2d" : "#ffffff",
    text: darkMode ? "#ffffff" : "#333333",
    secondaryText: darkMode ? "#b3b3b3" : "#666666",
    border: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
    danger: "#ff4444",
  };

  return (
    <CustomScrollView>
      <SafeAreaView
        style={[
          styles.container,
          { backgroundColor: theme.background },
        ]}
      >
        <View style={styles.header}>
          <Image style={styles.profileImg} source={ProfilePic} />

          <View style={styles.nameContainer}>
            {isEditingName ? (
              <TextInput
                style={[styles.nameInput, { color: theme.text, borderBottomColor: theme.border }]}
                value={name}
                onChangeText={setName}
                autoFocus
                onSubmitEditing={() => setIsEditingName(false)}
              />
            ) : (
              <Text style={[styles.nameText, { color: theme.text }]}>
                Welcome {name}
              </Text>
            )}

            <TouchableOpacity 
              style={styles.editButton}
              onPress={() => setIsEditingName(!isEditingName)}>
              <Ionicons name="pencil" size={20} color={theme.primary} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.section, { backgroundColor: theme.cardBackground, borderColor: theme.border }]}>
          <Text style={[styles.sectionTitle, { color: theme.primary }]}>
            Devotional Plans
          </Text>

          <View style={[styles.optionItem, { borderBottomColor: theme.border }]}>
            <Ionicons name="book" size={24} color={theme.primary} />
            <Text style={[styles.optionText, { color: theme.text }]}>
              Daily Bible Plan
            </Text>

            <Switch
              value={dailyReadingPlan}
              onValueChange={setDailyReadingPlan}
              thumbColor={dailyReadingPlan ? theme.primary : "#f4f3f4"}
              trackColor={{ false: "#767577", true: `${theme.primary}80` }}
              ios_backgroundColor="#3e3e3e"
            />
          </View>

          <View style={[styles.optionItem, { borderBottomColor: theme.border }]}>
            <Ionicons name="heart" size={24} color={theme.primary} />
            <Text style={[styles.optionText, { color: theme.text }]}>
              Anxiety Help Plan
            </Text>

            <Switch
              value={anxietyHelpPlan}
              onValueChange={setAnxietyHelpPlan}
              thumbColor={anxietyHelpPlan ? theme.primary : "#f4f3f4"}
              trackColor={{ false: "#767577", true: `${theme.primary}80` }}
              ios_backgroundColor="#3e3e3e"
            />
          </View>
        </View>

        <View style={[styles.section, { backgroundColor: theme.cardBackground, borderColor: theme.border }]}>
          <Text style={[styles.sectionTitle, { color: theme.primary }]}>
            Settings
          </Text>

          <View style={[styles.optionItem, { borderBottomColor: theme.border }]}>
            <Ionicons name={darkMode ? "sunny" : "moon"} size={24} color={theme.primary} />
            <Text style={[styles.optionText, { color: theme.text }]}>
              Dark Mode
            </Text>

            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              thumbColor={darkMode ? theme.primary : "#f4f3f4"}
              trackColor={{ false: "#767577", true: `${theme.primary}80` }}
              ios_backgroundColor="#3e3e3e"
            />
          </View>

          <TouchableOpacity style={styles.optionItem}>
            <Ionicons name="log-out" size={24} color={theme.danger} />
            <Text style={[styles.optionText, { color: theme.danger }]}>
              Sign Out
            </Text>
          </TouchableOpacity>
        </View>

        {/* Stats Section */}
        <View style={[styles.section, { backgroundColor: theme.cardBackground, borderColor: theme.border }]}>
          <Text style={[styles.sectionTitle, { color: theme.primary }]}>
            Your Progress
          </Text>

          <View style={styles.statsContainer}>
            <View style={[styles.statItem, { backgroundColor: `${theme.primary}15` }]}>
              <Text style={[styles.statNumber, { color: theme.primary }]}>24</Text>
              <Text style={[styles.statLabel, { color: theme.secondaryText }]}>Day Streak</Text>
              <View style={styles.iconContainer}>
                <Ionicons name="flame" size={18} color={theme.primary} />
              </View>
            </View>

            <View style={[styles.statItem, { backgroundColor: `${theme.primary}15` }]}>
              <Text style={[styles.statNumber, { color: theme.primary }]}>87</Text>
              <Text style={[styles.statLabel, { color: theme.secondaryText }]}>Devotionals</Text>
              <View style={styles.iconContainer}>
                <Ionicons name="book" size={18} color={theme.primary} />
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </CustomScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 15,
  },
  profileImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  nameContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  nameInput: {
    fontSize: 22,
    fontWeight: "600",
    flex: 1,
    borderBottomWidth: 1,
    paddingVertical: 5,
  },
  nameText: {
    fontSize: 22,
    fontWeight: "600",
    flex: 1,
  },
  editButton: {
    padding: 8,
  },
  section: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  optionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 15,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  statItem: {
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    width: '48%',
    position: 'relative',
  },
  statNumber: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    marginTop: 5,
  },
  iconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});