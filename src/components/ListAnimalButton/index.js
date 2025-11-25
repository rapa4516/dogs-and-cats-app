import { Image, TouchableOpacity, ScrollView } from "react-native";


import CustomModal from "../CustomModal";
import { Text } from "../Text";
import { Header, Container } from "./styles";

import close from '../../assets/images/close.png';

import ListarAnimais from "../AnimalList/index"

export default function ListAnimalButton ({visible, onClose}){
    
    return(
        <CustomModal visible={visible}>
            <Header>
                <Text weight="600" style={{ fontSize: 21}}>Animais para Adoção</Text>

                <TouchableOpacity onPress={onClose} style={{ position: 'absolute', right: 0 }}>
                    <Image source={close} />
                </TouchableOpacity>
                
            </Header>
            <Container>

                    <ListarAnimais visible={visible}/>
            
            </Container>
        </CustomModal>
    );
}