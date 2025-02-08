import Image from "next/image";
import Container from "../custom/Container";

export default function Contact() {
    return (
        <Container>
            <div className="flex my-5 flex-col md:flex-row  bg-card">
                {/* Sidebar Section */}
                <div className="md:w-1/3 bg-gray-200 dark:bg-gray-600 text-text md:p-8 p-4 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-4 ">Get in Touch</h2>
                    <p className="mb-6">We'd love to hear from you! Fill out the form or contact us directly.</p>

                    <Image src="/icons/emailIcon.png" width={500} height={500} alt="email" />

                    {/* Social Icons */}

                </div>

                {/* Contact Form Section */}
                <div className="md:w-2/3 md:p-10 p-4">
                    <h2 className="text-3xl font-bold text-text mb-6">Contact Us</h2>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-text">Full Name</label>
                            <input type="text" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your name" />
                        </div>

                        <div>
                            <label className="block text-text">Email</label>
                            <input type="email" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your email" />
                        </div>

                        <div>
                            <label className="block text-text">Message</label>
                            <textarea rows="4" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your message"></textarea>
                        </div>

                        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition duration-300">
                            Send Message
                        </button>
                    </form>

                    {/* Google Map (Optional) */}
                    <div className="mt-6">
                        <iframe
                            className="w-full h-64 rounded"
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
