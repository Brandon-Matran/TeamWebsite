import Profile from "./Profile";
import "./Profiles.css";
import { TypeAnimation } from 'react-type-animation';

function Profiles() {
  return (
    <div className="flex flex-col justify-center items-center" style={{ fontFamily: 'Montserrat, sans-serif'}}>
      <div className="flex m-8 justify-between items-center w-full"> {/* Flex container for alignment */}
        <div style={{ flex: 1, textAlign: 'center' }}> {/* Center the typing animation */}
          <TypeAnimation
            sequence={[
              'Meet our team.', 1000

            ]}
            speed={50}
            style={{ fontSize: '1.5em', color: '#000', fontFamily: 'Montserrat, sans-serif' }}
            repeat={0}

          />
        </div>

      </div>

      <div className="w-full" style={{}}>
        <Profile />
      </div>
    </div>
  );
}

export default Profiles;
