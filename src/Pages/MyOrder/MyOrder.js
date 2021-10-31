import { useEffect, useState } from 'react';
import { useAPI } from '../../Context/apiContext';
import UserBooking from './UserBooking';

const MyOrders = () => {

    const { user } = useAPI();

    // Set state for loggedInUser:
    const [userBookings, setUserBookings] = useState([]);

    //PreLoader visibility
    // const [preLoaderVisibility, setPreLoaderVisibility] = useState('block');


    // Dynamically filter loggedInUser data from API:
    useEffect(() => {
        fetch(
            'https://gentle-earth-79632.herokuapp.com/myorders?email=' +
            user.email,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            }
        )
            .then((res) => res.json())
            .then((data) => {
                setUserBookings(data);
                // setPreLoaderVisibility('none');
            });
    }, [user.email]);


    return (
        <div className='container mt-5'>
            <h4 className='text-center mb-4'>
                You've {userBookings.length} Booking
            </h4>

            <div className='row'>
                {/* <PreLoader visibility={preLoaderVisibility} /> */}

                {userBookings.map((booking) => (
                    <UserBooking
                        key={booking._id}
                        booking={booking}
                    />
                ))}
            </div>

        </div >
    );
};

export default MyOrders;
