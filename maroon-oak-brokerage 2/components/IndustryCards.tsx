import PhotoCard from "./PhotoCard";
import { BuildingIcon, ShieldIcon, WorkersIcon, CarIcon, CyberIcon } from "./Icons";
import { heroImages, industries } from "@/lib/data";

const iconFor: Record<string, typeof BuildingIcon> = {
  Plumbers: ShieldIcon,
  HVAC: WorkersIcon,
  Roofers: ShieldIcon,
  Landscapers: WorkersIcon,
  Painters: ShieldIcon,
  Restaurants: BuildingIcon,
  Retail: BuildingIcon,
  "Professional Services": CyberIcon,
  "Trucking / Fleet": CarIcon,
};

export default function IndustryCards() {
  return (
    <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
      {industries.map((industry) => (
        <PhotoCard
          key={industry.label}
          label={industry.label}
          description={industry.description}
          href={industry.href}
          image={industry.imageKey ? heroImages[industry.imageKey] : undefined}
          Icon={iconFor[industry.label]}
        />
      ))}
    </div>
  );
}
