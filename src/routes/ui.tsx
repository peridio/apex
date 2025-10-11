import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Route = createFileRoute("/ui")({
  component: UIShowcase,
});

function UIShowcase() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`min-h-screen p-8 ${isDark ? "bg-black" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1
            className={`text-4xl font-bold ${isDark ? "text-white" : "text-black"}`}
          >
            Button Component Showcase
          </h1>
          <Button
            variant="outline-transparent-primary"
            onClick={() => setIsDark(!isDark)}
          >
            {isDark ? "Light Mode" : "Dark Mode"}
          </Button>
        </div>

        {/* Button Variants */}
        <section className="mb-12">
          <h2
            className={`text-2xl font-semibold mb-6 ${isDark ? "text-white" : "text-black"}`}
          >
            Button Variants
          </h2>
          <div className="space-y-8">
            {/* Primary Variant */}
            <div>
              <h3
                className={`text-lg mb-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}
              >
                Primary Variant
              </h3>
              <div className="flex flex-wrap gap-4 items-end">
                <Button variant="primary" size="xs">
                  Primary XS
                </Button>
                <Button variant="primary" size="sm">
                  Primary Small
                </Button>
                <Button variant="primary" size="default">
                  Primary Default
                </Button>
                <Button variant="primary" size="lg">
                  Primary Large
                </Button>
                <Button variant="primary" size="xl">
                  Primary XL
                </Button>
                <Button variant="primary" disabled>
                  Primary Disabled
                </Button>
              </div>
            </div>

            {/* Secondary Variant */}
            <div>
              <h3
                className={`text-lg mb-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}
              >
                Secondary Variant
              </h3>
              <div className="flex flex-wrap gap-4 items-end">
                <Button variant="secondary" size="xs">
                  Secondary XS
                </Button>
                <Button variant="secondary" size="sm">
                  Secondary Small
                </Button>
                <Button variant="secondary" size="default">
                  Secondary Default
                </Button>
                <Button variant="secondary" size="lg">
                  Secondary Large
                </Button>
                <Button variant="secondary" size="xl">
                  Secondary XL
                </Button>
                <Button variant="secondary" disabled>
                  Secondary Disabled
                </Button>
              </div>
            </div>

            {/* Secondary Dark Variant */}
            <div>
              <h3
                className={`text-lg mb-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}
              >
                Secondary Dark Variant
              </h3>
              <div className="flex flex-wrap gap-4 items-end">
                <Button variant="secondary-dark" size="xs">
                  Secondary Dark XS
                </Button>
                <Button variant="secondary-dark" size="sm">
                  Secondary Dark Small
                </Button>
                <Button variant="secondary-dark" size="default">
                  Secondary Dark Default
                </Button>
                <Button variant="secondary-dark" size="lg">
                  Secondary Dark Large
                </Button>
                <Button variant="secondary-dark" size="xl">
                  Secondary Dark XL
                </Button>
                <Button variant="secondary-dark" disabled>
                  Secondary Dark Disabled
                </Button>
              </div>
            </div>

            {/* Outline Transparent Primary Variant */}
            <div>
              <h3
                className={`text-lg mb-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}
              >
                Outline Transparent Primary Variant
              </h3>
              <div className="flex flex-wrap gap-4 items-end">
                <Button variant="outline-transparent-primary" size="xs">
                  Outline Trans Primary XS
                </Button>
                <Button variant="outline-transparent-primary" size="sm">
                  Outline Trans Primary Small
                </Button>
                <Button variant="outline-transparent-primary" size="default">
                  Outline Trans Primary Default
                </Button>
                <Button variant="outline-transparent-primary" size="lg">
                  Outline Trans Primary Large
                </Button>
                <Button variant="outline-transparent-primary" size="xl">
                  Outline Trans Primary XL
                </Button>
                <Button variant="outline-transparent-primary" disabled>
                  Outline Trans Primary Disabled
                </Button>
              </div>
            </div>

            {/* Outline Transparent Secondary Variant */}
            <div>
              <h3
                className={`text-lg mb-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}
              >
                Outline Transparent Secondary Variant
              </h3>
              <div className="flex flex-wrap gap-4 items-end">
                <Button variant="outline-transparent-secondary" size="xs">
                  Outline Trans Secondary XS
                </Button>
                <Button variant="outline-transparent-secondary" size="sm">
                  Outline Trans Secondary Small
                </Button>
                <Button variant="outline-transparent-secondary" size="default">
                  Outline Trans Secondary Default
                </Button>
                <Button variant="outline-transparent-secondary" size="lg">
                  Outline Trans Secondary Large
                </Button>
                <Button variant="outline-transparent-secondary" size="xl">
                  Outline Trans Secondary XL
                </Button>
                <Button variant="outline-transparent-secondary" disabled>
                  Outline Trans Secondary Disabled
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Examples */}
        <section>
          <h2
            className={`text-2xl font-semibold mb-6 ${isDark ? "text-white" : "text-black"}`}
          >
            Interactive Examples
          </h2>
          <div className="space-y-6">
            <div>
              <h3
                className={`text-lg mb-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}
              >
                With onClick
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="primary"
                  onClick={() => alert("Primary clicked!")}
                >
                  Click Me (Primary)
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => alert("Secondary clicked!")}
                >
                  Click Me (Secondary)
                </Button>
                <Button
                  variant="secondary-dark"
                  onClick={() => alert("Secondary Dark clicked!")}
                >
                  Click Me (Secondary Dark)
                </Button>
                <Button
                  variant="outline-transparent-primary"
                  onClick={() => alert("Outline Transparent Primary clicked!")}
                >
                  Click Me (Outline Transparent Primary)
                </Button>
                <Button
                  variant="outline-transparent-secondary"
                  onClick={() =>
                    alert("Outline Transparent Secondary clicked!")
                  }
                >
                  Click Me (Outline Transparent Secondary)
                </Button>
              </div>
            </div>

            <div>
              <h3
                className={`text-lg mb-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}
              >
                As Link (with asChild)
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" asChild>
                  <a href="/">Go to Home (Primary)</a>
                </Button>
                <Button variant="secondary" asChild>
                  <a href="/company">Go to Company (Secondary)</a>
                </Button>
                <Button variant="secondary-dark" asChild>
                  <a href="/avocado-os">Go to Avocado OS (Secondary Dark)</a>
                </Button>
                <Button variant="outline-transparent-primary" asChild>
                  <a href="/partners">
                    Go to Partners (Outline Transparent Primary)
                  </a>
                </Button>
                <Button variant="outline-transparent-secondary" asChild>
                  <a href="/podcast-beyond-the-bench">
                    Go to Podcast (Outline Transparent Secondary)
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
