import { Slide } from "react-awesome-reveal";

const Contact = () => {
    return (
        <div className="py-6 my-6">
            {/* Contact Information: Provide detailed contact information and
            encourage users to reach out with questions or feedback. */}

            <div className="flex flex-col  my-6">
                <h2 className="text-2xl font-bold text-center">Contact Us</h2>
                <p className="text-gray-800 py-4 font-semibold text-center">
                    Have any questions or feedback? Reach out to us!
                </p>

                <div className="flex flex-col lg:flex-row space-x-4 py-6">
                    <Slide direction="left" className="flex-1 px-6">
                        <form className="flex flex-col space-y-4">
                            <div>
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Name"
                                    className="p-2 w-full border-2 border-gray-400 rounded-md"
                                />
                            </div>
                            <div>
                                <textarea
                                    name=""
                                    id=""
                                    rows={10}
                                    className="p-2 w-full border-2 border-gray-400 rounded-md"
                                    placeholder="Question or Feedback"
                                ></textarea>
                            </div>
                            <div className="flex justify-end">
                                <button className="p-2 bg-[#FF5252] text-white rounded-md ">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </Slide>

                    <Slide direction="right" className="flex-1 px-6">
                        <div className="flex-1 space-y-2">
                            <h2 className="text-2xl font-semibold lg:text-left">
                                Fitness Shop
                            </h2>
                            <address className="text-center lg:text-left">
                                Apt. 955 118 Abbott Shore, <br /> New Berniece,
                                HI <br />
                                34986-8246
                            </address>

                            <p>
                                <span className="font-semibold">Email:</span>
                                <span className="italic ml-2">
                                    fitness-shop@gmail.com
                                </span>
                            </p>
                            <p>
                                <span className="font-semibold">Contact:</span>
                                <span className="italic ml-2">
                                    +91-0101-001
                                </span>
                            </p>
                        </div>
                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default Contact;
