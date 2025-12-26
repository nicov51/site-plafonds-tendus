"use client"

import { FAQPageJsonLd } from 'next-seo';
import faqList from '@/src/data/faqList';

export default function StructuredFaq() {
  return (
    <FAQPageJsonLd
      mainEntity={faqList.map((faq) => ({
        questionName: faq.question,
        acceptedAnswerText: faq.answer,
      }))}
    />
  );
}
