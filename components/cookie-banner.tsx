"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex flex-col md:flex-row items-center justify-between shadow-lg z-50">
      <p className="text-sm mb-2 md:mb-0">
        We use cookies to ensure you get the best experience on our website. By continuing to use this site, you agree to our{' '}
        <Link href="/privacy-policy" className="underline">
          Privacy Policy
        </Link>
        .
      </p>
      <div className="flex space-x-2">
        <button
          onClick={handleAccept}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm"
        >
          Accept
        </button>
        <button
          onClick={handleDecline}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm"
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
