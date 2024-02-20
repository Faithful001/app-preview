"use client";

import { Accordion } from "flowbite-react";

const FAQsDropdown = () => {
  return (
    <div className="faqs-carousel">
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>
            How will AI align with my existing marketing strategy?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Our AI solutions perfectly complement and amplify your current
              strategy, enhancing results with no friction.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            Will my data be secure with your AI marketing solutions?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Data security is paramount; we implement cutting-edge protection
              for your invaluable insights and confidential information.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            Can I trust AI to handle real-time optimization reliably?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Our AI is designed for dependable real-time optimization, ensuring
              peak performance and adaptability under any circumstances.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            Are there hidden costs involved with implementing AI solutions?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Transparency is our policy; no hidden costs, with clear pricing
              for the value-packed growth and scale AI delivers.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default FAQsDropdown;
