import PhotoCard from "./PhotoCard";
import { HomeIcon, CarIcon, FamilyIcon, ShieldIcon, UmbrellaIcon } from "./Icons";
import { heroImages, lifeEvents } from "@/lib/data";

const iconFor: Record<string, typeof HomeIcon> = {
  "New Vehicle": CarIcon,
  "Getting Married": FamilyIcon,
  "First Apartment": HomeIcon,
  "College Student": ShieldIcon,
  "Boat or RV": CarIcon,
  "Building Long-Term Protection": UmbrellaIcon,
};

export default function LifeEventCards() {
  return (
    <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
      {lifeEvents.map((event) => (
        <PhotoCard
          key={event.label}
          label={event.label}
          description={event.description}
          href={event.href}
          image={event.imageKey ? heroImages[event.imageKey] : undefined}
          Icon={iconFor[event.label]}
        />
      ))}
    </div>
  );
}
