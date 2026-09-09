import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/_next-project.css';

// Keep the reading order aligned with the homepage.
const projects = [
  { path: '/cleanchoice', title: 'Clean Choice' },
  { path: '/stockwik', title: 'Stockwik Dekaler' },
  { path: '/booking', title: 'Bokningssystem' },
  { path: '/tahuletedtarha', title: 'Tahulet ed Tarha' },
  { path: '/techtrade', title: 'Techtrade' },
  { path: '/garnbutik', title: 'Garnbutik, Stockholm' },
];

export default function NextProject({ currentProject }) {
  const currentIndex = projects.findIndex(project => project.path === currentProject);
  if (currentIndex === -1) return null;
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <Link className="next-project" to={next.path}>
      <div>
        <span className="next-project-label">Nästa projekt</span>
        <strong>{next.title}</strong>
      </div>
      <ArrowUpRight aria-hidden="true" />
    </Link>
  );
}
