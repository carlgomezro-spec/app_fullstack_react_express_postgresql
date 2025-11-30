const pool = require("./config/db_pgsql");
const { createEntry } = require("./models/entries.model");
const { createAuthor, getAuthorByEmail } = require("./models/authors.model");

const seedDatabase = async () => {
  try {
    // Crear tabla authors
    await pool.query(`
      CREATE TABLE IF NOT EXISTS authors (
        id_author serial NOT NULL PRIMARY KEY, 
        name varchar(45) NOT NULL, 
        surname varchar(45) NOT NULL, 
        email varchar(100) NOT NULL UNIQUE,
        image varchar(255)
      );
    `);

    // Crear tabla entries
    await pool.query(`
      CREATE TABLE IF NOT EXISTS entries (
        id_entry serial NOT NULL PRIMARY KEY, 
        title varchar(100) NOT NULL, 
        content text NOT NULL, 
        date date DEFAULT CURRENT_DATE,
        id_author int,
        category varchar(15),
        FOREIGN KEY (id_author) REFERENCES authors(id_author)
      );
    `);

    // Insertar datos en authors usando el método del modelo
    await createAuthor("Alejandru", "Regex", "alejandru@thebridgeschool.es", "https://randomuser.me/api/portraits/thumb/men/75.jpg");
    await createAuthor("Birja", "Rivera", "birja@thebridgeschool.es", "https://randomuser.me/api/portraits/thumb/men/60.jpg");
    await createAuthor("Alvaru", "Riveru", "alvaru@thebridgeschool.es", "https://randomuser.me/api/portraits/thumb/men/45.jpg");
    await createAuthor("Muchelle", "Wuallus", "muchelle@thebridgeschool.es", "https://randomuser.me/api/portraits/thumb/women/72.jpg");
    await createAuthor("Albertu", "Henriques", "albertu@thebridgeschool.es", "https://randomuser.me/api/portraits/thumb/men/33.jpg");
    await createAuthor("Guillermu", "Develaweyer", "guillermu@thebridgeschool.es", "https://randomuser.me/api/portraits/thumb/men/34.jpg");
    await createAuthor("Jabier", "Hespinoza", "jabier@thebridgeschool.es", "https://randomuser.me/api/portraits/thumb/men/35.jpg");

    // Insertar datos en entries usando el método del modelo con un objeto
    await createEntry({
      title: "Noticia: SOL en Madrid",
      content: "Contenido noticia 1",
      email: "alejandru@thebridgeschool.es",
      category: "Tiempo"
    });

    await createEntry({
      title: "Noticia: Un panda suelto por la ciudad",
      content: "El panda se comió todas las frutas de una tienda",
      email: "birja@thebridgeschool.es",
      category: "Sucesos"
    });

    await createEntry({
      title: "El rayo gana la champions",
      content: "Victoria por goleada en la final de la champions",
      email: "albertu@thebridgeschool.es",
      category: "Deportes"
    });

    await createEntry({
      title: "Amanece Madrid lleno de arena",
      content: "La calima satura Madrid de arena. Pérdidas millonarias",
      email: "birja@thebridgeschool.es",
      category: "Sucesos"
    });

    await createEntry({
      title: "Descubren el motor de agua",
      content: "Fin de la gasolina. A partir de ahora usaremos agua en nuestros coches",
      email: "alvaru@thebridgeschool.es",
      category: "Ciencia"
    });

    // // Insertar datos en authors
    // await createAuthor("Author 1", "surname 1", "author1@example.com", "https://example.com/image1.jpg");
    // await createAuthor("Author 2", "surname 2", "author2@example.com", "https://example.com/image2.jpg");

    // // Insertar datos en entries
    // await createEntry("Entry 1", "Content of Entry 1", 1);
    // await createEntry("Entry 2", "Content of Entry 2", 2);

    console.log("Database seeded successfully.");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    pool.end();
  }
};

seedDatabase();