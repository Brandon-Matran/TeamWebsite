import Navbar from "./components/Navbar";
import Profiles from "./components/Profiles";
import Meme from './components/Meme'
import "./App.css"
import Background from "./assets/19861.jpg"

function App() {
  return (
    <div className="relative">
      {/* Background image */}
      <img
         className="absolute left-[59vw] w-1/2 transform rotate-45 -z-10 top-[-2.25vw]"
        src={Background}
        alt="background"
      />

      {/* Main content */}
      <Navbar />
      <hr />
      <div className="mb-4">
        <div><Profiles /></div>
      </div>

      <div>
        <hr />
      </div>

      <div>
        <div>Milestones</div>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-full"><Meme /></div>
      </div>
      {/* <div>Footer</div> */}
    </div>
  );
}

export default App;
