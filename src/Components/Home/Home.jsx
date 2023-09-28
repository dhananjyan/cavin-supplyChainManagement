import { Suspense, lazy, useState } from "react";

const Header = lazy(() => import("../Header/Header"));

import cx from "classnames";
import s from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "./SearchBar/SearchBar";
import Warehouse from "../Warehouse/Warehouse";
import StockTransfer from "../StockTransfer/StockTransfer";
import StockLookup from "../StockLookup/StockLookup";

export default function Home() {
    const currentTab = useSelector(state => state?.dashboard?.activeTab);

    const getCurrentPage = () => {
        switch (currentTab) {
            case "dashboard":
                return "<Warehouse />";
                break;
            case "warehouse":
                return <Warehouse />;
                break;
            case "stockLookup":
                return <StockLookup />;
                break;
            case "stockTransfer":
                return <StockTransfer />;
                break;

            default:
                break;
        }
    }

    return (
        <div className={s.main}>
            <Suspense>
                <Header />
            </Suspense>
            {/* <div className="flex-grow-1"> */}
            {getCurrentPage()}
            {/* <Dashboard /> */}
            {/* <StockTransfer /> */}
            {/* <Footer /> */}
            {/* </div> */}
        </div>
    )
}
