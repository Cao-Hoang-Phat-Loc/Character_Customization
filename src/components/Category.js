import React from "react";

function Category({ Array, handleClick, path1, path2 }) {
  return (
    <>
      {/* body */}
      <div className="options">
        <h2>{path2.charAt(0).toUpperCase() + path2.slice(1)}</h2>
        <div className="imgList">
          {Array.map((item) => (
            <img
              key={item}
              src={`./assets/images/${path1}/${item}.png`}
              alt=""
              height="60"
              className="img-center"
              onClick={() => handleClick(path2, item)}
            ></img>
          ))}
        </div>
      </div>
    </>
  );
}

export default Category;
