import { useState } from "react";

import { StudentPortalSidebar } from "@/components/sidebar";
import { DashboardHeader } from "@/components/dash-navbar";
import { Outlet } from "react-router-dom";

export const StudentDashboardLayout = () => {
  const [activeItem, setActiveItem] = useState("dashboard");

  return (
    <div className="min-h-screen h-screen bg-background flex flex-col">
      <DashboardHeader />

      <div className="flex flex-1 overflow-y-hidden">
        {/* Sidebar */}
        <StudentPortalSidebar
          activeItem={activeItem}
          onItemSelect={setActiveItem}
        />

        {/* Main Content */}
        <div className="flex-1 lg:ml-0 overflow-x-hidden">
          <main className="p-4 lg:p-6 space-y-6 ">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};
