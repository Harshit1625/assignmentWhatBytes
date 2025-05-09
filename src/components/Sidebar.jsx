import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Home, Code2, Settings, LogOut, Menu } from "lucide-react";

export default function Sidebar({ selectMenu }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top bar with menu icon for small screens */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3 border-b shadow-sm bg-white">
        <div className="text-xl font-bold">WhatBytes</div>
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
          <Menu />
        </Button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:block fixed lg:relative top-0 left-0 h-screen w-64 bg-white shadow-md border-r text-black z-50`}
      >
        <div className="p-6 text-2xl font-bold hidden lg:block">WhatBytes</div>
        <Separator className="hidden lg:block" />
        <nav className="flex flex-col gap-2 p-4">
          <Button
            variant="ghost"
            className="justify-start gap-2"
            onClick={() => selectMenu("dashboard")}
          >
            <Home className="w-4 h-4" /> Dashboard
          </Button>
          <Button
            variant="ghost"
            className="justify-start gap-2"
            onClick={() => selectMenu("skillset")}
          >
            <Code2 className="w-4 h-4" /> Skillset
          </Button>
          <Button
            variant="ghost"
            className="justify-start gap-2"
            onClick={() => selectMenu("settings")}
          >
            <Settings className="w-4 h-4" /> Settings
          </Button>

          {/* Logout at bottom */}
          <div className="mt-auto pt-6">
            <Separator />
            <Button variant="ghost" className="justify-start gap-2 mt-4">
              <LogOut className="w-4 h-4" /> Logout
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
