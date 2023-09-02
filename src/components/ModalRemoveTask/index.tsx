import { Trash } from "phosphor-react-native";
import { useState } from "react";
import {
  Alert,
  Modal,
  Pressable,
  PressableProps,
  Text,
  View
} from "react-native";
import { styles } from "./styles";

interface ModalRemoveTask extends PressableProps {
  onRemove: () => void
}

export function ModalRemoveTask({ onRemove, ...rest }: ModalRemoveTask) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>
              remover item
            </Text>
            <Text style={styles.modalText}>
              Tem certeza que deseja remover esse item?
            </Text>
            <View style={styles.buttonsGroup}>
              <Pressable onPress={() => setModalVisible(false)}>
                <Text style={styles.textStyle}>Não</Text>
              </Pressable>
              <Pressable onPress={onRemove}>
                <Text style={styles.textStyle}>sim</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        onPress={() => setModalVisible(true)}
        style={styles.removeButton}
        {...rest}
      >
        <Trash
          color={rest.disabled ? "#d1d1d1" : "#B2B2B2"}
          size={24}
          weight="light"
        />
      </Pressable>
    </View>
  )
}

