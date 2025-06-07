export default function ContactUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "var(--font-manrope), sans-serif" }}>
        {/* Main Content */}
        {children}
      </body>
    </html>
  );
}
