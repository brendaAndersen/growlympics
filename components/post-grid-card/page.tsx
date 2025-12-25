type PostGridCardProps = {
  children: React.ReactNode;
};

export const PostGridCard = ({ children }: PostGridCardProps) => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 md:gap-16">
      {children}
    </div>
  );
};