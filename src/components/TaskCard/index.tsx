import Checkbox from 'expo-checkbox';
import { Trash } from "phosphor-react-native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Task } from "../../interfaces/task";
import { GradientWrapper } from "../GradientWrapper";

interface TaskCardProps {
  toggleTaskDone: (id: string) => void
  removeTask: (id: string) => void
  index: number
  task: Task
}

export function TaskCard({
  task,
  index,
  removeTask,
  toggleTaskDone
}: TaskCardProps) {

  return (
    <GradientWrapper index={index}>
      <View style={styles.cardContainer}>
        <TouchableOpacity
          onPress={() => toggleTaskDone(task.id)}
          style={styles.taskContainer}
          activeOpacity={1}
        >
          <Checkbox
            color={task.completed ? '#1DB863' : undefined}
            style={styles.checkbox}
            value={task.completed}
          />
          <Text
            style={{
              fontSize: 14,
              color: task.completed ? '#1DB863' : '#666666',
              textDecorationLine: task.completed ? 'line-through' : 'none'
            }}
          >
            {task.title}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => removeTask(task.id)}>
          <Trash size={24} color="#B2B2B2" weight="light" />
        </TouchableOpacity>
      </View>
    </GradientWrapper>
  )

}

const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16
  },

  checkbox: {
    borderRadius: 5,
    borderColor: '#B2B2B2'
  }
})