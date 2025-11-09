export default function GridBackground() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
          linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        opacity: 0.5
      }}
    />
  )
}
