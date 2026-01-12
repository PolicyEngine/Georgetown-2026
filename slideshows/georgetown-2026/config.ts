import { SlideshowConfig } from '@/lib/types';
import LiveCodingIntroSlide from './slides/LiveCodingIntroSlide';
import OBBBAIntroSlide from './slides/OBBBAIntroSlide';
import OBBBADemoSlide from './slides/OBBBADemoSlide';
import WhatIsPolicyEngineSlide from './slides/WhatIsPolicyEngineSlide';
import UsersSlide from './slides/UsersSlide';
import QuestionsWeAnswerSlide from './slides/QuestionsWeAnswerSlide';
import OpenSourceSlide from './slides/OpenSourceSlide';
import DemoRoadmapSlide from './slides/DemoRoadmapSlide';
import ACAIntroSlide from './slides/ACAIntroSlide';
import HowDoesItWorkSlide from './slides/HowDoesItWorkSlide';
import OurApproachSlide from './slides/OurApproachSlide';
import HouseholdDemoSlide from './slides/HouseholdDemoSlide';
import PolicyReformDemoSlide from './slides/PolicyReformDemoSlide';
import ACADemoSlide from './slides/ACADemoSlide';
import ACADemoSlide2 from './slides/ACADemoSlide2';
import LiveCodingRevealSlide from './slides/LiveCodingRevealSlide';
import AnalystChoicesSlide from './slides/AnalystChoicesSlide';
import DataSourcesSlide from './slides/DataSourcesSlide';
import FutureAISlide from './slides/FutureAISlide';
import FutureLocalSlide from './slides/FutureLocalSlide';
import QuestionsSlide from './slides/QuestionsSlide';
import EndSlide from './slides/EndSlide';

export const georgetown2026Config: SlideshowConfig = {
  id: 'georgetown-2026',
  title: "Simulating tax and transfer policies' inequality impacts with PolicyEngine",
  description: 'Guest lecture for PPOL 6362: Inequality and Public Policy',
  date: 'January 12, 2026',
  location: 'Georgetown McCourt School of Public Policy',
  slides: [
    // Kick off AI coding demo
    LiveCodingIntroSlide,

    // Introduction to PolicyEngine
    WhatIsPolicyEngineSlide,
    UsersSlide,
    QuestionsWeAnswerSlide,   // What questions PE answers
    OpenSourceSlide,          // Free and transparent
    DemoRoadmapSlide,         // What we'll show you (4 demos)

    // Demo 1: ACA calculator (Daphne) - timely, approachable
    ACAIntroSlide,            // Context: open enrollment happening now
    ACADemoSlide,             // → Daphne demos aca-calc
    ACADemoSlide2,

    // Demo 2: Household calculator (Max)
    HouseholdDemoSlide,

    // How microsim works - leads into economy-wide demo
    HowDoesItWorkSlide,       // Policies, households, dynamics
    OurApproachSlide,         // Our approach to each ingredient
    AnalystChoicesSlide,      // Analyst choices in measurement
    DataSourcesSlide,         // Tax data vs surveys

    // Demo 3: Economy-wide reform analysis
    PolicyReformDemoSlide,

    // Demo 4: OBBBA deep dive - grand finale
    OBBBAIntroSlide,
    OBBBADemoSlide,           // → Most impressive demo last

    // Check back on AI coding
    LiveCodingRevealSlide,

    // Where we're going
    FutureAISlide,
    FutureLocalSlide,

    // Wrap up
    QuestionsSlide,
    EndSlide,
  ],
};
