import NeedsList from "../components/NeedsList/NeedsList";
import SendEmail from "../components/SendEmail/SendEmail";

export default function HomePage() {
	return (
		<div>
			<SendEmail />
			<NeedsList />
		</div>
	);
}
