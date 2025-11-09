export default function GridBackground() {
  const lines = Array.from({ length: 20 }, (_, i) => i)
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        {lines.map((i) => (
          <line
            key={i}
            x1={`${(i * 5) + 10}%`}
            y1="0"
            x2={`${(i * 5) + 10}%`}
            y2="100%"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="10 15"
            opacity="0.3"
          />
        ))}
      </svg>
    </div>
  )
}
