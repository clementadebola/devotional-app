import { Image, StyleSheet, Platform, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import ProfilePic from "../../assets/images/Perss.jpg";
import CustomScrollView from "@/components/CustomScrollView";


export default function profileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <CustomScrollView>
        
      <View style={styles.header}>
      <Image style={styles.profileImg} source={ProfilePic} />
        <Text>Welcome Clement</Text>
      </View>

      </CustomScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cc5200",
    padding: 10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    gap: 25
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
  }

});
