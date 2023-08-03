import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { CryptoPrice } from "./components/CryptoPrice/CryptoPrice";

import { Dialog } from "./components/common/Dialog/Dialog";
import { GiftsList } from "./components/Gifts/GiftsList";
import { GiftsView } from "./views/GiftsView";
import { SingleGiftView } from "./views/SingleGiftView";

import { Route, Routes } from "react-router-dom";
import { ChildView } from "./views/ChildView";
import { Link } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { NotFoundView } from "./views/NotFoundView";

export const App = () => {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <Dialog title="xyz">
    //       <h1>
    //         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
    //         consequuntur quo nobis quidem suscipit iste officiis commodi, quia
    //         nesciunt fuga minus in nemo vitae consequatur, distinctio beatae
    //         optio amet deserunt?
    //       </h1>
    //     </Dialog>
    //   </header>
    // </div>
    <>
      <Header />
      <Routes>
        <Route path="/gift" element={<GiftsView />} />
        <Route path="/gift/:idOfGift" element={<SingleGiftView />} />
        <Route path="/child" element={<ChildView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </>
  );
};
