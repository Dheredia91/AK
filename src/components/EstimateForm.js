import { useState } from "react";
import Card from './Card';

const EstimateForm = ({ title, description }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        type: "",
        info: "",
    });

    const [status, setStatus] = useState("");

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Submitting...");

        try {
            const response = await fetch("/.netlify/functions/contact-form", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (response.ok) {
                setStatus("Success! Your request has been submitted.");
                setFormData({ name: "", email: "", phone: "", address: "", type: "", info: "" });
            } else {
                setStatus(`Error: ${result.error}`);
            }
        } catch (error) {
            setStatus("Failed to submit the form.");
        }
    };

    return (
        <section className="flex items-center justify-center bg-white sm:p-8">
            <Card>
                {/* Left Section */}
                <div className="w-full mid:w-1/2 flex flex-col my-6">
                    <h1 className="text-4xl sm:text-6xl font-bold text-black mb-4 font-alfarn tracking-[-3px]">
                        {title}
                    </h1>
                    <div className="flex font-kumbh_sans text-start mx-2 flex-col space-y-4">
                        {description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>

                {/* Right Section (Form) */}
                <div className="w-fit mid:w-1/2 mid:mx-6 px-5">
                    <h2 className="text-2xl sm:text-3xl font-bold text-black my-4 font-alfarn tracking-[-3px] mid:my-7">
                        Request an Estimate
                    </h2>
                    {status && <p className="mb-4 text-sm">{status}</p>}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-black font-bold mb-2">Enter Your Name *</label>
                            <input type="text" id="name" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full border border-gray-300 p-2" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-black font-bold mb-2">Email *</label>
                            <input type="email" id="email" name="email" placeholder="Enter Your Email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 p-2" required />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-black font-bold mb-2">Your Phone *</label>
                            <input type="tel" id="phone" name="phone" placeholder="Enter Your Phone Number" value={formData.phone} onChange={handleChange} className="w-full border border-gray-300 p-2" required />
                        </div>
                        <div>
                            <label htmlFor="address" className="block text-black font-bold mb-2">Project Address *</label>
                            <input type="text" id="address" name="address" placeholder="Project Address" value={formData.address} onChange={handleChange} className="w-full border border-gray-300 p-2" required />
                        </div>
                        <div>
                            <label htmlFor="type" className="block text-black font-bold mb-2">Type of Project</label>
                            <select id="type" name="type" value={formData.type} onChange={handleChange} className="w-full border border-gray-300 p-2" required>
                                <option value="" disabled>Select an option</option>
                                <option value="asphalt">Asphalt</option>
                                <option value="concrete">Concrete</option>
                                <option value="grading">Grading</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="info" className="block text-black font-bold mb-2">Project Information:</label>
                            <textarea id="info" name="info" placeholder="Project Information" value={formData.info} onChange={handleChange} className="w-full border border-gray-300 p-2 h-24" required></textarea>
                        </div>
                        <div>
                            <button type="submit" className="bg-cyan-950 text-white font-bold py-2 px-4 w-24 hover:bg-cyan-700">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </Card>
        </section>
    );
};

export default EstimateForm;
