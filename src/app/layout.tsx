'use client';
import NavBar from "@/components/NavBar";
import React, {useState} from "react";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import './globals.css'
import useTranslation from "next-translate/useTranslation";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
});

export default function RootLayout({children}: {
    children: React.ReactNode
}) {

    const i18n = useTranslation()
    const [lang, changeLang] = useState(i18n.lang)

    return (
        <html>
        <body>
        <ThemeProvider theme={darkTheme}>
            <NavBar/>
            {children}
        </ThemeProvider>
        </body>
        </html>
    )
}
