import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Checkout = () => {
    const service = useLoaderData();
    const {_id, title, price, img} = service;
    const {user} = useContext(AuthContext);
    console.log(service)
    const handleBookService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const due = form.due.value;

        const booking = {
            customerName : name,
            email,
            date,
            img,
            service: title,
            service_id: _id,
            price: due
        }
        
        console.log(booking)
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                alert('Booking Successful!')
                form.reset()
            }
        })
    }


    return (
        <div className="min-h-screen pt-16 bg-base-200">
            <div className=" hero-content">
                <form onSubmit={handleBookService} className="w-1/2 p-8 space-y-6 rounded-lg bg-base-100">
                    <h1 className="text-3xl font-bold text-center">Book Service: {title}</h1>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                        <div className="w-full">
                            <input type="text" name="name" defaultValue={user?.displayName} className="input w-full input-bordered" required />
                        </div>
                        <div className="">
                            <input type="date" name="date" className="input w-full input-bordered" required />
                        </div>
                        <div className="">
                            <input type="email" name="email" defaultValue={user?.email} className="input w-full input-bordered" required />
                        </div>
                        <div className="">
                            <input type="text" name="due" defaultValue={"$" + price} className="input w-full input-bordered" required />
                        </div>
                    </div>
                    
                    <div className=" mt-6">
                        <button type="submit" className="btn w-full normal-case btn-primary">Book Service</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;