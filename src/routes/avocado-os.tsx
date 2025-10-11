import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/avocado-os")({
  component: AvocadoOSComponent,
});

function AvocadoOSComponent() {
  return <div>page for /avocado-os</div>;
}
