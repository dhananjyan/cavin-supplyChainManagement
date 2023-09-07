import cx from "classnames";
import s from "./style.module.scss";
import { ReactSVG } from "react-svg";

import questionSvg from "../../assets/svg/question.svg"
import bellNotifySvg from "../../assets/svg/bellNotify.svg"
import avatarSvg from "../../assets/svg/avatar.svg"
import { useDispatch, useSelector } from "react-redux";
import { updateActiveTab } from "../../redux/reducers/dashboardSlice";


export default function Header() {
    const dispatch = useDispatch();
    const activeTab = useSelector(state => state?.dashboard?.activeTab)
    const hanldeTabClick = (tab) => {
        dispatch(updateActiveTab(tab));
    }
    return (
        <div>
            <div className={cx(s.header)}>
                <div className={cx(s.container, "d-flex px-5")}>
                    <img className={s.logoImg} height={50} src="/Logo.png" />
                    <div className={cx(s.headerText)}>
                        <ul className={cx(s.headerList, s.menu)}>
                            <li
                                role="button"
                                onClick={() => hanldeTabClick("dashboard")}
                                className={cx({ [s.active]: activeTab === "dashboard" })}
                            >
                                Dashboard
                            </li>
                            <li
                                role="button"
                                onClick={() => hanldeTabClick("warehouse")}
                                className={cx({ [s.active]: activeTab === "warehouse" })}
                            >
                                My Warehouse
                            </li>
                            <li
                                role="button"
                                onClick={() => hanldeTabClick("stockLookup")}
                                className={cx({ [s.active]: activeTab === "stockLookup" })}
                            >
                                Stock Lookup
                            </li>
                            <li
                                role="button"
                                onClick={() => hanldeTabClick("stockTransfer")}
                                className={cx({ [s.active]: activeTab === "stockTransfer" })}
                            >
                                Stock Transfer
                            </li>
                        </ul>
                    </div>
                    <div className={cx(s.rightText)}>
                        <ul className={cx(s.headerList)}>
                            <li>
                                <ReactSVG src={questionSvg} />
                            </li>
                            <li>
                                <ReactSVG src={bellNotifySvg} />
                            </li>
                            <li>
                                <ReactSVG src={avatarSvg} />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
