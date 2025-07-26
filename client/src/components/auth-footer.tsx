import { Link } from "react-router-dom";

interface AuthFooterProps {
  bottomText?: string;
  bottomLinkText?: string;
  bottomLinkTo: string;
  className?: string;
}
const AuthFooter = ({
  bottomText,
  bottomLinkText,
  bottomLinkTo,
  className,
}: AuthFooterProps) => {
  return (
    <div className={className}>
      <p>
        {bottomText}
        <Link to={bottomLinkTo}>
          <span className="border-b border-primary dark:border-primary">
            {bottomLinkText}
          </span>
        </Link>
      </p>
    </div>
  );
};

export default AuthFooter;
