# Use Node 22-alpine as the base image for building
FROM node:22-alpine AS build
WORKDIR /app

# Copy dependency files and install all dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of the project source files
COPY . .

# Build the Astro site
RUN npm run build

# Use a clean Node 22-alpine runtime stage
FROM node:22-alpine AS runtime
WORKDIR /app

# Copy built application and production dependencies from build stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./

# Expose the port Astro runs on
ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321

# Start the Astro server
CMD ["node", "./dist/server/entry.mjs"]
