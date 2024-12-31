import { cn } from "@/lib/utils";
import { InfoIcon } from "lucide-react";
import Link from "next/link";
import React, { HTMLAttributes } from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { Button } from "../ui/button";

const IconButton = React.forwardRef<
  HTMLAnchorElement,
  HTMLAttributes<HTMLAnchorElement> & { href: string }
>(({ children, className, href, ...props }, ref) => {
  return (
    <Link href={href} ref={ref} {...props} passHref>
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "size-auto p-2 [&_svg]:size-5",
          "bg-selection/50 hover:bg-selection/70",
          "text-foreground",
          className
        )}
      >
        {children}
      </Button>
    </Link>
  );
});
IconButton.displayName = "IconButton";

const Links = [
  {
    title: "Quick Links",
    links: [
      { title: "About IITM", href: "#" },
      { title: "Contact Us", href: "#" },
      { title: "Upcoming Events", href: "#" },
      { title: "Terms of Service", href: "#" },
      { title: "Privacy Policy", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Admissions", href: "#" },
      { title: "Student's Life", href: "#" },
      { title: "Academic Calender", href: "#" },
      { title: "FAQs", href: "#" },
      { title: "Support", href: "#" },
    ],
  },
];

type Props = HTMLAttributes<HTMLDivElement> & {};

export default function Footer({ className, ...props }: Props) {
  return (
    <footer
      className={cn(
        "w-full",
        "py-12 px-4 sm:px-8 bg-selection/40 border-t-2",
        className
      )}
      {...props}
    >
      <div
        className={cn("w-full max-w-[90rem] mx-auto", "flex flex-col gap-4")}
      >
        <div className={cn("grid grid-cols-3 gap-x-4 gap-y-8 px-4")}>
          <div className="col-span-3 lg:col-span-1 w-full grid">
            <h2 className={cn("text-2xl font-bold text-foreground", "mb-4")}>
              IIT Madras
            </h2>
            <p className="text-muted-foreground">
              Indian Institute of Technology, Madras is a public technical and
              research university located in Chennai, Tamil Nadu, India. As one
              of the Indian Institutes of Technology, it is recognised as an
              Institute of National Importance.
            </p>
          </div>

          <div className={cn("w-full grid grid-cols-2 gap-4", "col-span-3 md:col-span-2 lg:col-span-1")}>
            {Links.map((section) => (
              <div key={section.title} className="w-full grid">
                <div className="mx-auto">
                  <h2
                    className={cn("text-2xl font-bold text-foreground", "mb-4")}
                  >
                    {section.title}
                  </h2>
                  <ul className="mt-4 flex flex-col items-start gap-2">
                    {section.links.map((link) => (
                      <li key={link.title}>
                        <Link
                          href={link.href}
                          className="hover:text-secondary-foreground transition-colors duration-300"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="w-full grid col-span-3 md:col-span-1">
            <div className="mx-auto">
              <h2
                className={cn(
                  "text-2xl font-bold text-foreground w-full",
                  "mb-4"
                )}
              >
                Contact Us
              </h2>
              <ul className="mt-4 flex flex-col items-start gap-4">
                <li>
                  <Link href="#">
                    <div
                      className={cn(
                        "hover:text-secondary-foreground transition-colors duration-300",
                        "flex flex-row items-center gap-4"
                      )}
                    >
                      <FaEnvelope size={20} className="flex-shrink-0" />
                      <span>support@study.iitm.ac.in</span>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link href="#">
                    <div
                      className={cn(
                        "hover:text-secondary-foreground transition-colors duration-300",
                        "flex flex-row items-center gap-4"
                      )}
                    >
                      <FaPhone size={20} className="flex-shrink-0" />
                      <span>7850999966</span>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link href="#">
                    <div
                      className={cn(
                        "hover:text-secondary-foreground transition-colors duration-300",
                        "flex flex-row items-center gap-4"
                      )}
                    >
                      <FaLocationDot size={20} className="flex-shrink-0" />
                      <span>
                        IITM BS Degree Office, 3rd Floor, ICSR Building, IIT
                        Madras, Chennai - 600036
                      </span>
                    </div>
                  </Link>
                </li>

                <li className="flex flex-row w-full pt-4 flex-wrap items-stretch justify-evenly gap-2">
                  <IconButton href="#">
                    <FaFacebookF />
                  </IconButton>

                  <IconButton href="#">
                    <FaInstagram />
                  </IconButton>

                  <IconButton href="#">
                    <FaXTwitter />
                  </IconButton>

                  <IconButton href="#">
                    <FaLinkedinIn />
                  </IconButton>

                  <IconButton href="#">
                    <FaWhatsapp />
                  </IconButton>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-start gap-4 pt-8">
          <InfoIcon size={24} className="text-foreground mb-6" />
          <p className="w-full flex-1">
            Please use ONLY the above methods for any queries regarding the
            program. Our normal response time is 3 working days. It might take a
            little longer during busy periods. We will share Google Meet links
            during such periods. Due to the high volume of calls we receive
            every day, there might be long wait times. In some cases, you might
            have to call multiple times to successfully connect to us.
          </p>
        </div>

        <div className="w-full border-t-2 border-selection mt-8" />

        <div>
          <p className="text-center mt-8 text-muted-foreground">
            © IIT Madras. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
