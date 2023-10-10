import { createClient } from "@sanity/client";

function getCurrentDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

const client = createClient({
  projectId: "7m5gx48n",
  dataset: "production",
  apiVersion: getCurrentDate(),
  token:
    "skavyhsqzmhxo6Mh2TDsoPzv1rxSDel3TVzocp7x7Ftaa7sbAR8VVF2FeMhByX9gHhMZhVzn3Ziv4DE8bumnji3i0dAeNKGdozoMmDqbddVpc32n1iLIEZpgYGSk8hOCK4hMnVHqryNB7toY5YqaLap3bMG1bj5RpgO6kpGEKTJKAvgrOLLH",
  useCdn: false,
});

export { client as sanityClient };