import { Image, TouchableOpacity } from "react-native";
import CustomModal from "../CustomModal";
import { Text } from "../Text";
import { Header } from "./styles";

import close from '../../assets/images/close.png';

export default function AddNotaButton ({visible, onClose, onAddNota}){
    return(
        <CustomModal visible={visible} onClose={onAddNota}>
        <Header>
            <Text>Adicionar nota</Text>

            <TouchableOpacity onPress={onClose}>
                <Image source={close} />
            </TouchableOpacity>

        </Header>
        </CustomModal>
    );
}