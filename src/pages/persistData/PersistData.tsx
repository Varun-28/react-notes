import React, { useEffect, useState } from "react";
import uuid from "react-uuid";

interface WishInterface {
    id: string;
    wish: string;
}

export const PersistData = () => {
  const [wishText, setWishText] = useState<string>("");
  const [wishList, setWishList] = useState<WishInterface[]>(
    JSON.parse(localStorage.getItem("wishListArray") || "[]")
  );

  // object[] is not a type, whenever we need to do this use either interface or type

  useEffect(() => {
    localStorage.setItem("wishListArray", JSON.stringify(wishList));
    const myArr = JSON.parse(localStorage.getItem("wishListArray") || "[]");
    console.log(myArr[myArr.length - 1]?.wish);
  }, [wishList]);

  const handleWishAdd = () => {
    setWishList((wishList) => wishList.concat({ id: uuid(), wish: wishText }));
    setWishText("");
  };

  const handleWishInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    setWishText(event.target.value);

  return (
    <div>
      <input
        onChange={handleWishInput}
        value={wishText}
        placeholder={"I wish..."}
      />
      <button onClick={handleWishAdd}>Add </button>
      <ul>
        {wishList.map(({ id, wish }) => (
          <li key={id}> {wish} </li>
        ))}
      </ul>
    </div>
  );
};
