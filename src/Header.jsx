"use client";

import { HomeIcon, PencilIcon, User, Brain, Rocket, Mail} from "lucide-react";

// import { ModeToggle } from "@/components/mode-toggle";
import { ScrollProgress } from "./components/magicui/scroll-progress";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BorderBeam } from "./components/magicui/border-beam";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "./components/magicui/dock";

const Icons = {
  user:(props) => <User {...props}/>, 
  calendar: (props) => <Calendar {...props} />,
  email: (props) => <Mail {...props} />,
  linkedin: (props) => (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>LinkedIn</title>
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.3h.05c.53-1 1.83-2.3 3.77-2.3 4.03 0 4.77 2.65 4.77 6.1V24h-4v-8.4c0-2-.04-4.6-2.8-4.6-2.8 0-3.23 2.2-3.23 4.47V24h-4V8z" />
    </svg>
  ),
  github: (props) => (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>GitHub</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.304 3.495.997.107-.776.418-1.305.762-1.604-2.665-.3-5.467-1.334-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.403c1.018.005 2.043.138 3.003.403 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.874.119 3.176.77.84 1.231 1.91 1.231 3.22 0 4.61-2.807 5.625-5.479 5.921.43.372.823 1.104.823 2.222v3.293c0 .319.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  ),
};
const DATA = {
  navbar: [
    { href: "#home", icon: HomeIcon, label: "Home" },
        { href: "#about", icon: User, label: "About" },
        { href: "#skills", icon: Brain, label: "Skills" },
        { href: "#projects", icon: Rocket, label: "Projects" },
        { href: "#contact", icon: Mail, label: "Contact" },


  ],
  contact: {
    social: {
      GitHub: { name: "GitHub", url: "https://github.com/GauravSaini144", icon: Icons.github },
      LinkedIn: { name: "LinkedIn", url: "https://www.linkedin.com/in/gaurav-saini-09b441230", icon: Icons.linkedin },
    },
  },
};

export function DockDemo() {
  return (
   <div className="relative">
          <ScrollProgress className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 z-50" />
    <div className="flex flex-col items-center justify-center ">
      
      <TooltipProvider >
        <Dock direction="middle"  className="w-[300px] md:w-full lg:w-full p-1 md:p lg:p">
          {DATA.navbar.map((item) => (
            <DockIcon key={item.label}  >
              <Tooltip  >
                <TooltipTrigger asChild>
                  <a
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-6 md:size-12 lg:size-12  rounded-full "
                    )}
                  >
                    <item.icon className="  size-2 md:size-4 lg:size-4" />
                    
                  </a>
                  
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full" />
          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={social.url}
                    target="_blank"
                    // aria-label={social.name}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-6 md:size-12 lg:size-12 rounded-full"
                    )}
                  >
                    <social.icon className="size-2 md:size-4 lg:size-4" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          
           <BorderBeam
              duration={6}
              size={50}
              className="from-green-100 via-cyan-300 to-transparent"
            />
            
        </Dock>
      </TooltipProvider>
     
    </div>
  </div>);
}