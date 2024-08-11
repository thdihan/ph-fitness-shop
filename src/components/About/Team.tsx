import TeamCard from "./TeamCard";

const teamMembers = [
    {
        name: "William M.",
        designation: "Chief Executive Officer",
        image: "https://plus.unsplash.com/premium_photo-1669782051589-4f828261b1c2?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Sophia K.",
        designation: "Chief Operating Officer",
        image: "https://plus.unsplash.com/premium_photo-1661726660137-61b182d93809?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "James H.",
        designation: "Head of Marketing",
        image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Emily R.",
        designation: "Lead Product Designer",
        image: "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Michael T.",
        designation: "Sales Manager",
        image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Olivia P.",
        designation: "Customer Service Manager",
        image: "https://plus.unsplash.com/premium_photo-1683121771856-3c3964975777?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

const Team = () => {
    return (
        <div className="py-6 my-6">
            <h2 className="text-center text-2xl font-bold">Our Team Members</h2>
            <div className="my-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {teamMembers.map((member, index) => (
                    <TeamCard key={index} member={member} />
                ))}
            </div>
        </div>
    );
};

export default Team;
