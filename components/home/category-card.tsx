import { cn } from "@/lib/utils";

interface CategoryCardProps {
  title: string;
  description: string;
  checks: number;
  color: string;
  icon: React.ReactNode;
  link: string;
  delay?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  description,
  checks,
  color,
  icon,
  link,
  delay,
}) => (
  <div
    className={cn(
      "bg-neutral-900 rounded-xl p-6 text-white hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp",
      delay
    )}
  >
    <div className="flex items-center justify-between mb-4">
      <div
        className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center",
          color
        )}
      >
        {icon}
      </div>
      <span className="text-sm text-gray-300">{checks} checks</span>
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm mb-4">{description}</p>
    <a
      href={link}
      className={cn(
        "text-sm flex items-center",
        `text-${color.split("-")[1]}-500 hover:text-${color.split("-")[1]}-400`
      )}
    >
      View Cases
      <svg
        className="w-4 h-4 ml-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        ></path>
      </svg>
    </a>
  </div>
);

export { CategoryCard };
