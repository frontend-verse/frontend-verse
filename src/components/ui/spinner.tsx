import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils"; // optional utility for conditional classNames

export function Spinner({ className }: { className?: string }) {
    return (
        <div className="flex justify-center items-center h-screen">
            <Loader2 className={cn("h-16 w-16 animate-spin text-muted-foreground", className)} />
        </div>
    );
}
