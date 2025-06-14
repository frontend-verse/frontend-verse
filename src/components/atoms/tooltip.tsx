import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { ReactNode } from "react";

interface CustomToolTipProps {
    title: string;
    content: ReactNode;
}

const CustomToolTip = ({ content, title }: CustomToolTipProps) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    {content}
                </TooltipTrigger>
                <TooltipContent side="top">{title}</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default CustomToolTip;

