import { NavLink } from "react-router-dom";

export default function SiteNavLeft() {
  const items = [
    { label: "Work",   href: "/work" },
    { label: "About",  href: "/about" },
    { label: "Lab",    href: "/lab" },
  ];
  
  return (
    <aside className="hidden md:flex fixed left-0 top-0 h-screen w-20 z-40
                      flex-col items-center gap-8 py-8
                      border-r border-black/[0.06] bg-white/80 backdrop-blur-xl">
      <NavLink 
        to="/" 
        className="text-2xl font-bold text-neutral-900 hover:text-black transition-colors"
      >
        AM
      </NavLink>
      
      <div className="flex-1 flex flex-col items-center justify-center gap-12">
        {items.map(i => (
          <NavLink
            key={i.href}
            to={i.href}
            end
            className={({ isActive }) => `
              rotate-[-90deg] text-base tracking-wide transition
              ${isActive ? 'text-black font-medium' : 'text-neutral-600 hover:text-black'}
            `}
          >
            {i.label}
          </NavLink>
        ))}
      </div>
    </aside>
  );
}
