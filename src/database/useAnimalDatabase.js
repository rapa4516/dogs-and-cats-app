import { useSQLiteContext } from "expo-sqlite";

export function useAnimalDatabase() {
  const database = useSQLiteContext();

  async function show() {
    try {
      const query = "SELECT * FROM animais ORDER BY id DESC";
      const response = await database.getAllAsync(query);
      return response;
    } catch (error) {
      console.log("Erro SHOW:", error);
    }
  }

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
          foto = $foto,
          adotado = $adotado
        WHERE id = $id
      `;

      statement = await database.prepareAsync(query);

      await statement.executeAsync({
        $id: animal.id,
        $nome: animal.nome ?? "",
        $especie: animal.especie ?? "",
        $raca: animal.raca ?? "",
        $sexo: animal.sexo ?? "",
        $idade: animal.idade ?? "",
        $porte: animal.porte ?? "",
        $cor: animal.cor ?? "",
        $foto: animal.foto ?? null,
        $adotado: animal.adotado ?? 0
      });

    } catch (error) {
      console.log("Erro UPDATE:", error);
    } finally {
      if (statement) await statement.finalizeAsync();
    }
  }

  async function remove(id) {
    try {
      const query = "DELETE FROM animais WHERE id = ?";
      await database.runAsync(query, [id]);
    } catch (error) {
      console.log("Erro REMOVE:", error);
    }
  }

  return { show, create, update, remove };
}
