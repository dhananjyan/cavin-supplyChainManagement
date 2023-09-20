import SearchBar from "../Home/SearchBar/SearchBar";
import cx from "classnames";

import s from "./Warehouse.module.scss";
import Table from "../Table/Table";
import { ReactSVG } from "react-svg";

import icon1 from "../../assets/svg/icon_1.svg"
import icon2 from "../../assets/svg/icon_2.svg"
import icon3 from "../../assets/svg/icon_3.svg"
import icon4 from "../../assets/svg/icon_4.svg"
import SuggestedWarehouse from "../SuggestedWarehouse/SuggestedWarehouse";
import { useState } from "react";

export default function Warehouse() {
    const [currentActiveRow, setCurrentActiveRow] = useState(null);

    const handleAccordionClick = (id) => {
        setCurrentActiveRow(id)
    }

    return (
        <div>
            <SearchBar />
            <div className={cx(s.content)}>
                <div className={cx("px-5", s.container)}>
                    <div className={s.tableContainer}>

                        <Table columns={["", "Product Hierarchy", "Product Description 1", "Product Description 2", "Excess Quantity", ""]} >
                            {/* <tr>
                            <td>
                            <ReactSVG src={icon1} />
                            </td>
                            <td>#1234567</td>
                            <td>Milkshake 1</td>
                            <td>
                                <div style={{ backgroundColor: "#F9D5D2" }} className={s.categoryItem}>C</div>
                            </td>
                            <td>{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(80000000)}</td>
                            <td>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(25)}</td>
                            <td>
                            <SuggestedWarehouse />
                            </td>
                        </tr> */}
                            <tr aria-rowspan={2}>
                                <td>
                                    <ReactSVG src={icon2} />
                                </td>
                                <td>#1234567</td>
                                <td>Dairy</td>
                                <td>Cavins</td>
                                <td>8,000</td>
                                <td>
                                    <div onClick={() => handleAccordionClick(544)} role="button">V</div>
                                </td>
                            </tr>
                            <tr>

                                <td colSpan={6}>
                                    <Table columns={["SKU ID", "Product Name", "Category", "Suggested Warehouses", "Quantity Available", ""]}>
                                        <tr>
                                            <td>#1233455645</td>
                                            <td>Cavins Milkshake 123</td>
                                            <td></td>
                                            <td>#1233455645</td>
                                            <td>#1233455645</td>
                                        </tr>
                                    </Table>
                                </td>
                            </tr>
                        </Table>
                    </div>
                </div>
            </div >
        </div >
    )
}
