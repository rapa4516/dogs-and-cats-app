import { Image, TouchableOpacity } from "react-native";
import CustomModal from "../CustomModal";
import { Text } from "../Text";
import { Header } from "./styles";

import AnimalForm from "../AnimalForm";

import close from '../../assets/images/close.png';

export default function AnimalEditor({ visible, onCloser, onSave, animal }) {
    return (
        <CustomModal visible={visible} onCloser={onCloser}>

            <Header>
                <Text weight="600">Editar Informações</Text>

                <TouchableOpacity onPress={onCloser} style={{ position: 'absolute', right: 0 }}>
                    <Image source={close} />
                </TouchableOpacity>
            </Header>

            <AnimalForm
                onSave={onSave}
                animal={animal}
                buttonLabel="Animal"
            />

        </CustomModal>
    );
}
