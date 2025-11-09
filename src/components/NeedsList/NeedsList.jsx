import { useMemo, useState } from "react";
import needsData from "../../needs.json";
import styles from "./NeedsList.module.css";
import SortableHeader from "../SortableHeader/SortableHeader";

export default function NeedsList() {
	const [search, setSearch] = useState("");
	const [sortBy, setSortBy] = useState(null); // "item" | "quantity"
	const [sortOrder, setSortOrder] = useState(null); // "asc" | "desc" | null

	const filteredNeeds = useMemo(() => {
		let filtered = needsData.filter((n) =>
			n.item.toLowerCase().includes(search.toLowerCase())
		);

		if (sortBy && sortOrder) {
			filtered.sort((a, b) => {
				if (sortBy === "quantity") {
					return sortOrder === "asc"
						? a.quantity - b.quantity
						: b.quantity - a.quantity;
				}
				if (sortBy === "item") {
					return sortOrder === "asc"
						? a.item.localeCompare(b.item)
						: b.item.localeCompare(a.item);
				}
				return 0;
			});
		}
		return filtered;
	}, [search, sortBy, sortOrder]);

	const toggleSort = (field) => {
		setSortBy((prevField) => (prevField !== field ? field : prevField));
		setSortOrder((prevOrder) => {
			if (sortBy !== field) return "asc";
			if (prevOrder === "asc") return "desc";
			if (prevOrder === "desc") return null;
			return "asc";
		});
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
						<SortableHeader
							field="item"
							label="Найменування"
							type="alpha"
							sortBy={sortBy}
							sortOrder={sortOrder}
							onToggle={toggleSort}
						/>
						<SortableHeader
							field="quantity"
							label="Кількість"
							type="numeric"
							sortBy={sortBy}
							sortOrder={sortOrder}
							onToggle={toggleSort}
						/>
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
