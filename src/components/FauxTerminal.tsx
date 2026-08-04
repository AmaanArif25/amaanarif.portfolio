import { useEffect, useState, useRef, ReactNode } from 'react';
import { 
  Folder, 
  Search, 
  GitBranch, 
  Play, 
  Settings, 
  Terminal, 
  FileText, 
  FileCode, 
  ChevronDown, 
  ChevronRight,
  Info,
  Maximize2,
  RefreshCw,
  Bell,
  Sliders,
  CheckCircle2,
  Lock,
  Cpu,
  Trash2,
  Plus,
  X,
  ChevronUp,
  Columns,
  AlertCircle
} from 'lucide-react';

interface TerminalLine {
  command: string;
  response: string;
  delayBeforeResponse: number;
}

const TERMINAL_LINES: TerminalLine[] = [
  {
    command: "python bio_pipeline.py --analyze --target=HDAC1",
    response: "Initializing bio-analytics sequence alignment...\nTarget receptors matched [HDAC1 Gene ID: 3065]\nCalculating rosmarinic acid binding affinities...",
    delayBeforeResponse: 500
  },
  {
    command: "whoami",
    response: "amaan_arif (Computational Biology & AI/ML Researcher)",
    delayBeforeResponse: 300
  },
  {
    command: "cat current_status.txt",
    response: "M.Tech Bioinformatics (Recipient of National Fellowship)\nOpen to research collaborations!",
    delayBeforeResponse: 400
  },
  {
    command: "npx predict-neuroprotective-score --compound=Rosmarinic_Acid",
    response: "[SCORE COMPUTED]\n• ROSMARINIC_ACID -> Neuroprotective Activity = 0.942/1.00\n• ROS Receptor Affinity = -9.42 kcal/mol (Strong Binding Domain)\n• Recommendation: In-Vitro validation proceed.",
    delayBeforeResponse: 800
  }
];

// Type definition for virtual files
interface VirtualFile {
  name: string;
  language: 'python' | 'text' | 'csv' | 'markdown';
  icon: any;
  content: string;
}

const VIRTUAL_FILES: Record<string, VirtualFile> = {
  'bio_pipeline.py': {
    name: 'bio_pipeline.py',
    language: 'python',
    icon: FileCode,
    content: `import genomics
import tensorflow as tf
import pandas as pd

class HDAC1Aligner:
    """
    Validation node for high-affinity molecules mapping.
    M.Tech Bioinformatics Research & AI/ML Workspace.
    """
    def __init__(self, sequence):
        self.sequence = sequence
        self.molecular_weight = 58.9  # kDa

    def compute_affinity(self, molecule):
        # Rosmarinic Acid Neuroprotective Scoring
        if molecule == "Rosmarinic_Acid":
            return {
                "affinity_kcal_mol": -9.42,
                "classification": "Active Neuroprotective Agent",
                "hdac1_target": "Verified Binding Site"
            }
        return {"status": "inactive"}

# Pipeline bootloader sequence
if __name__ == "__main__":
    print("Alignment computational engine active.")
`
  },
  'current_status.txt': {
    name: 'current_status.txt',
    language: 'text',
    icon: FileText,
    content: `[SYSTEM REPORT // RESUME PROTOCOL]

NAME: Amaan Arif
ROLE: M.Tech Bioinformatics (Recipient of National Fellowship)
STATUS: Open to research collaborations!

CORE EXPERTISE:
- Next Generation Sequencing (NGS) Data Pipelines
- Computational Toxicology & Molecular Docking
- Predictive Deep Learning (TensorFlow, PyTorch)
- Computer-Aided Drug Design (CADD)

CURRENT ACTIVITY:
Synthesizing neuroprotective chemical responses to rescue 
mitochondrial toxicity in neurodegenerative disease models.
`
  },
  'results.csv': {
    name: 'results.csv',
    language: 'csv',
    icon: FileText,
    content: `id,molecule,target_gene,binding_affinity,in_silico_result
001,Rosmarinic_Acid,HDAC1,-9.42,Neuroprotective_Verified
002,Quercetin,HDAC1,-8.11,Antioxidant_Strong
003,Curcumin,HDAC1,-8.76,AntiInflammatory
004,Resveratrol,HDAC1,-8.34,Sirt1_Activator
`
  },
  'README.md': {
    name: 'README.md',
    language: 'markdown',
    icon: Info,
    content: `# Computational Bioinformatics Workspace v2.4

Integrated workspace targeting genomic mapping, neuroprotective molecular affinity testing, and machine learning classifiers.

## Interactive Guide
- Click on files in the **Explorer Sidebar** to view interactive code
- Press the **Run** buttons or view the animated **Integrated Terminal** at the bottom

## Developer Authority
- **Amaan Arif**
- M.Tech Bioinformatics (Recipient of National Fellowship)
- Open to research collaborations!
`
  }
};

