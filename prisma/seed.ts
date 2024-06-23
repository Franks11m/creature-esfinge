/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy creatures
  const post1 = await prisma.esfinge.create({
    data: {
        name: 'EsfingePrime',
        description: 'Criatura de arcilla de la mitología judía, creada para proteger pero potencialmente peligrosa.',
        lastSee: 'Paccha',
        countLastSee: 7,
        extinct: false,
    },
  });
  const post2 = await prisma.esfinge.upsert({
    where: { name: 'Esfingecito' },
    update: {},
    create: {
      name: 'Golemcito',
      description: "Criatura mitológica con cuerpo de león y cabeza humana.",
      lastSee: 'Ricaute',
      countLastSee: 2,
      extinct: false,
    },
  });

  console.log({ post1, post2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
