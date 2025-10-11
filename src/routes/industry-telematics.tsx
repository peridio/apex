import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/industry-telematics")({
  component: IndustryTelematicsComponent,
});

function IndustryTelematicsComponent() {
  return <div>page for /industry-telematics</div>;
}
