import React from "react";
import Category from "./Category";

function CategoryList({
  imgAccessoriesArray,
  imgBodyArray,
  imgClothessArray,
  imgEyesArray,
  imgHairArray,
  imgMouthsArray,
  imgNosesArray,
  handleClick,
}) {
  return (
    <div className="optionList">
      <Category
        Array={imgBodyArray}
        handleClick={handleClick}
        path1={"body"}
        path2={"body"}
      />

      <Category
        Array={imgClothessArray[0].layer_1}
        handleClick={handleClick}
        path1={"clothes/layer_1"}
        path2={"clothes1"}
      />
      <Category
        Array={imgClothessArray[1].layer_2}
        handleClick={handleClick}
        path1={"clothes/layer_2"}
        path2={"clothes2"}
      />
      <Category
        Array={imgClothessArray[2].layer_3}
        handleClick={handleClick}
        path1={"clothes/layer_3"}
        path2={"clothes3"}
      />

      <Category
        Array={imgHairArray}
        handleClick={handleClick}
        path1={"hair"}
        path2={"hair"}
      />
      <Category
        Array={imgMouthsArray}
        handleClick={handleClick}
        path1={"mouths"}
        path2={"mouths"}
      />
      <Category
        Array={imgNosesArray}
        handleClick={handleClick}
        path1={"noses"}
        path2={"nose"}
      />
      <Category
        Array={imgEyesArray}
        handleClick={handleClick}
        path1={"eyes"}
        path2={"eyes"}
      />
      <Category
        Array={imgAccessoriesArray[1].glasses}
        handleClick={handleClick}
        path1={"accessories/glasses"}
        path2={"glasses"}
      />
      <Category
        Array={imgAccessoriesArray[0].earrings}
        handleClick={handleClick}
        path1={"accessories/earrings"}
        path2={"earrings"}
      />
      <Category
        Array={imgAccessoriesArray[2].hats}
        handleClick={handleClick}
        path1={"accessories/hats"}
        path2={"hats"}
      />
      <Category
        Array={imgAccessoriesArray[3].neckwear}
        handleClick={handleClick}
        path1={"accessories/neckwear"}
        path2={"neckwear"}
      />
    </div>
  );
}

export default CategoryList;
