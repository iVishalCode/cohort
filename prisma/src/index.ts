import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface UpadateParams {
  firstName: string;
  lastName: string;
}

async function upadateUser(
  username: string,
  { firstName, lastName }: UpadateParams
) {
  const res = await prisma.user.update({
    where: { email: username },
    data: {
      firstName,
      lastName,
    },
  });
  console.log(res);
}
upadateUser("raju@gmail.com", { firstName: "raju", lastName: "singh" });
