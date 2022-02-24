import Link, { LinkProps } from "next/link";
import cn from "classnames";
interface LinkButtonProps extends LinkProps {
  children: React.ReactNode;
  size?: "lg" | "sm";
  color?: "primary" | "white";
  bg?: "primary" | "white";
  fullWidth?: boolean;
}
const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  href,
  bg = "primary",
  color = "white",
  size = "sm",
  fullWidth,
}) => {
  return (
    <Link href={href}>
      <a
        className={cn("transition duration-150 rounded-lg", {
          "px-6 py-2 text-lg": size === "lg",
          "px-4 py-2 text-base": size === "sm",
          "w-full": fullWidth,
          "text-white": color === "white",
          "text-primary-700": color === "primary",
          "bg-primary-500 hover:bg-primary-600": bg === "primary",
          "bg-white hover:bg-primary-50": bg === "white",
        })}
      >
        {children}
      </a>
    </Link>
  );
};

export default LinkButton;
