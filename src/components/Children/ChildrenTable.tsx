import React from "react";
// import { GiftEntity } from "../../types/gifts";
import { ChildrenTableRow } from "./ChildrenTableRow";
import { ChildEntity, GiftEntity } from "types";

interface Props {
  giftsList: GiftEntity[];
  childrenList: ChildEntity[];
}

export const ChildrenTable = (props: Props) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Gift</th>
      </tr>
    </thead>
    <tbody>
      {props.childrenList.map((child) => (
        <ChildrenTableRow
          child={child}
          key={child.id}
          giftsList={props.giftsList}
          // onGiftsChange={props.onGiftsChange}
        />
      ))}
    </tbody>
  </table>
);
