'use client';

import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is SaasKit and how does it work?",
      answer: "SaasKit is a comprehensive SaaS platform that helps teams build, deploy, and scale their applications. Our platform provides all the tools you need to manage your projects, collaborate with team members, and analyze performance metrics in real-time."
    },
    {
      question: "Can I change my plan at any time?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle, and we'll prorate any differences. If you upgrade mid-cycle, you'll only pay the difference for the remaining time."
    },
    {
      question: "Is there a free trial available?",
      answer: "We offer a 14-day free trial for all our plans. No credit card required to start your trial. You'll have access to all features during the trial period to help you decide which plan works best for your team."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide different levels of support based on your plan. Starter plans include email support, Professional plans get priority support, and Enterprise customers receive 24/7 phone support with a dedicated account manager."
    },
    {
      question: "How secure is my data?",
      answer: "Security is our top priority. We use enterprise-grade encryption, regular security audits, and comply with SOC 2 Type II, GDPR, and other industry standards. Your data is stored in secure, redundant data centers with 99.9% uptime guarantee."
    },
    {
      question: "Can I integrate SaasKit with other tools?",
      answer: "Yes, we offer extensive integration capabilities. Our API allows you to connect with popular tools like Slack, Google Workspace, Microsoft 365, and hundreds of other applications through our integration marketplace."
    },
    {
      question: "What happens if I exceed my plan limits?",
      answer: "We&apos;ll notify you when you&apos;re approaching your limits. You can either upgrade to a higher plan or we&apos;ll help you optimize your usage. We never cut off access abruptly - we work with you to find the best solution."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee for all paid plans. If you&apos;re not satisfied within the first 30 days, we&apos;ll provide a full refund, no questions asked."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Questions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Got questions? We&apos;ve got answers. Can&apos;t find what you&apos;re looking for?
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-xl backdrop-blur-sm hover:border-gray-600 transition-colors duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded-xl"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                        openIndex === index ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-300 mb-6">
            Our support team is here to help you get the most out of SaasKit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@saaskit.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Support
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-600 text-white font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-800/50 transition-all duration-300"
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;