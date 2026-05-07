import johnPork from "./../assets/johnPork.jpg"

export const JohnPorkCall = ({ onAccept, onDecline }: {onAccept: () => void; onDecline: () => void;}) => {
  return (
    <div className="fixed inset-0 z-9999 bg-black/90 backdrop-blur-md flex items-center justify-center font-sans antialiased">
      <div className="w-full max-w-md bg-[#1a1a1a] border border-white/10 rounded-[3rem] p-12 text-center shadow-2xl scale-in-center">
        <div className="relative inline-block mb-8">
          <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping" />
          <img 
            src={johnPork}
            alt="Caller" 
            className="w-32 h-32 rounded-full border-4 border-green-500 relative z-10 grayscale brightness-125"
          />
        </div>
        
        <h2 className="text-white text-3xl font-medium tracking-tight">John Pork</h2>
        <p className="text-green-500 font-mono text-sm tracking-[0.2em] mt-2 uppercase">Incoming Encrypted Call...</p>
        
        <div className="mt-16 flex justify-between px-4">
          <button onClick={onDecline} className="group">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-500 transition-all shadow-lg shadow-red-900/40">
              <span className="text-white text-2xl rotate-135">📞</span>
            </div>
            <span className="text-xs text-white/40 mt-3 block uppercase tracking-widest">Decline</span>
          </button>
          
          <button onClick={onAccept} className="group">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center group-hover:bg-green-500 transition-all shadow-lg shadow-green-900/40 animate-pulse">
              <span className="text-white text-2xl">📞</span>
            </div>
            <span className="text-xs text-white/40 mt-3 block uppercase tracking-widest">Accept</span>
          </button>
        </div>
      </div>
    </div>
  );
};