import * as faker from "faker";
import axios from 'axios';

async function getDogImage() {
  const response = await axios.get("https://dog.ceo/api/breeds/image/random");
  const data = await response.data;
  return data?.message;
}

async function getCatImage() {
  const response = await axios.get("https://api.thecatapi.com/api/images/get?format=json");
  const data = await response.data;
  return data[0].url;
}

export type CreateType = "dog" | "cat";

export async function createDog() {
  return await create("dog");
}

export async function createCat() {
  return create("cat");
}

export async function create(type: CreateType) {
  let imageUrl;
  if (type === "dog") {
    imageUrl = await getDogImage();
   } else {
     imageUrl = await getCatImage();
   }
  return {
    name: faker.name.firstName(),
    bio: faker.lorem.sentence(10),
    imageUrl
  };
}
