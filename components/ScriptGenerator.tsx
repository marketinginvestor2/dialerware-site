import React, { useState, useRef, useEffect } from 'react';
import { generateSalesScript, generateScriptAudio } from '../services/geminiService';
import { Sparkles, Copy, Check, MessageSquare, Volume2, Loader2, StopCircle } from 'lucide-react';

// Helper: Decode base64 to byte array
function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

// Helper: Decode raw PCM data to AudioBuffer
async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number = 24000,
  numChannels: number = 1,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

export const ScriptGenerator: React.FC = () => {
  const [product, setProduct] = useState('');
  const [audience, setAudience] = useState('');
  const [displayScript, setDisplayScript] = useState('');
  const [spokenScript, setSpokenScript] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  
  // Audio state
  const [isAudioLoading, setIsAudioLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioSourceRef = useRef<AudioBufferSourceNode | null>(null);

  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  const handleGenerate = async () => {
    if (!product || !audience) return;
    stopAudio(); // Stop any current playback
    setIsLoading(true);
    setDisplayScript('');
    setSpokenScript('');
    
    const result = await generateSalesScript(product, audience);
    
    setDisplayScript(result.display);
    setSpokenScript(result.spoken);
    setIsLoading(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(displayScript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const stopAudio = () => {
    if (audioSourceRef.current) {
      try {
        audioSourceRef.current.stop();
      } catch (e) {
        // Ignore if already stopped
      }
      audioSourceRef.current = null;
    }
    setIsPlaying(false);
    setIsAudioLoading(false);
  };

  const handlePlayAudio = async () => {
    if (isPlaying) {
      stopAudio();
      return;
    }

    // Use spokenScript for audio if available, otherwise fallback to displayScript (cleaned best effort if empty)
    const textToSpeak = spokenScript || displayScript;
    if (!textToSpeak) return;

    setIsAudioLoading(true);
    
    try {
      const base64Audio = await generateScriptAudio(textToSpeak);
      
      if (!base64Audio) {
        console.error("No audio data received");
        setIsAudioLoading(false);
        return;
      }

      // Initialize AudioContext
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      }

      // Resume context if suspended (browser autoplay policy)
      if (audioContextRef.current.state === 'suspended') {
        await audioContextRef.current.resume();
      }

      const audioBytes = decode(base64Audio);
      const audioBuffer = await decodeAudioData(audioBytes, audioContextRef.current);

      const source = audioContextRef.current.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContextRef.current.destination);
      
      source.onended = () => {
        setIsPlaying(false);
        audioSourceRef.current = null;
      };

      audioSourceRef.current = source;
      source.start();
      setIsPlaying(true);
      
    } catch (error) {
      console.error("Error playing audio:", error);
    } finally {
      setIsAudioLoading(false);
    }
  };

  return (
    <section id="demo" className="py-24 bg-gradient-to-br from-indigo-50 to-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-violet-200 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white text-indigo-600 text-xs font-semibold mb-4 border border-indigo-100 shadow-sm">
            <Sparkles size={14} className="mr-2 fill-indigo-100" />
            AI Script Architect
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Build Your Winning Pitch</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Test the capabilities of our Generative AI engine. Create a custom, high-conversion cold call script in seconds designed to book more meetings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6 bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Product / Service</label>
              <input
                type="text"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                placeholder="e.g., Enterprise Cyber Security Solution"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Target Persona</label>
              <input
                type="text"
                value={audience}
                onChange={(e) => setAudience(e.target.value)}
                placeholder="e.g., CTOs at Fortune 500 Companies"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400"
              />
            </div>
            <button
              onClick={handleGenerate}
              disabled={isLoading || !product || !audience}
              className={`w-full py-3.5 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-md ${
                isLoading || !product || !audience
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-200 hover:-translate-y-0.5'
              }`}
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin h-5 w-5 text-white" />
                  Processing...
                </>
              ) : (
                <>
                  <Sparkles size={18} />
                  Generate Script
                </>
              )}
            </button>
          </div>

          <div className="bg-slate-900 rounded-2xl p-1 border border-slate-800 shadow-2xl relative">
             <div className="bg-slate-800 rounded-xl p-6 min-h-[360px] flex flex-col relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-500"></div>
                <div className="flex justify-between items-center mb-6 border-b border-slate-700 pb-4">
                    <div className="flex items-center gap-2">
                        <div className="bg-indigo-500/20 p-1.5 rounded-md">
                            <MessageSquare size={16} className="text-indigo-400" />
                        </div>
                        <span className="text-slate-300 font-medium text-sm">AI Agent Response</span>
                    </div>
                    <div className="flex items-center gap-2">
                        {displayScript && (
                          <button
                            onClick={handlePlayAudio}
                            disabled={isAudioLoading}
                            className={`text-xs flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all font-medium ${
                              isPlaying 
                              ? 'bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30' 
                              : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm'
                            }`}
                          >
                            {isAudioLoading ? (
                              <Loader2 size={14} className="animate-spin" />
                            ) : isPlaying ? (
                              <StopCircle size={14} />
                            ) : (
                              <Volume2 size={14} />
                            )}
                            {isAudioLoading ? 'Loading Voice...' : isPlaying ? 'Stop Voice' : 'Listen'}
                          </button>
                        )}
                        {displayScript && (
                            <button 
                            onClick={handleCopy}
                            className="text-xs flex items-center gap-1.5 bg-slate-700 hover:bg-slate-600 text-slate-300 px-3 py-1.5 rounded-md transition-colors border border-slate-600"
                            >
                            {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                            {copied ? 'Copied' : 'Copy'}
                            </button>
                        )}
                    </div>
                </div>

                {displayScript ? (
                <div className="prose prose-invert max-w-none">
                    <p className="text-slate-200 whitespace-pre-wrap leading-relaxed text-sm md:text-base font-light">
                        {displayScript}
                    </p>
                </div>
                ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-slate-500 gap-3">
                    <div className="w-16 h-16 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                        <Sparkles size={24} className="text-slate-600" />
                    </div>
                    <p className="text-sm italic">Enter details to generate your script...</p>
                </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
