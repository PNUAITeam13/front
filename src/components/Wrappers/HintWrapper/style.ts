import {styled} from "@mui/system";
import TY from "@mui/material/Typography";

const StyledTypography = styled(TY)<any>(({ theme }) => {

    return {
        fontWeight: "400",
        fontSize: "11px",
        lineHeight: "18px",
        color: '#fff',
        background: '#666873',
        padding: '3px 8px',
        borderRadius: "3px",
        "@media (max-width: 900px)": {
            fontSize: "12px",
            padding: '0',
            background: '#171822'
        }
    };
})
export {StyledTypography}
