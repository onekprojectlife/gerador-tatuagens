'use client';

import { useState } from 'react';
import { Sparkles, Wand2, Lock, Download, Heart, Share2, Maximize2, Image as ImageIcon, Camera, Grid3x3, User } from 'lucide-react';
import { TATTOO_STYLES, DESIGN_PALETTES, DETAIL_LEVELS, LINE_TYPES, SURPRISE_PROMPTS, MOCK_GENERATED_TATTOOS } from '@/lib/constants';
import type { FilterOptions, GeneratedTattoo } from '@/lib/types';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('realistic');
  const [filters, setFilters] = useState<FilterOptions>({
    style: 'realistic',
    palette: 'blackAndGray',
    detailLevel: 'medium',
    lineType: 'fine',
  });
  const [generatedTattoos, setGeneratedTattoos] = useState<GeneratedTattoo[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState<'generate' | 'gallery' | 'preview'>('generate');

  const handleSurpriseMe = () => {
    const randomPrompt = SURPRISE_PROMPTS[Math.floor(Math.random() * SURPRISE_PROMPTS.length)];
    setPrompt(randomPrompt);
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate generation
    setTimeout(() => {
      setGeneratedTattoos(MOCK_GENERATED_TATTOOS);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-amber-500" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent">
                InkAI Studio
              </h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <button className="text-zinc-400 hover:text-white transition-colors">Features</button>
              <button className="text-zinc-400 hover:text-white transition-colors">How it works</button>
              <button className="text-zinc-400 hover:text-white transition-colors">Gallery</button>
              <button className="text-zinc-400 hover:text-white transition-colors">Contact</button>
            </nav>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 text-sm text-zinc-300 hover:text-white transition-colors">
                Sign in
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-500/20">
                Join PRO
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            AI Tattoo Generator
          </h2>
          <p className="text-xl text-zinc-400 mb-6">
            Create unique, custom tattoo designs in seconds with AI
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-zinc-500">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 border-2 border-zinc-900" />
              ))}
            </div>
            <span>Trusted by 100k+ users</span>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('generate')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
              activeTab === 'generate'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold shadow-lg shadow-amber-500/20'
                : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
            }`}
          >
            <Wand2 className="w-5 h-5" />
            Generate
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
              activeTab === 'preview'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold shadow-lg shadow-amber-500/20'
                : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
            }`}
          >
            <Camera className="w-5 h-5" />
            Skin Preview
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
              activeTab === 'gallery'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold shadow-lg shadow-amber-500/20'
                : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
            }`}
          >
            <Grid3x3 className="w-5 h-5" />
            Gallery
          </button>
        </div>

        {/* Generate Tab */}
        {activeTab === 'generate' && (
          <div className="space-y-8">
            {/* Prompt Input */}
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 shadow-2xl">
              <label className="block text-sm font-medium text-zinc-300 mb-3">
                Describe your tattoo
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g., japanese house with flames, dragons, smoky details..."
                className="w-full h-32 bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
              />
              <div className="flex items-center gap-3 mt-4">
                <button
                  onClick={handleGenerate}
                  disabled={isGenerating || !prompt}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 disabled:from-zinc-700 disabled:to-zinc-800 text-black disabled:text-zinc-500 font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-amber-500/20 disabled:shadow-none"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      Generate Tattoo
                    </>
                  )}
                </button>
                <button
                  onClick={handleSurpriseMe}
                  className="px-6 py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] flex items-center gap-2"
                >
                  <Wand2 className="w-5 h-5" />
                  Surprise me!
                </button>
              </div>
            </div>

            {/* Style Selection */}
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 shadow-2xl">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                Style
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
                {TATTOO_STYLES.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => !style.isPro && setSelectedStyle(style.id)}
                    className={`relative group overflow-hidden rounded-xl transition-all duration-300 ${
                      selectedStyle === style.id
                        ? 'ring-2 ring-amber-500 scale-105'
                        : 'hover:scale-105'
                    } ${style.isPro ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className="aspect-square relative">
                      <img
                        src={style.image}
                        alt={style.name}
                        className={`w-full h-full object-cover ${style.isPro ? 'blur-sm' : ''}`}
                      />
                      {style.isPro && (
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                          <Lock className="w-6 h-6 text-amber-500" />
                        </div>
                      )}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-2">
                      <p className="text-xs font-medium text-center">{style.name}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Design Choices */}
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 shadow-2xl">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-amber-500" />
                Design Choices
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Palette */}
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Palette</label>
                  <div className="flex gap-2">
                    {DESIGN_PALETTES.map((palette) => (
                      <button
                        key={palette.id}
                        onClick={() => setFilters({ ...filters, palette: palette.value as any })}
                        className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                          filters.palette === palette.value
                            ? 'bg-amber-500 text-black'
                            : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                        }`}
                      >
                        {palette.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Detail Level */}
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Detail Level</label>
                  <div className="flex gap-2">
                    {DETAIL_LEVELS.map((level) => (
                      <button
                        key={level.id}
                        onClick={() => !level.isPro && setFilters({ ...filters, detailLevel: level.value as any })}
                        className={`relative flex-1 px-3 py-3 rounded-lg font-medium transition-all duration-300 ${
                          filters.detailLevel === level.value
                            ? 'bg-amber-500 text-black'
                            : level.isPro
                            ? 'bg-zinc-800 text-zinc-600 cursor-not-allowed'
                            : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                        }`}
                      >
                        {level.isPro && <Lock className="w-3 h-3 absolute top-1 right-1" />}
                        <span className="text-xs">{level.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Line Type */}
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Line Type</label>
                  <div className="flex gap-2">
                    {LINE_TYPES.map((line) => (
                      <button
                        key={line.id}
                        onClick={() => !line.isPro && setFilters({ ...filters, lineType: line.value as any })}
                        className={`relative flex-1 px-3 py-3 rounded-lg font-medium transition-all duration-300 ${
                          filters.lineType === line.value
                            ? 'bg-amber-500 text-black'
                            : line.isPro
                            ? 'bg-zinc-800 text-zinc-600 cursor-not-allowed'
                            : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                        }`}
                      >
                        {line.isPro && <Lock className="w-3 h-3 absolute top-1 right-1" />}
                        <span className="text-xs">{line.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Upload Reference */}
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Reference</label>
                  <button className="w-full px-4 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2">
                    <ImageIcon className="w-4 h-4" />
                    Upload Image
                  </button>
                </div>
              </div>
            </div>

            {/* Results */}
            {generatedTattoos.length > 0 && (
              <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 shadow-2xl">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Grid3x3 className="w-5 h-5 text-amber-500" />
                  Results
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {generatedTattoos.map((tattoo) => (
                    <div
                      key={tattoo.id}
                      className="group relative bg-zinc-800/50 rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300 shadow-lg"
                    >
                      <div className="aspect-square relative">
                        <img
                          src={tattoo.image}
                          alt={tattoo.prompt}
                          className={`w-full h-full object-cover ${tattoo.isPro ? 'blur-md' : ''}`}
                        />
                        {tattoo.isPro && (
                          <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center gap-3">
                            <Lock className="w-12 h-12 text-amber-500" />
                            <button className="px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-500/20">
                              Unlock PRO
                            </button>
                          </div>
                        )}
                        {!tattoo.isPro && (
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                              <div className="flex gap-2">
                                <button className="p-2 bg-zinc-900/80 hover:bg-amber-500 rounded-full transition-colors duration-300">
                                  <Heart className="w-5 h-5" />
                                </button>
                                <button className="p-2 bg-zinc-900/80 hover:bg-amber-500 rounded-full transition-colors duration-300">
                                  <Download className="w-5 h-5" />
                                </button>
                                <button className="p-2 bg-zinc-900/80 hover:bg-amber-500 rounded-full transition-colors duration-300">
                                  <Share2 className="w-5 h-5" />
                                </button>
                              </div>
                              <button className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-full transition-colors duration-300 text-sm">
                                Variations
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Skin Preview Tab */}
        {activeTab === 'preview' && (
          <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 shadow-2xl text-center">
            <Camera className="w-16 h-16 text-amber-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Skin Preview</h3>
            <p className="text-zinc-400 mb-6">
              Upload a photo or use AR to see how your tattoo looks on your body
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <button className="flex flex-col items-center gap-3 p-6 bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-all duration-300 hover:scale-105">
                <ImageIcon className="w-8 h-8 text-amber-500" />
                <span className="font-semibold">Upload Photo</span>
                <span className="text-sm text-zinc-400">Apply tattoo to your photo</span>
              </button>
              <button className="relative flex flex-col items-center gap-3 p-6 bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-all duration-300 hover:scale-105">
                <Lock className="w-4 h-4 text-amber-500 absolute top-2 right-2" />
                <Camera className="w-8 h-8 text-amber-500" />
                <span className="font-semibold">AR Preview</span>
                <span className="text-sm text-zinc-400">Real-time camera preview</span>
                <span className="text-xs text-amber-500 font-semibold">PRO</span>
              </button>
            </div>
          </div>
        )}

        {/* Gallery Tab */}
        {activeTab === 'gallery' && (
          <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 shadow-2xl text-center">
            <User className="w-16 h-16 text-amber-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Your Gallery</h3>
            <p className="text-zinc-400 mb-6">
              Save and organize your favorite tattoo designs
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-500/20">
              Sign in to view gallery
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-black/50 backdrop-blur-sm mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-zinc-500 text-sm">
            <p>© 2024 InkAI Studio. Create unique tattoos with AI.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
