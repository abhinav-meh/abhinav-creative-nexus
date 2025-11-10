import { NavLink } from "react-router-dom";

export default function SiteNavBottom() {
  const items = [
    { label: "Home",   href: "/" },
    { label: "Work",   href: "/work" },
    { label: "About",  href: "/about" },
    { label: "Lab",    href: "/lab" },
  ];
  
  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-40
                    bg-white/85 backdrop-blur-xl border-t border-black/[0.06]
                    pb-[env(safe-area-inset-bottom)]">
      <ul className="flex items-center justify-around h-20 px-4">
        {items.map(i => (
          <li key={i.href}>
            <NavLink
              to={i.href}
              end
              className={({ isActive }) => `
                text-base font-medium transition
                ${isActive ? 'text-black' : 'text-neutral-700 hover:text-black'}
              `}
            >
              {i.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
