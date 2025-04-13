import React from 'react';
import Sigup from '../auth/Sigup';

export default function Account() {
  return (
    <div className="bg-[#fcfaf8] py-16">
      <div className="container mx-auto px-4">
        {/* <h1 className="text-4xl font-bold text-[#653a2a] text-center">درباره ما</h1> */}
        <Sigup />
      </div>
    </div>
  );
} 