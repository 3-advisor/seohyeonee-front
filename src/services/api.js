import axios from 'axios';

const URL = '/api';

export const api = {
  getAllRestaurant: () => axios.get(`${URL}/restaurant`),
  getRestaurantsWithTag: (tags) => axios.get(`${URL}/restaurant/tag`, {
    params: {
      tags,
    },
  }),
};
