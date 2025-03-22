import PropertyGrid from "@/components/property/PropertyGrid";
import MapClient from "@/components/map/MapClient";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <MapClient />
      <PropertyGrid />
    </div>
  );
}
