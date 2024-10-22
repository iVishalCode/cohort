import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgresql://neondb_owner:WRw7x2tUzBKg@ep-silent-wildflower-a82803nr.eastus2.azure.neon.tech/neondb?sslmode=require",
});

client.connect();
