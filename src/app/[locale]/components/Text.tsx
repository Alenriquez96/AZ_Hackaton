interface TextProps {
  children: string | string[];
  style?: any;
}

function Text({ children, ...props }: TextProps) {
  return (
    <h1
      {...props}
      className="font-bold text-[32px] leading-[76px] text-[#344054] dark:text-white"
    >
      {children}
    </h1>
  );
}

export default Text;
