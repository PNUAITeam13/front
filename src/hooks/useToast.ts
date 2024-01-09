import toast, {ToastOptions} from "react-hot-toast";
import {useMessageStore} from "../store/store";


const useToast = () => {
    const addMessage = useMessageStore(state => state.addMessage);
    const successToast = (title: string, additionalText?: string, options?: ToastOptions) => {
        const message = {
            id: Math.random() + title,
            additionalMessage: additionalText ?? '',
        }
        addMessage(message)
        toast.success(title, {...options, id: message.id})
    }
    const errorToast = (title: string, additionalText?: string, options?: ToastOptions) => {
        const message = {
            id: Math.random() + title,
            additionalMessage: additionalText  ?? '',
        }
        addMessage(message)
        toast.error(title, {...options, id: message.id})
    }
    const warningToast = (title: string, additionalText?: string, options?: ToastOptions) => {
        const message = {
            id: Math.random() + title,
            additionalMessage: additionalText ?? '',
        }
        addMessage(message)
        toast(title, {
            ...options,
            id: message.id,
            className: 'toast-warning',
        })
    }
    const infoToast = (title: string, additionalText?: string, options?: ToastOptions) => {
        const message = {
            id: Math.random() + title,
            additionalMessage: additionalText ?? '',
        }
        addMessage(message)
        toast(title, {
            ...options,
            id: message.id,
            className: 'toast-info'
        })
    }


    return {
        successToast: successToast,
        errorToast: errorToast,
        warningToast: warningToast,
        infoToast: infoToast,
    }
}

export default useToast