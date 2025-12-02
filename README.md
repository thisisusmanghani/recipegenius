# 👨‍🍳 RecipeGenius - Your Personal AI Chef

![RecipeGenius Logo](./frontend/public/logo.png)

RecipeGenius is an intelligent recipe recommendation system powered by AI that provides personalized cooking suggestions based on your ingredients, dietary preferences, and time constraints.

## ✨ Features

- 🥘 **Smart Ingredient Matching** - Get recipes based on what you have
- 🌱 **Dietary Filters** - Vegan, vegetarian, gluten-free, keto, and more
- ⏱️ **Time-Based Search** - Find quick meals or elaborate dishes
- 📊 **Nutritional Information** - Calories, macros, and health data
- 🎨 **Beautiful Food Photography** - Gorgeous recipe presentations
- 🔄 **Ingredient Substitutions** - Smart alternatives for missing ingredients
- 📱 **Mobile Responsive** - Cook from any device

## 🚀 Tech Stack

### Backend
- **Python 3.10+**
- **FastAPI** - Modern web framework
- **Agno AI** - Multi-agent framework
- **OpenAI GPT-4o** - Advanced AI
- **Exa API** - Recipe search

### Frontend
- **React 18+** with Vite
- **TypeScript**
- **TailwindCSS**
- **Axios**
- **Lucide Icons**

## 📦 Installation

### Prerequisites
- Python 3.10 or higher
- Node.js 18+ and npm
- OpenAI API key
- Exa API key

### Backend Setup

```bash
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
cp .env.example .env
# Add your API keys to .env

# Run the server
python main.py
```

### Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Create .env file
cp .env.example .env
# Configure API URL

# Run development server
npm run dev
```

## 🔧 Configuration

### Environment Variables

**Backend (.env)**
```env
OPENAI_API_KEY=your_openai_api_key
EXA_API_KEY=your_exa_api_key
PORT=8000
HOST=0.0.0.0
CORS_ORIGINS=http://localhost:5173,https://your-domain.com
```

**Frontend (.env)**
```env
VITE_API_URL=http://localhost:8000
```

## 🌐 Deployment

### Heroku (Backend)

```bash
heroku create recipegenius-api
heroku config:set OPENAI_API_KEY=your_key
heroku config:set EXA_API_KEY=your_key
git push heroku main
```

### Vercel (Frontend)

```bash
cd frontend
vercel --prod
```

## 📖 API Documentation

Visit `http://localhost:8000/docs` for interactive API documentation.

### Main Endpoints

- `POST /api/recipes` - Get recipe recommendations
- `GET /api/health` - Health check
- `POST /api/chat` - Chat with the AI chef

## 🎨 Screenshots

_Add screenshots here_

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - see LICENSE file for details

## 👨‍💻 Author

**Your Name**
- Portfolio: [yourportfolio.com](https://yourportfolio.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourusername)

## 🙏 Acknowledgments

- Powered by [Agno AI](https://agno.com)
- Recipe data from [Exa API](https://exa.ai)
- AI by [OpenAI](https://openai.com)

---

⭐ If you like this project, please give it a star on GitHub!
