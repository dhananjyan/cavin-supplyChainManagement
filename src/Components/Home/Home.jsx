import { Suspense, lazy, useState } from "react";

const Header = lazy(() => import("../Header/Header"));

import cx from "classnames";
import s from "./style.module.scss";
import { useDispatch } from "react-redux";
import SearchBar from "./SearchBar/SearchBar";
import Dashboard from "../Dashboard/Dashboard";
import StockTransfer from "../StockTransfer/StockTransfer";


export default function Home() {
    return (
        <div className={s.main}>
            <Suspense>
                <Header />
            </Suspense>
            {/* <div className="flex-grow-1"> */}

                {/* <Dashboard /> */}
                <StockTransfer />
                {/* <Footer /> */}
            {/* </div> */}
        </div>
    )
}
