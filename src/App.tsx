import { useState, useEffect } from 'react';
import { JohnPorkCall } from './components/JohnPorkCall';
import { getIP, type getIpProps } from './components/getIP';


export default function App() {
  const [callActive, setCallActive] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [ipData, setIpData] = useState<getIpProps>()

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  const triggerDownload = () => {
    setCallActive(true);
  };

  const projects = [
    { id: 'PC-001', title: 'Conquest.io', type: 'Abstract RTS', size: '14.2MB', desc: 'A node-based strategy for those who find reality too disorganized.' },
    { id: 'LLM-99', title: 'Local-Slave', type: 'AI Inference', size: '2.1GB', desc: 'Running models on your toaster because privacy is a human right, allegedly.' },
    { id: 'PHY-04', title: 'Avadh-Sim', type: 'Physics Engine', size: '840KB', desc: 'Solving Lagrangians so you don’t have to. Gravity is togglable.' },
  ];
useEffect(() => {
  async function getData() {
    const data = await getIP()
    setIpData(data)
  }
  getData()
}, [])
  

  return (
    <div className="min-h-screen bg-[#f4f4f4] text-[#121212] font-sans selection:bg-black selection:text-white">
      {callActive && (
        <JohnPorkCall
          onAccept={() => setCallActive(false)}
          onDecline={() => setCallActive(false)}
        />
      )}

      {/* HEADER: The "International" Grid */}
      <header className="grid grid-cols-12 border-b border-black p-6 items-end">
        <div className="col-span-12 md:col-span-8">
          <h1 className="text-[12vw] font-black uppercase leading-[0.8] tracking-tighter">
            Archive<span className="text-stroke-1">.Index</span>
          </h1>
        </div>
        <div className="col-span-12 md:col-span-4 text-right font-mono text-xs uppercase leading-relaxed mt-8 md:mt-0">
          <p>{`User: ${ipData?.org || `🤨`}`}</p>
          <p>{`Loc: ${ipData?.city || `🤨`}, ${ipData?.region || `🤨`}`}</p>
          <p>{`IP Address: ${ipData?.ip || `🤨`}`}</p>
          <p>Local_Time: {time}</p>
          <p className="text-red-600 font-bold mt-2">Status: Systems Operable</p>
        </div>
      </header>

      {/* WITTY INTERSTITIAL */}
      <section className="p-6 border-b border-black bg-black text-white flex justify-between items-center overflow-hidden">
        <div className="whitespace-nowrap animate-marquee flex gap-20">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-xs uppercase tracking-[0.4em] font-medium">
              <p>"Logic is the beginning of wisdom, not the end." — Some dead guy. &nbsp;&nbsp; ● &nbsp;&nbsp; DO NOT CLICK THE BUTTONS WITHOUT SUPERVISION.</p>
            </span>
          ))}
        </div>
      </section>

      {/* PROJECT MANIFEST */}
      <main className="grid grid-flow-col auto-cols-[300px]">
        {projects.map((p, index) => (
          <div key={p.id} className="lg:col-span-4 border-r border-b border-black p-8 group hover:bg-white transition-all duration-500">
            <div className="flex justify-between items-start mb-20">
              <span className="font-mono text-xs p-1 border border-black">{p.id}</span>
              <span className="font-mono text-[10px] uppercase opacity-40">Entry_{index + 1}</span>
            </div>

            <h2 className="text-5xl font-black uppercase mb-4 tracking-tighter group-hover:translate-x-2 transition-transform">
              {p.title}
            </h2>
            <p className="text-xs uppercase font-bold tracking-widest text-gray-500 mb-6">{p.type} // {p.size}</p>
            <p className="text-lg leading-snug mb-12 h-24 overflow-hidden italic text-gray-700">
              "{p.desc}"
            </p>

            <button
              onClick={() => triggerDownload()}
              className="w-full border-2 border-black py-5 text-sm font-black uppercase tracking-widest hover:bg-black hover:text-white transition-colors relative overflow-hidden group/btn"
            >
              <span className="relative z-10 italic">Initialize Payload Fetch</span>
              <div className="absolute inset-0 bg-yellow-400 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
        ))}

        {/* THE "STUPIDS" PLACEHOLDER */}
        <div className="lg:col-span-12 border-b border-black p-12 flex items-center justify-center bg-gray-200">
          <p className="font-mono text-[10px] uppercase tracking-[1em] opacity-30">
            Reserved for projects too ambitious for your current RAM capacity.
          </p>
        </div>
      </main>

      <footer className="p-6 flex justify-between font-mono text-[10px] uppercase opacity-50">
        <span>Built with Nihilism & React</span>
        <span>© 2026 NIRGRANTHI.ORG</span>
      </footer>
    </div>
  );
}