import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';

export default function IntroSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>What we'll cover</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <ul className="list-disc list-inside space-y-4 text-left">
            <li>Introduction to PolicyEngine</li>
            <li>How microsimulation works</li>
            <li>Modeling tax and benefit policies</li>
            <li>Affordable Care Act modeling</li>
            <li>Measuring impacts on households, budgets, poverty, and inequality</li>
            <li>Live demonstration</li>
          </ul>
        </SlideContent>
      </div>
    </Slide>
  );
}
