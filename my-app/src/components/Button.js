import Link from "next/link";

const Button = ({ href, children }) => {
  return (
    <Link href={href}>
      <button className="mt-6 transform rounded-lg bg-gold px-6 py-3 text-lg font-semibold text-gray-900 transition hover:scale-105 hover:bg-amber-400 sm:text-xl md:text-2xl">
        {children}
      </button>
    </Link>
  );
};

export default Button;

