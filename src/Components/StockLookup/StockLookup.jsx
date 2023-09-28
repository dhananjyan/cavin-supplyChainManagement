import SearchBar from "../Home/SearchBar/SearchBar";
import cx from "classnames";

import s from "./StockLookup.module.scss";
import Table from "../Table/Table";
import { ReactSVG } from "react-svg";

import icon1 from "../../assets/svg/icon_1.svg"
import icon2 from "../../assets/svg/icon_2.svg"
import icon3 from "../../assets/svg/icon_3.svg"
import downArrow from "../../assets/svg/downArrow.svg"
import rightArrow from "../../assets/svg/rightArrow.svg"
import SuggestedWarehouse from "../SuggestedWarehouse/SuggestedWarehouse";
import { useState } from "react";

export default function StockLookup() {
    const [currentActiveRow, setCurrentActiveRow] = useState([]);

    const handleAccordionClick = (id) => {
        setCurrentActiveRow(id)
    }

    const updateActiveRow = v => {
        setCurrentActiveRow(list => {
            if (list.includes(v))
                return list.filter(i => i !== v)

            return [...list, v]
        })
    }

    return (
        <div>
            <SearchBar />
            <div className={cx(s.content)}>
                <div className={cx("px-5", s.container)}>
                    <div>
                        {/* <Sele */}
                    </div>
                    <div className={s.tableContainer}>

                        <Table
                            columns={[
                                { label: "", width: 70 },
                                { label: "Product Hierarchy", width: 200 },
                                { label: "Product Description 1", width: 200 },
                                { label: "Product Description 2", width: 200 },
                                { label: "Excess Quantity", width: 200 },
                                { label: "" }
                            ]}

                        >
                            <tr>
                                <td colSpan={6}>

                                    <table className={cx("table", s.row)}>

                                        <tbody>
                                            <tr>
                                                <td width={70}>
                                                    <ReactSVG src={icon2} />
                                                </td>
                                                <td width={200}>#1234567</td>
                                                <td width={200}>Dairy</td>
                                                <td width={200}>Cavins</td>
                                                <td width={200}>8,000</td>
                                                <td>
                                                    <div role="button" className="text-end pe-2">
                                                        <ReactSVG src={downArrow} onClick={() => updateActiveRow(1)} />
                                                    </div>
                                                </td>
                                            </tr>
                                            {currentActiveRow?.includes(1) ? <tr>
                                                <td colSpan={6}>
                                                    <Table columns={[
                                                        { label: "SKU ID", width: "" },
                                                        { label: "Product Name", width: "" },
                                                        { label: "Category" },
                                                        { label: "Suggested Warehouses" },
                                                        { label: "Quantity Available" },
                                                        { label: "" }]}>
                                                        <tbody>
                                                            <tr>
                                                                <td>#1233455645</td>
                                                                <td>Cavins Milkshake 123</td>
                                                                <td>
                                                                    <div className={s.label}>C</div>
                                                                </td>
                                                                <td><SuggestedWarehouse /></td>
                                                                <td>4000</td>
                                                                <td className="d-flex justify-content-end">
                                                                    <a className="d-flex gap-2" href="/">Send Request <ReactSVG src={rightArrow} /> </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>#1233455645</td>
                                                                <td>Cavins Milkshake 123</td>
                                                                <td>
                                                                    <div className={s.label}>C</div>
                                                                </td>
                                                                <td><SuggestedWarehouse /></td>
                                                                <td>4000</td>
                                                                <td className="d-flex justify-content-end">
                                                                    <a className="d-flex gap-2" href="/">Send Request <ReactSVG src={rightArrow} /> </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>#1233455645</td>
                                                                <td>Cavins Milkshake 123</td>
                                                                <td>
                                                                    <div className={s.label}>C</div>
                                                                </td>
                                                                <td><SuggestedWarehouse /></td>
                                                                <td>4000</td>
                                                                <td className="d-flex justify-content-end">
                                                                    <a className="d-flex gap-2" href="/">Send Request <ReactSVG src={rightArrow} /> </a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </td>
                                            </tr> : ""}
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={6}>

                                    <table className={cx("table", s.row)}>

                                        <tbody>
                                            <tr>
                                                <td width={70}>
                                                    <ReactSVG src={icon2} />
                                                </td>
                                                <td width={200}>#1234567</td>
                                                <td width={200}>Dairy</td>
                                                <td width={200}>Cavins</td>
                                                <td width={200}>8,000</td>
                                                <td>
                                                    <div role="button" className="text-end pe-2">
                                                        <ReactSVG src={downArrow} onClick={() => updateActiveRow(2)} />
                                                    </div>
                                                </td>
                                            </tr>
                                            {currentActiveRow?.includes(2) ? <tr>
                                                <td colSpan={6}>
                                                    <Table columns={[
                                                        { label: "SKU ID", width: "" },
                                                        { label: "Product Name", width: "" },
                                                        { label: "Category" },
                                                        { label: "Suggested Warehouses" },
                                                        { label: "Quantity Available" },
                                                        { label: "" }]}>
                                                        <tbody>
                                                            <tr>
                                                                <td>#1233455645</td>
                                                                <td>Cavins Milkshake 123</td>
                                                                <td>
                                                                    <div className={s.label}>C</div>
                                                                </td>
                                                                <td><SuggestedWarehouse /></td>
                                                                <td>4000</td>
                                                                <td className="d-flex justify-content-end">
                                                                    <a className="d-flex gap-2" href="/">Send Request <ReactSVG src={rightArrow} /> </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>#1233455645</td>
                                                                <td>Cavins Milkshake 123</td>
                                                                <td>
                                                                    <div className={s.label}>C</div>
                                                                </td>
                                                                <td><SuggestedWarehouse /></td>
                                                                <td>4000</td>
                                                                <td className="d-flex justify-content-end">
                                                                    <a className="d-flex gap-2" href="/">Send Request <ReactSVG src={rightArrow} /> </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>#1233455645</td>
                                                                <td>Cavins Milkshake 123</td>
                                                                <td>
                                                                    <div className={s.label}>C</div>
                                                                </td>
                                                                <td><SuggestedWarehouse /></td>
                                                                <td>4000</td>
                                                                <td className="d-flex justify-content-end">
                                                                    <a className="d-flex gap-2" href="/">Send Request <ReactSVG src={rightArrow} /> </a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </td>
                                            </tr> : ""}
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={6}>

                                    <table className={cx("table", s.row)}>

                                        <tbody>
                                            <tr>
                                                <td width={70}>
                                                    <ReactSVG src={icon2} />
                                                </td>
                                                <td width={200}>#1234567</td>
                                                <td width={200}>Dairy</td>
                                                <td width={200}>Cavins</td>
                                                <td width={200}>8,000</td>
                                                <td>
                                                    <div role="button" className="text-end pe-2">
                                                        <ReactSVG src={downArrow} onClick={() => updateActiveRow(3)} />
                                                    </div>
                                                </td>
                                            </tr>
                                            {currentActiveRow?.includes(3) ? <tr>
                                                <td colSpan={6}>
                                                    <Table columns={[
                                                        { label: "SKU ID", width: "" },
                                                        { label: "Product Name", width: "" },
                                                        { label: "Category" },
                                                        { label: "Suggested Warehouses" },
                                                        { label: "Quantity Available" },
                                                        { label: "" }]}>
                                                        <tbody>
                                                            <tr>
                                                                <td>#1233455645</td>
                                                                <td>Cavins Milkshake 123</td>
                                                                <td>
                                                                    <div className={s.label}>C</div>
                                                                </td>
                                                                <td><SuggestedWarehouse /></td>
                                                                <td>4000</td>
                                                                <td className="d-flex justify-content-end">
                                                                    <a className="d-flex gap-2" href="/">Send Request <ReactSVG src={rightArrow} /> </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>#1233455645</td>
                                                                <td>Cavins Milkshake 123</td>
                                                                <td>
                                                                    <div className={s.label}>C</div>
                                                                </td>
                                                                <td><SuggestedWarehouse /></td>
                                                                <td>4000</td>
                                                                <td className="d-flex justify-content-end">
                                                                    <a className="d-flex gap-2" href="/">Send Request <ReactSVG src={rightArrow} /> </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>#1233455645</td>
                                                                <td>Cavins Milkshake 123</td>
                                                                <td>
                                                                    <div className={s.label}>C</div>
                                                                </td>
                                                                <td><SuggestedWarehouse /></td>
                                                                <td>4000</td>
                                                                <td className="d-flex justify-content-end">
                                                                    <a className="d-flex gap-2" href="/">Send Request <ReactSVG src={rightArrow} /> </a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </td>
                                            </tr> : ""}
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </Table>
                    </div>
                </div>
            </div >
        </div >
    )
}
