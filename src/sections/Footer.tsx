import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "Github",
    href: "https://github.com/albinjoby",
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com/in/albinjoby",
  },
  {
    title: "Instagram",
    href: "https://instagram.com/a.l.b.i.n._.jo",
  },
  {
    title: "LeetCode",
    href: "https://leetcode.com/u/albinjoby",
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container relative">
        <div className="border-t border-white/50 py-6 text-sm flex flex-col md:flex-row items-center md:justify-between gap-8">
          <div className="text-white/40">&copy; 2025. All right reserver</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                target="_blank"
                key={link.title}
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold hover:bg-gradient-to-r hover:from-emerald-300 hover:to-sky-400 hover:text-transparent hover:bg-clip-text transition-colors">
                  {link.title}
                </span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
