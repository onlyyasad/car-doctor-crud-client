
const Checkout = () => {
    return (
        <div className="min-h-screen pt-16 bg-base-200">
            <div className=" hero-content">
                <form className="w-1/2 p-8 space-y-6 rounded-lg bg-base-100">
                    <h1 className="text-3xl font-bold text-center">Checkout</h1>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                        <div className="w-full">
                            <input type="text" placeholder="First Name" className="input w-full input-bordered" />
                        </div>
                        <div className="">
                            <input type="text" placeholder="Last Name" className="input w-full input-bordered" />
                        </div>
                        <div className="">
                            <input type="text" placeholder="Your Phone" className="input w-full input-bordered" />
                        </div>
                        <div className="">
                            <input type="email" placeholder="Your Email" className="input w-full input-bordered" />
                        </div>
                    </div>
                    <div className="">
                        <textarea className="input h-28 w-full p-4 input-bordered" placeholder="Your Message" name="" id="" cols="30" rows="5"></textarea>
                    </div>
                    <div className=" mt-6">
                        <button className="btn w-full normal-case btn-primary">Order Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;