import { ThemeToggle } from "./ui/darkmodeToggle";

export default function NavigationBar() {
  return (
    <nav className="flex justify-between pb-1.5 pt-2 items-center bg-secondary text-secondary-foreground shadow-md sticky top-0 left-0">
      <a className=" pl-5" href="http://">
        Home
      </a>
      <div className=" pr-5 flex space-x-12 justify-center items-center">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
        <ThemeToggle />
      </div>
    </nav>
  );
}
