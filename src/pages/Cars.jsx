import React, { useEffect } from 'react';
import DefaultLayout from '../components/DefaultLayout';
import {useSelector, useDispatch} from 'react-redux';
import { getAllCars } from '../redux/actions/carsActions';
import { Row, Col } from 'antd';
import Spinner from '../components/Spinner';
//import { Provider } from 'react-redux';
//imort store from '../redux/store';

// function Cars(){
//     return(
//     <Provider store={store}>
//         <Cars1/>
//         </Provider>
//     )
// }

function Cars(){
    const {cars} = useSelector(state => state.carsReducer)
    const {loading} = useSelector(state => state.alertsReducer)
    const dispatch = useDispatch();
    function clickfn(){
        alert("car selected");
    }
    useEffect(() => {
        dispatch(getAllCars())
    },[])

    return(
       
        <DefaultLayout>

            {loading === true && (<Spinner/>)}

            <Row justify='center' gutter={16} className='mt-5'>
                {cars.map(car=>{
                    return <Col lg={5} sm={24} xs={24}>
                        <div className='car p-2 bs1 mt-3'>
                            <img src={car.image} alt='Not found' className='carimg'/>

                            <div className='car-content d-flex align-items-center justify-content-between'>
                                <div>
                                    <p>{car.name}</p>
                                    <p>Rs. {car.rentPerDay}/- Rent per day</p>
                                </div>
                                <div>
                                    <button className='btn1' onClick={clickfn}>Book Now</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                })}
            </Row>

          
        </DefaultLayout>
       
    );
}
export default Cars;
//export default Cars1;