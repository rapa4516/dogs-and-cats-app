import { View, Image, FlatList } from 'react-native';
import { Text } from '../Text';
import { useEffect, useState } from 'react';

import { Container, ContainerTop, ContainerBot, SemFotoCont, InfoCont } from "./styles"

import { useAnimalDatabase } from '../../database/useAnimalDatabase';

export default function Animals({ visible }) {
  const [animals, setAnimals] = useState([]);
  const { show } = useAnimalDatabase();

  async function loadAnimals() {
    const data = await show();
    setAnimals(data);
  }

  useEffect(() => {
    if (visible) {
      loadAnimals();
    }
  }, [visible]);

  return (
    <FlatList
      data={animals}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item: animal }) => (
        <Container>
          <ContainerTop>
              <Text weight="600">{animal.nome}</Text>
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
              <Text>Porte: {animal.porte}</Text>
              <Text>Cor: {animal.cor}</Text>
            </InfoCont>
          </ContainerBot>
        </Container>
      )}
    />
  );
}
