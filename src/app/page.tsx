"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="largeSmallSizeLargeTitles"
        background="none"
        cardStyle="gradient-radial"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        { name: "About", id: "about" },
        { name: "Results", id: "metrics" },
        { name: "Process", id: "features" },
        { name: "Testimonials", id: "testimonials" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Vantage"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{ variant: "gradient-bars" }}
      title="Elevating Brands Through Digital Excellence"
      description="We craft premium social media strategies for brands that demand performance, aesthetic perfection, and rapid growth."
      mediaItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/people-hangout-together-coffee-shop_53876-163250.jpg", imageAlt: "Agency Digital Workspace" },
        { imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-talking-phone_23-2148815638.jpg", imageAlt: "Modern Luxury Office" },
        { imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-triangle_23-2151293873.jpg", imageAlt: "Abstract Digital Design" },
        { imageSrc: "http://img.b2bpic.net/free-photo/business-people-working-laptops-meeting_53876-20850.jpg", imageAlt: "Creative Team" },
        { imageSrc: "http://img.b2bpic.net/free-photo/coworkers-examining-reports-papers-looking-statistics-annual-data-analytics-increase-profit-workers-group-planning-research-strategy-with-documents-business-development_482257-64771.jpg", imageAlt: "Analytics Dashboard" },
      ]}
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="Strategy Meets Sophistication"
      description={[
        "Vantage is a premium agency built for the top 1% of brands. We don't just post content; we engineer growth.",        "Our methodology combines psychological data, viral engineering, and ultra-high-end visual production."]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        { id: "m1", value: "150M+", description: "Combined Monthly Reach" },
        { id: "m2", value: "340%", description: "Avg Growth Rate" },
        { id: "m3", value: "25+", description: "Global Brands Scaled" },
      ]}
      title="Proven Impact, Measured Results"
      description="Numbers don't lie. Our metrics speak for our dedication to growth."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Growth Engineering",          description: "Algorithmic strategies customized for your brand.",          phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/smartphone-gift-box-with-golden-balloon_187299-48036.jpg" },
          phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/man-switching-bulbs-using-voice-command-tablet_482257-8730.jpg" }
        },
        {
          title: "Elite Content Production",          description: "Cinematic visual assets for every platform.",          phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/worker-examines-phone-with-greenscreen_482257-76605.jpg" },
          phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/crop-men-discussing-graph-tablet_23-2147785037.jpg" }
        },
        {
          title: "Viral Brand Voice",          description: "Crafting a narrative that resonates globally.",          phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/smartphone-displaying-financial-data-charts_23-2152020638.jpg" },
          phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/still-life-graphic-design-office_23-2151345406.jpg" }
        },
      ]}
      showStepNumbers={true}
      title="Precision Execution"
      description="Every move we make is backed by deep strategy and real-time data."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", title: "Exceptional", quote: "Vantage completely transformed our social presence.", name: "Alex Rivet", role: "CEO, Rivet Tech", imageSrc: "http://img.b2bpic.net/free-photo/financial-department-team-leader-researching-marketing-ideas-while-analyzing-company-expenses-report-startup-project-manager-developing-budget-growth-solutions-while-brainstorming-promoting-strategy_482257-38904.jpg" },
        { id: "2", title: "Growth-Focused", quote: "The results have been nothing short of staggering.", name: "Maria Chen", role: "CMO, Nova Labs", imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-business-lady_1163-3171.jpg" },
        { id: "3", title: "World Class", quote: "They possess an incredible eye for detail and growth.", name: "James O'Neal", role: "Founder, O'Neal Group", imageSrc: "http://img.b2bpic.net/free-photo/positive-confident-businesswoman-wearing-formal-suit-standing-with-arms-folded_74855-10328.jpg" },
        { id: "4", title: "Phenomenal", quote: "Vantage is simply the best in the business.", name: "Sarah Miller", role: "VP Marketing, Apex", imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-woman-posing-with-yellow-jacket_23-2149020793.jpg" },
        { id: "5", title: "Stellar", quote: "The strategic depth they provide is unmatched.", name: "David Park", role: "Head of Growth, Flux", imageSrc: "http://img.b2bpic.net/free-photo/closeup-smiling-beautiful-adult-businesswoman_1262-1760.jpg" },
      ]}
      title="Client Success Stories"
      description="Trusted by visionary founders and CMOs worldwide."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={["Microsoft", "Google", "Samsung", "Nike", "Adidas", "Spotify", "Netflix"]}
      title="Trusted By Industry Leaders"
      description="We partner with brands setting the global pace."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        { id: "f1", title: "How do we start?", content: "Book a discovery call so we can understand your objectives." },
        { id: "f2", title: "What is the ROI timeframe?", content: "Growth typically begins to show significant traction in 60 days." },
        { id: "f3", title: "Do you work with startups?", content: "We work with brands that have an established market fit." },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-asian-woman-with-headphones-talking-phone-call-people-customer-service-consultant-using-headset-microphone-working-call-center-computer-support-chat_482257-35265.jpg"
      title="Common Inquiries"
      description="Everything you need to know about our partnership approach."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{ variant: "rotated-rays-animated" }}
      text="Ready to scale your influence?"
      buttons={[{ text: "Start Partnership", href: "#" }]}
    />
  </div>

  <div id="contact-form" data-section="contact-form">
      <ContactSplitForm
        title="Let's Connect"
        description="Reach out to us to start building your future today."
        inputs={[
          { name: "name", type: "text", placeholder: "Full Name" },
          { name: "email", type: "email", placeholder: "Email Address" }
        ]}
        useInvertedBackground={false}
        mediaPosition="right"
        imageSrc="http://img.b2bpic.net/free-photo/medium-shot-woman-working-office_23-2149363595.jpg"
      />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Navigation",          items: [{ label: "About", href: "#about" }, { label: "Metrics", href: "#metrics" }],
        },
        {
          title: "Legal",          items: [{ label: "Privacy Policy", href: "#" }, { label: "Terms of Use", href: "#" }],
        },
      ]}
      logoText="Vantage"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
