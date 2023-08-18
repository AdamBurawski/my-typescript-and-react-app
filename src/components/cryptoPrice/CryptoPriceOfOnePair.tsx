import React, { useState, useEffect } from "react";
import { BinanceOneCryptoPairData } from "../../_types/crypto-data";

interface Props {
  onePair: BinanceOneCryptoPairData;
}

export const CryptoPriceOfOnePair = (props: Props) => (
  <p
    style={{
      backgroundColor:
        Number(props.onePair.priceChangePercent) > 0 ? "green" : "red",
    }}
  >
    {props.onePair.symbol} aktualnie jest sprzedawane za średnioważoną cenę{" "}
    {props.onePair.weightedAvgPrice}
  </p>
);
