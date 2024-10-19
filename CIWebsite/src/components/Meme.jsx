import { useState, useEffect } from "react";

function Meme() {
  const [meme, setMeme] = useState("");

  const memeData = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
      .then((response) => response.json())
      .then((data) => {
        if (data.nsfw == false) {
          setMeme(data);
          console.log(data); // Prints the fetched meme data in the console.log statement.
        } else {
          return;
        }
      });
  };
  useEffect(() => {
    memeData();
  }, []);

  return (
    <div className="">
        <div className="flex justify-center items-center"> MEMES </div>
       
      <div className="flex items-center">
        <img className="h-80" src={meme.url} />
      </div>

      <button className="border border-red-200" onClick={memeData}>
        New Meme
      </button>
    </div>
  );
}
export default Meme;
