import React from 'react';
import { FlippingCard } from './ui/flipping-card';

interface Member {
  name: string;
  role: string;
  photo: string;
  bio: string;
  expertise: string[];
}

export function TeamCard({ member }: { member: Member }) {
  const front = (
    <div className="flex flex-col h-full w-full rounded-xl relative">
      {/* Director photo - rounded directly to avoid overflow bleed */}
      <img
        src={member.photo}
        alt={member.name}
        className="absolute inset-0 w-full h-full object-cover object-top rounded-xl"
      />
      {/* Dark gradient overlay at bottom - rounded directly */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent rounded-xl" />
      {/* Name & role pinned to bottom */}
      <div className="relative z-10 mt-auto p-5">
        <h3 className="text-lg font-bold text-white leading-tight">{member.name}</h3>
        <p className="text-brand-light text-sm font-semibold mt-0.5">{member.role}</p>
      </div>
    </div>
  );

  const back = (
    <div className="flex flex-col justify-between h-full w-full p-6 bg-white rounded-xl border border-neutral-200 shadow-md">
      <div>
        <p className="text-[13px] md:text-[13.5px] leading-relaxed text-neutral-600 mb-4">{member.bio}</p>
        <p className="text-xs font-semibold text-neutral-800 mb-2 flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          Areas of Expertise
        </p>
        <div className="flex flex-wrap gap-1.5">
          {member.expertise.map((tag) => (
            <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-brand-pale text-brand-red border border-brand-red/10 font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <FlippingCard
      width={380}
      height={280}
      className="w-full max-w-[380px]"
      frontContent={front}
      backContent={back}
    />
  );
}
