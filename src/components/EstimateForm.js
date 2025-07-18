"use client";
import { useState } from "react";
import Card from "./Card";

const EstimateForm = ({ title, description }) => {
    const [formState, setFormState] = useState({ success: false, error: false, message: ""});

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);

        const email = formData.get("email")?.trim();
        const phone = formData.get("phone")?.trim();

        if (!email && !phone) {
            setFormState({
            success: false,
            error: true,
            message: "Please provide at least an email or a phone number."
            });
            return;
        }

        try {
            const response = await fetch("/__forms.html", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
            });

            if (response.ok) {
            setFormState({
                success: true,
                error: false,
                message: "Form submitted successfully!"
            });
            form.reset();
            } else {
            setFormState({
                success: false,
                error: true,
                message: "Something went wrong. Please try again."
            });
            }
        } catch (error) {
            setFormState({
            success: false,
            error: true,
            message: "Something went wrong. Please try again."
            });
        }
    };


    return (
        <section className="flex items-center justify-center bg-white sm:p-8">
            <Card>
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

                {/* Right Section */}
                <div className="w-fit mid:w-1/2 mid:mx-6 px-5">
                    <h2 className="text-2xl sm:text-3xl font-bold text-black my-4 font-alfarn tracking-[-1px] mid:my-7">
                        Request an Estimate
                    </h2>
                    <form name="contact" onSubmit={handleFormSubmit} className="space-y-4">
                        <input type="hidden" name="form-name" value="contact" />

                        <div>
                            <label htmlFor="name" className="block text-black font-bold mb-2">Enter Your Name *</label>
                            <input type="text" id="name" name="name" placeholder="Your Name" className="w-full border border-gray-300 p-2" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-black font-bold mb-2">Email *</label>
                            <input type="email" id="email" name="email" placeholder="Enter Your Email" className="w-full border border-gray-300 p-2" />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-black font-bold mb-2">Phone</label>
                            <input type="tel" id="phone" name="phone" placeholder="Enter Your Phone Number" className="w-full border border-gray-300 p-2" />
                        </div>
                        <div>
                            <label htmlFor="address" className="block text-black font-bold mb-2">Project Location *</label>
                            <input type="text" id="address" name="address" placeholder="Project Location" className="w-full border border-gray-300 p-2" required />
                        </div>
                        <div>
                            <label htmlFor="type" className="block text-black font-bold mb-2">Type of Project</label>
                            <select id="type" name="type" className="w-full border border-gray-300 p-2">
                                <option value="" disabled>Please Choose</option>
                                <option value="asphalt">Asphalt</option>
                                <option value="concrete">Concrete</option>
                                <option value="grading">Grading</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="info" className="block text-black font-bold mb-2">Project Information:</label>
                            <textarea id="info" name="info" placeholder="Project Information" className="w-full border border-gray-300 p-2 h-24"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="bg-cyan-950 text-white font-bold py-2 px-4 w-24 hover:bg-cyan-700">
                                Submit
                            </button>
                        </div>
                    </form>

                    {/* Success & Error Messages */}
                    {formState.message && (<p className={`mt-2 text-sm ${formState.success ? "text-green-600" : "text-red-600"}`}> {formState.message}</p>)}

                    <p className="mt-4 text-sm text-gray-600">
                        This site is protected by reCAPTCHA Enterprise and the Google <a href="#" className="text-blue-500">Privacy Policy</a> and <a href="#" className="text-blue-500">Terms of Service</a> apply.
                    </p>
                </div>
            </Card>
        </section>
    );
};

export default EstimateForm;
