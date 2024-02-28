import Logo from "../components/Logo";

const links: { heading: string; links: string[] }[] = [
  {
    heading: "Product",
    links: ["Overview", "Features", "Solutions", "Releases"],
  },
  {
    heading: "Company",
    links: ["About Us", "Careers", "Press", "News", "Exmployee Log In"],
  },
  {
    heading: "Resources",
    links: ["Blog", "Help Centre", "Tutorials", "Support"],
  },
  { heading: "Social", links: ["X", "LinkedIn", "Facebook", "Instagram"] },
  {
    heading: "Legal",
    links: ["Terms", "Privacy", "Cookies", "Licenses", "Settings"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#F9FAFB] w-full  p-6 flex flex-col items-center ">
      <div className="w-[80%] sm:flex items-start justify-between hidden">
        {links.map((row, i) => {
          return (
            <div key={i} className="flex flex-col justify-start">
              <p className="font-semibold text-[#98A2B3] text-[14px] my-2">
                {row.heading}
              </p>
              {row.links.map((link, i) => (
                <p
                  key={i}
                  className="text-[#667085] text-[16px] font-semibold my-2"
                >
                  {link}
                </p>
              ))}
            </div>
          );
        })}
      </div>
      <div className="flex sm:justify-between justify-center sm:items-center border-t-[1px] w-[80%] mt-5 h-[100px] ">
        <Logo className="my-6 sm:m-0" />
        <p className="text-[#98A2B3] text-[16px] hidden sm:block">
          © 2077 Untitled UI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
