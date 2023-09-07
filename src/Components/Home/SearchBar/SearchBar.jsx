import s from "./SearchBar.module.scss";
import cx from "classnames"
export default function SearchBar() {
    return (
        <div className={cx(s.container)}>
            <div className="d-flex justify-content-center">
                <div className={s.searchContainer}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="6" stroke="#28292D" />
                        <path d="M11 8C10.606 8 10.2159 8.0776 9.85195 8.22836C9.48797 8.37913 9.15726 8.6001 8.87868 8.87868C8.6001 9.15726 8.37913 9.48797 8.22836 9.85195C8.0776 10.2159 8 10.606 8 11" stroke="#28292D" stroke-linecap="round" />
                        <path d="M20 20L17 17" stroke="#28292D" stroke-linecap="round" />
                    </svg>
                    <input className={s.searchInput} placeholder="Search Product Name, SKU" />
                </div>
            </div >
        </div>
    )
}
