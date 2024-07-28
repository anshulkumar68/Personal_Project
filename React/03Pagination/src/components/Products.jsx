import React, { useEffect} from "react";

const Products = ({products, setProducts, page, setPage}) => {

  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=100");
    const data = await response.json();

    if (data && data.products) 
      setProducts(data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {products.length > 0 && (
        <div className="grid grid-cols-4 gap-[20px] m-[20px]">
          {products.slice(page * 10 - 10, page * 10).map((prod) => {
            return (
              <span className="bg-gray-300 rounded-lg max-w-[100%] p-[20px] text-center h-[180px]">
                <img
                  className="max-w-[100%] h-[95%] object-cover relative left-12 cursor-pointer"
                  src={prod.images}
                  alt={prod.title}
                />
                <span>{prod.title} </span>
              </span>
            );
          })}
        </div>
      )}

    </>
  );
};

export default Products;
