import PropTypes from 'prop-types';

function ProfileModal({ selectedTeamMember, closeModal }) {
    if (!selectedTeamMember) return null; // If no team member is selected, don't render anything

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-300/60 backdrop-blur-sm">
            <div className="relative border border-white bg-white rounded-lg overflow-hidden w-3/4 max-w-lg h-96"> {/* Fixed height for modal */}
                <div className="flex h-full">
                    {/* Image section */}
                    <img
                        className="h-full w-48 object-cover" // Adjust the image size to fill the modal height
                        src={selectedTeamMember.image}
                        alt={selectedTeamMember.name}
                    />
                    {/* Content section */}
                    <div className="p-4 flex flex-col justify-between w-full overflow-y-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}> {/* Added overflow-y-auto */}
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col flex-grow" >
                                <p className="text-2xl font-semibold">{selectedTeamMember.name}</p>
                                <p className="py-4">{selectedTeamMember.description}</p>
                            </div>


                            <button className="ml-4" onClick={closeModal}>X</button> {/* Added margin for space between button and text */}
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

// PropTypes validation
ProfileModal.propTypes = {
    selectedTeamMember: PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string,
        role: PropTypes.string,
    }),
};

export default ProfileModal;
