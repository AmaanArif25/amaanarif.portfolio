import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Research',
    message: ''
  });
  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [errorMessage, setErrorMessage] = useState('');

  const subjects = [
    'Research',
    'Build',
    'Collab'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('ERROR');
      setErrorMessage('Please satisfy all input conditions.');
      return;
    }

    setStatus('SENDING');

    try {
      const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfVHh7KkDHh3-c4dJYK-7c3xFIsF-7raJdLGxseaSRpCXhGCw/formResponse';

      const formBody = new URLSearchParams();
      formBody.append('entry.632247726', formData.name);
      formBody.append('entry.1976198600', formData.email);
      formBody.append('entry.1856878251', formData.subject);
      formBody.append('entry.1547709515', formData.message);

      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
      });

      setStatus('SUCCESS');
      setFormData({ name: '', email: '', subject: 'Research', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('ERROR');
      setErrorMessage('Transmission error. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (status === 'ERROR') setStatus('IDLE');
  };

  return (
    <div className="relative border border-clinical-border bg-white rounded-lg p-6 md:p-8 overflow-hidden">
      {/* Grid pattern background detail */}
      <div className="absolute inset-0 clinical-grid pointer-events-none opacity-40" />

      <div className="relative z-10">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-dashed border-clinical-border font-mono text-[10px] text-clinical-text-muted">
          <span>Open to research collaborations</span>
          <span>COMPATIBILITY: TLS_V1.3</span>
        </div>

        {status === 'SUCCESS' ? (
          <div className="py-8 text-center flex flex-col items-center justify-center space-y-4">
            <div className="w-12 h-12 rounded-full border border-neutral-900 bg-neutral-50 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-neutral-800" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-lg text-clinical-text-main">TRANSMISSION COMPLETION</h4>
              <p className="font-mono text-xs text-clinical-text-muted mt-2 max-w-sm mx-auto">
                Your biological data packet has been signed and queued for Amaan Arif's analysis. Expected reply latency: &lt; 24h.
              </p>
            </div>
            <button
              onClick={() => setStatus('IDLE')}
              className="mt-4 px-4 py-2 border border-clinical-border text-xs font-mono rounded bg-white hover:bg-neutral-50"
            >
              INITIATE NEW PROTOCOL
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {status === 'ERROR' && (
              <div className="p-3 bg-red-50 border border-red-200 rounded flex items-center space-x-2 text-red-800 font-mono text-[10px]">
                <ShieldAlert className="w-4 h-4 text-red-700 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-[10px] text-clinical-text-muted uppercase tracking-wider mb-1.5 font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-neutral-50 border border-clinical-border rounded px-3 py-2 font-sans text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-800 transition-all rounded-sm"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] text-clinical-text-muted uppercase tracking-wider mb-1.5 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@domain.com"
                  className="w-full bg-neutral-50 border border-clinical-border rounded px-3 py-2 font-sans text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-800 transition-all rounded-sm"
                />
              </div>
            </div>

            <div>
              <label className="block font-mono text-[10px] text-clinical-text-muted uppercase tracking-wider mb-1.5 font-semibold">
                Inquiry Subject
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-neutral-50 border border-clinical-border rounded px-3 py-2 font-sans text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-800 transition-all rounded-sm cursor-pointer"
              >
                {subjects.map(subj => (
                  <option key={subj} value={subj}>
                    {subj}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-mono text-[10px] text-clinical-text-muted uppercase tracking-wider mb-1.5 font-semibold">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about the problem you're working on…"
                className="w-full bg-neutral-50 border border-clinical-border rounded px-3 py-2 font-sans text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-800 transition-all rounded-sm"
              />
            </div>

            <div className="flex md:justify-end pt-2">
              <button
                type="submit"
                disabled={status === 'SENDING'}
                className="w-full md:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 bg-clinical-text-main text-white font-mono text-xs uppercase tracking-wider hover:bg-neutral-800 rounded transition-colors disabled:opacity-50 cursor-pointer"
              >
                {status === 'SENDING' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin shrink-0" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send message</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
