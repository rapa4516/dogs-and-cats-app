import { Image, TouchableOpacity } from "react-native";
import CustomModal from "../CustomModal";
import { Text } from "../Text";
import { Header } from "./styles";

import AnimalForm from "../AnimalForm";

import close from '../../assets/images/close.png';
import logo from '../../assets/images/add-animal.png';

export default function AddAnimalButtom ({visible, onClose, onSave}){
    return(
        <CustomModal visible={visible} onClose={onClose} >

            <Header>
                <Image source={logo} style={{
                    resizeMode: 'contain',
                    width: 65,
                    height: 65,
                    position: 'absolute',
                    left: 1,
                }}/>
                <Text weight="600" style={{ fontSize: 21}}>Cadastro</Text>

                <TouchableOpacity onPress={onClose} style={{ position: 'absolute', right: 0 }}>
                    <Image source={close} />
                </TouchableOpacity>
            </Header>
            
                <AnimalForm
                    onSave={onSave}
                />
            
        </CustomModal>
    );
}