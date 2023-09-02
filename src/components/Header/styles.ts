import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerContainer: {
    height: 200,
    paddingHorizontal: 24,
    backgroundColor: '#8257E5',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },

  logo: {
    fontFamily: 'Roboto',
    fontSize: 48,
    color: '#fff',
    fontWeight: 'bold'
  },

  tasksCounter: {

    fontWeight: 'bold',
    fontSize: 16
  }
})