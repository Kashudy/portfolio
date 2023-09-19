import { ThemeToggle } from "./ui/darkmodeToggle";

export default function NavigationBar() {
  return (
    <nav className="flex justify-between p-4 items-center bg-red-50">
      <a href="http://">Home</a>
      <div className="flex space-x-8">
        <a href="http://">About</a>
        <a href="http://">Skills</a>
        <a href="http://">Contact</a>
        <ThemeToggle />
      </div>
    </nav>
  );
}
