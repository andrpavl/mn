import styles from "./Modal.module.css";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Modal({ onClose }) {
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		email: "",
		message: "",
	});
	const [status, setStatus] = useState(null);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setStatus("loading");

		const dataWithTime = {
			...formData,
			time: new Date().toLocaleString(),
		};

		emailjs
			.send(
				"service_hljgz3k",
				"template_u4uynlb",
				dataWithTime,
				"hEms96BoQ_ON3xSQQ"
			)
			.then(() => {
				setStatus("success");
				setFormData({ name: "", phone: "", email: "", message: "" });
				setTimeout(() => {
					setStatus(null);
					onClose?.();
				}, 1500);
			})
			.catch((err) => {
				console.error("Email error:", err);
				setStatus("error");
			});
	};

	const handleOverlayClick = (e) => {
		if (e.target === e.currentTarget) {
			onClose?.();
		}
	};

	return (
		<div className={styles.overlay} onClick={handleOverlayClick}>
			<div className={styles.modal}>
				<button className={styles.close} onClick={onClose}>
					×
				</button>
				<form className={styles.form} onSubmit={handleSubmit}>
					<h2 className={styles.formTitle}>
						Надішліть нам повідомлення — і ми з вами зв’яжемось 💬
					</h2>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						placeholder="Ім’я"
					/>
					<input
						type="tel"
						id="phone"
						name="phone"
						value={formData.phone}
						onChange={handleChange}
						placeholder="Номер телефону"
					/>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="Електронна пошта"
						required
					/>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
						placeholder="Введіть ваше повідомлення..."
						required
					/>
					<button type="submit">
						{status === "loading"
							? "Відправляємо..."
							: status === "success"
							? "✅ Надіслано!"
							: "📨 Відправити повідомлення"}
					</button>
					{status === "error" && (
						<p className={styles.errorMsg}>
							❌ Помилка! Перевірте підключення або налаштування EmailJS.
						</p>
					)}
				</form>
			</div>
		</div>
	);
}
