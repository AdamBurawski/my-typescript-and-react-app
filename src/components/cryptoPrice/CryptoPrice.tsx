import React, { useState, useEffect } from "react";
import { BinanceOneCryptoPairData } from "../../types/crypto-data";
import { CryptoPriceOfOnePair } from "./CryptoPriceOfOnePair";

export const CryptoPrice = () => {
  const [data, setData] = useState<BinanceOneCryptoPairData[] | null>(null);
  const [pair, setPair] = useState<string>("");

  useEffect(() => {
    (async () => {
      const res = await fetch("https://api2.binance.com/api/v3/ticker/24hr");
      setData(await res.json());
    })();
  }, []);

  if (data === null) {
    return <p>Wczytywanie danych...</p>;
  }

  return (
    <>
      <label>
        Wybierz parę kryptowalutową: <br />
        <select
          name=""
          id=""
          value={pair}
          onChange={(e) => setPair(e.target.value)}
        >
          {data.map((pair) => (
            <option value={pair.symbol} key={pair.symbol}>
              {pair.symbol}
            </option>
          ))}
        </select>
      </label>
      {pair && (
        <CryptoPriceOfOnePair
          onePair={
            data.find((one) => one.symbol === pair) as BinanceOneCryptoPairData
          }
        />
      )}
    </>
  );
};
