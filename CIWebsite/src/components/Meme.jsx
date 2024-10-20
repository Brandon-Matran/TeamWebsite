import { useState, useEffect } from "react";
import "./Meme.css"
function Meme() {
  const [meme, setMeme] = useState("");
  const [randomMeme, setRandomMeme] = useState("");

  const memeData = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
      .then((response) => response.json())
      .then((data) => {
        if (data.nsfw == false) {
          setMeme(data.url);
          console.log(data.url); // Prints the fetched meme data in the console.log statement.
        } else {
          return;
        }
      });
  };
  useEffect(() => {
    memeData();
  }, []);

  const randomMemeData = () => {
    fetch("https://meme-api.com/gimme")
      .then((response) => response.json())
      .then((data) => {
        if (data.nsfw == false) {
          setMeme(data.url);
        } else {
          return;
        }
      });
  };
  useEffect(() => {
    randomMemeData();
  }, []);

  const historyMemeData = () => {
    fetch("https://meme-api.com/gimme/historymemes")
      .then((response) => response.json())
      .then((data) => {
        if (data.nsfw == false) {

          setMeme(data.url);
        } else {
          return;
        }
      });
  };
  useEffect(() => {
    historyMemeData();
  }, []);

  const dogData = () => {
    fetch("https://api.thedogapi.com/v1/images/search")
      .then((response) => response.json())
      .then((data) => {
        let dog = data[0].url
        console.log(dog)
        setMeme(dog);
      });
  };
  useEffect(() => {
    dogData();
  }, []);

  const catData = () => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((response) => response.json())
      .then((data) => {
        let cat = data[0].url

        setMeme(cat);
      });
  };
  useEffect(() => {
    catData();
  }, []);
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between items-center"> MEMES </div>

      <div className="flex items-center justify-center">
        <img className="h-80" src={meme} />
      </div>
      <div className="mt-4 w-1/2 justify-between flex">
  {/* Wholesome Button */}
  <button className="button button-item" onClick={memeData}>
    <div className="button-inner text-sm">
      <span className="button-inner-static">Wholesome</span>
      <span className="button-inner-hover">Wholesome</span>
    </div>
    <div className="button-bg">
      <div className="button-bg-layers">
        <div className="button-bg-layer button-bg-layer-1 -purple"></div>
        <div className="button-bg-layer button-bg-layer-2 -turquoise"></div>
        <div className="button-bg-layer button-bg-layer-3 -yellow"></div>
      </div>
    </div>
  </button>

  {/* Random Button */}
  <button className="button button-item" onClick={randomMemeData}>
    <div className="button-inner text-sm">
      <span className="button-inner-static">Random</span>
      <span className="button-inner-hover">Random</span>
    </div>
    <div className="button-bg">
      <div className="button-bg-layers">
        <div className="button-bg-layer button-bg-layer-1 -purple"></div>
        <div className="button-bg-layer button-bg-layer-2 -turquoise"></div>
        <div className="button-bg-layer button-bg-layer-3 -yellow"></div>
      </div>
    </div>
  </button>

  {/* History Button */}
  <button className="button button-item" onClick={historyMemeData}>
    <div className="button-inner text-sm">
      <span className="button-inner-static">History</span>
      <span className="button-inner-hover">History</span>
    </div>
    <div className="button-bg">
      <div className="button-bg-layers">
        <div className="button-bg-layer button-bg-layer-1 -purple"></div>
        <div className="button-bg-layer button-bg-layer-2 -turquoise"></div>
        <div className="button-bg-layer button-bg-layer-3 -yellow"></div>
      </div>
    </div>
  </button>

  {/* Dog Button */}
  <button className="button button-item" onClick={dogData}>
    <div className="button-inner text-sm">
      <span className="button-inner-static">Dog</span>
      <span className="button-inner-hover">Dog</span>
    </div>
    <div className="button-bg">
      <div className="button-bg-layers">
        <div className="button-bg-layer button-bg-layer-1 -purple"></div>
        <div className="button-bg-layer button-bg-layer-2 -turquoise"></div>
        <div className="button-bg-layer button-bg-layer-3 -yellow"></div>
      </div>
    </div>
  </button>

  {/* Cat Button */}
  <button className="button button-item" onClick={catData}>
    <div className="button-inner text-sm">
      <span className="button-inner-static">Cat</span>
      <span className="button-inner-hover">Cat</span>
    </div>
    <div className="button-bg">
      <div className="button-bg-layers">
        <div className="button-bg-layer button-bg-layer-1 -purple"></div>
        <div className="button-bg-layer button-bg-layer-2 -turquoise"></div>
        <div className="button-bg-layer button-bg-layer-3 -yellow"></div>
      </div>
    </div>
  </button>
</div>

    </div>
  );
}
export default Meme;
