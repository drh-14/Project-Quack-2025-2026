export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>
         <div className="auth-container">
          {/* Decorative bg elements: */}
          <div className="auth-blob-container">
            <div className="auth-blob auth-blob-1"></div>
            <div className="auth-blob auth-blob-2"></div>
            <div className="auth-blob auth-blob-3"></div>
          </div>
          {children}  
         </div>
        </main>
      </body>
    </html>
  )
}