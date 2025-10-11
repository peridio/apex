import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/ai-ready")({
  component: AIReadyComponent,
});

function AIReadyComponent() {
  return <div>page for /ai-ready</div>;
}
