// import Image from "next/image";
// import Container from "../custom/Container";

// export default function Contact() {
//     return (
//         <Container>
//             <div className="md:grid md:grid-cols-12 flex my-5 flex-col md:flex-row  bg-card">
//                 {/* Sidebar Section */}
//                 <div className="md:w-1/3 md:col-span-6 bg-gray-200 dark:bg-gray-600 text-text md:p-8 p-4 flex flex-col justify-center">
//                     <h2 className="text-3xl font-bold mb-4 ">Get in Touch</h2>
//                     <p className="mb-6">We'd love to hear from you! Fill out the form or contact us directly.</p>

//                     <Image src="/icons/emailIcon.png" width={500} height={500} alt="email" />

//                     {/* Social Icons */}

//                 </div>

//                 {/* Contact Form Section */}
//                 <div className="md:w-full md:p-5 p-4 col-span-6">
//                     <h2 className="text-3xl font-bold text-text mb-6">Contact Us</h2>

//                     <form className="space-y-4 ">
//                         <div>
//                             <label className="block text-text">Full Name</label>
//                             <input type="text" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your name" />
//                         </div>

//                         <div>
//                             <label className="block text-text">Email</label>
//                             <input type="email" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your email" />
//                         </div>

//                         <div>
//                             <label className="block text-text">Message</label>
//                             <textarea rows="4" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your message"></textarea>
//                         </div>

//                         <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition duration-300">
//                             Send Message
//                         </button>
//                     </form>

//                     {/* Google Map (Optional) */}
//                     <div className="mt-6">
//                         <iframe
//                             className="w-full h-64 rounded"
//                             src="https://www.google.com/maps/embed?..."
//                             allowFullScreen
//                             loading="lazy"
//                         ></iframe>
//                     </div>
//                 </div>
//             </div>
//         </Container>
//     );
// }

import Image from "next/image";
import Container from "../../../../custom/Container";

export default function Contact() {
    return (
        <Container>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 my-5 bg-card p-4 rounded-lg shadow-md">

                {/* Image Section - 4 Columns */}
                <div className="md:col-span-8 bg-gray-200 dark:bg-gray-600 text-text p-8 flex flex-col justify-center items-center rounded-lg">
                    <h2 className="text-3xl font-bold mb-4 text-center">Get in Touch</h2>
                    <p className="mb-6 text-center">We'd love to hear from you! Fill out the form or contact us directly.</p>
                    <Image src="/icons/emailIcon.png" width={300} height={300} alt="email" className="rounded-lg" />
                </div>

                {/* Contact Form Section - 8 Columns */}
                <div className="md:col-span-4 p-4">
                    <h2 className="text-3xl font-bold text-text mb-6">Contact Us</h2>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-text font-medium">Full Name</label>
                            <input
                                type="text"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div>
                            <label className="block text-text font-medium">Email</label>
                            <input
                                type="email"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <label className="block text-text font-medium">Message</label>
                            <textarea
                                rows="4"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Your message"
                            ></textarea>
                        </div>

                        <button type="submit" className="w-full bg-button text-white py-3 rounded-lg hover:bg-button-foreground transition duration-300">
                            Send Message
                        </button>
                    </form>

                    {/* Google Map (Optional) */}
                    <div className="mt-6">
                        <iframe
                            className="w-full h-64 rounded-lg"
                            src="https://www.google.com/maps/embed?..."
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </Container>
    );
}
