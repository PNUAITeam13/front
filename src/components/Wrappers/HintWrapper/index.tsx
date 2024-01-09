import useMediaQuery from "@mui/material/useMediaQuery";
import {Popover} from "@mui/material";
import {memo, useState} from "react";
import { StyledTypography } from "./style";

interface IProps {
    children: JSX.Element
    title?: string | number
}
const HintWrapper = ({children, title} : IProps) => {
    const isMobile = useMediaQuery("(min-width:900px)");

    const [popover, setPopover] = useState(null);
    const handlePopover1Open = (event: any) => {
        setPopover(event.currentTarget);
    };
    const handlePopover1Close = () => {
        setPopover(null);
    };
    const isPopover1Open = Boolean(popover);
    const popover1Id = isPopover1Open ? 'popover' : undefined;

    return <>
        <span // to prevent errors
            aria-describedby={popover1Id}
            onMouseEnter={isMobile ? handlePopover1Open : () => {}}
            onMouseLeave={isMobile ? handlePopover1Close : () => {}}
            onClick={!isMobile ? handlePopover1Open : () => {}}
        >
            {children}
        </span>
        <Popover
            id={popover1Id}
            open={isPopover1Open && title !== '-'}
            anchorEl={popover}
            onClose={handlePopover1Close}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            sx={{
                pointerEvents: isMobile ? 'none' : '',
                '& .MuiPopover-paper': {
                    borderRadius: 0,
                }
            }}
        >
            <StyledTypography>
                {title}
            </StyledTypography>
        </Popover>
    </>
}

export default memo(HintWrapper)