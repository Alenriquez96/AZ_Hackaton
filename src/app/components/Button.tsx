interface ButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  style?: any;
  className?: string;
}

const Button = ({ children, icon, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="bg-[#486284] text-white rounded-[50px] h-[48px] w-[86px]"
    >
      {icon && icon}
      {children}
    </button>
  );
};

export default Button;
