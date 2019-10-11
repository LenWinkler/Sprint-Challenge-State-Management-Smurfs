import axios from "axios";

export const FETCH_SMURFS = 'FETCH_SMURFS';

const fetchSmurfs = () => dispatch => {
  
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => dispatch({ type: FETCH_SMURFS, payload: res.data}))
        .catch(err => console.log('fetch error -->', err));
};

export default fetchSmurfs;