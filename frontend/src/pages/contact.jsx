import React, { useState } from "react";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    // input changes for the fields
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // form submission with name, email, and message
    // added contact.model.js, need to create contact.route.js in backend
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted:", form);
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <div className="max-w-xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-2">Contact Page</h1>
            <p className="mb-4">Give us feedback!</p>
            <form onSubmit={handleSubmit} className="space-y-4">
                {["name", "email"].map((field) => (
                    <div key={field}>
                        <label className="block capitalize">{field}</label>
                        <input
                            type={field === "email" ? "email" : "text"}
                            name={field}
                            value={form[field]}
                            onChange={handleChange}
                            required
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>
                ))}
                <div>
                    <label className="block">Message</label>
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows="4"
                        required
                        className="w-full border rounded px-3 py-2"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;