import Navbar from "./Navbar";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Home</title>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
