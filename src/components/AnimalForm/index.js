import { useState } from "react";

import { Form, Input } from "./styles";

import Button from "../Button";

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


  return (
    <Form>
      <Input
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <Input
        placeholder="Especie"
        value={especie}
        onChangeText={setEspecie}
      />

      <Input
        placeholder="Sexo"
        value={sexo}
        onChangeText={setSexo}
      />

      <Input
        placeholder="Raça"
        value={raca}
        onChangeText={setRaca}
      />


      <Input
        placeholder="Idade"
        value={idade}
        onChangeText={setIdade}
      />

      <Input
        placeholder="Porte"
        value={porte}
        onChangeText={setPorte}
      />

      <Input
        placeholder="Cor"
        value={cor}
        onChangeText={setCor}
      />

    <Input 
      placeholder="Foto"
      value={foto}
      onChangeText={setFoto}
    />


      <Button
        onPress={() => onSave({ id, nome, especie, sexo, raca, idade, porte, cor, foto })}
        disabled={nome.length === 0 || especie.length === 0 || sexo.length === 0}
      >
       Cadastrar{buttonLabel}
      </Button>

    </Form>
  );
}