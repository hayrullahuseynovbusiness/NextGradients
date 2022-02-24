import Link from "next/link";
const Navbar: React.FC = () => {
  return (
    <div className="flex items-center justify-center bg-white border-b py-4 sticky top-0 z-50">
      <Link href="/">
        <a className="text-2xl font-serif font-extrabold italic select-none">
          NextGradients
        </a>
      </Link>
    </div>
  );
};

export default Navbar;
