import { Link } from "react-router-dom";
import {FaArrowRight} from "react-icons/fa"


const ServicesCard = ({ service }) => {
    const { _id, title, img, price } = service;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure className="h-52"><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>

                <div className="card-actions text-orange-600 justify-between">
                    <p className="text-start font-bold">Price: ${price}</p>
                    <Link to={`/checkout/${_id}`}><FaArrowRight /></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;