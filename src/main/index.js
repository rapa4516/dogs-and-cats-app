import { Image, TouchableOpacity } from "react-native";
import { Container, ContInterfaceTop, ContInterfaceMid, ContainerRDP} from "./styles";
import Header from '../components/Header';
import { Text } from "../components/Text";


import addAnimal from '../assets/images/interface-pata/add-animal.png'
import listAnimal from '../assets/images/interface-pata/list-animal.png'
import addNota from '../assets/images/interface-pata/add-nota.png'
import listAnimalAdot from '../assets/images/interface-pata/list-animal-adot.png'
import sobreInst from '../assets/images/interface-pata/sobre-inst.png'

import AddAnimalButtom from '../components/AddAnimalButton';
import ListAnimalButton from "../components/ListAnimalButton";
import AddNotaButton from "../components/AddNotaButton";
import SobreInstButton from "../components/SobreInstButton";
import AnimaisAdotButton from "../components/AnimaisAdotButton";

import { useState } from "react";

export default function Main(){
const [isAddAnimalModalVisible, setAddAnimalModalVisible] = useState(false);
const [isListModalVisible, setListModalVisible] = useState(false);
const [isAddNotaModalVisible, setAddNotaModalVisible] = useState(false);
const [isSobreInstModalVisible, setSobreIntsModalVisible] = useState(false);
const [isAnimaisAdotModalVisible, setAnimaisAdotModalVisible] = useState(false);

function handleAddAnimal (){
    setAddAnimalModalVisible(true); 
}

function handleListAnimal (){
    setListModalVisible(true);
}

function handleAddNota () {
    setAddNotaModalVisible(true);
}

function handleSobreInst () {
    setSobreIntsModalVisible(true);
}

function handleAnimaisAdot () {
    setAnimaisAdotModalVisible(true);
}

return(
        <Container>
            <Header/>

            <ContInterfaceTop> 
                    
                    {/* BOTAO DE ADICIONAR ANIMAL */}
                    <TouchableOpacity onPress={handleAddAnimal}>
                            <Image source={addAnimal} style={{ width: 110, 
                                height: 110, marginTop: 3, 
                                marginBottom: 15,resizeMode: 'contain'}}/>
                            <AddAnimalButtom 
                                visible={isAddAnimalModalVisible} 
                                onClose={()=> setAddAnimalModalVisible(false)}
                            />
                    </TouchableOpacity>

                    {/* BOTAO DE LISTAR ANIMAL */}
                    <TouchableOpacity onPress={handleListAnimal}>
                            <Image source={listAnimal} style={{ width: 110, 
                                height: 110,marginTop: 3, 
                                marginBottom: 15,resizeMode: 'contain'}}/>
                            <ListAnimalButton
                                visible={isListModalVisible}
                                onClose={()=> setListModalVisible(false)}
                            />
                    </TouchableOpacity>

            </ContInterfaceTop>
            <ContInterfaceMid>

                    {/* BOTAO DE ADICIONAR NOTA */}
                    <TouchableOpacity onPress={handleAddNota}>
                            <Image source={addNota} style={{ width: 110, 
                                height: 110,  marginTop: 3, 
                                marginBottom: 0,resizeMode: 'contain'}}/>
                            <AddNotaButton
                                visible={isAddNotaModalVisible}
                                onClose={()=> setAddNotaModalVisible(false)}
                            />
                    </TouchableOpacity>
                    
                    {/* BOTAO DE SOBRE A INSTITUICAO */}
                    <TouchableOpacity onPress={handleSobreInst}>
                            <Image source={sobreInst} style={{ width: 200, 
                                height: 200, marginTop: 0, 
                                marginBottom: 15,resizeMode: 'contain'}}/>
                            <SobreInstButton
                                visible={isSobreInstModalVisible}
                                onClose={()=> setSobreIntsModalVisible(false)}
                            />
                    </TouchableOpacity>
                    
                    {/* BOTAO DE LISTAR ANIMAIS ADOTADOS */}
                    <TouchableOpacity onPress={handleAnimaisAdot}>
                            <Image source={listAnimalAdot} style={{ width: 110, 
                                height: 110,  marginTop: 3, 
                                marginBottom: 0,resizeMode: 'contain'}}/>
                            <AnimaisAdotButton
                                visible={isAnimaisAdotModalVisible}
                                onClose={()=> setAnimaisAdotModalVisible(false)}
                            />
                    </TouchableOpacity>
            </ContInterfaceMid>
            <ContainerRDP>
                    {/* RODAPÉ */}
                            <Text>Estácio | Developed by </Text>
            </ContainerRDP>
        </Container>
);

}