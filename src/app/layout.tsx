import NavBar from "@/components/NavBar";
import React from "react";

export default function RootLayout({children, params: {lang},}: {
    children: React.ReactNode
    params: { lang: string }
}) {
    return (
        <html lang={lang}>
        <head/>
        <body>
        <NavBar/>
        {children}
        </body>
        </html>
    )
}
