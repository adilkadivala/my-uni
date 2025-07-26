// components/AuthHeader.tsx
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

interface AuthHeaderProps {
  title: string;
  subtitle: string;
  bottomText?: string;
  bottomLinkText?: string;
  bottomLinkTo?: string;
}

const AuthHeader = ({ title, subtitle }: AuthHeaderProps) => {
  return (
    <>
      <div>
        <Link to="/" className="flex gap-2">
          <BookOpen />
          <span className="font-bold">My Uni</span>
        </Link>
      </div>

      <div className="py-6 md:py-20 h-1/4 leading-10 tracking-wide">
        <h1 className="text-3xl font-medium text-primary">{title}</h1>
        <p className="text-neutral-500 dark:text-neutral-400">{subtitle}</p>
      </div>
    </>
  );
};

export default AuthHeader;
