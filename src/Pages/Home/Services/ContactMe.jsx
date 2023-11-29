import GoogleMapReact from 'google-map-react';
// import { googleAPIKey } from '../../../../googleAPIKey';
import { FaMapMarkedAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ContactMe = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Wow!🎉",
            text: "Your information was sent successfully !",
            icon: "success"
        });
    }
    
    const AnyReactComponent = ({ text }) => <div style={{ color: 'red' }}><FaMapMarkedAlt className='text-5xl mb-4' /></div>;

    const defaultProps = {
        center: {
            lat: 51.213890,
            lng: -102.462776,
        },
        zoom: 11
    };


    return (
        <section className="w-full my-12 ">
            <h3 className="text-4xl font-bold text-center mb-12"><span className="text-fuchsia-500">Contact</span> Us</h3>
            <div className='w-full h-[60vh] gap-8 flex flex-col lg:flex-row'>
                <div className="w-full lg:w-1/2 flex bg-gray-400 px-6 rounded-r-lg py-12 items-center justify-center space-y-3 gap-5">
                    <div className="w-1/2">
                        <div className="contact-title">
                            <h2 className="text-2xl font-bold mb-3">CONTACT ME</h2>
                            <p>{`Inventory management refers to the process of ordering, storing, using, and selling a company's inventory. This includes the management of raw materials, components, and finished products, as well as warehousing and processing of such items.`}</p>
                            <div className="mt-5">
                                <label className="text-base font-medium">12A Street East</label> <br />
                                <label className="text-base font-medium">Skewton, SK</label> <br />
                                <label className="text-base font-medium">S7K 1A5</label>
                            </div>
                            <div className="text-base font-medium">
                                <label>Email: inventory@manage.com</label>
                                <p>Phone : 306-222-2323</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className="form">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-5 space-y-3">
                                    <label className="text-base font-medium">Name*</label>
                                    <input type="text" name="name" className="input w-full" placeholder='Enter Your Name....' id="name" required />
                                </div>
                                <div className="mb-5 space-y-3">
                                    <label className="font-medium">Email Address*</label>
                                    <input type="email" name="email" className="input w-full" placeholder='Enter Your Email....' id="email" required />
                                </div>
                                <div className="space-y-3">
                                    <label className="font-medium mt-3">Message*</label>
                                    <textarea placeholder="Send Message..." className="textarea textarea-bordered textarea-md w-full "required ></textarea>
                                </div>
                                <button onClick={handleSubmit} className="btn mt-5">CONTACT ME</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 ">
                    <div className='rounded-l-lg' style={{ height: '100%', width: '100%' }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: '' }}
                            defaultCenter={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                        >
                            <AnyReactComponent
                                lat={defaultProps.center.lat}
                                lng={defaultProps.center.lng}
                                text="Inventory Management Car Shop"
                            />
                        </GoogleMapReact>

                    </div>
                </div>
            </div>
        </section>

    );
};

export default ContactMe;