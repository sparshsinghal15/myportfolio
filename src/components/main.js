import React, { useState } from "react";
import Header from "./header";
import About from "./about";
import Connect from "./connect";

import { PAGE_ENUM } from "../constants/constants";

const Main = () => {
  const [page, setPage] = useState(0);

  return (
    <div>
      <Header setPage={setPage} />
      <div className="container content">
        {page === PAGE_ENUM.ABOUT ? <About /> : <Connect />}
      </div>
    </div>
  );
};

export default Main;
