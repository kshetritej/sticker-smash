import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}
    >
      <Text style={styles.text}> Homescreen </Text>
      <Link href="/about" style={styles.button}>
      Go to About
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button:{
    backgroundColor: '#61dafb',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  }
}) 