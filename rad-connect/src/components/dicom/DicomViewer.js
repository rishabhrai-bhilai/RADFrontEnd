import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { indigo, pink } from "@mui/material/colors";

import "./DicomViewer.css";
import DwvComponent from "./DwvComponent";

const DicomViewer = ({ repId, role, jwt, docId, radId, logout }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = createTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
        main: indigo[500],
      },
      secondary: {
        main: pink[500],
      },
      mode: prefersDarkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="Appss">
        <DwvComponent
          imageId={repId}
          userRole={role}
          token={jwt}
          docUserId={docId}
          radUserId={radId}
          setUserLogin={logout}
        />
      </div>
    </ThemeProvider>
  );
};
export default DicomViewer;
