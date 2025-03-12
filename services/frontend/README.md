# Anchoring API Frontend

This is the frontend service for Anchoring API, built with:

- Next.js 15
- React 19
- TypeScript
- TailwindCSS 4
- ShadCN UI Components
- MagicUI for interactive elements
- WorkOS for authentication

## Development Setup

### Local Development

1. Clone the repository
2. Navigate to the frontend directory: `cd services/frontend`
3. Install dependencies: `npm install`
4. Create a `.env.local` file with your WorkOS credentials:
   ```
   WORKOS_CLIENT_ID=client_xxxxxxxxxx
   WORKOS_API_KEY=sk_test_xxxxxxxxx
   WORKOS_COOKIE_PASSWORD=your_secure_32_char_password_here
   NEXT_PUBLIC_WORKOS_REDIRECT_URI=http://localhost:3000/callback
   ```
5. Start the development server: `npm run dev`

### Docker Development

The frontend service is configured to run in Docker as part of the complete Anchoring API stack:

1. Make sure to set up the environment variables in `envs/.env.frontend`:
   ```
   WORKOS_CLIENT_ID=client_xxxxxxxxxx
   WORKOS_API_KEY=sk_test_xxxxxxxxx
   WORKOS_COOKIE_PASSWORD=your_secure_32_char_password_here
   NEXT_PUBLIC_WORKOS_REDIRECT_URI=http://localhost:3000/callback
   ```
2. Run the Docker Compose stack: `docker-compose -f infrastructure/docker/docker-compose.yml up -d`

## Working with WorkOS AuthKit

This project uses WorkOS AuthKit for authentication. To make it work properly:

1. Set up a WorkOS account at https://workos.com/
2. Create an application in the WorkOS dashboard
3. Configure the redirect URI in your WorkOS dashboard to match the one in your environment variables
4. Configure your Client ID and API key in the environment variables

### Testing AuthKit Locally

To test WorkOS AuthKit locally without registering a real domain:

1. Use localhost for your development environment
2. Configure http://localhost:3000/callback as a valid redirect URI in your WorkOS dashboard
3. Make sure your NEXT_PUBLIC_WORKOS_REDIRECT_URI is set to http://localhost:3000/callback

## Project Structure

- `/app`: Next.js app router pages
- `/components`: UI components
  - `/components/ui`: ShadCN UI components
  - `/components/magicui`: Interactive UI elements with animations
  - `/components/navigation`: Navigation components
- `/lib`: Utility functions
- `/public`: Static assets

## Pages

- `/`: Landing page
- `/features`: Features page
- `/pricing`: Pricing page
- `/docs`: Documentation page
- `/dashboard`: User dashboard (authenticated)
- `/callback`: WorkOS authentication callback handler
