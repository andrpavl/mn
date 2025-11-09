import { useState } from "react";
import styles from "./SendEmail.module.css";
import Modal from "../Modal/Modal";

export default function SendEmail() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleModal = () => setIsOpen((prev) => !prev);

	return (
		<>
			<button type="button" className={styles.sendBtn} onClick={toggleModal}>
				Зв’язатися з нами, щоб надіслати допомогу
			</button>

			{isOpen && <Modal onClose={toggleModal} />}
		</>
	);
}
