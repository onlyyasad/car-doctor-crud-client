import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import BookingCard from "./BookingCard";
import { useNavigate } from "react-router-dom";


const Bookings = () => {
    const {user, logOut} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate();


    const url = `http://localhost:5000/bookings?email=${user?.email}`

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(!data.error){
                setBookings(data)
            }
            else{
                logOut();
                navigate('/')
            }
        })
    }, [url, navigate, logOut])

    const handleDelete = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert("Booking Removed!");
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining)
                }
            })
    }

    const handleBookingConfirm = id =>{
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({status : 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                // state update
                const remaining = bookings.filter(booking => booking._id !== id);
                const updated = bookings.find(booking => booking._id === id);
                updated.status = 'confirm';
                const newBookings = [updated, ...remaining];
                setBookings(newBookings)
            }
        })
    }

    return (
        <div className="overflow-x-auto max-w-6xl mx-auto my-10 min-h-screen w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>

                        <th>Remove</th>
                        <th>Image</th>
                        <th>Service Name</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map(booking => <BookingCard key={booking._id} booking={booking} handleDelete={handleDelete} handleBookingConfirm={handleBookingConfirm}></BookingCard>)
                    } 
                </tbody>
            </table>
        </div>
    );
};

export default Bookings;