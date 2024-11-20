export async function fetchData(url) {
  try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    }
    catch (error) {
    throw error;
  }
}

export async function fetchAllPagesData(url) {
  let all_results = []

  try {
    while(url) {
      const response = await fetch(url);
      const data = await response.json();
      all_results = all_results.concat(data.results)
      url = data.next
    }
    return all_results;
  } catch (error) {
    throw error;
  }
}

export async function fetchDataByID(url, id) {
  try {
    const response = await fetch(
      `${url}${id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function fetchDataByParamAndSort(key, value) {
  let all_results = []
  
  try {
    const first_page_response = await fetch(
      `http://127.0.0.1:8000/api/v1/titles/?${key}=${value}&sort_by=-imdb_score`
    );
    const first_page_data = await first_page_response.json();
    all_results = all_results.concat(first_page_data.results);

    if(first_page_data.next) {
    const second_page_response = await fetch(first_page_data.next)
    const second_page_data = await second_page_response.json()
    all_results = all_results.concat(second_page_data.results)
    }
    return all_results
  } catch (error) {
    throw error;
  }
}
