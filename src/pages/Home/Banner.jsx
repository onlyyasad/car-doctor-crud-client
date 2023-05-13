import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img4 from '../../assets/images/banner/4.jpg'

const Banner = () => {
    return (
        <div className="carousel rounded-lg max-w-6xl my-10 mx-auto">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full" />
                <div className="absolute flex justify-between h-full w-full bg-gradient-to-r from-[#151515]  items-center">
                    <div className='w-1/2 text-white p-20 space-y-6'>
                        <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-6'>
                            <button className="btn normal-case bg-orange-600 border-orange-600">Discover More</button>
                            <button className="btn btn-outline border-white text-white normal-case">Latest Project</button>
                        </div>
                    </div>
                    <div className='flex absolute right-5 bottom-5 gap-4'>
                        <a href="#slide4" className="btn btn-circle bg-opacity-70 border-none hover:bg-orange-600">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-opacity-70 border-none hover:bg-orange-600">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute flex justify-between h-full w-full bg-gradient-to-r from-[#151515]  items-center">
                    <div className='w-1/2 text-white p-20 space-y-6'>
                        <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-6'>
                            <button className="btn normal-case bg-orange-600 border-orange-600">Discover More</button>
                            <button className="btn btn-outline border-white text-white normal-case">Latest Project</button>
                        </div>
                    </div>
                    <div className='flex absolute right-5 bottom-5 gap-4'>
                        <a href="#slide1" className="btn btn-circle bg-opacity-70 border-none hover:bg-orange-600">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-opacity-70 border-none hover:bg-orange-600">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute flex justify-between h-full w-full bg-gradient-to-r from-[#151515]  items-center">
                    <div className='w-1/2 text-white p-20 space-y-6'>
                        <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-6'>
                            <button className="btn normal-case bg-orange-600 border-orange-600">Discover More</button>
                            <button className="btn btn-outline border-white text-white normal-case">Latest Project</button>
                        </div>
                    </div>
                    <div className='flex absolute right-5 bottom-5 gap-4'>
                        <a href="#slide2" className="btn btn-circle bg-opacity-70 border-none hover:bg-orange-600">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-opacity-70 border-none hover:bg-orange-600">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />
                <div className="absolute flex justify-between h-full w-full bg-gradient-to-r from-[#151515]  items-center">
                    <div className='w-1/2 text-white p-20 space-y-6'>
                        <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-6'>
                            <button className="btn normal-case bg-orange-600 border-orange-600">Discover More</button>
                            <button className="btn btn-outline border-white text-white normal-case">Latest Project</button>
                        </div>
                    </div>
                    <div className='flex absolute right-5 bottom-5 gap-4'>
                        <a href="#slide3" className="btn btn-circle bg-opacity-70 border-none hover:bg-orange-600">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-opacity-70 border-none hover:bg-orange-600">❯</a>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;