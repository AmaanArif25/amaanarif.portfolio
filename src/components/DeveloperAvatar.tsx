import React, { useState } from 'react';

interface DeveloperAvatarProps {
  className?: string;
}

export const DeveloperAvatar: React.FC<DeveloperAvatarProps> = ({ className = '' }) => {
  const [imageError, setImageError] = useState(false);

  // If there's a local profile_avatar.png image provided by the user in public/assets or assets,
  // we try to load it first. If it fails, we fall back to our high-fidelity custom stylized vector SVG.
  if (!imageError) {
    return (
      <div className={`relative ${className}`}>
        <img
          src="./image.png"
          alt="Amaan Arif Profile"
          onError={() => setImageError(true)}
          referrerPolicy="no-referrer"
          className="w-full h-full rounded-full object-cover border-4 border-clinical-border shadow-md"
        />
        {/* Glow indicator */}
        <div className="absolute -inset-1 rounded-full border border-emerald-500/20 animate-pulse pointer-events-none" />
      </div>
    );
  }

  // High-fidelity fallback SVG styled to match the user's uploaded avatar perfectly
  return (
    <div className={`relative select-none ${className}`}>
      {/* Outer ambient glow */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-500/10 to-[#007acc]/15 rounded-full blur-xl opacity-60 animate-pulse" />
      
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full rounded-full border-4 border-[#252526] shadow-2xl relative z-10"
      >
        {/* Definitions for clip paths, glows, and gradients */}
        <defs>
          <clipPath id="avatar-circle">
            <circle cx="200" cy="200" r="196" />
          </clipPath>
          <linearGradient id="bg-grad" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0b0f19" />
            <stop offset="50%" stopColor="#111827" />
            <stop offset="100%" stopColor="#081528" />
          </linearGradient>
          <linearGradient id="skin-grad" x1="200" y1="120" x2="200" y2="280" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fcd34d" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
          <linearGradient id="hair-grad" x1="200" y1="40" x2="200" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2c2c2c" />
            <stop offset="100%" stopColor="#121212" />
          </linearGradient>
        </defs>

        {/* Circular Frame Area */}
        <g clipPath="url(#avatar-circle)">
          {/* Background Gradient */}
          <rect width="400" height="400" fill="url(#bg-grad)" />

          {/* Matrix & Bioinfortmatics / Python Code Lines visual aesthetic */}
          <g opacity="0.15" className="font-mono" style={{ fontFamily: 'monospace', fontSize: '9px' }}>
            <text x="25" y="40" fill="#34d399">_kind = "Appt.getInsend(line)"</text>
            <text x="25" y="60" fill="#34d399">if counts *==</text>
            <text x="45" y="80" fill="#60a5fa">return addr(1)</text>
            
            <text x="25" y="110" fill="#f87171">class JavaScript</text>
            <text x="40" y="130" fill="#34d399">while(tre, function) {'{'}</text>
            <text x="60" y="150" fill="#60a5fa">constee = drg</text>
            <text x="60" y="170" fill="#34d399">resom = alone_for_nt()</text>
            
            <text x="25" y="210" fill="#34d399">class JavaScript {'{'}</text>
            <text x="40" y="230" fill="#60a5fa">pything = backendf()</text>
            
            <text x="25" y="270" fill="#34d399">apr.route( = aln )</text>
            <text x="25" y="290" fill="#f87171">if (dxt: e == '*') {'{'}</text>
            <text x="45" y="310" fill="#60a5fa">seif.genontidt</text>
            
            {/* Right side matrix bits */}
            <text x="240" y="50" fill="#60a5fa">while(n) {'{'}</text>
            <text x="250" y="70" fill="#34d399">se10111000000000101</text>
            <text x="250" y="90" fill="#10b981">iad1010010101010101</text>
            <text x="270" y="110" fill="#34d399">1011100101010111</text>
            
            <text x="240" y="150" fill="#f87171">iamestage("ipt") {'{'}</text>
            <text x="250" y="170" fill="#60a5fa">me = pything.ideep</text>
            
            <text x="245" y="210" fill="#34d399">id = {'{'}</text>
            <text x="255" y="230" fill="#60a5fa">et.kendAupple uf = cd</text>
            <text x="245" y="250" fill="#34d399">amt system + call.amake</text>
            <text x="260" y="270" fill="#34d399">solid(irizins, +0)</text>
            
            <text x="240" y="310" fill="#10b981">sdrened.log("frourec")</text>
            <text x="240" y="330" fill="#60a5fa">{'}'}</text>
          </g>

          {/* Holographic grid lines */}
          <path d="M 0 100 L 400 100 M 0 200 L 400 200 M 0 300 L 400 300" stroke="#34d399" strokeWidth="0.5" strokeOpacity="0.08" />
          <path d="M 100 0 L 100 400 M 200 0 L 200 400 M 300 0 L 300 400" stroke="#34d399" strokeWidth="0.5" strokeOpacity="0.08" />

          {/* Body / Shoulders & Turtleneck */}
          {/* Black Turtleneck */}
          <path d="M120 400 C120 330, 160 300, 200 300 C240 300, 280 330, 280 400 Z" fill="#1e1e24" />
          {/* Collar of turtleneck */}
          <ellipse cx="200" cy="305" rx="42" ry="15" fill="#151518" />
          <rect x="158" y="285" width="84" height="25" rx="6" fill="#1e1e24" />
          {/* Neck crease details */}
          <path d="M175 295 Q200 302 225 295" stroke="#2a2a35" strokeWidth="2" strokeLinecap="round" />
          
          {/* Mini matrix glowing neck matrix details */}
          <g opacity="0.3" className="font-mono" style={{ fontFamily: 'monospace', fontSize: '5px' }}>
            <text x="170" y="294" fill="#34d399">1011</text>
            <text x="215" y="294" fill="#60a5fa">012</text>
          </g>

          {/* Face structure */}
          {/* Neck */}
          <rect x="175" y="210" width="50" height="80" rx="4" fill="url(#skin-grad)" />
          {/* Neck shadow */}
          <path d="M175 240 C190 260, 210 260, 225 240 L225 290 L175 290 Z" fill="#b45309" opacity="0.2" />

          {/* Ears */}
          <circle cx="130" cy="205" r="16" fill="url(#skin-grad)" />
          <circle cx="270" cy="205" r="16" fill="url(#skin-grad)" />
          <circle cx="130" cy="205" r="10" fill="#d97706" opacity="0.3" />
          <circle cx="270" cy="205" r="10" fill="#d97706" opacity="0.3" />

          {/* Chin / Head Shape */}
          <path d="M136 170 C136 240, 150 265, 200 265 C250 265, 264 240, 264 170 C264 125, 250 120, 200 120 C150 120, 136 125, 136 170 Z" fill="url(#skin-grad)" />

          {/* Eyes */}
          <ellipse cx="172" cy="184" rx="15" ry="10" fill="#ffffff" />
          <ellipse cx="228" cy="184" rx="15" ry="10" fill="#ffffff" />
          {/* Pupils */}
          <circle cx="172" cy="184" r="6" fill="#1e293b" />
          <circle cx="228" cy="184" r="6" fill="#1e293b" />
          <circle cx="174" cy="182" r="2" fill="#ffffff" />
          <circle cx="230" cy="182" r="2" fill="#ffffff" />

          {/* Spectacles (Glasses) - Dark Bold Outline with nice reflective bridge */}
          {/* Left Frame */}
          <rect x="150" y="168" width="44" height="32" rx="10" stroke="#101827" strokeWidth="5.5" fill="none" />
          {/* Right Frame */}
          <rect x="206" y="168" width="44" height="32" rx="10" stroke="#101827" strokeWidth="5.5" fill="none" />
          {/* Bridge */}
          <path d="M194 182 Q200 177 206 182" stroke="#101827" strokeWidth="5.5" strokeLinecap="round" fill="none" />
          {/* Side Temples (Arms) */}
          <path d="M150 182 H132" stroke="#101827" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M250 182 H268" stroke="#101827" strokeWidth="4.5" strokeLinecap="round" />

          {/* Eyebrows */}
          <path d="M150 162 Q172 153 192 165" stroke="#1b1b1b" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M208 162 Q228 153 250 165" stroke="#1b1b1b" strokeWidth="4" strokeLinecap="round" fill="none" />

          {/* Nose */}
          <path d="M194 195 Q200 190 206 195 Q200 220 200 220 Z" fill="#d97706" opacity="0.3" />
          <path d="M196 218 Q200 221 204 218" stroke="#b45309" strokeWidth="2" strokeLinecap="round" fill="none" />

          {/* Mouth (Friendly White Smile) */}
          <path d="M165 228 Q200 252 235 228" fill="#ffffff" />
          {/* Smile outline */}
          <path d="M163 226 Q200 255 237 226" stroke="#1e293b" strokeWidth="3.5" strokeLinecap="round" fill="none" />

          {/* Beard Shade / Subtle Stubble */}
          <path d="M140 215 C140 252, 160 262, 200 262 C240 262, 260 252, 260 215 C260 240, 240 260, 200 260 C160 260, 140 240, 140 215 Z" fill="#52525b" opacity="0.15" />

          {/* Hair - Stylish crop with a nice partition */}
          <path d="M132 160 C125 150, 130 110, 150 95 C170 80, 210 75, 235 88 C255 98, 270 120, 271 145 C272 155, 268 160, 266 150 C264 125, 255 110, 235 105 C215 100, 185 102, 170 115 C155 125, 145 138, 144 148 C141 155, 135 165, 132 160 Z" fill="url(#hair-grad)" />
          {/* Additional details inside hair */}
          <path d="M145 125 C155 112, 175 106, 195 112 C215 118, 235 110, 248 118" stroke="#374151" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M135 145 Q150 135 160 145" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M265 140 Q250 130 255 145" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        </g>

        {/* Status ring overlay */}
        <circle cx="200" cy="200" r="196" stroke="#10b981" strokeWidth="2" strokeDasharray="12 8" opacity="0.4" />
      </svg>

      {/* Online indicator badge overlapping */}
      <div className="absolute bottom-2 right-2 z-20 bg-[#121214] border border-[#22c55e]/30 px-2 py-0.5 rounded-full flex items-center space-x-1 shadow-lg">
        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
        <span className="font-mono text-[7.5px] text-emerald-400 font-bold uppercase tracking-wider">ACTIVE</span>
      </div>
    </div>
  );
};
