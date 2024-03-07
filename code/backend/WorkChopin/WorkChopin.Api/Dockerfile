FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER $APP_UID
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["WorkChopin.Api/WorkChopin.Api.csproj", "WorkChopin.Api/"]
RUN dotnet restore "WorkChopin.Api/WorkChopin.Api.csproj"
COPY . .
WORKDIR "/src/WorkChopin.Api"
RUN dotnet build "WorkChopin.Api.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "WorkChopin.Api.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "WorkChopin.Api.dll"]
