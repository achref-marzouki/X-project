export const metadata = {
  title: 'Ashraf X',
  description: 'Generated by Ashraf Dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}