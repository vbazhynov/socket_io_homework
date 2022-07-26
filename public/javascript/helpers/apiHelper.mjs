export async function getData(url = '') {
  const response = await fetch(url, {
    method: 'GET',
  });
  return await response.text();
}
