import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';

export default function QuestionsSlide() {
  return (
    <Slide isEnd showFooter={false}>
      <div className="flex flex-col items-center justify-center">
        <SlideTitle isEnd>Questions?</SlideTitle>
      </div>
    </Slide>
  );
}
