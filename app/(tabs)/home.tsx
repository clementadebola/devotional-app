import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import CustomScrollView from "@/components/CustomScrollView";

export default function HomeScreen() {

  return (
    <SafeAreaView style={styles.container}>
      <CustomScrollView>
      <View style={styles.topContent}>
        <View style={styles.topTextWrap}>
          <Text style={{ color: "white" }}>
            Sing unto the lord with thanksgiving; sing upon the harp unto our
            God:
          </Text>
          <Text>Psalm 147: 7 </Text>
        </View>
      </View>

      <View style={styles.mainContent}>
        <View style={styles.card}>
          <View>
            <Text style={styles.cardHeadText}>Monring Devotional</Text>
            <Text style={styles.cardPtext}>
              Start your day with this passage
            </Text>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text onPress={() => router.push("/(tabs)/devotional")} style={styles.buttonText}>Start Now!</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        
      </View>
      </CustomScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cc5200",
  },
  topContent: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    position: "relative",
    padding: 20,
  },
  topTextWrap: {
    flexDirection: "column",
    alignItems: "center",
  },
  mainContent: {
    flex: 2,
    backgroundColor: "#fff3e6",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 35,
    alignItems: "center",
  },
  card: {
    backgroundColor: "#2f2f2f",
    padding: 20,
    borderRadius: 20,
    width: 350,
    height: 150,
    flexDirection: "column",
    gap: 10,
  },
  cardHeadText: {
    color: "#fff",
    fontSize: 23,
    fontWeight: "bold",
  },
  cardPtext: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "thin",
    letterSpacing: 1.5,
  },
  button: {
    backgroundColor: "#ff6600",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#000",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
