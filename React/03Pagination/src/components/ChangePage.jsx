import React from "react";

const ChangePage = (props) => {
  return (
    <>
      {props.products.length > 0 && (
        <div className="flex justify-center items-center py-[20px] px-[15[px]">
          <span
            className={`px-[15px] py-[5px] border-[1px] cursor-pointer ${
              props.page > 1 ? "" : "opacity-0"
            }`}
            onClick={() => props.handlePageChange(props.page - 1)}
          >
            ◀️
          </span>
          {[...Array(props.products.length / 10)].map((_, i) => {
            return (
              <span
                className={`px-[15px] py-[5px] border-[1px] cursor-pointer ${
                  props.page === i + 1 ? "bg-gray-300" : ""
                }`}
                onClick={() => props.handlePageChange(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            className={`px-[15px] py-[5px] border-[1px] cursor-pointer ${
              props.page < props.products.length / 10 ? "" : "opacity-0"
            }`}
            onClick={() => props.handlePageChange(props.page + 1)}
          >
            ▶️
          </span>
        </div>
      )}
    </>
  );
};

export default ChangePage;
