export default async function fetcher(...args: any) {
  console.log(...args);
  const res = await fetch(...args);
  return res.json();
}
