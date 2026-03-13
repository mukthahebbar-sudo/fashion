import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Shirt, Footprints, Watch, Lightbulb, RefreshCw, ChevronRight, Palette, Share2, CheckCircle2 } from 'lucide-react';
import { MOODS, OCCASIONS, WEATHERS, FASHION_TIPS, getOutfitSuggestion } from './constants';
import { Mood, Occasion, Weather, Outfit } from './types';

export default function App() {
  const [mood, setMood] = useState<Mood>('happy');
  const [occasion, setOccasion] = useState<Occasion>('college');
  const [weather, setWeather] = useState<Weather>('sunny');
  const [suggestion, setSuggestion] = useState<Outfit | null>(null);
  const [dailyTip, setDailyTip] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    setDailyTip(FASHION_TIPS[Math.floor(Math.random() * FASHION_TIPS.length)]);
  }, []);

  const handleSuggest = () => {
    setIsGenerating(true);
    // Simulate a brief "thinking" state for better UX
    setTimeout(() => {
      const newSuggestion = getOutfitSuggestion(mood, occasion, weather);
      setSuggestion(newSuggestion);
      setIsGenerating(false);
    }, 600);
  };

  const handleReset = () => {
    setSuggestion(null);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A] font-sans selection:bg-emerald-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles size={14} />
            AI-Powered Fashion Assistant
          </motion.div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tight mb-4"
          >
            Smart Outfit <span className="text-emerald-600">Suggestion</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-md mx-auto"
          >
            Crafting the perfect look for your mood, the weather, and every special moment.
          </motion.p>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Input Section */}
          <section className="lg:col-span-5 space-y-8 bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-gray-100">
            {/* Mood Selection */}
            <div>
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">
                Current Vibe
              </label>
              <div className="grid grid-cols-2 gap-3">
                {MOODS.map((m) => (
                  <button
                    key={m.value}
                    onClick={() => setMood(m.value)}
                    className={`flex items-center gap-3 p-4 rounded-2xl border-2 transition-all duration-300 ${
                      mood === m.value
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-700 shadow-md shadow-emerald-100'
                        : 'border-gray-50 bg-gray-50 hover:border-gray-200 text-gray-600'
                    }`}
                  >
                    <span className="text-2xl">{m.emoji}</span>
                    <span className="font-bold text-sm tracking-tight">{m.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Occasion Selection */}
            <div>
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">
                The Occasion
              </label>
              <div className="grid grid-cols-2 gap-3">
                {OCCASIONS.map((o) => (
                  <button
                    key={o.value}
                    onClick={() => setOccasion(o.value)}
                    className={`flex items-center gap-3 p-4 rounded-2xl border-2 transition-all duration-300 ${
                      occasion === o.value
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-700 shadow-md shadow-emerald-100'
                        : 'border-gray-50 bg-gray-50 hover:border-gray-200 text-gray-600'
                    }`}
                  >
                    <span className="text-2xl">{o.emoji}</span>
                    <span className="font-bold text-sm tracking-tight">{o.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Weather Selection */}
            <div>
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">
                Outside World
              </label>
              <div className="grid grid-cols-2 gap-3">
                {WEATHERS.map((w) => (
                  <button
                    key={w.value}
                    onClick={() => setWeather(w.value)}
                    className={`flex items-center gap-3 p-4 rounded-2xl border-2 transition-all duration-300 ${
                      weather === w.value
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-700 shadow-md shadow-emerald-100'
                        : 'border-gray-50 bg-gray-50 hover:border-gray-200 text-gray-600'
                    }`}
                  >
                    <span className="text-2xl">{w.emoji}</span>
                    <span className="font-bold text-sm tracking-tight">{w.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleSuggest}
              disabled={isGenerating}
              className="w-full py-5 bg-[#1A1A1A] text-white rounded-2xl font-black text-lg hover:bg-emerald-600 transition-all active:scale-95 flex items-center justify-center gap-2 group disabled:opacity-50"
            >
              {isGenerating ? (
                <RefreshCw className="animate-spin" size={24} />
              ) : (
                <>
                  Generate Look
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </section>

          {/* Output Section */}
          <section className="lg:col-span-7 sticky top-8">
            <AnimatePresence mode="wait">
              {suggestion ? (
                <motion.div
                  key="suggestion"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 overflow-hidden border border-gray-100"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Image Column */}
                    <div className="relative h-64 md:h-full min-h-[400px]">
                      <img 
                        src={suggestion.imageUrl} 
                        alt={suggestion.vibe}
                        className="absolute inset-0 w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r" />
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-80 mb-1">The Vibe</p>
                        <h2 className="text-3xl font-black tracking-tighter">{suggestion.vibe}</h2>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className="p-8 flex flex-col">
                      <div className="flex justify-between items-center mb-8">
                        <div className="flex gap-1">
                          {suggestion.colors.map((color, i) => (
                            <div 
                              key={i} 
                              className="w-6 h-6 rounded-full border-2 border-white shadow-sm" 
                              style={{ backgroundColor: color }}
                              title="Suggested Color"
                            />
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400">
                            <Share2 size={18} />
                          </button>
                          <button 
                            onClick={handleReset}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400"
                          >
                            <RefreshCw size={18} />
                          </button>
                        </div>
                      </div>

                      <div className="space-y-6 flex-grow">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                            <Shirt size={20} />
                          </div>
                          <div>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Attire</p>
                            <p className="text-lg font-bold leading-tight">{suggestion.top} & {suggestion.bottom}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                            <Footprints size={20} />
                          </div>
                          <div>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Footwear</p>
                            <p className="text-lg font-bold leading-tight">{suggestion.footwear}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                            <Watch size={20} />
                          </div>
                          <div>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Accents</p>
                            <p className="text-lg font-bold leading-tight">{suggestion.accessories}</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 pt-8 border-t border-gray-50">
                        <div className="flex items-center gap-2 text-emerald-600 mb-2">
                          <CheckCircle2 size={16} />
                          <span className="text-[10px] font-black uppercase tracking-widest">Stylist Note</span>
                        </div>
                        <p className="text-sm text-gray-600 italic leading-relaxed">
                          "{suggestion.tip}"
                        </p>
                      </div>

                      <button
                        onClick={handleSuggest}
                        className="mt-8 w-full py-4 bg-emerald-600 text-white rounded-2xl font-bold hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-100"
                      >
                        <RefreshCw size={18} />
                        Try Another Look
                      </button>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white border-2 border-dashed border-gray-200 p-12 rounded-[2.5rem] flex flex-col items-center justify-center text-center min-h-[500px]"
                >
                  <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6 relative">
                    <div className="absolute inset-0 bg-emerald-500/10 rounded-full animate-ping" />
                    <Palette size={40} className="text-emerald-500 relative z-10" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">Your Look is One Click Away</h3>
                  <p className="text-gray-400 max-w-xs leading-relaxed">
                    Tell us how you feel and where you're going. We'll handle the style.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Daily Tip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 bg-white p-6 rounded-[2rem] border border-gray-100 flex items-start gap-4 shadow-sm"
            >
              <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl">
                <Lightbulb size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">Style Wisdom</p>
                <p className="text-gray-700 font-bold tracking-tight">{dailyTip}</p>
              </div>
            </motion.div>
          </section>
        </main>

        <footer className="mt-20 text-center text-gray-400 text-xs font-medium pb-8 uppercase tracking-[0.3em]">
          <p>© 2026 Smart Outfit Suggestion • Curated with Style</p>
        </footer>
      </div>
    </div>
  );
}
