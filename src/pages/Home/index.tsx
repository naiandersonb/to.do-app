import { useCallback, useState } from "react";
import { FlatList, View } from "react-native";
import { AddTaskInput } from "../../components/AddTaskInput";
import { Header } from "../../components/Header";
import { TaskCard } from "../../components/TaskCard";
import { Task } from "../../interfaces/task";
import { styles } from "./styles";

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = useCallback((newTaskTitle: string) => {
    if (!newTaskTitle) return

    const newTask: Task = {
      id: String(new Date().getTime()),
      title: newTaskTitle,
      completed: false
    }

    setTasks(oldTasks => [newTask, ...oldTasks])
  }, [tasks])

  const handleToggleTaskDone = useCallback((id: string) => {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        }
      }

      return task
    })

    setTasks(newTasks)
  }, [tasks])

  const handleRemoveTask = useCallback((id: string) => {
    setTasks(oldTasks => oldTasks.filter(task => task.id !== id))
  }, [tasks])

  const handleEditTitle = useCallback((id: string, newTitle: string) => {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          title: newTitle
        }
      }

      return task
    })

    setTasks(newTasks)
  }, [tasks])


  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />
      <AddTaskInput addTask={handleAddTask} />

      <FlatList
        data={tasks}
        keyExtractor={(task) => task.id}
        renderItem={({ item: task, index }) => (
          <TaskCard
            removeTask={handleRemoveTask}
            toggleTaskDone={handleToggleTaskDone}
            editTitle={handleEditTitle}
            task={task}
            index={index}
          />
        )}
        style={{ marginTop: 32 }}
      />
    </View>
  )
}


