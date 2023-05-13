import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const AboutSection = () => {
    return (
        <div className="hero min-h-screen max-w-6xl mx-auto bg-base-100">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 mb-32 relative'>
                    <img src={person} className="rounded-lg w-4/5" />
                    <img src={parts} className="w-3/5 rounded-lg absolute right-0 -bottom-32 border-8 border-white" />
                </div>
                <div className='lg:w-1/2 lg:ps-8'>
                    <h3 className='font-bold text-xl mb-4 text-orange-600'>About Us</h3>
                    <h1 className="text-5xl font-bold lg:pe-28">We are qualified & of experience in this field</h1>
                    <p className="pt-6 pb-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
                    <p className="pb-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.</p>
                    <button className="btn btn-primary bg-orange-600 border-orange-600 hover:bg-white hover:text-orange-600 hover:border-orange-600 normal-case">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;