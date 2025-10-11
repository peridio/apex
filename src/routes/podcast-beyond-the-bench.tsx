import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/podcast-beyond-the-bench")({
  component: PodcastBeyondTheBenchComponent,
});

function PodcastBeyondTheBenchComponent() {
  return <div>page for /podcast-beyond-the-bench</div>;
}
