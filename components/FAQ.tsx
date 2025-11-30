
import React from 'react';
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: "Is DialerWare compliant with TCPA and DNC regulations?",
    answer: "Yes, compliance is our top priority. Our system automatically scrubs lists against the National Do Not Call Registry and adheres to TCPA calling hour restrictions. We also provide features for call recording consent management."
  },
  {
    question: "Can I integrate this with my existing CRM?",
    answer: "Absolutely. We offer native 2-way sync with Salesforce, HubSpot, Zoho, and Pipedrive. For custom stacks, our comprehensive API and Webhooks make integration seamless."
  },
  {
    question: "How does the AI voice agent handle complex objections?",
    answer: "Our agents are trained on millions of sales conversations. They use advanced LLMs to understand context, sentiment, and nuance, allowing them to pivot naturally and handle objections using your approved playbooks."
  },
  {
    question: "What happens if a prospect wants to speak to a human?",
    answer: "You can configure 'Live Transfer' protocols. If a prospect expresses interest or asks for a human, the AI can instantly transfer the call to your sales floor with a full context whisper to the receiving agent."
  },
];

export const FAQ: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-lg p-6 hover:border-blue-200 transition-colors bg-slate-50/50">
              <h3 className="text-lg font-bold text-slate-900 flex justify-between items-start">
                {faq.question}
                {/* <Plus className="flex-shrink-0 text-slate-400 ml-4" /> */}
              </h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
