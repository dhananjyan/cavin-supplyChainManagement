import LeftSideBar from "./LeftSideBar/LeftSideBar";
import RightSideBar from "./RightSideBar/RightSideBar";
import s from "./StockTransfer.module.scss";
import cx from "classnames";
export default function StockTransfer() {
    return (
        <div className={s.mainContainer}>
            <div className={cx(s.sidebar, s.sideBarleft)}>
                <LeftSideBar />
            </div>
            <div className={s.main}>
            </div>
            <div className={cx(s.sidebar, s.sideBarRigth)}>
                <RightSideBar />
            </div>
        </div>
    )
}
