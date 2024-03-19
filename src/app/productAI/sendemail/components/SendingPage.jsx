import { useEmailData } from '../../data(state)/zustand/useStore'
export default function SendingPage() {
	const emailData = useEmailData(state => state.emailData)
	console.log(emailData)
	return <div>Hello world</div>
}
