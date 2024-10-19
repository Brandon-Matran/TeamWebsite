import VCHLogo from '../assets/VCHImage.webp'

function Navbar() {

    return(
        <div>
            <div className="flex m-4 justify-between items-center">
                <img className="h-24"src={VCHLogo} />
                
                <ul className="flex p-4">
                    <li className="p-4">About Us</li>
                    <li className="p-4">Milestones</li>
                    <li className="p-4">Memes</li>
                    <li className="p-4">Resources</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;