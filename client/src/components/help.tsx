import { AlertTriangle, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Help {
  title: string;
  helplineContact: string;
  helplineEmail: string;
}

export const Help = ({ title, helplineContact, helplineEmail }: Help) => {
  return (
    <Card className="border-destructive/20 bg-destructive/5">
      <CardContent className="p-4">
        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-20">
          <div className="p-2 bg-destructive/10 rounded-lg">
            <AlertTriangle className="h-5 w-5 text-destructive" />
          </div>

          <div className="flex-1">
            <h3 className="font-semibold text-foreground text-sm mb-1">
              {title}
            </h3>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-xs text-muted-foreground">
              <div className="flex items-center text-[1rem] font-medium gap-2">
                <Phone className="h-3 w-3" />
                <span>{helplineContact}</span>
              </div>
              <div className="flex items-center text-[1rem] font-medium gap-2">
                <Mail className="h-3 w-3" />
                <span>{helplineEmail}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
