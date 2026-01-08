import { Image, StyleSheet, Text, View, Pressable } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require("./pomodoro.png")} />
      <View style={styles.actions}>
        <Text style={styles.timer}>25:00</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Começar</Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Created by Douglas</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40,
  },
  actions: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: "#14448080",
    width: "80%",
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#144480",
    gap: 32,
  },
  timer: {
    fontSize: 54,
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold"
  },
  button: {
    backgroundColor: "#B872FF",
    borderRadius:32,
    padding: 8
  },
  buttonText: {
    color: "#021123",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold"
  },
  footer: {
    width: "80%",
  },
  footerText: {
    textAlign: "center",
    color: "#FFFFFF90",
    fontSize: 12,
  },
});
