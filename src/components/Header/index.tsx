import { Text, View } from "react-native"
import { styles } from "./styles"

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
