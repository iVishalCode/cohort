// write a function to create a users table in your database.
const { client } = require(" pg");

const client = new Client({
  connectionString:
    "postgresql://neondb_owner:WRw7x2tUzBKg@ep-silent-wildflower-a82803nr.eastus2.azure.neon.tech/neondb?sslmode=require",
});

async function createUsersTable() {
  await client.connect();
  const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
  console.log(result);
}

createUsersTable();
