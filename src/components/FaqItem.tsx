"use client";

import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type FaqItemProps = {
  question: string;
  answer: string;
};

export default function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="faq-content" id="faq-header">
        <Typography variant="subtitle1" fontWeight="bold">
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2">{answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}
