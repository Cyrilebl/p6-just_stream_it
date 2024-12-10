export async function fetchAllPagesData(url) {
  let allResults = [];

  try {
    while (url) {
      const response = await fetch(url);
      const data = await response.json();
      allResults = allResults.concat(data.results);
      url = data.next;
    }
    return allResults;
  } catch (error) {
    throw error;
  }
}

export async function fetchDataByID(id) {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/v1/titles/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function fetchDataByParamAndSort(key, value) {
  let allResults = [];

  try {
    const response = await fetch(
      `http://127.0.0.1:8000/api/v1/titles/?${key}=${value}&sort_by=-imdb_score&page_size=6`
    );
    const data = await response.json();
    return allResults.concat(data.results);
  } catch (error) {
    throw error;
  }
}
