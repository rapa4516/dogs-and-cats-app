import { Image, TouchableOpacity } from "react-native";
import CustomModal from "../CustomModal";
import { Text } from "../Text";
import { Header, Container } from "./styles";

import close from '../../assets/images/close.png';
import logo from '../../assets/images/edit-animal.png';

import EditarAnimais from "../AnimalEdit/index"



export default function EditAnimalButton ({visible, onClose}){
    return(
        <CustomModal visible={visible}>
            <Header>
                <Image source={logo} style={{
                        resizeMode: 'contain',
                        width: 55,
                        height: 65,
                        position: 'absolute',
                        left: 1,
                }}/>
                <Text weight="600" style={{ fontSize: 21}}>Alterar</Text>

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