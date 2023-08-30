import { CaretRight } from "phosphor-react-native";
import { useCallback, useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

interface AddTaskInputProps {
  addTask: (newTaskTitle: string) => void
}

export function AddTaskInput({ addTask }: AddTaskInputProps) {
  const [newTask, setNewTask] = useState('')

  const handleAddTask = useCallback(() => {
    addTask(newTask)
    setNewTask('')
  }, [newTask])

  return (
    <View style={{ paddingHorizontal: 24 }}>
      <View style={styles.inputContainer}>
        <TextInput
          value={newTask}
          onChangeText={setNewTask}
          style={{ color: '#666666' }}
          placeholderTextColor='#B2B2B2'
          placeholder="Adicione uma tarefa"
        />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleAddTask}
        >
          <CaretRight size={24} color="#B2B2B2" weight="light" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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

  button: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    borderLeftColor: '#EBEBEB',
    borderLeftWidth: 1,
  }
})