export default function FauxTerminal() {
  const [activeFile, setActiveFile] = useState<string>('bio_pipeline.py');
  const [explorerOpen, setExplorerOpen] = useState(true);
  const [activeSidebarTab, setActiveSidebarTab] = useState<'files' | 'search' | 'git' | 'run'>('files');
  const [terminalVisible, setTerminalVisible] = useState(true);
  
  // Terminal states
  const [visibleContent, setVisibleContent] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [typedCommand, setTypedCommand] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [systemTime, setSystemTime] = useState('');

  const terminalContainerRef = useRef<HTMLDivElement>(null);

  const getFlatTerminalLines = () => {
    const result: { text: string; isCommand: boolean; isHeader: boolean }[] = [];
    
    // 1. Header lines
    result.push({ text: "==================================================", isCommand: false, isHeader: true });
    result.push({ text: "AMAAN_ARIF SYSTEM INITIALIZATION CORE SECURE NODE", isCommand: false, isHeader: true });
    result.push({ text: "COMPUTATIONAL BIOINFORMATICS PIPELINE V2.4", isCommand: false, isHeader: true });
    result.push({ text: "==================================================", isCommand: false, isHeader: true });

    // 2. Previously finalized commands logs
    visibleContent.forEach(item => {
      const lines = item.split('\n');
      const isCmd = item.startsWith('$ ');
      lines.forEach(line => {
        result.push({ text: line, isCommand: isCmd, isHeader: false });
      });
    });

    // 3. Typing command or idle prompt
    if (isTyping || typedCommand !== '') {
      result.push({ text: `$ ${typedCommand}`, isCommand: true, isHeader: false });
    } else {
      result.push({ text: "$ ", isCommand: true, isHeader: false });
    }

    return result;
  };

  const highlightCommandLine = (cmdText: string) => {
    let prefix = "";
    let text = cmdText;
    if (cmdText.startsWith("$ ")) {
      prefix = "$ ";
      text = cmdText.substring(2);
    } else if (cmdText.startsWith("$")) {
      prefix = "$";
      text = cmdText.substring(1);
    }

    const tokens = text.split(/(\s+)/);
    const highlightedTokens = tokens.map((token, idx) => {
      if (/^\s+$/.test(token)) {
        return <span key={idx}>{token}</span>;
      }

      if (token.startsWith('-')) {
        if (token.includes('=')) {
          const eqIdx = token.indexOf('=');
          const flag = token.substring(0, eqIdx);
          const val = token.substring(eqIdx + 1);
          return (
            <span key={idx}>
              <span className="text-[#4ec9b0] font-mono">{flag}</span>
              <span className="text-neutral-400">=</span>
              <span className="text-[#ce9178] font-mono">{val}</span>
            </span>
          );
        }
        return <span key={idx} className="text-[#4ec9b0] font-mono">{token}</span>;
      }

      if (['python', 'whoami', 'cat', 'npx', 'predict-neuroprotective-score'].includes(token)) {
        return <span key={idx} className="text-[#569cd6] font-semibold font-mono">{token}</span>;
      }

      if (token.endsWith('.py') || token.endsWith('.txt') || token.endsWith('.csv') || token.endsWith('.md')) {
        return <span key={idx} className="text-[#9cdcfe] font-mono hover:underline cursor-pointer">{token}</span>;
      }

      if (/^\d+(\.\d+)?$/.test(token)) {
        return <span key={idx} className="text-[#b5cea8] font-mono">{token}</span>;
      }

      return <span key={idx} className="text-[#9cdcfe] font-mono">{token}</span>;
    });

    return (
      <span className="font-mono">
        {prefix && <span className="text-[#3a96dd] mr-1.5 select-none font-semibold font-mono">{prefix}</span>}
        {highlightedTokens}
      </span>
    );
  };

  const highlightTerminalLine = (text: string, isCommand: boolean) => {
    if (isCommand) {
      return highlightCommandLine(text);
    }

    if (text.includes('==================================================')) {
      return <span className="text-[#007acc] font-bold opacity-80">{text}</span>;
    }

    if (text.includes('[SCORE COMPUTED]') || text.includes('SYSTEM INITIALIZATION') || text.includes('COMPUTATIONAL BIOINFORMATICS')) {
      return <span className="text-[#dcdcaa] font-semibold">{text}</span>;
    }

    const words = text.split(/(\s+|->|•|:)/g);
    return (
      <span>
        {words.map((word, i) => {
          const trimmed = word.trim();
          if (trimmed === '•') {
            return <span key={i} className="text-[#4ec9b0] font-bold mr-1">{word}</span>;
          }
          if (trimmed === '->') {
            return <span key={i} className="text-[#9cdcfe] font-bold mx-1">{word}</span>;
          }
          if (['Active', 'Verified', 'Strong', 'Success', 'proceed', 'Active Neuroprotective Agent', 'ok'].includes(trimmed)) {
            return <span key={i} className="text-[#4ec9b0] font-semibold">{word}</span>;
          }
          if (['Initializing', 'Initializing bio-analytics sequence alignment...', 'Calculating'].includes(word)) {
            return <span key={i} className="text-[#c586c0] font-medium">{word}</span>;
          }
          if (['HDAC1', 'Rosmarinic_Acid', 'ROSMARINIC_ACID', 'Quercetin', 'Curcumin', 'Resveratrol'].includes(trimmed)) {
            return <span key={i} className="text-[#ce9178] font-semibold">{word}</span>;
          }
          if (trimmed.startsWith('-') && /-\d+/.test(trimmed)) {
            return <span key={i} className="text-[#b5cea8] font-bold">{word}</span>;
          }
          if (trimmed === 'amaan_arif' || trimmed === 'Amaan_Workspace') {
            return <span key={i} className="text-[#569cd6] font-bold">{word}</span>;
          }
          if (trimmed === 'Bioinformatics') {
            return <span key={i} className="text-[#569cd6]">{word}</span>;
          }
          return <span key={i} className="text-[#cccccc]">{word}</span>;
        })}
      </span>
    );
  };

  // Set initial explorer state based on screen size on mount
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setExplorerOpen(false);
    }
  }, []);

  // Update mock system clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setSystemTime(now.toLocaleTimeString());
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll to bottom of terminal output locally whenever content updates
  useEffect(() => {
    if (terminalContainerRef.current) {
      terminalContainerRef.current.scrollTop = terminalContainerRef.current.scrollHeight;
    }
  }, [visibleContent, typedCommand]);

  // Terminal Typing Simulation Loop
  useEffect(() => {
    let active = true;
    const line = TERMINAL_LINES[currentLineIndex];
    let charIndex = 0;
    setTypedCommand('');
    setIsTyping(true);

    const typeSpeed = 40; // ms per char speed for professional snap

    const typeNextChar = () => {
      if (!active) return;
      if (charIndex < line.command.length) {
        setTypedCommand(prev => prev + line.command[charIndex]);
        charIndex++;
        setTimeout(typeNextChar, typeSpeed);
      } else {
        // Typing is complete, render response after delay
        setIsTyping(false);
        setTimeout(() => {
          if (!active) return;
          // Append completed command and its output to history
          setVisibleContent(prev => [
            ...prev,
            `$ ${line.command}`,
            ...line.response.split('\n')
          ]);
          setTypedCommand('');
          
          // Wait for a reading period, then move to next line
          setTimeout(() => {
            if (!active) return;
            if (currentLineIndex < TERMINAL_LINES.length - 1) {
              setCurrentLineIndex(prev => prev + 1);
            } else {
              // Idle reset transition
              setTimeout(() => {
                if (!active) return;
                setVisibleContent([]);
                setCurrentLineIndex(0);
              }, 4000);
            }
          }, 4500);
        }, line.delayBeforeResponse);
      }
    };

    const initialTimeout = setTimeout(typeNextChar, 1000);

    return () => {
      active = false;
      clearTimeout(initialTimeout);
    };
  }, [currentLineIndex]);

  // File syntax highlighter helper
  const renderHighlightedContent = (file: VirtualFile) => {
    const lines = file.content.split('\n');
    return lines.map((lineText, lineIdx) => {
      // Basic syntax styling
      let contentNode: ReactNode = lineText;

      if (file.language === 'python') {
        // Simple regex replace with styling spans
        const commentMatch = lineText.match(/#.*/);
        const doubleQuoteMatch = lineText.match(/"[^"]*"/);
        const singleQuoteMatch = lineText.match(/'[^']*'/);

        if (commentMatch) {
          const textBefore = lineText.substring(0, commentMatch.index);
          contentNode = (
            <span>
              {highlightPythonKeywords(textBefore)}
              <span className="text-neutral-500">{commentMatch[0]}</span>
            </span>
          );
        } else if (doubleQuoteMatch) {
          const textBefore = lineText.substring(0, doubleQuoteMatch.index);
          const textAfter = lineText.substring(doubleQuoteMatch.index! + doubleQuoteMatch[0].length);
          contentNode = (
            <span>
              {highlightPythonKeywords(textBefore)}
              <span className="text-emerald-400">{doubleQuoteMatch[0]}</span>
              {renderHighlightedContentLineText(textAfter)}
            </span>
          );
        } else if (singleQuoteMatch) {
          const textBefore = lineText.substring(0, singleQuoteMatch.index);
          const textAfter = lineText.substring(singleQuoteMatch.index! + singleQuoteMatch[0].length);
          contentNode = (
            <span>
              {highlightPythonKeywords(textBefore)}
              <span className="text-emerald-400">{singleQuoteMatch[0]}</span>
              {renderHighlightedContentLineText(textAfter)}
            </span>
          );
        } else {
          contentNode = highlightPythonKeywords(lineText);
        }
      } else if (file.language === 'csv') {
        // Highlight CSV headers or columns
        if (lineIdx === 0) {
          contentNode = <span className="text-amber-400 font-bold">{lineText}</span>;
        } else {
          const parts = lineText.split(',');
          contentNode = (
            <span>
              {parts.map((p, pIdx) => (
                <span key={pIdx}>
                  <span className={pIdx === 1 ? 'text-indigo-400 font-medium' : pIdx === 3 ? 'text-emerald-400' : 'text-neutral-300'}>{p}</span>
                  {pIdx < parts.length - 1 && <span className="text-neutral-500">,</span>}
                </span>
              ))}
            </span>
          );
        }
      } else if (file.language === 'markdown') {
        if (lineText.startsWith('#')) {
          contentNode = <span className="text-blue-400 font-bold">{lineText}</span>;
        } else if (lineText.startsWith('- ')) {
          contentNode = (
            <span>
              <span className="text-amber-400">- </span>
              <span className="text-neutral-300">{lineText.substring(2)}</span>
            </span>
          );
        } else {
          contentNode = <span className="text-neutral-300">{lineText}</span>;
        }
      }

      return (
        <div key={lineIdx} id={`editor-line-${lineIdx + 1}`} className="flex leading-6 hover:bg-[#252526] pr-4 select-text">
          <span className="w-10 text-right pr-4 text-[#858585] select-none font-mono text-[11px] self-center">
            {lineIdx + 1}
          </span>
          <pre className="font-mono text-[12px] text-neutral-300 whitespace-pre">
            {contentNode}
          </pre>
        </div>
      );
    });
  };

  const renderHighlightedContentLineText = (text: string) => {
    return highlightPythonKeywords(text);
  };

  const highlightPythonKeywords = (text: string) => {
    const parts = text.split(/(\bclass\b|\bimport\b|\bfrom\b|\bdef\b|\bself\b|\bif\b|\b__main__\b|\b__init__\b|\bprint\b|\band\b)/g);
    return parts.map((part, i) => {
      if (['class', 'def', 'if'].includes(part)) {
        return <span key={i} className="text-violet-400 font-semibold">{part}</span>;
      }
      if (['import', 'from', 'and'].includes(part)) {
        return <span key={i} className="text-pink-400">{part}</span>;
      }
      if (['self', '__init__', '__main__'].includes(part)) {
        return <span key={i} className="text-amber-300 font-medium">{part}</span>;
      }
      if (['print'].includes(part)) {
        return <span key={i} className="text-blue-300">{part}</span>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <div id="vs-code-ide" className="w-full bg-[#1e1e1e] border border-neutral-800 rounded-lg shadow-2xl flex flex-col h-[400px] sm:h-[480px] md:h-[520px] lg:h-[540px] overflow-hidden font-sans text-xs text-neutral-400 relative">
      
      {/* VS Code Application Bar Ribbon (MacOS Style with absolute centered title) */}
      <div className="bg-[#323233] relative px-3 py-1.5 flex items-center justify-between text-[11px] border-b border-[#252526] text-neutral-300 shrink-0 select-none">
        <div className="flex items-center space-x-2 mr-4 shrink-0">
          {/* Mock Window Controls */}
          <div className="flex space-x-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block" />
          </div>
        </div>

        {/* Absolute Centered Document Title */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-1.5 text-neutral-200 font-sans text-[11px] font-semibold tracking-wide truncate max-w-[40%] sm:max-w-[60%]">
          <Cpu className="w-3.5 h-3.5 text-[#007acc] animate-[pulse_1.5s_infinite] shrink-0" />
          <span>{activeFile} — Amaan_Workspace — VS Code</span>
        </div>

        {/* Right Info Indicators: Tunnel and Timestamp */}
        <div className="flex items-center space-x-3 text-neutral-400 shrink-0 ml-auto select-none">
          <span className="text-[10px] bg-[#1e1e1e] px-2 py-0.5 rounded border border-neutral-700 text-[#007acc] font-mono leading-none hidden sm:inline-block">
            secure_tunnel: Active
          </span>
          <span className="font-mono text-[10px]">{systemTime}</span>
        </div>
      </div>

      {/* VS Code Menu Bar Row (Highly realistic, prevents overlapping with document name) */}
      <div className="bg-[#2d2d2d] px-3.5 py-1.5 flex items-center justify-between text-[11px] border-b border-[#1e1e1e] text-neutral-400 shrink-0 select-none">
        <div className="flex items-center space-x-4">
          <span className="hover:text-white transition-colors cursor-pointer font-medium">File</span>
          <span className="hover:text-white transition-colors cursor-pointer font-medium">Edit</span>
          <span className="hover:text-white transition-colors cursor-pointer font-medium flex items-center">
            Selection <ChevronDown className="w-3 h-3 ml-0.5 text-neutral-500" />
          </span>
          <span className="hover:text-white transition-colors cursor-pointer font-medium">View</span>
          <span className="hover:text-white transition-colors cursor-pointer font-medium">Go</span>
          <span className="hover:text-white transition-colors cursor-pointer font-medium">Run</span>
          <span className="hover:text-white transition-colors cursor-pointer font-medium">Terminal</span>
          <span className="hover:text-white transition-colors cursor-pointer font-medium">Help</span>
        </div>
        <div className="hidden md:flex items-center space-x-1.5 text-neutral-500 font-mono text-[10px]">
          <span className="bg-[#1e1e1e] px-2 py-0.5 rounded border border-neutral-800 text-neutral-400 font-mono">
            src/{activeFile}
          </span>
        </div>
      </div>

      {/* Main Workspace Frame: Sidebar Selector + Sidebar Panel + Editor + Terminal */}
      <div className="flex flex-1 min-h-0 w-full">
        
        {/* 1. VS Code Activity Bar (Leftmost narrow icon rail) */}
        <div className="w-12 bg-[#181818] border-r border-[#252526] flex flex-col justify-between items-center py-3 shrink-0">
          <div className="flex flex-col space-y-4 w-full">
            <button 
              onClick={() => {
                setActiveSidebarTab('files');
                setExplorerOpen(prev => activeSidebarTab !== 'files' ? true : !prev);
              }}
              title="Explorer"
              className={`py-2 flex justify-center border-l-2 w-full transition-colors ${
                explorerOpen && activeSidebarTab === 'files' 
                  ? 'border-[#007acc] text-white' 
                  : 'border-transparent text-neutral-500 hover:text-white'
              }`}
            >
              <Folder className="w-5 h-5" />
            </button>
            <button 
              onClick={() => {
                setActiveSidebarTab('search');
                setExplorerOpen(prev => activeSidebarTab !== 'search' ? true : !prev);
              }}
              title="Search Workspace"
              className={`py-2 flex justify-center border-l-2 w-full transition-colors ${
                explorerOpen && activeSidebarTab === 'search' 
                  ? 'border-[#007acc] text-white' 
                  : 'border-transparent text-neutral-500 hover:text-white'
              }`}
            >
              <Search className="w-5 h-5" />
            </button>
            <button 
              onClick={() => {
                setActiveSidebarTab('git');
                setExplorerOpen(prev => activeSidebarTab !== 'git' ? true : !prev);
              }}
              title="Source Control"
              className={`py-2 flex justify-center border-l-2 w-full transition-colors ${
                explorerOpen && activeSidebarTab === 'git' 
                  ? 'border-[#007acc] text-white' 
                  : 'border-transparent text-neutral-500 hover:text-white'
              }`}
            >
              <GitBranch className="w-5 h-5" />
            </button>
            <button 
              onClick={() => {
                setTerminalVisible(prev => !prev);
              }}
              title="Toggle Combined subshell"
              className={`py-2 flex justify-center border-l-2 w-full transition-colors ${
                terminalVisible 
                  ? 'border-[#007acc] text-[#007acc]' 
                  : 'border-transparent text-neutral-500 hover:text-white'
              }`}
            >
              <Terminal className="w-5 h-5" />
            </button>
          </div>

          {/* Settings gear bottom icon */}
          <div className="flex flex-col items-center space-y-3 w-full">
            <div className="w-8 h-8 rounded-full bg-[#252526] text-[#007acc] flex items-center justify-center font-mono font-bold text-xs">
              AA
            </div>
            <button className="text-neutral-600 hover:text-white transition-colors py-1">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 2. Collapsible Explorer Sidebar Pane */}
        {explorerOpen && (
          <div className="w-48 bg-[#252526] border-r border-[#1e1e1e] flex flex-col shrink-0 select-none overflow-y-auto">
            {activeSidebarTab === 'files' && (
              <div className="p-3">
                <div className="text-[11px] font-bold text-neutral-300 uppercase tracking-widest mb-3 flex items-center justify-between">
                  <span>Explorer</span>
                  <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
                </div>
                
                {/* Workspace Folder Name */}
                <div className="flex items-center space-x-1 py-1 font-bold text-neutral-200 text-xs mb-1">
                  <ChevronDown className="w-3.5 h-3.5" />
                  <span>RESEARCH_COLLAB</span>
                </div>

                {/* File Nodes list */}
                <div className="space-y-0.5 pl-2">
                  {Object.values(VIRTUAL_FILES).map((file) => {
                    const FileIcon = file.icon;
                    const isActive = activeFile === file.name;
                    return (
                      <button
                        key={file.name}
                        onClick={() => setActiveFile(file.name)}
                        className={`w-full flex items-center space-x-2 px-2 py-1.5 rounded transition-all text-left text-xs ${
                          isActive 
                            ? 'bg-[#37373d] text-white font-medium border-l border-[#007acc]' 
                            : 'text-neutral-400 hover:bg-[#2d2d2d] hover:text-white'
                        }`}
                      >
                        <FileIcon className={`w-3.5 h-3.5 ${isActive ? 'text-[#007acc]' : 'text-neutral-500'}`} />
                        <span className="truncate">{file.name}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 border-t border-neutral-700 pt-4">
                  <div className="flex items-center space-x-1 text-neutral-400 font-bold uppercase text-[10px] tracking-wider mb-2">
                    <ChevronRight className="w-3.5 h-3.5" />
                    <span>OUTLINE</span>
                  </div>
                  <div className="flex items-center space-x-1 text-neutral-400 font-bold uppercase text-[10px] tracking-wider">
                    <ChevronRight className="w-3.5 h-3.5" />
                    <span>TIMELINE</span>
                  </div>
                </div>
              </div>
            )}

            {activeSidebarTab === 'search' && (
              <div className="p-3">
                <div className="text-[11px] font-bold text-neutral-300 uppercase tracking-widest mb-3">
                  Search Workspace
                </div>
                <input 
                  type="text" 
                  placeholder="Search pattern..." 
                  className="w-full bg-[#1e1e1e] border border-neutral-700 rounded px-2 py-1 text-white placeholder-neutral-500 text-xs focus:ring-1 focus:ring-[#007acc] focus:outline-none"
                />
                <div className="text-[10px] text-neutral-500 mt-2">
                  Searching in all clinical genomics models
                </div>
              </div>
            )}

            {activeSidebarTab === 'git' && (
              <div className="p-3">
                <div className="text-[11px] font-bold text-neutral-300 uppercase tracking-widest mb-3">
                  Source Control
                </div>
                <div className="bg-[#1e1e1e] p-2.5 rounded border border-neutral-700 text-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto mb-1.5" />
                  <span className="text-white font-semibold block text-[11px]">System Up to Date</span>
                  <span className="text-[10px] text-neutral-500">0 pending commits</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 3. Editor Panel & Bottom Terminal Pane */}
        <div className="flex-1 flex flex-col min-h-0 bg-[#1e1e1e]">
          
          {/* Editor Header Navigation Tabs */}
          <div className="bg-[#252526] flex items-center justify-between border-b border-[#1e1e1e] shrink-0 overflow-x-auto select-none">
            <div className="flex items-center">
              {Object.values(VIRTUAL_FILES).map((file) => {
                const FileIcon = file.icon;
                const isActive = activeFile === file.name;
                return (
                  <button
                    key={file.name}
                    onClick={() => setActiveFile(file.name)}
                    className={`flex items-center space-x-2 px-3.5 py-2.5 border-r border-[#1e1e1e] text-[11px] relative transition-all ${
                      isActive 
                        ? 'bg-[#1e1e1e] text-white font-medium' 
                        : 'bg-[#2d2d2d]/60 text-neutral-500 hover:bg-[#2d2d2d] hover:text-[#d4d4d4]'
                    }`}
                  >
                    {isActive && (
                      <span className="absolute top-0 left-0 w-full h-[2.5px] bg-[#007acc]" />
                    )}
                    <FileIcon className={`w-3.5 h-3.5 ${isActive ? 'text-blue-400' : 'text-neutral-500'}`} />
                    <span>{file.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Simulated Debug Run Action Button */}
            <div className="flex items-center space-x-2 pr-4 text-xs font-mono">
              <button 
                onClick={() => {
                  // Simulate trigger by updating line index
                  setVisibleContent(prev => [...prev, "$ python " + activeFile, `Initiating review of ${activeFile}...`]);
                }}
                className="flex items-center space-x-1 text-emerald-400 hover:bg-[#2d2d2d] py-1 px-2.5 rounded transition-colors"
                title="Execute This Document"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span className="hidden sm:inline font-mono text-[10px] tracking-widest font-semibold">RUN FILE</span>
              </button>
            </div>
          </div>

          {/* Code Text Content Box */}
          <div className="flex-1 overflow-y-auto py-3 bg-[#1e1e1e] scrollbar-thin">
            {renderHighlightedContent(VIRTUAL_FILES[activeFile])}
          </div>

          {/* 4. Integrated VS Code Terminal (Simulated bottom pane) */}
          {terminalVisible && (
            <div className="h-44 bg-[#181818] border-t border-[#2d2d2d] flex flex-col shrink-0">
              
              {/* Terminal Tabs & Header */}
              <div className="bg-[#1e1e1e] px-4 py-1.5 border-b border-[#2d2d2d] flex items-center justify-between text-[11px] select-none shrink-0">
                <div className="flex items-center space-x-5 text-neutral-400">
                  <span className="text-white border-b-2 border-[#007acc] pb-1 font-semibold flex items-center space-x-1.5 cursor-pointer">
                    <Terminal className="w-3.5 h-3.5 text-[#007acc]" />
                    <span>TERMINAL</span>
                  </span>
                  <span className="hover:text-white transition-colors pb-1 cursor-pointer flex items-center space-x-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-neutral-500" />
                    <span>PROBLEMS</span>
                    <span className="bg-neutral-800 text-neutral-300 rounded-full px-1.5 py-[1px] text-[8.5px] font-bold">0</span>
                  </span>
                  <span className="hover:text-white transition-colors pb-1 cursor-pointer">OUTPUT</span>
                  <span className="hover:text-white transition-colors pb-1 cursor-pointer">DEBUG CONSOLE</span>
                </div>

                <div className="flex items-center space-x-4 text-[10px] text-neutral-400">
                  {/* VS Code shell dropdown */}
                  <div className="flex items-center space-x-1 hover:bg-[#2d2d2d] py-0.5 px-2 rounded cursor-pointer text-white">
                    <span className="text-emerald-500 font-bold font-mono">1:</span>
                    <span className="font-mono">zsh</span>
                    <ChevronDown className="w-3 h-3 text-neutral-500 ml-0.5" />
                  </div>
                  
                  {/* Segment separating icons */}
                  <div className="w-[1px] h-3 bg-neutral-700" />

                  {/* Terminal Instance & Split icon button controls */}
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => {
                        setVisibleContent(prev => [...prev, "$ create_new_shell", "Spawning alternative background thread node... Done."]);
                      }}
                      title="New Terminal" 
                      className="hover:text-white hover:bg-[#2d2d2d] p-1 rounded"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                    <button 
                      onClick={() => {
                        setVisibleContent(prev => [...prev, "$ split_view", "Workspace pane vertical partition initialized."]);
                      }}
                      title="Split Terminal View" 
                      className="hover:text-white hover:bg-[#2d2d2d] p-1 rounded"
                    >
                      <Columns className="w-3.5 h-3.5" />
                    </button>
                    <button 
                      onClick={() => {
                        setVisibleContent([]);
                        setCurrentLineIndex(0);
                      }}
                      title="Kill Terminal Instance" 
                      className="hover:text-amber-500 hover:bg-[#2d2d2d] p-1 rounded"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                    <button 
                      onClick={() => {
                        setVisibleContent(prev => [...prev, "$ toggle_maximize", "Viewport terminal panel resized."]);
                      }}
                      title="Maximize Terminal Panel" 
                      className="hover:text-white hover:bg-[#2d2d2d] p-1 rounded"
                    >
                      <ChevronUp className="w-3.5 h-3.5" />
                    </button>
                    <button 
                      onClick={() => setTerminalVisible(false)}
                      title="Close Terminal Panel" 
                      className="hover:text-red-400 hover:bg-[#2d2d2d] p-1 rounded"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Terminal Text Scroll viewport with Gutter Line Numbers */}
              <div 
                ref={terminalContainerRef}
                className="flex-1 overflow-y-auto font-mono text-[11px] text-neutral-200 select-text bg-[#151515] py-2.5 scrollbar-thin flex flex-col"
              >
                {getFlatTerminalLines().map((lineObj, idx) => (
                  <div key={idx} className="flex min-w-0 hover:bg-neutral-900/40 relative group">
                    {/* Gutter Line Number */}
                    <div 
                      className="w-10 shrink-0 text-right pr-3.5 text-[#444444] group-hover:text-neutral-500 transition-colors font-mono text-[9px] font-semibold border-r border-[#222222] self-stretch leading-5 flex items-center justify-end select-none pointer-events-none before:content-[attr(data-line)]"
                      style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }}
                      data-line={idx + 1}
                    />
                    
                    {/* Terminal text with dynamic syntax highlighting */}
                    <div className="pl-3.5 min-w-0 flex-1 font-mono text-[11px] tracking-wide leading-5 truncate whitespace-pre overflow-x-auto select-text selection:bg-[#264f78]">
                      {lineObj.isHeader ? (
                        <span className="text-[#007acc] font-semibold">{lineObj.text}</span>
                      ) : lineObj.isCommand ? (
                        highlightCommandLine(lineObj.text)
                      ) : (
                        highlightTerminalLine(lineObj.text, false)
                      )}
                      
                      {/* Active Cursor implementation inside the flat list block row */}
                      {idx === getFlatTerminalLines().length - 1 && isTyping && (
                        <span className="w-1.5 h-3.5 bg-neutral-300 ml-1 inline-block animate-[pulse_1s_infinite] align-middle" />
                      )}
                      {idx === getFlatTerminalLines().length - 1 && !isTyping && typedCommand === '' && (
                        <span className="w-1.5 h-3.5 bg-neutral-600 ml-1 inline-block animate-[pulse_1.5s_infinite] align-middle" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* VS Code Footer Blue Status Bar */}
      <div className="bg-[#007acc] text-white px-3 py-1 text-[11px] flex items-center justify-between shrink-0 select-none">
        <div className="flex items-center space-x-3 font-semibold">
          <span className="bg-[#1f70aa] px-1.5 py-[1px] rounded text-[10px] tracking-wide uppercase flex items-center gap-1">
            <Lock className="w-2.5 h-2.5" /> Secure
          </span>
          <span className="hover:underline cursor-pointer">✓ main* (RESEARCH_COLLAB)</span>
          <span className="hidden md:inline hover:underline cursor-pointer flex items-center gap-1">
            <Sliders className="w-2.5 h-2.5" /> 1 Warning
          </span>
        </div>
        
        <div className="flex items-center space-x-4">
          <span className="hidden sm:inline">Ln 14, Col 21</span>
          <span className="hidden sm:inline font-mono">UTF-8</span>
          <span className="hover:underline cursor-pointer">Python 3.10.8</span>
          <span><Bell className="w-3 h-3 hover:text-neutral-200 transition-colors inline cursor-pointer" /></span>
        </div>
      </div>

    </div>
  );
}
