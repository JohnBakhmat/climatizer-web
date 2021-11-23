import { toast } from 'react-toastify'

export const successToast = (text: string, timeout: number = 5000) => {
	toast.success(text, {
		position: "top-center",
		autoClose: timeout,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});
}
export const errorToast = (text: string) => {
	toast.error(text, {
		position: "top-center",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});
}