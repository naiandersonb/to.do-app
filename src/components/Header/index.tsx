import { StyleSheet, Text, View } from "react-native"

interface HeaderProps {
  tasksCounter: number
}

export function Header({ tasksCounter }: HeaderProps) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.logo}>to.do</Text>
      {tasksCounter > 0 && (
        <Text style={{ color: '#fff', marginTop: 10, fontSize: 16 }}>
          Você tem <Text style={styles.tasksCounter}>{`${tasksCounter} tarefa(s)`}</Text>
        </Text>
      )}
    </View>
  )
}
const styles = StyleSheet.create({
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