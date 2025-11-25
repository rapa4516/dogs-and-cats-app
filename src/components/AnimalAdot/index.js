import { Image, FlatList, View } from 'react-native';
import { Text } from '../Text';
import { useEffect, useState } from 'react';

import { Container, ContainerBot, SemFotoCont, InfoCont } from "../AnimalList/styles";

import Ops from '../../assets/images/semRegistro.png'

import { useAnimalDatabase } from '../../database/useAnimalDatabase';

export default function Animals({ visible }) {
  const [animals, setAnimals] = useState([]);
  const { show } = useAnimalDatabase();

  async function loadAnimals() {
    const data = await show();

    const parsed = data.map(item => ({
      ...item,
      adotado: Number(item.adotado) === 1,
    }));

    setAnimals(parsed);
  }

  useEffect(() => {
    if (visible) {
      loadAnimals();
    }
  }, [visible]);

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={animals.filter(a => a.adotado === true)}
      keyExtractor={(item) => item.id.toString()}

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
          <ContainerBot>
            {animal.foto ? (
              <Image
                source={{ uri: animal.foto }}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 10,
                  backgroundColor: '#eee',
                }}
              />
            ) : (
              <SemFotoCont>
                <Text opacity={0.6}>Sem foto</Text>
              </SemFotoCont>
            )}

            <InfoCont>
              <Text weight="600">{animal.nome}</Text>
            </InfoCont>
          </ContainerBot>
        </Container>
      )}
    />
  );
}
