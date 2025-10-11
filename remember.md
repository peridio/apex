# remember

we are porting an existing wix website to a tanstack static site.

- all pages should put content in a 900px wide center column
- add basic responsive styles to major sections when implementing them
- when implementing sections, use consistent fonts, sizing based on the existing pages and components
- when creating new route pages the `const Route` variable should be at the top and the `component` it uses should be the next defined variable below that
- the component used in the `createFileRoute` call should be called `Page` to represent it as the entire "page" component
- any supplemental components for the page should be kept within the same file, and be defined BELOW the route component
