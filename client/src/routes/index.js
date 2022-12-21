import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage";

import Chatpage from "../Pages/Chatpage";

export default function Router(props) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} exact />
        <Route path="/chats" element={<Chatpage />} />
      </Routes>
    </>
  );
}
