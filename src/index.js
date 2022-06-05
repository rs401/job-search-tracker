import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "components/App/App";
import Home from "./pages/Home";
import NewAppForm from "components/NewAppForm/NewAppForm";
import UpdateAppForm from "components/UpdateAppForm/UpdateAppForm";
import reportWebVitals from "./reportWebVitals";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { RecoilRoot } from "recoil";

Amplify.configure(awsExports);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="/newapp" element={<NewAppForm />} />
          <Route path="/update/:id" element={<UpdateAppForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </RecoilRoot>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
