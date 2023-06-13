function fetchBreeds() {
  const url = 'https://api.thecatapi.com/v1/breeds';
  const apiKey =
    'live_FvRQgJL9vTDdRpd5ZZVXa3VWL1xKe1KodLRa2GlW14WRnM5oUPoJ7rk67UOM1rFS'; // Замініть на свій унікальний ключ доступу

  return fetch(url, {
    headers: {
      'x-api-key': apiKey,
    },
  })
    .then(response => response.json())
    .then(data =>
      data.map(breed => ({
        id: breed.id,
        name: breed.name,
      }))
    )
    .catch(error => {
      console.error('Error fetching breeds:', error);
      throw error;
    });
}

function fetchCatByBreed(breedId) {
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
  const apiKey =
    'live_FvRQgJL9vTDdRpd5ZZVXa3VWL1xKe1KodLRa2GlW14WRnM5oUPoJ7rk67UOM1rFS'; // Замініть на свій унікальний ключ доступу

  return fetch(url, {
    headers: {
      'x-api-key': apiKey,
    },
  })
    .then(response => response.json())
    .then(data => data[0])
    .catch(error => {
      console.error('Error fetching cat by breed:', error);
      throw error;
    });
}

export { fetchBreeds, fetchCatByBreed };
