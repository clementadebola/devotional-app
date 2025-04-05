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
import { useNavigation } from "@react-navigation/native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

export default function devotionalScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContent}>
      <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.topTextWrap}>
          <Text style={styles.topText}>
           Verse of the day
          </Text>
          <Text style={styles.bibleVerse}>Psalm 147: 7 </Text>
          <Text style={styles.biblePassage}> Sing unto the lord with thanksgiving; sing upon the harp unto our
          God:</Text>
        </View>
      </View>

      <View style={styles.mainContent}>

      </View>
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
  backButton: {
    position: "absolute",
    top: 15,
    left: 16,
    backgroundColor: "#2f2f2f",
    padding: 7,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
  },
  topTextWrap: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: 'center',
    gap: 15
  },
  topText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  bibleVerse: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'semibold'
  },
  biblePassage: {
    color: '#fff',
    fontSize: 23,
    fontWeight: 'semibold',
  },

  mainContent: {
    flex: 2,
    backgroundColor: "#2f2f2f",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 35,
    alignItems: "center",
  },
  
});
