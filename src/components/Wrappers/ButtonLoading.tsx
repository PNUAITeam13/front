import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import React, {ReactNode} from "react";

interface IProps {
    isLoading: boolean
    children: JSX.Element | ReactNode
}
const ButtonLoadingWrapper = ({isLoading = false, children} : IProps) => {
    return <>
        {isLoading ?
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={0}
                sx={{
                    width: '100%'
                }}
            >
                <CircularProgress size={30} />
            </Stack>
            : children
        }
        </>
}
export default ButtonLoadingWrapper