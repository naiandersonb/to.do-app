import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    height: 56,
    borderRadius: 5,
    paddingLeft: 16,
    marginTop: -(56 / 2)
  },

  input: {
    color: '#666666',
    height: '100%',
    flex: 1,
  },

  button: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    borderLeftColor: '#EBEBEB',
    borderLeftWidth: 1,
  }
})