import { useState, useMemo } from "react";
import needsData from "../../needs.json";
import styles from "./NeedsList.module.css";
import { BsSortNumericDown } from "react-icons/bs";
import { BsSortNumericUpAlt } from "react-icons/bs";
import { GrSort } from "react-icons/gr";

function NeedsList() {
	const [needs, setNeeds] = useState(needsData);
	const [search, setSearch] = useState("");
	const [sortOrder, setSortOrder] = useState(null); // null | "asc" | "desc"

	const filteredNeeds = useMemo(() => {
		let filtered = needs.filter((n) =>
			n.item.toLowerCase().includes(search.toLowerCase())
		);

		if (sortOrder === "asc") {
			filtered.sort((a, b) => a.quantity - b.quantity);
		} else if (sortOrder === "desc") {
			filtered.sort((a, b) => b.quantity - a.quantity);
		}

		return filtered;
	}, [needs, search, sortOrder]);

	const toggleSort = () => {
		setSortOrder((prev) =>
			prev === "asc" ? "desc" : prev === "desc" ? null : "asc"
		);
	};

	return (
		<div className={styles.tableContainer}>
			<div className={styles.controls}>
				<label>
					Пошук по назві:
					<input
						type="text"
						placeholder="Type to search..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						className={styles.searchInput}
					/>
				</label>
			</div>

			<table className={styles.table}>
				<thead>
					<tr>
						<th>#</th>
						<th>Найменування</th>
						<th
							onClick={toggleSort}
							className={styles.sortable}
							title="Натисни, щоб сортувати">
							Кількість{" "}
							{sortOrder === "asc" ? (
								<BsSortNumericUpAlt size={20} />
							) : sortOrder === "desc" ? (
								<BsSortNumericDown size={20} />
							) : (
								<GrSort size={20} />
							)}
						</th>
					</tr>
				</thead>
				<tbody>
					{filteredNeeds.length > 0 ? (
						filteredNeeds.map((need, index) => (
							<tr key={index}>
								<td>{index + 1}</td>
								<td>{need.item}</td>
								<td>{need.quantity}</td>
							</tr>
						))
					) : (
						<tr>
							<td colSpan="3" style={{ textAlign: "center", padding: "10px" }}>
								Нічого не знайдено 😔
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
}

export default NeedsList;
