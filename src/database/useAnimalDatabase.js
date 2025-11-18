import { useSQLiteContext } from "expo-sqlite";

export function useAnimalDatabase(){
    const database = useSQLiteContext();

    async function show(){
        try {
            const query = "SELEC * FROM animais ORDER BY create_date desc";
            
            repsonse = await database.getAllAsync(query);

            return response;
        } catch (error){
            console.log(error);
        }
    }

    async function remove(id) {
        try{
            const query = `DELETE FROM animais WHERE id =${id}`
            await database.execAsync(query);
        }catch (error){
            console.log(error);
        }
    }

    async function create(animal){
        try{
            const query = `INSERT INTO animais (nome, especie,
            raca,sexo,idade,porte,cor,foto)`;

            statement.executeAsync({
                $nome: animal.nome,
                $especie: animal.especie,
                $raca: animal.raca,
                $sexo: animal.sexo,
                $idade: animal.idade,
                $porte: animal.porte,
                $cor: animal.cor,
                $foto: animal.foto
            });

        }catch (error){
            console.log(error);
        }finally{
            await statement.finalizeAsync();
        }
    }

    async function update(){
        const query = 
        `UPDATE animais SET 
        nome = $nome,
        especie = $especie,
        raca = $raca,
        sexo = $sexo,
        idade = $idade,
        porte = $porte,
        cor = $cor,
        foto = $foto
        WHERE id = $id`;

        try{
            const statement = await database.prepareAsync(query);

            statement.executeAsync({
                $nome: animal.nome,
                $especie: animal.especie,
                $raca: animal.raca,
                $sexo: animal.sexo,
                $idade: animal.idade,
                $porte: animal.porte,
                $cor: animal.cor,
                $foto: animal.foto
            });
        }catch (error){
            console.log(error);
        }finally{
            await statement.finalizeAsync();
        }

        async function remove(id) {
            try {
              const query = `DELETE FROM animais WHERE id = ${id}`;
        
              await database.execAsync(query);
            } catch (error) {
              console.log(error);
            }
          }

        return { show, create, update, remove}
    }
}