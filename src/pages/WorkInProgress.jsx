import { ArrowLeft, ArrowUpRight, Asterisk } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import NextProject from '../components/NextProject';
import SEO from '../components/SEO';
import '../styles/_work-in-progress.css';

export default function WorkInProgress({ projectName, projectPath }) {
  return (
    <main className="wip-page">
      <SEO
        title={`${projectName} – Snart här`}
        description={`Snart kan du läsa mer om ${projectName}. Upptäck fler projekt från Humåsa under tiden.`}
        url={projectPath}
      />
      <Helmet><meta data-page-seo="true" name="robots" content="noindex, follow" /></Helmet>

      <section className="wip-content">
        <div className="wip-meta">
          <span className="wip-status">Arbete pågår</span>
          <span>{projectName}</span>
        </div>
        <div className="wip-grid">
          <div>
            <p className="wip-kicker">Lite till bakom kulisserna.</p>
            <h1>Snart <em>här.</em></h1>
            <p className="wip-description">Jag håller på att ge det här projektet en egen plats på webbplatsen. Snart kan du läsa mer om uppdraget och arbetet bakom.</p>
            <div className="wip-actions">
              <Link className="wip-home" to="/"><ArrowLeft size={18} aria-hidden="true" /> Se alla projekt</Link>
              <Link className="wip-contact" to="/about#contact">Kontakta mig <ArrowUpRight size={18} aria-hidden="true" /></Link>
            </div>
          </div>
          <div className="wip-symbol" aria-hidden="true"><Asterisk strokeWidth={1} /></div>
        </div>
        <p className="wip-note">Under tiden finns det mer att upptäcka ↓</p>
      </section>
      <NextProject currentProject={projectPath} />
    </main>
  );
}
