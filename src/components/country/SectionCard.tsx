interface SectionCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const SectionCard = ({ title, children, className = '' }: SectionCardProps) => {
  return (
    <section className={`mb-8 ${className}`}>
      <div className="bg-white border border-[#D4DAEA] rounded-2xl shadow-sm p-6">
        <h2 className="text-2xl font-bold text-[#243B63] mb-6 flex items-center gap-3">
          <div className="w-1 h-7 bg-[#4A6290] rounded-full"></div>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};