import { useState } from "react";
import { TouchableOpacity, Image, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import RNPickerSelect from 'react-native-picker-select';

import { Form, Input } from "./styles";
import Button from "../Button";
import { Text } from "../Text";

export default function AnimalForm({ buttonLabel, onSave, animal }) {
  const [id] = useState(animal?.id ?? '');
  const [nome, setNome] = useState(animal?.nome ?? '');
  const [especie, setEspecie] = useState(animal?.especie ?? '');
  const [raca, setRaca] = useState(animal?.raca ?? '');
  const [sexo, setSexo] = useState(animal?.sexo ?? '');
  const [idade, setIdade] = useState(animal?.idade ?? '');
  const [porte, setPorte] = useState(animal?.porte ?? '');
  const [cor, setCor] = useState(animal?.cor ?? '');
  const [foto, setFoto] = useState(animal?.foto ?? '');
  const [adotado, setAdotado] = useState(animal?.adotado ?? 0);

  async function pickImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.Images,
      allowsEditing: true,
      quality: 0.7,
      base64: true,
    });

    if (!result.canceled) {
      setFoto(result.assets[0].uri);
    }
  }

  return (
    <Form>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 12 }}
      >
        <Input
          placeholder="Nome"
          placeholderTextColor="#808080"
          value={nome}
          onChangeText={setNome}
          maxLength={12}
        />

        <RNPickerSelect
          onValueChange={setEspecie}
          value={especie}
          placeholder={{ label: 'Selecione a espécie', value: null }}
          items={[
            { label: 'Cachorro', value: 'Cachorro' },
            { label: 'Gato', value: 'Gato' }
          ]}
        />

        <RNPickerSelect
          onValueChange={setSexo}
          value={sexo}
          placeholder={{ label: "Selecione o sexo", value: null }}
          items={[
            { label: 'Masculino', value: 'Masculino' },
            { label: 'Feminino', value: 'Feminino' },
          ]}
        />

        <Input
          placeholder="Raça"
          placeholderTextColor="#808080"
          value={raca}
          onChangeText={setRaca}
          maxLength={12}
        />

        <Input
          placeholder="Idade"
          placeholderTextColor="#808080"
          value={idade}
          onChangeText={setIdade}
          maxLength={2}
        />

        <Input
          placeholder="Porte"
          placeholderTextColor="#808080"
          value={porte}
          onChangeText={setPorte}
          maxLength={12}
        />

        <Input
          placeholder="Cor"
          placeholderTextColor="#808080"
          value={cor}
          onChangeText={setCor}
          maxLength={12}
        />

        {animal?.id && (
          <RNPickerSelect
            onValueChange={setAdotado}
            value={adotado}
            placeholder={{ label: "Animal foi adotado?", value: null }}
            items={[
              { label: 'Não', value: 0 },
              { label: 'Sim', value: 1 }
            ]}
          />
        )}

        <TouchableOpacity
          onPress={pickImage}
          style={{
            marginTop: 10,
            marginBottom: 10,
            padding: 12,
            backgroundColor: '#696969',
            borderRadius: 8,
            alignItems: "center",
          }}
        >
          <Text>{foto ? "Alterar foto" : "Selecionar foto"}</Text>
        </TouchableOpacity>

        {foto !== "" && (
          <Image
            source={{ uri: foto }}
            style={{
              width: 120,
              height: 120,
              borderRadius: 8,
              alignSelf: "center",
              marginBottom: 16,
            }}
          />
        )}
      </ScrollView>

      <Button
        onPress={() =>
          onSave({
            id,
            nome,
            especie,
            sexo,
            raca,
            idade,
            porte,
            cor,
            foto,
            adotado,
          })
        }
        disabled={
          nome.length === 0 ||
          especie.length === 0 ||
          sexo.length === 0 ||
          raca.length === 0 ||
          idade.length === 0 ||
          porte.length === 0 ||
          cor.length === 0
        }
      >
        Salvar {buttonLabel}
      </Button>
    </Form>
  );
}
