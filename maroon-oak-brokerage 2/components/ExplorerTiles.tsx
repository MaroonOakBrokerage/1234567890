import Link from "next/link";
import {
  HomeIcon,
  CarIcon,
  FamilyIcon,
  BuildingIcon,
  WorkersIcon,
  ShieldIcon,
  CyberIcon,
} from "./Icons";
import type { explorerTiles as ExplorerTilesType } from "@/lib/data";

const iconFor: Record<string, typeof HomeIcon> = {
  Home: HomeIcon,
  Vehicles: CarIcon,
  Family: FamilyIcon,
  Business: BuildingIcon,
  Employees: WorkersIcon,
  Equipment: ShieldIcon,
  "Professional Services": CyberIcon,
};

export default function ExplorerTiles({ tiles }: { tiles: typeof ExplorerTilesType }) {
  return (
    <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
      {tiles.map((tile) => {
        const Icon = iconFor[tile.label] ?? ShieldIcon;
        return (
          <Link
            key={tile.label}
            href={tile.href}
            className="group flex flex-col items-start rounded-lg border border-charcoal/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-md"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-maroon/[0.06] transition-colors duration-300 group-hover:bg-maroon">
              <Icon className="h-5 w-5 stroke-maroon transition-colors duration-300 group-hover:stroke-stone" />
            </div>
            <h3 className="mb-1.5 font-serif text-[15.5px] font-semibold text-maroon">{tile.label}</h3>
            <p className="font-sans text-[12.5px] text-[#55504a]">{tile.description}</p>
          </Link>
        );
      })}
    </div>
  );
}
