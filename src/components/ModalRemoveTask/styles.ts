import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonsGroup: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 32,
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    padding: 35,
    justifyContent: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  button: {
    color: '#666666',
    padding: 10,
    elevation: 2,
  },

  textStyle: {
    color: '#666666',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    textTransform: 'uppercase'
  },

  modalText: {
    marginBottom: 15,
    color: '#666666',
  },

  removeButton: {
    paddingLeft: 10,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  modalTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 15,
    color: '#666666',
  },
});