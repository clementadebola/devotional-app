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
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useState } from "react";

export default function profileScreen() {
  const [name, setName] = useState("clement");
  const [isEditingName, setIsEditingName] = useState(false);
  const [dailyReadingPlan, setDailyReadingPlan] = useState(true);
  const [anxietyHelpPlan, setAnxietyHelpPlan] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const primaryColor = darkMode? "#333333" : "#cc5200";
  const textColor = darkMode ? "#ffffff" : "#333333";

  return (
    <CustomScrollView>
      <SafeAreaView
        style={[
          styles.container,
          { backgroundColor: darkMode ? "#cc5200" : "#f5f5f5" },
        ]}
      >
        <View style={styles.header}>
          <Image style={styles.profileImg} source={ProfilePic} />

          {isEditingName ? (
            <TextInput
              style={[styles.nameInput, { color: textColor }]}
              value={name}
              onChangeText={setName}
              autoFocus
              onSubmitEditing={() => setIsEditingName(false)}
            />
          ) : (
            <Text style={[styles.nameText, { color: textColor }]}>
              Welcome {name}
            </Text>
          )}

          <TouchableOpacity onPress={() => setIsEditingName(!isEditingName)}>
            <Ionicons name="pencil" size={24} color={primaryColor} />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: primaryColor }]}>
            Devotional Plans
          </Text>

          <View style={styles.optionItem}>
            <Ionicons name="book" size={24} color={textColor} />
            <Text style={[styles.optionText, { color: textColor }]}>
              Daily Bible Plan
            </Text>

            <Switch
              value={dailyReadingPlan}
              onValueChange={setDailyReadingPlan}
              thumbColor={primaryColor}
              trackColor={{ false: "#767577", true: `${primaryColor}80` }}
            />
          </View>

          <View style={styles.optionItem}>
            <Ionicons name="heart" size={24} color={textColor} />
            <Text style={[styles.optionText, { color: textColor }]}>
              Anxiety Help Plan
            </Text>

            <Switch
              value={anxietyHelpPlan}
              onValueChange={setAnxietyHelpPlan}
              thumbColor={primaryColor}
              trackColor={{ false: "#767577", true: `${primaryColor}80` }}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: primaryColor }]}>
            Settings
          </Text>

          <View style={styles.optionItem}>
            <Ionicons name="moon" size={24} color={textColor} />
            <Text style={[styles.optionText, { color: textColor }]}>
              Dark Mode
            </Text>

            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              thumbColor={primaryColor}
              trackColor={{ false: "#767577", true: `${primaryColor}80` }}
            />
          </View>

          <TouchableOpacity style={styles.optionItem}>
            <Ionicons name="log-out" size={24} color="#ff4444" />
            <Text style={[styles.optionText, { color: "#ff4444" }]}>
              Sign Out
            </Text>
          </TouchableOpacity>
        </View>

        {/* stats Section*/}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, {color: primaryColor}]}>Your Progress</Text>

          <View style={styles.statsContainer}>

          <View style={styles.statItem}>
            <Text style={[styles.statNumber, {color: primaryColor}]}>24</Text>
            <Text style={[styles.statLabel, {color: textColor } ]}>Day Streak</Text>
          </View>

          <View style={styles.statItem}>
            <Text style={[styles.statNumber, {color: primaryColor}]}> 87</Text>
            <Text style={[styles.statLabel, {color: textColor}]}>Devotionals</Text>
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
    backgroundColor: "#cc5200",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10,
    padding: 10,
    gap: 15,
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  nameInput: {
    fontSize: 22,
    fontWeight: "600",
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 5,
  },
  nameText: {
    fontSize: 22,
    fontWeight: "600",
    flex: 1,
  },
  section: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  optionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 15,
  },
  statsContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10
  },
  statItem:{
    alignItems:'center',
    padding: 10
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  statLabel:{
    fontSize: 14,
    marginTop: 5
  },

});
