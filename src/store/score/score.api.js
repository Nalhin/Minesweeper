import { apiUrl } from '../url';
import axios from 'axios';

const fetchGetScores = () => axios.get(`${apiUrl}/scores`);

const fetchSaveScore = ({ name, score, difficulty }) =>
  axios.put(`${apiUrl}/scores/${difficulty}`, { name, score });

export default {
  fetchGetScores,
  fetchSaveScore,
};
