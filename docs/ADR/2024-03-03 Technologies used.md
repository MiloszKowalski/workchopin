# Technologies used for the project

## Status

Accepted

## Context

WorkChopin starts as an [100commits](https://100commitow.pl) project, but is aimed to be long-lived and developed further,
beyond the competition scope. That's the reason we need sufficiently modern, sophisticated and future-proof technologies,
that also align with the author's and the community's known and preferred technologies. It's planned to be distributed
across different platforms (initially web, with plans for MS Teams integration and maybe mobile or desktop apps).

## Decision

As for the frontend, the project will be using an [Nx](https://nx.dev) monorepo, as it gives us enough flexibility to satisfy
our needs (i.e. shared component library for different targets), while alsoproviding best-in-class low configuration
tooling and performance improvements.

For the main web application, we'll be using [Next.js](https://nextjs.org) with [Tailwind CSS](https://tailwindcss.com),
as they give us excellent performance, great DX and boost developer productivity, while also being popular and maintained
(which also aligns with the future perspectives of OS collaborations). The rest is left as the Nx preferred defaults
for a Next.js project but might change in the future.

As for the backend, the Next.js API handlers might not be sufficient - if we stumble upon more demanding requirements, we will use
[ASP.NET Core](https://dotnet.microsoft.com/en-us/apps/aspnet) for the backend API, with Next.js acting as a proxy and Backend for Frontend.

The rest of the technologies and libraries will be chosen on-demand and described in another ADRs.

## Consequences

- All the technologies used are Open Source, which won't change in the foreseeable future, so vendor-locking shouldn't be a problem

- As for the performance, both are enough and a good middle-ground between execution time and developer productivity

- Choosing the technologies also gives us ways to extend the app to mobile and desktop (for example via PWA + Capacitor or Electron)

- The sophisticated project structure may be hard to work with initially, but it will save us some headaches in the future

- The ecosystem for both .NET and JavaScript are one of the fastest-developing and contributed to, so additional tools and libraries
  needed should be available at hand
