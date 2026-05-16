"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";

export default function PopeExchange() {
  const [xbetId, setXbetId] = useState("");
  const [waafiTransactionId, setWaafiTransactionId] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleConfirm = () => {
    if (xbetId.trim() && waafiTransactionId.trim()) {
      setIsSubmitted(true);
      // Reset after 3 seconds for demo purposes
      setTimeout(() => {
        setIsSubmitted(false);
        setXbetId("");
        setWaafiTransactionId("");
      }, 3000);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground text-balance">
            Pope Exchange
          </h1>
          <p className="text-muted-foreground text-lg">
            Verify your transaction details
          </p>
        </div>

        {/* Form Card */}
        <Card className="border-border/60 shadow-lg">
          <CardHeader className="pb-4">
            <p className="text-sm text-muted-foreground">
              Enter your details below to confirm your exchange
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Option 1: 1xbet ID */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-md bg-primary text-primary-foreground text-xs font-semibold">
                  1
                </span>
                <Label htmlFor="xbet-id" className="text-sm font-medium">
                  1xbet ID
                </Label>
              </div>
              <Input
                id="xbet-id"
                type="text"
                placeholder="Enter your 1xbet ID"
                value={xbetId}
                onChange={(e) => setXbetId(e.target.value)}
                className="bg-card border-border focus:ring-accent"
              />
            </div>

            {/* Option 2: Waafi Transaction ID */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-md bg-primary text-primary-foreground text-xs font-semibold">
                  2
                </span>
                <Label htmlFor="waafi-id" className="text-sm font-medium">
                  Waafi Transaction ID
                </Label>
              </div>
              <Input
                id="waafi-id"
                type="text"
                placeholder="Enter your Waafi transaction ID"
                value={waafiTransactionId}
                onChange={(e) => setWaafiTransactionId(e.target.value)}
                className="bg-card border-border focus:ring-accent"
              />
            </div>

            {/* Confirm Button */}
            <Button
              onClick={handleConfirm}
              disabled={!xbetId.trim() || !waafiTransactionId.trim()}
              className="w-full h-12 text-base font-medium transition-all"
            >
              {isSubmitted ? (
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Confirmed!
                </span>
              ) : (
                "Confirm"
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground">
          Secure and trusted exchange service
        </p>
      </div>
    </main>
  );
}
