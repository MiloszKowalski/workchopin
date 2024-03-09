# Solution (system) architecture

## Status

Accepted

## Context

WorkChopin starts as an [100commits](https://100commitow.pl) project, but is aimed to be long-lived and developed further,
beyond the competition scope. That's the reason we need sufficiently sophisticated architecture, with flexibility
and maintainability as the most important factor. It's planned to be distributed across different platforms (initially web,
with plans for MS Teams integration and maybe mobile or desktop apps). It should be as vendor independent as possible,
designed with performance in mind, but also not too complicated for the MVP stage.

## Decision

For the front-end, the project will be using a monorepo, with shared component libraries used by different targets
and the target projects, starting with a Next.js app for the MVP. We might consider going for microfrontends in the future,
but for now it will be more than enough.

For the back-end, we will use Next.js's API handlers as an implementation of the Backend for Frontend pattern, communicating
with an external ASP.NET Core WebAPI, implementing modular monolith architecture based on Domain Driven Design. We might
consider moving certain critical parts of the application to microservices when we start to experience performance issues.

We will start with external authentication providers and strive to use free and not vendor-locked providers for services
such as logging, monitoring, telemetry, orchestration, queues etc..

For the hosting, we might consider a cloud provider (i.e. MS Azure), but ultimately we would want to be as independent
as possible, so we should strive to use, for example, Terraform or even simply use a VPS for now.

## Consequences

- Flexibility for future development, including moving into microservices

- Simple enough architecture to not require us to look into the future too much

- Independence regarding the use of technologies and hosting

- Extensibility and space for future collaboration and targeting various platforms
