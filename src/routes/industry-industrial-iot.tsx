import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/industry-industrial-iot")({
  component: IndustryIndustrialIoTComponent,
});

function IndustryIndustrialIoTComponent() {
  return <div>page for /industry-industrial-iot</div>;
}
