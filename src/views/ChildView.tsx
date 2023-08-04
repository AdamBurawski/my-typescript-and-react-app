import { log } from "console";
import React from "react";
import { useParams } from "react-router-dom";
import { AddChild } from "../components/AddChild/AddChild";
import { ChildrenList } from "../components/Children/ChildrenList";

export const ChildView = () => {
  return (
    <>
      <ChildrenList />
      <AddChild />
    </>
  );
};
