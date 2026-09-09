import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim() || '';
const isConfigured = /^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(endpoint);
const email = 'hmsandreasson@gmail.com';
const inputClass = 'peer w-full bg-transparent border-b border-white/30 text-white py-4 outline-none focus:border-white placeholder-transparent transition-colors font-body';
const labelClass = 'absolute left-0 -top-2 text-xs font-data text-white/60 pointer-events-none transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const requestRef = useRef(null);

  useEffect(() => () => requestRef.current?.abort(), []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (!isConfigured || requestRef.current) return;

    const form = event.currentTarget;
    const data = new FormData(form);
    for (const field of ['name', 'email', 'message']) {
      const value = data.get(field).trim();
      if (!value) {
        setStatus('error');
        setError('Fyll i namn, mejladress och meddelande.');
        form.elements.namedItem(field).focus();
        return;
      }
      data.set(field, value);
    }

    const controller = new AbortController();
    requestRef.current = controller;
    setStatus('sending');
    setError('');
    const timeout = window.setTimeout(() => controller.abort('timeout'), 20000);

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
        signal: controller.signal,
      });

      if (!response.ok) {
        setStatus('error');
        setError(response.status === 429
          ? 'Formuläret kan inte ta emot fler meddelanden just nu. Försök senare eller mejla mig direkt.'
          : 'Meddelandet kunde inte skickas. Försök igen eller mejla mig direkt.');
        return;
      }

      // Require the provider's JSON acknowledgement, not a redirected HTML page.
      const result = await response.json();
      if (result.ok !== true) throw new Error('Missing submission acknowledgement');
      form.reset();
      setStatus('success');
    } catch {
      if (controller.signal.aborted && controller.signal.reason !== 'timeout') return;
      setStatus('error');
      setError('Vi kunde inte bekräfta att meddelandet skickades. Din text finns kvar. Försök igen eller mejla mig direkt.');
    } finally {
      window.clearTimeout(timeout);
      requestRef.current = null;
    }
  }

  if (!isConfigured) {
    return (
      <p className="font-body text-white/80 leading-relaxed">
        Kontakta mig via mejl så hör jag av mig.{' '}
        <a href={`mailto:${email}`} className="text-white underline underline-offset-4 hover:text-signal break-words">{email}</a>
      </p>
    );
  }

  return (
    <form className="flex flex-col gap-8" action={endpoint} method="POST" onSubmit={handleSubmit} aria-label="Kontaktformulär" aria-busy={status === 'sending'}>
      <fieldset disabled={status === 'sending'} className="flex min-w-0 flex-col gap-8">
        <legend className="sr-only">Dina kontaktuppgifter och ditt meddelande</legend>
        <div className="relative group">
          <input type="text" id="namn" name="name" autoComplete="name" maxLength={200} className={inputClass} placeholder="Namn" required />
          <label htmlFor="namn" className={labelClass}>Namn</label>
        </div>
        <div className="relative group">
          <input type="email" id="mejl" name="email" autoComplete="email" maxLength={254} className={inputClass} placeholder="Mejl" required />
          <label htmlFor="mejl" className={labelClass}>Mejl</label>
        </div>
        <div className="relative group mt-4">
          <textarea id="meddelande" name="message" maxLength={10000} className={`${inputClass} min-h-[120px] resize-y`} placeholder="Meddelande" required />
          <label htmlFor="meddelande" className={labelClass}>Meddelande</label>
        </div>
        <div className="hidden" aria-hidden="true">
          <label htmlFor="contact-website">Lämna det här fältet tomt</label>
          <input type="text" id="contact-website" name="_gotcha" tabIndex={-1} autoComplete="off" />
        </div>
        <input type="hidden" name="subject" value="Nytt kontaktmeddelande från humasa.se" />
        <MagneticButton type="submit" disabled={status === 'sending'} className="self-start px-8 py-4 bg-signal text-white rounded-full font-heading font-medium text-base mt-8 flex items-center gap-3">
          {status === 'sending' ? 'Skickar…' : 'Skicka meddelande'} <ArrowUpRight size={18} aria-hidden="true" />
        </MagneticButton>
      </fieldset>

      <div role="status" aria-live="polite" aria-atomic="true" className="font-body text-sm leading-relaxed text-white/80 empty:hidden">
        {status === 'success' && 'Tack! Ditt meddelande har skickats. Jag hör av mig så snart jag kan.'}
        {status === 'error' && error}
      </div>
      <p className="font-body text-sm text-white/60 leading-relaxed">
        Du kan också mejla mig direkt på{' '}
        <a href={`mailto:${email}`} className="text-white/80 underline underline-offset-4 hover:text-signal break-words">{email}</a>.
      </p>
    </form>
  );
}
