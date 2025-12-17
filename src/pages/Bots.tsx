import { useState } from "react";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { BotsList } from "@/components/bots/BotsList";
import { SidebarProvider } from "@/components/ui/sidebar";

const Bots = () => {
  const [activeTab, setActiveTab] = useState("bots");

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-muted/30">
        <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex-1 flex flex-col">
          <DashboardHeader />
          <main className="flex-1 p-6">
            <BotsList />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Bots;
