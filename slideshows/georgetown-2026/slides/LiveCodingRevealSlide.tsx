import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';

export default function LiveCodingRevealSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Let's See What Claude Built!</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <p className="mb-8">
            While we were talking, Claude Code was building a custom policy visualizer.
          </p>

          <div className="space-y-6 text-left">
            <div className="flex items-start gap-4">
              <span className="text-pe-teal text-3xl">→</span>
              <p>Uses real PolicyEngine-US calculations</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-pe-teal text-3xl">→</span>
              <p>Adjustable policy parameters</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-pe-teal text-3xl">→</span>
              <p>Interactive chart showing benefits by earnings and family size</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-pe-teal text-3xl">→</span>
              <p>Model policy reforms in real-time</p>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
