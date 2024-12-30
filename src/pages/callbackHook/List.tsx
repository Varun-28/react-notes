import { useState, useEffect } from "react";

type ListProps = {
  getItems: () => number[];
};

export const List = ({ getItems }: ListProps) => {
  const [items, setItems] = useState<number[]>([]);

  useEffect(() => {
    setItems(getItems());
    console.log("item changed");
  }, [getItems]);

  return (
    <>
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </>
  );
};
