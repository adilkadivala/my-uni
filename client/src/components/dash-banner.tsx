import React from "react";

interface DashboardBannerProps {
  icon?: React.ComponentType<{ className?: string }>;
  heading: string;
  description: string;
  badge?: string;
  variant?: "default" | "outline" | "secondary" | "destructive";
  dateAndTime?: string;
}

const DashboardBanner = ({
  icon: Icon,
  heading,
  description,
  badge: Badge,
  dateAndTime,
}: DashboardBannerProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center p-4 lg:p-6 border rounded-sm bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 justify-between">
      <div className="flex items-center gap-3">
        {Icon && <Icon className="h-6 w-6 dark:text-secondary" />}
        <div>
          <h1 className="text-xl lg:text-2xl font-semibold dark:text-secondary mb-1">
            {heading}
          </h1>
          <p className="text-sm dark:text-secondary/75">{description}</p>
        </div>
      </div>
      {Badge && <Badge />}
      {dateAndTime && (
        <div>
          <p className="text-sm dark:text-secondary/75 font-medium mt-2">
            {dateAndTime}
          </p>
        </div>
      )}
    </div>
  );
};

export default DashboardBanner;
