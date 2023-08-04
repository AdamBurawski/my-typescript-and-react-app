import React, { useState, useEffect } from "react";
// import { GiftEntity } from "../../types/gifts";
import { ChildrenTable } from "./ChildrenTable";
import { Spinner } from "../common/Spinner/Spinner";
import { ListChildrenRes } from "types";

export const ChildrenList = () => {
  const [data, setData] = useState<ListChildrenRes | null>(null);

  const refreshGifts = async () => {
    setData(null);
    const res = await fetch("http://localhost:3001/child");
    setData(await res.json());
  };

  useEffect(() => {
    refreshGifts();
  }, []);

  if (data === null) {
    return (
      <div style={{ margin: "30px", textAlign: "center" }}>
        {" "}
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <h1>Children</h1>
      <ChildrenTable
        childrenList={data.childrenList}
        giftsList={data.giftsList}
      />
    </>
  );
};
