import axios from 'axios';

const URL = 'https://personal-multi-bot.herokuapp.com/api';

export const api = {
  getAllRestaurant: () => axios.get(`${URL}/restaurant`),
};
