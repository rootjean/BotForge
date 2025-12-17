import { useState } from "react";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { AnalyticsOverview } from "@/components/analytics/AnalyticsOverview";
import { SidebarProvider } from "@/components/ui/sidebar";

const Analytics = () => {
  const [activeTab, setActiveTab] = useState("analytics");

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-muted/30">
        <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex-1 flex flex-col">
          <DashboardHeader />
          <main className="flex-1 p-6">
            <AnalyticsOverview />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Analytics;
