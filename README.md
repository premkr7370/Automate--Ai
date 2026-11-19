# 🚀 AutoMate AI 🤖

<div align="center">
  <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExODJ0YnMzdTRtZmNpd25nMjZ0czN4bm1mcXJiYno2ajhodzdvMnNpNCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/pGVrRLHRzoRcQ/200.gif" width="220" alt="Iron Man reaction GIF" />
</div>

AutoMate AI is a full-stack AI productivity platform for creating, managing, and interacting with intelligent agents. The app blends a modern React frontend with an Express backend, MongoDB data storage, and external integrations for AI models, authentication, payments, and social platforms. It is designed to help users build conversational workflows, launch AI-powered experiences, and connect services to real-world business operations.

## 🌟 What this project does

AutoMate AI helps users:

- Create and manage AI agents with distinct personalities and behaviors
- Chat with agents in a modern web interface
- Connect AI features to backend services and external APIs
- Handle authentication using Firebase and OAuth providers
- Process payments with Razorpay
- Integrate with Google and Instagram for social/login flows
- Store application data in MongoDB for agents, chats, and users

This repository is a monorepo-style project with separate frontend and backend apps so each side can evolve independently while remaining connected through a defined API contract.

![Captain America GIF](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjFjc3U2MWR5MjUxNXpqcDRmdXh5cjB5cGY3cThsc28zbjRocDA5NiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/QgwXffX7n4tMY/giphy.gif)

## 🧩 Project structure

- `frontend/` — React 19 application with Vite and Tailwind CSS for the web experience.
- `backend/` — Express/Nodemon API server with MongoDB models, route handlers, AI logic, and platform integrations.

The frontend and backend are installed and run independently; there is no root-level package script.
<div align="center">
  

![Thor GIF](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTFubTVtdmVqYmV0djNtY3VmM2RyeW82MWdjOGJyajJ4N2tkeWZqMiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/uDTezGiN4pibS/giphy.gif)
</div>
## 🏗️ Tech stack

- Frontend: React 19, Vite, Tailwind CSS
- Backend: Node.js, Express
- Database: MongoDB
- Authentication: Firebase + OAuth flows
- AI integrations: Groq, Google AI/Gemini
- Payments: Razorpay
- Social integrations: Google, Instagram
- File/media support: Cloudinary

## ✨ Core features

### AI agent experience
The platform is designed around AI-driven conversations and agent logic. The backend provides agent/chat services, while the frontend lets users interact with those services through a clean UI.

### Authentication and user access
The project supports Firebase-based authentication and external login flows. Use secure environment variables and never expose private secrets to the browser.

![Black Widow GIF](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZndhaGg2ODB2dzlhZDg4YXV0MTh4YXR0YTZ5b2VlM3ptczdzdXZsZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VKFfxB2skRYZO/giphy.gif)

### Integrations
AutoMate AI supports multiple service integrations:

- Google OAuth and AI APIs
- Instagram authentication and account integration
- Razorpay for payment workflows
- Cloudinary for image/media upload workflows

### Persistent data
MongoDB stores application data and critical records needed to support agent sessions, chats, integrations, and user systems.

![Black Panther GIF](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2txNzFoajZ6cjI3MHhwNXhwMmN5NHY5MDhwbDZiMnhoemdmNXpkbCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xULW8n9ctB6GyBKr60/200.gif)

## ✅ Requirements

Before running the project, make sure you have:

