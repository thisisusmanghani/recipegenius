# RecipeGenius — AI-Powered Recipe Recommendation System

RecipeGenius is an AI-powered recipe recommendation application that helps users discover meals based on available ingredients, dietary preferences, nutritional goals, and cooking time. It combines a React frontend with a Python FastAPI backend and AI-powered recipe discovery to simplify meal planning and cooking.

## Features

- **Ingredient-Based Recommendations:** Discover recipes using ingredients you already have.
- **Dietary Preferences:** Filter recipes according to dietary requirements, including vegan, vegetarian, gluten-free, and keto.
- **Time-Based Search:** Find recipes that match your available cooking time.
- **Nutritional Information:** Access available calorie, macronutrient, and nutritional details.
- **Recipe Discovery:** Explore relevant recipes through integrated search capabilities.
- **Ingredient Substitutions:** Find alternative ingredients when the original ingredients are unavailable.
- **AI Chef Assistant:** Interact with an AI assistant for recipe guidance and cooking suggestions.
- **Responsive Interface:** Access the application across desktop and mobile devices.

## Technology Stack

### Backend

- Python 3.10+
- FastAPI
- Agno AI agent framework
- OpenAI GPT-4o
- Exa API
- Uvicorn or the server configured by the project

### Frontend

- React 18+
- Vite
- TypeScript
- Tailwind CSS
- Axios
- Lucide Icons

## Project Structure

```text
RecipeGenius/
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── .env.example
├── frontend/
│   ├── public/
│   │   └── logo.png
│   ├── src/
│   ├── package.json
│   └── .env.example
├── .gitignore
├── LICENSE
└── README.md
```

*The structure above illustrates the expected organization. Actual filenames and directories may differ depending on the implementation.*

## Prerequisites

Install the following before running the application:

- Python 3.10 or later
- Node.js 18 or later
- npm
- An OpenAI API key
- An Exa API key

## Installation and Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd RecipeGenius
```

Replace `<repository-url>` with the actual Git repository URL.

### 2. Configure the Backend

Navigate to the backend directory and create a virtual environment.

```bash
cd backend
python -m venv venv
```

Activate the environment.

**Windows — Command Prompt:**

```bat
venv\Scripts\activate
```

**Windows — PowerShell:**

```powershell
.\venv\Scripts\Activate.ps1
```

**Linux or macOS:**

```bash
source venv/bin/activate
```

Install the Python dependencies.

```bash
pip install -r requirements.txt
```

Create the environment configuration file.

**Windows:**

```bat
copy .env.example .env
```

**Linux or macOS:**

```bash
cp .env.example .env
```

Configure the required API keys and application settings in `backend/.env`.

Start the backend using the project's configured entry point:

```bash
python main.py
```

If the application exposes a FastAPI instance named `app` in `main.py`, an alternative development command is:

```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

Use the command that matches the actual backend implementation.

### 3. Configure the Frontend

Open a separate terminal and navigate to the frontend directory.

```bash
cd frontend
npm install
```

Create the frontend environment file.

**Windows:**

```bat
copy .env.example .env
```

**Linux or macOS:**

```bash
cp .env.example .env
```

Configure the backend API URL in `frontend/.env`:

```env
VITE_API_URL=http://localhost:8000
```

Start the development server.

```bash
npm run dev
```

Open the local URL printed by Vite in the terminal, typically `http://localhost:5173`.

## Environment Configuration

### Backend Environment Variables

Configure the following values in `backend/.env`, adjusting them to match the application's actual configuration.

```env
OPENAI_API_KEY=your_openai_api_key
EXA_API_KEY=your_exa_api_key
PORT=8000
HOST=0.0.0.0
CORS_ORIGINS=http://localhost:5173
```

- `OPENAI_API_KEY`: Authenticates requests to the OpenAI API.
- `EXA_API_KEY`: Authenticates requests to the Exa API.
- `PORT`: Backend listening port, if supported by the application.
- `HOST`: Backend host binding, if supported by the application.
- `CORS_ORIGINS`: Allowed frontend origins, if used by the backend's CORS configuration.

Add production frontend origins to the CORS configuration when deploying.

### Frontend Environment Variables

Configure `frontend/.env`:

```env
VITE_API_URL=http://localhost:8000
```

The frontend uses this variable to identify the backend API base URL, provided the application code references `import.meta.env.VITE_API_URL`.

**Security:** Never expose API keys through frontend environment variables. Vite exposes variables prefixed with `VITE_` to client-side code.

## API Documentation

When the FastAPI backend is running with its default OpenAPI documentation enabled, visit:

- **Swagger UI:** http://localhost:8000/docs
- **ReDoc:** http://localhost:8000/redoc
- **OpenAPI Schema:** http://localhost:8000/openapi.json

### API Endpoints

The following endpoints describe the intended application interface and must be verified against the actual FastAPI routes.

| Method | Endpoint | Purpose |
|---|---|---|
| `POST` | `/api/recipes` | Request recipe recommendations |
| `GET` | `/api/health` | Check backend health |
| `POST` | `/api/chat` | Interact with the AI chef |

Request and response formats depend on the implemented API schemas. Refer to the interactive API documentation for the authoritative definitions.

## Deployment

### Backend Deployment

The FastAPI backend can be deployed to a compatible hosting platform, including Heroku.

Before deployment:

1. Configure the Python runtime and dependency installation.
2. Configure the application start command.
3. Set the required API keys through the hosting platform's environment configuration.
4. Configure CORS to allow requests from the deployed frontend.
5. Verify the health endpoint and application logs.

For Heroku, create an application and configure its secrets:

```bash
heroku create recipegenius-api
heroku config:set OPENAI_API_KEY=your_openai_api_key
heroku config:set EXA_API_KEY=your_exa_api_key
```

Deploy from the backend directory or a configured monorepo build setup:

```bash
git push heroku main
```

This command assumes that the Heroku application is configured to build and start the backend from the selected repository layout. A monorepo may require additional build configuration.

### Frontend Deployment

The React application can be deployed to Vercel.

From the frontend directory:

```bash
cd frontend
vercel --prod
```

Configure the production environment variable in the Vercel project settings:

```env
VITE_API_URL=https://your-backend-domain.com
```

Replace the example URL with the actual deployed backend URL, then rebuild and redeploy the frontend.

## Development

### Backend

```bash
cd backend
python main.py
```

### Frontend

```bash
cd frontend
npm run dev
```

### Production Build

Build the frontend for production:

```bash
cd frontend
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run these commands from the frontend directory.

## Troubleshooting

- **API connection errors:** Verify `VITE_API_URL`, backend availability, and CORS settings.
- **Missing API credentials:** Check that the backend environment variables are configured correctly.
- **Dependency installation failures:** Confirm the installed Python and Node.js versions meet the project requirements.
- **Missing recipes:** Verify the Exa API integration, OpenAI credentials, and backend logs.
- **Frontend build failures:** Run the build command and resolve TypeScript or dependency errors reported by Vite.

## Contributing

Contributions are welcome. To contribute:

1. Fork the repository.
2. Create a feature branch.
3. Implement and test your changes.
4. Submit a pull request with a clear description of the changes.

## License

This project is distributed under the MIT License, provided the repository's `LICENSE` file contains the applicable MIT License terms.

## Acknowledgments

- [Agno](https://www.agno.com/) — AI agent framework.
- [Exa](https://exa.ai/) — Search API.
- [OpenAI](https://openai.com/) — AI models and API.

---

If you find RecipeGenius useful, consider giving the repository a star on GitHub.
