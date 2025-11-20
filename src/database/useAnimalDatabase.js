import { useSQLiteContext } from "expo-sqlite";

export function useAnimalDatabase() {
  const database = useSQLiteContext();

  // LISTAR
  async function show() {
    try {
      const query = "SELECT * FROM animais ORDER BY create_date DESC";
      const response = await database.getAllAsync(query);
      return response;
    } catch (error) {
      console.log("Erro SHOW:", error);
    }
  }

  // CRIAR
  async function create(animal) {
    let statement;

    try {
      const query = `
        INSERT INTO animais
        (nome, especie, raca, sexo, idade, porte, cor, foto)
        VALUES ($nome, $especie, $raca, $sexo, $idade, $porte, $cor, $foto)
      `;

      statement = await database.prepareAsync(query);

      await statement.executeAsync({
        $nome: animal.nome,
        $especie: animal.especie,
        $raca: animal.raca,
        $sexo: animal.sexo,
        $idade: animal.idade,
        $porte: animal.porte,
        $cor: animal.cor,
        $foto: animal.foto
      });

    } catch (error) {
      console.log("Erro CREATE:", error);
    } finally {
      if (statement) await statement.finalizeAsync();
    }
  }

  // ATUALIZAR
  async function update(animal) {
    let statement;

    try {
      const query = `
        UPDATE animais SET 
          nome = $nome,
          especie = $especie,
          raca = $raca,
          sexo = $sexo,
          idade = $idade,
          porte = $porte,
          cor = $cor,
          foto = $foto
        WHERE id = $id
      `;

      statement = await database.prepareAsync(query);

      await statement.executeAsync({
        $id: animal.id,
        $nome: animal.nome,
        $especie: animal.especie,
        $raca: animal.raca,
        $sexo: animal.sexo,
        $idade: animal.idade,
        $porte: animal.porte,
        $cor: animal.cor,
        $foto: animal.foto
      });

    } catch (error) {
      console.log("Erro UPDATE:", error);
    } finally {
      if (statement) await statement.finalizeAsync();
    }
  }

  // REMOVER
  async function remove(id) {
    try {
      const query = `DELETE FROM animais WHERE id = ${id}`;
      await database.execAsync(query);
    } catch (error) {
      console.log("Erro REMOVE:", error);
    }
  }

  return { show, create, update, remove };
}
