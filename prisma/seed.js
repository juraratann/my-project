const bcrypt = require("bcryptjs");
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const password = bcrypt.hashSync("123456");

const userData = [
  {
    name: "jurarat",
    lname: "pakkaranung",
    address: "มหาสารคาม",
    phone: "0626922817",
    email: "annyanny015@gmail.com",
    username: "anny",
    password,
  },
  {
    name: "phongphorn",
    lname: "angboonta",
    address: "กาฬสินธุ์",
    phone: "0823145690",
    email: "big110@gmail.com",
    username: "big",
    password,
  },
];

const productData = [
  {
    name: "Chemist Zinc",
    detail: "Zinc supplement Helps strengthen immunity",
    price: "250",
    stock: "In stock",
  },

  {
    name: "Medicine B",
    detail: "Description B",
    price: "200",
    stock: "Out of stock",
  },
];

const run = async () => {
  try {
    await prisma.user.createMany({
      data: userData,
    });

    await prisma.product.createMany({
      data: productData,
    });

    console.log("Seed successful");
  } catch (error) {
    console.error("Error during seeding:", error);
  } finally {
    await prisma.$disconnect();
  }
};

run();
