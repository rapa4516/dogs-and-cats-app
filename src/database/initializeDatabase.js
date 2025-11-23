export async function initializeDatabase(database) {
  await database.execAsync(`
    CREATE TABLE IF NOT EXISTS animais (
      id INTEGER PRIMARY KEY AUTOINCREMENT,

      nome TEXT NOT NULL CHECK(length(nome) <= 12),
      especie TEXT NOT NULL CHECK(length(especie) <= 12),
      raca TEXT CHECK(length(raca) <= 12),
      sexo TEXT CHECK(length(sexo) <= 12),
      idade TEXT CHECK(length(idade) <= 12),
      porte TEXT CHECK(length(porte) <= 12),
      cor TEXT CHECK(length(cor) <= 12),

      foto TEXT,

      adotado INTEGER DEFAULT 0 CHECK(adotado IN (0, 1))
    );
  `);
}
