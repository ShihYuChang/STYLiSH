export async function fetchData(url: string) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}
