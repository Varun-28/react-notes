import { useEffect } from "react";
import axios from "axios";

function Pagination() {
  const fetchProducts = async () => {
    const response = await axios.get(
      `https://dummyjson.com/products?limit=10&skip=10`
    );
    console.log(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return <div>Pagination</div>;
}

export default Pagination;
