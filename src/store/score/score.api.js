import { apiUrl } from '../url';
import axios from 'axios';

const fetchGetScore = difficulty =>
  axios.get(
    `${apiUrl}/scores/${difficulty}.json?orderBy="score"&limitToFirst=20`,
  );

const fetchSaveScore = ({ name, score, difficulty }) =>
  axios.post(`${apiUrl}/scores/${difficulty}.json`, { name, score });

export default {
  fetchGetScore,
  fetchSaveScore,
};
