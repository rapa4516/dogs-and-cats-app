import { Image, TouchableOpacity } from "react-native";
import CustomModal from "../CustomModal";
import { Text } from "../Text";
import { Header } from "./styles";

import AnimalForm from "../AnimalForm";
import logo from '../../assets/images/edit-animal.png';

import close from '../../assets/images/close.png';

export default function AnimalEditor({ visible, onCloser, onSave, animal }) {
    return (
        <CustomModal visible={visible} onCloser={onCloser}>

            <Header>
                <Image source={logo} style={{
                        resizeMode: 'contain',
                        width: 55,
                        height: 65,
                        position: 'absolute',
                        left: 1,
                }}/>
                <Text weight="600" style={{ fontSize: 22}}>Editar</Text>

                <TouchableOpacity onPress={onCloser} style={{ position: 'absolute', right: 0 }}>
                    <Image source={close} />
                </TouchableOpacity>
            </Header>
            
            <AnimalForm
                onSave={onSave}
                animal={animal}
            />

        </CustomModal>
    );
}
