import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: 24,

    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    paddingVertical: 24,
    flex: 1,
    gap: 16
  },

  editButton: {
    paddingLeft: 10,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  checkbox: {
    borderRadius: 5,
    borderColor: '#B2B2B2'
  }
})