import { Image, TouchableOpacity } from "react-native";
import CustomModal from "../CustomModal";
import { Text } from "../Text";
import { Header } from "./styles";

import AnimalForm from "../AnimalForm";

import close from '../../assets/images/close.png';

export default function AddAnimalButtom ({visible, onClose, onSave}){
    return(
        <CustomModal visible={visible} onClose={onClose} >

            <Header>
                <Text weight="600" style={{ fontSize: 21}}>Registrar Animal</Text>

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