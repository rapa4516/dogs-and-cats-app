import { Image, TouchableOpacity } from "react-native";
import CustomModal from "../CustomModal";
import { Text } from "../Text";
import { Header } from "./styles";

import close from '../../assets/images/close.png';

export default function AddAnimalButtom ({visible, onClose, onAddAnimal}){
    return(
        <CustomModal visible={visible} onClose={onAddAnimal}>

            <Header>
                <Text>Adicionar Animais</Text>

                <TouchableOpacity onPress={onClose}>
                    <Image source={close} />
                </TouchableOpacity>
            </Header>
            
        </CustomModal>
    );
}