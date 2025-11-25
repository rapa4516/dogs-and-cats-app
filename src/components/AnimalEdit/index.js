import { View, Image, FlatList, TouchableOpacity } from 'react-native';
import { Text } from '../Text';
import { useEffect, useState } from 'react';

import { Container, ContainerTop, ContainerBot, SemFotoCont, InfoCont } from "./styles"

import edit from '../../assets/images/edit.png';
import remover from '../../assets/images/delete.png';
import Ops from '../../assets/images/semRegistro.png'

import AnimalEditor from '.././AnimalEditor/index'

import { useAnimalDatabase } from '../../database/useAnimalDatabase';

export default function Animals({ visible, animal}) {
  const [isAnimalEditorModalVisible, setAnimalEditorModalVisible] = useState(false);
  const [AnimalBeingEdited, setAnimalBeingEdited] = useState();
  const [animals, setAnimals] = useState([]);
  const { show, remove, update} = useAnimalDatabase();

  async function handleDelete(id) {
    await remove(id); 
    loadAnimals();        
  }

  async function loadAnimals() {
    const data = await show();
    setAnimals(data);
  }

  useEffect(() => {
    if (visible) {
      loadAnimals();
    }
  }, [visible]);

  function handleEditAnimal(animal) {
    setAnimalBeingEdited(animal);
    setAnimalEditorModalVisible(true);
  }

  async function handleSaveEdit(animal){
    await update(animal);
    await loadAnimals();  
    setAnimalEditorModalVisible(false); 
  }

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={animals}
      keyExtractor={(animal) => animal.id.toString()}

      ListEmptyComponent={() => (
        <View
          style={{
            alignItems: 'center',
            marginTop: 40,
            paddingHorizontal: 20
          }}
        >
          <Image
            source={Ops}
            style={{ width: 150, height: 150, marginBottom: 10 }}
            resizeMode="contain"
          />

          <Text opacity={0.7} style={{ textAlign: 'center' }}>
            Parece que ainda não tem nenhum registro.
          </Text>
        </View>
      )}

      renderItem={({ item: animal }) => (
        <Container>
          <ContainerTop>
              <Text weight="600">{animal.nome}</Text>

            <View style={{flexDirection: 'row', padding: 2}}>
              <TouchableOpacity onPress={() => handleEditAnimal(animal)}>
                <Image source={edit} style={{
                  width: 14,
                  height: 14,
                  resizeMode: 'contain'
                }}/>
              </TouchableOpacity>
              <AnimalEditor 
                visible={isAnimalEditorModalVisible}
                onCloser={()=> setAnimalEditorModalVisible(false)}
                onSave={handleSaveEdit}
                animal={AnimalBeingEdited}
              />
            </View>
          
              <View style={{position: 'absolute', right: 0, flexDirection: 'row', padding: 7}}>
                <TouchableOpacity onPress={() => handleDelete(animal.id)}>
                  <Image source={remover} style={{
                      width: 16,
                      height: 16,
                      resizeMode: 'contain'
                  }}/>
                </TouchableOpacity>
              </View>

          </ContainerTop>
          <ContainerBot>
            {animal.foto ? (
              <Image
                source={{ uri: animal.foto }}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 10,
                  backgroundColor: '#eee'
                }}
              />
            ) : (
              <SemFotoCont>
                <Text opacity={0.6}>Sem foto</Text>
              </SemFotoCont>
            )}

            <InfoCont>
              <Text>Espécie: {animal.especie}</Text>
              <Text>Sexo: {animal.sexo}</Text>
              <Text>Raça: {animal.raca}</Text>
              <Text>Idade: {animal.idade}</Text>
              <Text>Porte: {animal.porte}</Text>
              <Text>Cor: {animal.cor}</Text>
              <Text>Situação: {animal.adotado === 1 ? "Adotado" : "Não adotado"} </Text>
            </InfoCont>
          </ContainerBot>
        </Container>
      )}
    />
  );
}
