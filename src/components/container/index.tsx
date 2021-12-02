interface IContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: IContainerProps) => {
  return <div className="min-h-screen flex flex-col">{children}</div>;
};
