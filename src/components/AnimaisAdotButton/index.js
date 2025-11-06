import { Image, TouchableOpacity } from "react-native";
import CustomModal from "../CustomModal";
import { Text } from "../Text";
import { Header } from "./styles";

import close from '../../assets/images/close.png';

export default function AnimaisAdotButton ({visible, onClose, onAnimaisAdot}){
    return(
        <CustomModal visible={visible} onClose={onAnimaisAdot}>
        <Header>
            <Text>Lista de animais adotados</Text>

            <TouchableOpacity onPress={onClose}>
                <Image source={close} />
            </TouchableOpacity>

        </Header>
        </CustomModal>
    );
}