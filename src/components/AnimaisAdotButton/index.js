import { Image, TouchableOpacity } from "react-native";
import CustomModal from "../CustomModal";
import { Text } from "../Text";
import { Header, Container } from "./styles";

import close from '../../assets/images/close.png';
import logo from '../../assets/images/animal-adot.png';

import AnimalAdot from '.././AnimalAdot';

export default function AnimaisAdotButton ({visible, onClose, onAnimaisAdot}){
    return(
        <CustomModal visible={visible} onClose={onAnimaisAdot}>
            <Header>
                <Image source={logo} style={{
                        resizeMode: 'contain',
                        width: 65,
                        height: 65,
                        position: 'absolute',
                        left: 1,
                }}/>
                <Text weight="600" style={{ fontSize: 21}}>Adotados</Text>

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