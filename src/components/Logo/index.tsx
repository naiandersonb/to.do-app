import { StyleSheet, Text } from "react-native";

export function Logo() {
  return (
    <Text style={styles.logo}>to.do</Text>
  )
}

const styles = StyleSheet.create({
  logo: {
    fontFamily: 'Inter-ExtraBold',
    fontSize: 32,
    color: '#fff'
  }
})