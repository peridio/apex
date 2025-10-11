import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/industry-smarthomes")({
  component: IndustrySmartHomesComponent,
});

function IndustrySmartHomesComponent() {
  return <div>page for /industry-smarthomes</div>;
}
