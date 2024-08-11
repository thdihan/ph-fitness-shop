const TeamCard = ({
    member,
}: {
    member: { name: string; designation: string; image: string };
}) => {
    return (
        <div className="p-6 flex flex-col items-center shadow-xl border-2 border-gray-200 rounded-lg space-y-4">
            <div className="rounded-full size-32">
                <img
                    className="rounded-full w-full h-full object-cover"
                    // src="https://plus.unsplash.com/premium_photo-1669782051589-4f828261b1c2?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    src={member.image}
                    alt=""
                />
            </div>
            <div className="flex flex-col items-center">
                <h3 className="font-bold">{member.name}</h3>
                <p className="text-sm font-semibold text-gray-500 text-center">
                    {member.designation}
                </p>
            </div>
        </div>
    );
};

export default TeamCard;
