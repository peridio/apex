import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/peridio-core")({
  component: PeridioCoreComponent,
});

function PeridioCoreComponent() {
  return <div>page for /peridio-core</div>;
}
