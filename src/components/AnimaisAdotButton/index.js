import { Image, TouchableOpacity } from "react-native";
import CustomModal from "../CustomModal";
import { Text } from "../Text";
import { Header, Container } from "./styles";

import close from '../../assets/images/close.png';

import AnimalAdot from '.././AnimalAdot';

export default function AnimaisAdotButton ({visible, onClose, onAnimaisAdot}){
    return(
        <CustomModal visible={visible} onClose={onAnimaisAdot}>
            <Header>
                <Text weight="600" style={{ fontSize: 21}}>Animais Adotados</Text>

                <TouchableOpacity onPress={onClose} style={{ position: 'absolute', right: 0 }}>
                    <Image source={close} />
                </TouchableOpacity>

            </Header>
            <Container>
                <AnimalAdot visible={visible}/>
            </Container>
        </CustomModal>
    );
}