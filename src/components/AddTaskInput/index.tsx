import { CaretRight } from "phosphor-react-native";
import { useCallback, useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

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
          style={styles.input}
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

