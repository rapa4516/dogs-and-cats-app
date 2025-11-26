import { Image, TouchableOpacity, ScrollView } from "react-native";


import CustomModal from "../CustomModal";
import { Text } from "../Text";
import { Header, Container } from "./styles";

import close from '../../assets/images/close.png';
import logo from '../../assets/images/list-animal.png';

import ListarAnimais from "../AnimalList/index"

export default function ListAnimalButton ({visible, onClose}){
    
    return(
        <CustomModal visible={visible}>
            <Header>
                <Image source={logo} style={{
                        resizeMode: 'contain',
                        width: 55,
                        height: 55,
                        position: 'absolute',
                        left: 1,
                }}/>
                <Text weight="600" style={{ fontSize: 21}}>Adoção</Text>

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