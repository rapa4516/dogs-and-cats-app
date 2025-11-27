import { Image, TouchableOpacity, ImageBackground } from "react-native";
import { Container, ContInterfaceTop, ContInterfaceMid, ContainerRDP } from "./styles";
import Header from '../components/Header';
import { Text } from "../components/Text";

import addAnimal from '../assets/images/interface-pata/add-animal.png'
import listAnimal from '../assets/images/interface-pata/list-animal.png'
import editAnimal from '../assets/images/interface-pata/edit-animal.png'
import listAnimalAdot from '../assets/images/interface-pata/list-animal-adot.png'
import sobreInst from '../assets/images/interface-pata/sobre-inst.png'

import bg from '../assets/images/background.png';
import AddAnimalButtom from '../components/AddAnimalButton';
import ListAnimalButton from "../components/ListAnimalButton";
import EditAnimalButton from "../components/EditAnimalButton";
import SobreInstButton from "../components/SobreInstButton";
import AnimaisAdotButton from "../components/AnimaisAdotButton";

import { useAnimalDatabase } from '../database/useAnimalDatabase'
import { useState } from "react";

export default function Main() {
    const [isAddAnimalModalVisible, setAddAnimalModalVisible] = useState(false);
    const [isListModalVisible, setListModalVisible] = useState(false);
    const [isEditAnimalModalVisible, setEditAnimalModalVisible] = useState(false);
    const [isSobreInstModalVisible, setSobreIntsModalVisible] = useState(false);
    const [isAnimaisAdotModalVisible, setAnimaisAdotModalVisible] = useState(false);

    const animalDatabase = useAnimalDatabase();

    function handleAddAnimalBtn() { setAddAnimalModalVisible(true); }
    function handleListAnimalBtn() { setListModalVisible(true); }
    function handleEditAnimalBtn() { setEditAnimalModalVisible(true); }
    function handleSobreInstBtn() { setSobreIntsModalVisible(true); }
    function handleAnimaisAdotBtn() { setAnimaisAdotModalVisible(true); }

    function handleCriarAnimal(animal) {
        animalDatabase.create(animal)
        setAddAnimalModalVisible(false);
    }

    return (
        <ImageBackground
            source={bg}
            style={{ flex: 1 }}
            resizeMode="cover"
        >
            <Container style={{ backgroundColor: "transparent" }}>
                
                <Header />

                <ContInterfaceTop>
                    <TouchableOpacity onPress={handleAddAnimalBtn}>
                        <Image source={addAnimal} style={{
                            width: 104,
                            height: 104,
                            marginTop: 3,
                            marginBottom: 15,
                            resizeMode: 'contain'
                        }} />
                    </TouchableOpacity>

                    <AddAnimalButtom 
                        visible={isAddAnimalModalVisible}
                        onClose={() => setAddAnimalModalVisible(false)}
                        onSave={handleCriarAnimal}
                    />

                    <TouchableOpacity onPress={handleListAnimalBtn}>
                        <Image source={listAnimal} style={{
                            width: 104,
                            height: 104,
                            marginTop: 3,
                            marginBottom: 15,
                            resizeMode: 'contain'
                        }} />

                        <ListAnimalButton
                            visible={isListModalVisible}
                            onClose={() => setListModalVisible(false)}
                        />
                    </TouchableOpacity>
                </ContInterfaceTop>

                <ContInterfaceMid>

                    <TouchableOpacity onPress={handleEditAnimalBtn}>
                        <Image source={editAnimal} style={{
                            width: 104,
                            height: 104,
                            marginTop: 3,
                            marginBottom: 0,
                            resizeMode: 'contain'
                        }} />

                        <EditAnimalButton
                            visible={isEditAnimalModalVisible}
                            onClose={() => setEditAnimalModalVisible(false)}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleSobreInstBtn}>
                        <Image source={sobreInst} style={{
                            width: 150,
                            height: 150,
                            marginTop: 20,
                            marginBottom: 15,
                            resizeMode: 'contain'
                        }} />

                        <SobreInstButton
                            visible={isSobreInstModalVisible}
                            onClose={() => setSobreIntsModalVisible(false)}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleAnimaisAdotBtn}>
                        <Image source={listAnimalAdot} style={{
                            width: 104,
                            height: 104,
                            marginTop: 3,
                            marginBottom: 0,
                            resizeMode: 'contain'
                        }} />

                        <AnimaisAdotButton
                            visible={isAnimaisAdotModalVisible}
                            onClose={() => setAnimaisAdotModalVisible(false)}
                        />
                    </TouchableOpacity>

                </ContInterfaceMid>

                <ContainerRDP>
                    <Text style={{color:'#fff'}}>Estácio | Developed by</Text>
                </ContainerRDP>

            </Container>
        </ImageBackground>
    );
}
