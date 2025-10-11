import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/industry-health-and-wearables")({
  component: IndustryHealthAndWearablesComponent,
});

function IndustryHealthAndWearablesComponent() {
  return <div>page for /industry-health-and-wearables</div>;
}
