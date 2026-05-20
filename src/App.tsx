import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/Card";
import { Button } from "@/src/components/ui/Button";
import { Settings, ShieldCheck, Bell, Database } from "lucide-react";

export const AdminSettings = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-black flex items-center gap-3">
          <Settings className="h-8 w-8 text-primary" />
          Admin Settings
        </h1>

        <p className="text-muted-foreground mt-2">
          Configure system settings, security controls, notifications, and business operations.
        </p>
      </div>

      {/* Settings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {/* Security */}
        <Card className="rounded-2xl border shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5" />
              Security Controls
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Manage admin permissions, staff access, and authentication systems.
            </p>

            <Button className="w-full">
              Manage Security
            </Button>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="rounded-2xl border shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notifications
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Configure SMS alerts, emails, reminders, and booking notifications.
            </p>

            <Button className="w-full">
              Notification Settings
            </Button>
          </CardContent>
        </Card>

        {/* Database */}
        <Card className="rounded-2xl border shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              System Database
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Monitor Firebase connections, backups, and operational health.
            </p>

            <Button className="w-full">
              View Database
            </Button>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default AdminSettings;