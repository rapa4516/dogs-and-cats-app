import { Image, TouchableOpacity } from "react-native";
import CustomModal from "../CustomModal";
import { Text } from "../Text";
import { Header, Container } from "./styles";

import close from '../../assets/images/close.png';

export default function ListAnimalButton ({visible, onClose, onListAnimal}){
    return(
        <CustomModal visible={visible} onClose={onListAnimal}>
        <Header>
            <Text>Listar Animais</Text>

            <TouchableOpacity onPress={onClose}>
                <Image source={close} />
            </TouchableOpacity>
            
        </Header>
        </CustomModal>
    );
}