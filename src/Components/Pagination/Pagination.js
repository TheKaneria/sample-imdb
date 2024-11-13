import React from "react";
import { Pagination, PaginationItem } from "@mui/material";
import "./pagination.css";

const CustomPagination = ({ setPage, numOfPages }) => {
  const handlePageChange = (page) => {
    setPage(page);
  };
  return (
    <div className="container d-flex justify-content-center align-items-center ">
      <div className="row p-3 rounded-3 pgbg">
        <div className="col-12">
          <Pagination
            color="secondary"
            count={numOfPages}
            defaultPage={1}
            hideNextButton
            hidePrevButton
            onChange={(e) => handlePageChange(e.target.textContent)}
            className="d-flex justify-content-center "
          >
            {[...Array(numOfPages)].map((_, index) => (
              <PaginationItem
                key={index + 1}
                active={index + 1 === setPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </PaginationItem>
            ))}
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default CustomPagination;
