import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/industry-energy-and-renewables")({
  component: IndustryEnergyAndRenewablesComponent,
});

function IndustryEnergyAndRenewablesComponent() {
  return <div>page for /industry-energy-and-renewables</div>;
}
