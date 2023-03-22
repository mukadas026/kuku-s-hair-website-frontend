import * as React from "react";
import { BounceLoader } from "react-spinners";

const DataLoader = () => {
  return (
    <React.Fragment>
      <div className={"flex justify-center items-center"}>
        <BounceLoader size={40} color={"#f11f1f"} />
      </div>
    </React.Fragment>
  );
};

export default DataLoader;