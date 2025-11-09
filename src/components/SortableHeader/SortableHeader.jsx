import { BsSortNumericDown, BsSortNumericUpAlt } from "react-icons/bs";
import { FaSortAlphaDown, FaSortAlphaUpAlt } from "react-icons/fa";
import { GrSort } from "react-icons/gr";
import styles from "./SortableHeader.module.css";

function SortableHeader({ field, label, sortBy, sortOrder, onToggle, type }) {
	const getIcon = () => {
		if (sortBy !== field) return <GrSort size={18} />;
		if (sortOrder === "asc") {
			return type === "alpha" ? (
				<FaSortAlphaDown size={18} />
			) : (
				<BsSortNumericUpAlt size={18} />
			);
		}
		if (sortOrder === "desc") {
			return type === "alpha" ? (
				<FaSortAlphaUpAlt size={18} />
			) : (
				<BsSortNumericDown size={18} />
			);
		}
		return <GrSort size={18} />;
	};

	return (
		<th
			onClick={() => onToggle(field)}
			className={styles.sortableHeader}
			title={`Сортувати за ${label.toLowerCase()}`}>
			<span
				className={`${styles.headerCell} ${
					type === "alpha" ? styles.alignLeft : styles.alignRight
				}`}>
				{label} {getIcon()}
			</span>
		</th>
	);
}

export default SortableHeader;