import React, { useEffect, useState } from "react";
import "./App.css";
import CategoryList from "./components/CategoryList";

function App() {
  // const bodylist = [1, 2, 3, 4, 5];
  //   const [body, setBody] = useState(second);
  const imgAccessoriesArray = [
    { earrings: Array.from({ length: 32 }, (v, i) => i + 1) },
    { glasses: Array.from({ length: 17 }, (v, i) => i + 1) },
    { hats: Array.from({ length: 28 }, (v, i) => i + 1) },
    { neckwear: Array.from({ length: 18 }, (v, i) => i + 1) },
  ];
  const imgBodyArray = Array.from({ length: 17 }, (v, i) => i + 1);
  const imgClothessArray = [
    { layer_1: Array.from({ length: 5 }, (v, i) => i + 1) },
    { layer_2: Array.from({ length: 5 }, (v, i) => i + 1) },
    { layer_3: Array.from({ length: 9 }, (v, i) => i + 1) },
  ];
  // const imgEyebrowsArray = Array.from({ length: 15 }, (v, i) => i + 1);
  const imgEyesArray = Array.from({ length: 24 }, (v, i) => i + 1);
  // const imgFacialHairArray = Array.from({ length: 17 }, (v, i) => i + 1);
  const imgHairArray = Array.from({ length: 73 }, (v, i) => i + 1);
  const imgMouthsArray = Array.from({ length: 24 }, (v, i) => i + 1);
  const imgNosesArray = Array.from({ length: 1 }, (v, i) => i + 1);

  const [glassesSelect, setGlassesSelect] = useState(1);
  const [earringsSelect, setEarringsSelect] = useState(1);
  const [hatsSelect, setHatsSelect] = useState(1);
  const [neckwearSelect, setNeckwearSelect] = useState(1);

  const [bodySelect, setBodySelect] = useState(1);
  const [clothes1Select, setClothes1Select] = useState(1);
  const [clothes2Select, setClothes2Select] = useState(1);
  const [clothes3Select, setClothes3Select] = useState(1);
  // const [eyebrowsSelect, setEyebrowsSelect] = useState(1);
  const [eyeSelect, setEyeSelect] = useState(1);
  // const [facialHairSelect, setFacialHairSelect] = useState(1);
  const [hairSelect, setHairSelect] = useState(1);
  const [mouthsSelect, setMouthsSelect] = useState(1);
  const [nosesSelect, setNosesSelect] = useState(1);

  const handleClick = (category, item) => {
    switch (category) {
      case "body":
        setBodySelect(item);
        break;
      case "clothes1":
        setClothes1Select(item);
        break;
      case "clothes2":
        setClothes2Select(item);
        break;
      case "clothes3":
        setClothes3Select(item);
        break;
      case "mouths":
        setMouthsSelect(item);
        break;
      case "nose":
        setNosesSelect(item);
        break;
      case "eyes":
        setEyeSelect(item);
        break;
      case "glasses":
        setGlassesSelect(item);
        break;
      case "earrings":
        setEarringsSelect(item);
        break;
      case "hats":
        setHatsSelect(item);
        break;
      case "neckwear":
        setNeckwearSelect(item);
        break;
      case "hair":
        setHairSelect(item);
        break;
      default:
        break;
    }
  };
  const handleRandomClick = () => {
    setBodySelect(Math.floor(Math.random() * imgBodyArray.length) + 1);
    setClothes1Select(
      Math.floor(Math.random() * imgClothessArray[0].layer_1.length) + 1
    );
    setClothes2Select(
      Math.floor(Math.random() * imgClothessArray[1].layer_2.length) + 1
    );
    setClothes3Select(
      Math.floor(Math.random() * imgClothessArray[2].layer_3.length) + 1
    );
    setMouthsSelect(Math.floor(Math.random() * imgMouthsArray.length) + 1);
    // setNosesSelect(Math.floor(Math.random() * imgNosesArray.length));
    setEyeSelect(Math.floor(Math.random() * imgEyesArray.length) + 1);
    setGlassesSelect(
      Math.floor(Math.random() * imgAccessoriesArray[1].glasses.length) + 1
    );
    setEarringsSelect(
      Math.floor(Math.random() * imgAccessoriesArray[0].earrings.length) + 1
    );
    setHatsSelect(
      Math.floor(Math.random() * imgAccessoriesArray[2].hats.length) + 1
    );
    setNeckwearSelect(
      Math.floor(Math.random() * imgAccessoriesArray[3].neckwear.length) + 1
    );
    setHairSelect(Math.floor(Math.random() * imgHairArray.length) + 1);
  };
  useEffect(() => {
    handleRandomClick();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Character</h1>
        <h1>Customization</h1>
      </header>

      <div className="customization">
        <div className="avtGroup">
          <div className="character">
            <div className="avt">
              {/* body */}
              <img
                src={"./assets/images/body/" + bodySelect + ".png"}
                alt=""
                width="290"
                height="300"
                z-index="0"
                className="imgAvt"
              ></img>
              {/* clothes 1*/}
              <img
                src={
                  "./assets/images/clothes/layer_1/" + clothes1Select + ".png"
                }
                alt=""
                width="290"
                height="300"
                z-index="1"
                className="imgAvt"
              ></img>
              {/* clothes 2*/}
              <img
                src={
                  "./assets/images/clothes/layer_2/" + clothes2Select + ".png"
                }
                alt=""
                width="290"
                height="300"
                z-index="1"
                className="imgAvt"
              ></img>
              {/* clothes 3*/}
              <img
                src={
                  "./assets/images/clothes/layer_3/" + clothes3Select + ".png"
                }
                alt=""
                width="290"
                height="300"
                z-index="1"
                className="imgAvt"
              ></img>

              {/* mouse */}
              <img
                src={"./assets/images/mouths/" + mouthsSelect + ".png"}
                alt=""
                width="290"
                height="300"
                z-index="2"
                className="imgAvt"
              ></img>
              {/* noses */}
              <img
                src={"./assets/images/noses/" + nosesSelect + ".png"}
                alt=""
                width="290"
                height="300"
                z-index="2"
                className="imgAvt"
              ></img>
              {/* eyes */}
              <img
                src={"./assets/images/eyes/" + eyeSelect + ".png"}
                alt=""
                width="290"
                height="300"
                z-index="2"
                className="imgAvt"
              ></img>
              {/* glasses */}
              <img
                src={
                  "./assets/images/accessories/glasses/" +
                  glassesSelect +
                  ".png"
                }
                alt=""
                width="290"
                height="300"
                z-index="3"
                className="imgAvt"
              ></img>
              {/* earrings */}
              <img
                src={
                  "./assets/images/accessories/earrings/" +
                  earringsSelect +
                  ".png"
                }
                alt=""
                width="290"
                height="300"
                z-index="3"
                className="imgAvt"
              ></img>

              {/* neckwear */}
              <img
                src={
                  "./assets/images/accessories/neckwear/" +
                  neckwearSelect +
                  ".png"
                }
                alt=""
                width="290"
                height="300"
                z-index="3"
                className="imgAvt"
              ></img>
              {/* hair */}
              <img
                src={"./assets/images/hair/" + hairSelect + ".png"}
                alt=""
                width="290"
                height="300"
                z-index="4"
                className="imgAvt"
              ></img>
              {/* hats */}
              <img
                src={"./assets/images/accessories/hats/" + hatsSelect + ".png"}
                alt=""
                width="290"
                height="300"
                z-index="4"
                className="imgAvt"
              ></img>
            </div>
            <button className="randomBtn" onClick={handleRandomClick}>
              Randomize
            </button>
          </div>
        </div>

        <CategoryList
          imgAccessoriesArray={imgAccessoriesArray}
          imgBodyArray={imgBodyArray}
          imgClothessArray={imgClothessArray}
          imgEyesArray={imgEyesArray}
          imgHairArray={imgHairArray}
          imgMouthsArray={imgMouthsArray}
          imgNosesArray={imgNosesArray}
          handleClick={handleClick}
        />

        {/* <div className="optionList">
          <div className="options">
            <h2>Body</h2>
            <div className="imgList">
              {imgAccessoriesArray[0].earrings.map((item) => (
                <img
                  key={item}
                  src={`./assets/images/accessories/earrings/${item}.png`}
                  alt=""
                  height="60"
                  className="img-center"
                  onClick={() => handleClick("earrings", item)}
                ></img>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
