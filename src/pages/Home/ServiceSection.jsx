import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";


const ServiceSection = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    console.log(services)
    return (
        <div className="max-w-6xl mx-auto text-center space-y-6 my-20">
            <h3 className='font-bold text-xl mb-4 text-orange-600'>Service</h3>
            <h1 className="text-5xl font-bold">Our Service Area</h1>
            <p className="w-1/2 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
            <div className="grid grid-cols-3 gap-8">
                {
                    services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>
             <button className="btn btn-outline normal-case">More Services</button>
        </div>
    );
};

export default ServiceSection;