export async function initializeDatabase(database) {
  await database.execAsync(`
    CREATE TABLE IF NOT EXISTS animais (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      especie TEXT NOT NULL,
      raca TEXT,
      sexo TEXT,
      idade TEXT,
      porte TEXT,
      cor TEXT,
      foto TEXT,
    
      saude TEXT,
      vacinado INTEGER DEFAULT 0,           
      vermifugado INTEGER DEFAULT 0,
      condicoes_especiais TEXT,

      data_entrada TEXT DEFAULT (date('now','localtime')),
      observacao TEXT,
      
      create_date TEXT DEFAULT (datetime('now','localtime'))
    );
    `);
}