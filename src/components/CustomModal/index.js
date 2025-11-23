import { Modal } from "react-native";
import { ModalBody, Overlay } from "./styles";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";

function SafeAreaWrapper({ children }) {
  const insets = useSafeAreaInsets();

  return (
    <Overlay
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <ModalBody>
        {children}
      </ModalBody>
    </Overlay>
  );
}

export default function CustomModal({ children, visible, onClose }) {
  return (
    <Modal
      visible={visible}
      transparent
      statusBarTranslucent
      animationType="fade"
      onRequestClose={onClose}
    >
      <SafeAreaProvider>
        <SafeAreaWrapper>
          {children}
        </SafeAreaWrapper>
      </SafeAreaProvider>
    </Modal>
  );
}
