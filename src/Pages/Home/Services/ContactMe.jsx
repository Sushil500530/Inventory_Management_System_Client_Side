
const ContactMe = () => {
    return (
        <section className="w-full my-12 ">
            <h3 className="text-4xl font-bold text-center mb-12"><span className="text-fuchsia-500">Contact</span> Us</h3>
            <div className="flex w-1/2 bg-gray-400 px-6 rounded-lg py-12 items-center justify-center space-y-3 gap-5">
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
                        <form>
                            <div className="mb-5 space-y-3">
                                <label className="text-base font-medium">Name*</label>
                                <input type="text" name="name" className="input w-full" id="name" />
                            </div>
                            <div className="mb-5 space-y-3">
                                <label className="font-medium">Email Address*</label>
                                <input type="email" name="email" className="input w-full" id="email" />
                            </div>
                            <div className="space-y-3">
                                <label className="font-medium mt-3">Message*</label>
                                <textarea placeholder="Text..." className="textarea textarea-bordered textarea-md w-full " ></textarea>
                            </div>
                        </form>
                        <button className="btn mt-5">CONTACT ME</button>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ContactMe;