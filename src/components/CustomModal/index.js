import { Modal, Platform, StatusBar } from "react-native";
import { ModalBody, Overlay } from "./styles";

export default function CustomModal({ children, visible, onClose }) {
  const paddingTop = Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0;

  return (
    <Modal
      visible={visible}
      transparent
      statusBarTranslucent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Overlay
        style={{
          paddingTop,
          paddingBottom: 0,
        }}
      >
        <ModalBody>
          {children}
        </ModalBody>
      </Overlay>
    </Modal>
  );
}
