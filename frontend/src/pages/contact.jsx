import React from "react";

const members = [
    {
        name: "Pablo Sabogal",
        role: "Product Manager",
        email: "psabogal@ufl.edu",
    },
    {
        name: "Krish Patel",
        role: "Scrum Master",
        email: "kpatel13@ufl.edu",
    },
    {
        name: "Lance Tan",
        role: "Back-end Developer",
        email: "lance.tan@ufl.edu",
    },
    {
        name: "Salena Till",
        role: "Front-End Developer",
        email: "salena.till@ufl.edu",
    },
];

const Contact = () => {
    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Project Members</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {members.map((member) => (
                    <div key={member.email} className="card bg-base-100 shadow-md border">
                        <div className="card-body">
                            <h2 className="card-title">{member.name}</h2>
                            <p className="text-gray-600">{member.role}</p>
                            <a
                                href={`mailto:${member.email}`}
                                className="text-blue-600 hover:underline"
                            >
                                {member.email}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contact;