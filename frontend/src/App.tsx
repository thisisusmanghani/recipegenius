import React, { useState } from 'react';
import axios from 'axios';
import { ChefHat, Search, Sparkles, Loader2, Clock } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

function App() {
  const [query, setQuery] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [maxTime, setMaxTime] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError('');
    setResponse('');

    try {
      const requestData: any = { query };
      
      if (ingredients.trim()) {
        requestData.ingredients = ingredients.split(',').map(i => i.trim());
      }
      
      if (maxTime) {
        requestData.max_time = parseInt(maxTime);
      }

      const result = await axios.post(`${API_URL}/api/recipes`, requestData);
      setResponse(result.data.recipes);
    } catch (err: any) {
      setError(err.response?.data?.detail || 'Failed to get recipes');
    } finally {
      setLoading(false);
    }
  };

  const exampleQueries = [
    "Quick chicken dinner under 30 minutes",
    "Healthy vegetarian pasta recipe",
    "Easy breakfast with eggs",
    "Dessert with chocolate and bananas"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-md border-b-4 border-orange-500">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <ChefHat className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                RecipeGenius
              </h1>
              <p className="text-orange-700 text-sm">Your Personal AI Chef</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Search Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-2xl border border-orange-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-orange-500" />
              What Would You Like to Cook Today?
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <textarea
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Describe what you want to make... (e.g., 'I have chicken and rice, need a healthy dinner')"
                  className="w-full px-4 py-4 bg-orange-50 border-2 border-orange-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none h-32"
                />
                <Search className="absolute top-4 right-4 w-5 h-5 text-gray-400" />
              </div>

              {/* Additional Filters */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Available Ingredients (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    placeholder="chicken, rice, tomatoes"
                    className="w-full px-4 py-3 bg-orange-50 border-2 border-orange-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Max Cooking Time (minutes)
                  </label>
                  <input
                    type="number"
                    value={maxTime}
                    onChange={(e) => setMaxTime(e.target.value)}
                    placeholder="30"
                    className="w-full px-4 py-3 bg-orange-50 border-2 border-orange-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <button
                type="submit"
                disabled={loading || !query.trim()}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-4 rounded-xl transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Finding Recipes...
                  </>
                ) : (
                  <>
                    <ChefHat className="w-5 h-5" />
                    Get Recipes
                  </>
                )}
              </button>
            </form>

            {/* Example Queries */}
            <div className="mt-6">
              <p className="text-gray-600 text-sm mb-3">Try these examples:</p>
              <div className="flex flex-wrap gap-2">
                {exampleQueries.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => setQuery(example)}
                    className="px-3 py-1.5 bg-orange-100 hover:bg-orange-200 border border-orange-300 rounded-full text-sm text-orange-800 transition-colors"
                  >
                    {example}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-red-50 border-2 border-red-300 rounded-xl p-4 text-red-800">
              <p className="font-semibold">Error</p>
              <p className="text-sm">{error}</p>
            </div>
          </div>
        )}

        {/* Results Display */}
        {response && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-2xl border border-green-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <ChefHat className="w-6 h-6 text-green-600" />
                Your Personalized Recipes
              </h2>
              <div 
                className="prose prose-orange max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ 
                  __html: response.replace(/\n/g, '<br />') 
                }}
              />
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-20 bg-white border-t-4 border-orange-500 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm">
            Built with ❤️ using Agno AI, OpenAI GPT-4o, and React
          </p>
          <p className="text-gray-400 text-xs mt-2">
            © 2024 RecipeGenius. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