- Node.js and npm
- MongoDB connection string
- Credentials for the services you intend to use (see [Configuration](#configuration))

## 🚀 Setup

### 1️⃣ Configure the backend

Create `backend/.env` with the variables needed for your chosen features. At minimum, the backend requires `MONGODB_URI` to connect to MongoDB.

The Firebase Admin SDK also imports `backend/serviceAccountKey.json`. Supply your own Firebase service account file at that path. Do not commit this file or any real credentials.

Install dependencies and start the API:

```bash
cd backend
npm install
npm run dev
```

The API listens on port `5000` by default.

### 2️⃣ Configure the frontend

Create `frontend/.env` and set the variables needed by the client:

```dotenv
VITE_SERVER_URL=http://localhost:5000
VITE_FIREBASE_API_KEY=your_firebase_web_api_key
```

`VITE_SERVER_URL` should point to the backend. The backend's default port is `5000`; set the URL explicitly because the frontend's built-in fallback uses port `8000`.

Install dependencies and start the frontend in a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Vite prints the local URL when the development server starts (typically `http://localhost:5173`).

## 🔄 Typical app flow

A common user flow in this project looks like this:

1. User opens the frontend and signs in.
2. The frontend calls the backend API for authentication and agent interaction.
3. The backend validates tokens, connects to MongoDB, and executes AI or integration logic.
4. Agent responses are returned to the frontend and rendered in the UI.
5. Payments, OAuth callbacks, and external integrations connect to their respective provider services.

This makes it easy to build AI-powered experiences that are both user-friendly and backend-driven.

![Hawkeye GIF](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmdsajhkbnZjd3c4bTVrNzJrdDdyNHIxOTlsNnV3N3cyYmFueTFhayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/dUWHHcbfUnJ8bZDiz0/200.gif)

![Hulk running GIF](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmUzZHEzcmE1bTYyY3lyODZicGNlYmE4ODVybzB4MDIwMzF0NzhpOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/56B79c8TARUf5hXWg5/200.gif)

## ⚙️ Configuration

Set secrets only in local environment files or your deployment platform's secret manager. Never publish real secret values.

### Backend (`backend/.env`)

| Variable | Purpose |
| --- | --- |
| `PORT` | API port; defaults to `5000`. |
| `CLIENT_URL` | Allowed frontend origin for CORS; defaults to `http://localhost:5173`. |
| `FRONTEND_URL` | Frontend URL used for integration redirects. |
| `MONGODB_URI` | MongoDB connection string. |
| `JWT_SECRET` | Signs and verifies authentication/integration tokens. |
| `ENCRYPTION_KEY` | Key used by the backend encryption utility. |
| `AUTOMATE_MCP_SECRET` | Shared secret used by the MCP integration. |
| `GROQ_API_KEY` | Groq credentials for AI chat/agent features. |
| `GROQ_MODEL` | Optional Groq model override for the MCP server. |
| `GOOGLE_API_KEY` | Google AI API key for vision features. |
| `GEMINI_VISION_MODEL` | Optional model override for vision features. |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID. |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret. |
| `GOOGLE_REDIRECT_URI` | Registered Google OAuth redirect URI. |
| `RAZORPAY_KEY_ID` | Razorpay key ID. |
| `RAZORPAY_KEY_SECRET` | Razorpay key secret. |
| `INSTAGRAM_APP_ID` | Instagram app ID. |
| `INSTAGRAM_APP_SECRET` | Instagram app secret. |
| `INSTAGRAM_CONFIG_ID` | Instagram login configuration ID. |
| `INSTAGRAM_REDIRECT_URI` | Registered Instagram redirect URI. |
| `INSTAGRAM_ACCOUNT_ID` | Instagram account ID used by the integration. |
| `INSTAGRAM_ACCESS_TOKEN` | Instagram access token used by the integration. |
| `INSTAGRAM_GRAPH_VERSION` | Optional Graph API version; defaults to `v23.0`. |

Some variables are only needed for the corresponding integration or feature.

### Frontend (`frontend/.env`)

| Variable | Purpose |
| --- | --- |
| `VITE_SERVER_URL` | Backend API base URL; use `http://localhost:5000` for the default local backend. |
| `VITE_FIREBASE_API_KEY` | Firebase web app API key. |
| `VITE_CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name for image uploads. |
| `VITE_CLOUDINARY_UPLOAD_PRESET` | Cloudinary upload preset for image uploads. |

Only variables prefixed with `VITE_` are exposed to the client bundle. Do not put private credentials in frontend environment variables.

## 🧭 API route groups

The backend mounts these route prefixes:

- `/api/auth`
- `/api/agents`
- `/api/agent-chat`
- `/api/chat`
- `/api/integrations`
- `/api/payment`

## 🛡️ Security notes

- Store secrets in local environment files or your cloud deployment secret manager.
- Never commit `backend/serviceAccountKey.json` or any real credentials.
- Keep Firebase and OAuth secrets out of the client bundle.
- Use HTTPS in production and validate redirect URLs carefully.

## 🛠️ Available scripts

From `frontend/`:

- `npm run dev` — start the Vite development server.
- `npm run build` — create a production build in `frontend/dist/`.
- `npm run preview` — preview the production build locally.
- `npm run lint` — run ESLint.

From `backend/`:

- `npm run dev` — start the API with Nodemon.

## 🚀 Project status

This project is a strong starter for building an AI agent platform with a modern UI, backend services, and integration support. You can extend it with custom agent logic, role-based access, conversation history, more AI providers, and advanced automation flows.

## 🤝 Contributing

Feel free to clone the project, add new features, and improve the automation experience. Keep the environment configuration secure and document new services or API endpoints as they are introduced.

![Spider-Man GIF](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3ppdW9zamk2MmxodzU1amhwODF2azV1cXg4c2h5bXpsbXFzMThqZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/pEBS2aHPRsomMAIQvv/200.gif)

From `frontend/`:

- `npm run dev` — start the Vite development server.
- `npm run build` — create a production build in `frontend/dist/`.
- `npm run preview` — preview the production build locally.
- `npm run lint` — run ESLint.

From `backend/`:

- `npm run dev` — start the API with Nodemon.
#
#
