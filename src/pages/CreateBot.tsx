import { useState } from "react";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { CreateBotForm } from "@/components/bots/CreateBotForm";
import { SidebarProvider } from "@/components/ui/sidebar";

const CreateBot = () => {
  const [activeTab, setActiveTab] = useState("bots");

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-muted/30">
        <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex-1 flex flex-col">
          <DashboardHeader />
          <main className="flex-1 p-6">
            <CreateBotForm />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default CreateBot;
