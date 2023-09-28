import s from "./Table.module.scss";

export default function Table(props) {
    const { columns, children } = props;
    return (
        <div className={s.tableContainer}>
            <table className='table'>
                <thead >
                    <tr>
                        {columns?.map((item, i) => {
                            return <th width={item?.width}  key={`TABLE_HEADER_COLUMN_ITEM_${item?.label}_${i}`}>{item?.label}</th>
                        })}
                    </tr>
                </thead>
                {/* <tbody> */}
                {children}
                {/* </tbody> */}
            </table>
        </div>
    )
}
