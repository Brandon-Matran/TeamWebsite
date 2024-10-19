
import Navbar from "./components/Navbar";
import Profiles from "./components/Profiles";
import Meme from './components/Meme'
function App() {
  return (
    <div className="">
      
      <Navbar />
      <div>
      <div className=""><Profiles /></div>
      </div>
      <div>
        <div>Milestones</div>
      </div>
      <div className="flex justify-center items-center">
        <div className=""><Meme/></div>
      </div>
      {/* <div>Footer</div> */}
    </div>
  );
}

export default App;
