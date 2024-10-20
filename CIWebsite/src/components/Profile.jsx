import { useState } from "react";
import team_data from "../CITeamData";
import ProfileModal from "./ProfileModal";
import EKGAnimation from "./EKGAnimation";

function Profile() {
  // State to track the selected team member and hover status
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track which team member is hovered

  // Function to handle the image click
  const handleImageClick = (team) => {
    setSelectedTeamMember(team); // Set the selected team member
    setIsModalOpen(true); // Open the modal
  };

  const teamData = team_data.map((team, idx) => {
    return (
      <div
        key={idx}
        className="flex flex-col items-center p-4 shadow-md rounded-tl-3xl rounded-br-3xl" // Ensure flex-col and center alignment
        onClick={() => handleImageClick(team)}
        onMouseEnter={() => setHoveredIndex(idx)} // Set hovered index on mouse enter
        onMouseLeave={() => setHoveredIndex(null)} // Reset hovered index on mouse leave
        style={{backgroundColor: "#ffffff"}}
      >
        <div className="relative"> {/* Wrapper for positioning */}
          <img
            className={`w-36 rounded-full cursor-pointer mb-4 transition-all duration-300 ${hoveredIndex === idx ? 'filter blur-sm opacity-80' : ''}`} // Add blur and opacity on hover
            src={team.image}
            alt={team.name}
          />
          {/* Conditionally render EKGAnimation over the image */}
          {hoveredIndex === idx && (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <EKGAnimation />
            </div>
          )}
        </div>
        <div className="text-center" > {/* Ensure text is centered */}
          <div className="text-md font-semibold" style={{fontFamily: 'Montserrat, sans-serif', }}>{team.name}</div>
          <p className="" style={{fontFamily:'Monserrat, sans-serif', color: 'rgb(0 180 217)'}}>{team.role}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="flex w-full justify-evenly" style={{}}>
      {teamData}

      {isModalOpen && (
        <ProfileModal
          selectedTeamMember={selectedTeamMember}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}

export default Profile;
