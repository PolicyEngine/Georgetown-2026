import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';

export default function ACADemoSlide() {
  return (
    <Slide>
      <div className="w-full">
        <SlideHeader>
          <SlideTitle>ACA Premium Tax Credits by Income</SlideTitle>
        </SlideHeader>

        <div className="grid grid-cols-2 gap-8 mt-4">
          {/* Example 1: Texas Couple */}
          <div className="space-y-2">
            <div className="text-sm text-gray-600">
              <span className="font-semibold text-pe-dark">Example 1:</span> 25 & 28 year old married couple in Austin, Texas
            </div>
            <div className="relative w-full h-[320px] bg-white rounded-lg overflow-hidden">
              <Image
                src={assetPath("/images/aca/texas-couple-ptc.png")}
                alt="Texas household ACA benefits by income"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Example 2: NY Family */}
          <div className="space-y-2">
            <div className="text-sm text-gray-600">
              <span className="font-semibold text-pe-dark">Example 2:</span> Family of 3 in New York (two 40yo parents, one 3yo child)
            </div>
            <div className="relative w-full h-[320px] bg-white rounded-lg overflow-hidden">
              <Image
                src={assetPath("/images/aca/ny-family-healthcare.png")}
                alt="New York family healthcare benefits by income"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-4">
          Showing Medicaid, CHIP, and Premium Tax Credit eligibility based on household income
        </p>
      </div>
    </Slide>
  );
}
