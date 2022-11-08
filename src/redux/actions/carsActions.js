// import Axios from 'axios';

// export const getAllCars = () => async dispatch => {
//     dispatch({type: 'LOADING', payload: true})
//     try{
//         const response = await Axios.get('/api/cars/getallcars');
//         //await Axios.get('/getallcars')
//         dispatch({type: 'GET_ALL_CARS',payload: response.data})
//         dispatch({type: 'LOADING',payload: false})
//     }
//     catch(error){
//         console.log(error)
//         dispatch({type: 'LOADING', payload: false})

//     }
// }

import axios from 'axios';

export const getAllCars = () => async dispatch => {
    dispatch({type: 'LOADING', payload: true})
    try{
        const response = await axios.get('http://localhost:3002/cars/getallcars');
        
        dispatch({type: 'GET_ALL_CARS',payload: response.data})
        dispatch({type: 'LOADING',payload: false})
    }
    catch(error){
        console.log(error)
        dispatch({type: 'LOADING', payload: false})

    }
}