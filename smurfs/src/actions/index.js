import axios from "axios";

export const FETCH_SMURFS = 'FETCH_SMURFS';
export const ADD_SMURF = 'ADD_SMURF';

const fetchSmurfs = () => dispatch => {
  
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => dispatch({ type: FETCH_SMURFS, payload: res.data}))
        .catch(err => console.log('fetch error -->', err));
};

 export const addSmurf = newSmurf => dispatch => {

    axios
       .post('http://localhost:3333/smurfs', newSmurf)
       .then(res => console.log('post res', res))
       .catch(err => console.log('post error -->', err)) 
}

export default fetchSmurfs;