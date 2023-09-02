import Checkbox from 'expo-checkbox';
import { PencilSimpleLine, X } from 'phosphor-react-native';
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Pressable, TextInput, TouchableOpacity, View } from "react-native";
import { Task } from "../../interfaces/task";
import { GradientWrapper } from "../GradientWrapper";
import { ModalRemoveTask } from '../ModalRemoveTask';
import { styles } from './styles';

interface TaskCardProps {
  toggleTaskDone: (id: string) => void
  editTitle: (id: string, newTitle: string) => void
  removeTask: (id: string) => void
  index: number
  task: Task
}

export function TaskCard({
  task,
  index,
  removeTask,
  editTitle,
  toggleTaskDone
}: TaskCardProps) {
  const [editMode, setEditMode] = useState(false)
  const [taskTitle, setTaskTitle] = useState(() => task.title)
  const textInputRef = useRef<TextInput>(null)

  function handleStartEditing() {
    setEditMode(true)
  }

  function handleCancelEditing() {
    setTaskTitle(task.title)
    setEditMode(false)
  }

  function handleSubmitEditing() {
    editTitle(task.id, taskTitle)
    setEditMode(false)
  }

  const handleSetTitle = useCallback(() => {
    if (editMode) {
      editTitle(task.id, taskTitle)
    }
    setEditMode(false)
  }, [taskTitle, editMode])

  useEffect(() => {
    if (textInputRef.current) {
      if (editMode) {
        textInputRef.current.focus()
      } else {
        textInputRef.current.blur()
      }
    }
  }, [editMode])

  return (
    <GradientWrapper index={index}>
      <View style={styles.cardContainer}>
        <TouchableOpacity
          onPress={() => !editMode && toggleTaskDone(task.id)}
          style={styles.taskContainer}
          activeOpacity={1}
        >
          <Checkbox
            color={task.completed ? '#1DB863' : undefined}
            style={styles.checkbox}
            value={task.completed}
          />

          <TextInput
            value={taskTitle}
            onChangeText={setTaskTitle}
            editable={editMode}
            onSubmitEditing={handleSubmitEditing}
            ref={textInputRef}
            style={{
              fontSize: 14,
              color: task.completed ? '#1DB863' : '#666666',
              textDecorationLine: task.completed ? 'line-through' : 'none'
            }}
          />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Pressable
            onPress={() => editMode ? handleCancelEditing() : handleStartEditing()}
            style={[styles.editButton,]}
          >
            {editMode ? (
              <X size={24} color="#B2B2B2" weight="light" />
            ) : (
              <PencilSimpleLine size={24} color="#B2B2B2" weight="light" />
            )}
          </Pressable>
          <ModalRemoveTask
            onRemove={() => removeTask(task.id)}
            disabled={editMode}
          />
        </View>
      </View>
    </GradientWrapper>
  )
}

