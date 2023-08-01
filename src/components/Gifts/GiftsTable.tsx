import React, { useState, useEffect } from "react";
// import { GiftEntity } from "../../types/gifts";
import { GiftTableRow } from "./GiftTableRow";
import { GiftEntity } from "types";

interface Props {
  gifts: GiftEntity[];
  onGiftsChange: () => void;
}

export const GiftsTable = (props: Props) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Count</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {props.gifts.map((gift) => (
        <GiftTableRow
          gift={gift}
          key={gift.id}
          onGiftsChange={props.onGiftsChange}
        />
      ))}
    </tbody>
  </table>
);
