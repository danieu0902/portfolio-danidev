import './globals.css'

export const metadata = {
  title: "Portfolio",
  description: "Portfolio personal",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-zinc-950 text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  )
}