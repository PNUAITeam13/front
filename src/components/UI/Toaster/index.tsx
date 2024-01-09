import React from "react";


import { LinearProgress} from "@mui/material";

import {ToastBar, Toaster} from "react-hot-toast";

import './style.css'
import {useMessageStore} from "../../../store/store";
// import {InfoSvg, WarningSvg} from "../../../assets/svgs/toast";

const CustomToaster = () => {
    const messages = useMessageStore(state => state.data);
    const removeMessage = useMessageStore(state => state.removeMessage);

    return <Toaster
        position="top-left"
        reverseOrder={false}
        gutter={8}
        containerClassName='toast-container'
        toastOptions={{
            duration: 5000,
            success: {
                iconTheme: {
                    primary: '#00DF80',
                    secondary: '#303746',
                },
            },
            error: {
                iconTheme: {
                    primary: '#F04248',
                    secondary: '#303746',
                },
            },
        }}
    >
        {(t) => {
            setTimeout(() => { removeMessage(t.id) }, 5000)
            return (
                <ToastBar toast={t}>
                    {({icon, message}) => (
                        <div className={`toast-root toast-${t.type}`}>
                            {icon}
                            {/*{t?.className?.includes('warning') && <WarningSvg />}*/}
                            {/*{t?.className?.includes('info') && <InfoSvg />}*/}
                            <div>
                                <h3 className='toast-title'>{message}</h3>
                                <span className='toast-additional_text'>
                                    {messages.find(el => el.id === t.id)?.additionalMessage ?? ''}
                                </span>
                            </div>
                            {t.type === 'success' && <LinearProgress color={"success"}/>}
                            {t.type === 'error' && <LinearProgress color={"error"}/>}
                            {t.type === 'blank' && (t?.className?.includes('info')
                                ? <LinearProgress color={"inherit"}/>
                                : <LinearProgress color={"warning"}/>)}
                        </div>
                    )}
                </ToastBar>
            )}}
    </Toaster>
}
/*
    example of usage

    const { successToast } = useToast()
    const getToast = () => {
        successToast('Title perditle', 'additional additional lorem lorem color dolom')
    }
*/

export default CustomToaster