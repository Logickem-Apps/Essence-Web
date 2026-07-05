import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { portal } from '@/lib/homeContent';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

function PortalGrid() {
  return (
    <section className="bg-ink py-16 md:py-28">
      <div className="mx-auto max-w-[1340px] px-5 md:px-8">
        <SectionHeading
          eyebrow="Portal Turístico"
          title="Explora Rabinal"
          className="mb-10 md:mb-14"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portal.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.08}>
              <Link
                to={d.to}
                className="ez-card ez-lift group relative block h-[340px] overflow-hidden rounded-[18px] border border-white/[0.08] hover:border-gold/50 hover:-translate-y-1.5"
              >
                <div
                  className="ez-zoom absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${d.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,11,9,0.95)] via-[rgba(8,11,9,0.3)] to-[rgba(8,11,9,0.5)]" />
                <span className="absolute left-5 top-4 font-display text-base font-bold text-gold/85">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white md:text-[25px]">{d.title}</h3>
                    <div className="ez-meta mt-1.5 translate-y-2 font-body text-[13px] font-medium text-gold opacity-0 transition-all duration-300">
                      {d.desc}
                    </div>
                  </div>
                  <span className="ez-arrow flex h-11 w-11 flex-shrink-0 -translate-x-2 items-center justify-center rounded-full bg-gold text-gold-ink opacity-0 transition-all duration-300">
                    <ArrowRight className="h-[19px] w-[19px]" strokeWidth={2.4} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortalGrid;
