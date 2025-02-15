import { createTheme } from "@mui/material/styles";

export const theme = createTheme(
    {
        palette: {
            primary: {
                main: "#2E3B55",
            },
            secondary: {
                main: "#FFD700",
            },
        },
    },
    {
        typography: {
            fontFamily: "Roboto, sans-serif",
        },
    }
);
