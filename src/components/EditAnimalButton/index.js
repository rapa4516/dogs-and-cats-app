import { Image, TouchableOpacity } from "react-native";
import CustomModal from "../CustomModal";
import { Text } from "../Text";
import { Header, Container } from "./styles";

import close from '../../assets/images/close.png';

import EditarAnimais from "../AnimalEdit/index"



export default function EditAnimalButton ({visible, onClose}){
    return(
        <CustomModal visible={visible}>
            <Header>
                <Text weight="600">Alterar Informações</Text>

                <TouchableOpacity onPress={onClose} style={{ position: 'absolute', right: 0 }}>
                    <Image source={close} />
                </TouchableOpacity>
                
            </Header>
            <Container>

                    <EditarAnimais visible={visible}/>
            
            </Container>
        </CustomModal>
    );
}