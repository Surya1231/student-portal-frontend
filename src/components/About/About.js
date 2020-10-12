import React from 'react';
import { Section } from '../common/Common';

function About() {
  return (
    <div className="about bg-ulight ">
      <div className="container bg-white py-3 height-rscreen">
        <Section title="About Us" closing>
          <div className="about-us">
            Your childhood teacher did not wrong you when they taught you that there should be
            three, or four, or five sentences in a paragraph. It is important to understand,
            however, that the aim in teaching this was not to impart a hard-and-fast rule of
            grammar, drawn from an authoritative-but-dusty book. The true aim of this strategy was
            to teach you that your ideas must be well supported to be persuasive and effective.
            <p>
              The model regarding paragraph length that your teacher undoubtedly taught you involves
              a topic sentence, a number of facts that support that core idea, and a concluding
              sentence. The proviso about the number of sentences between the topic sentence and the
              conclusion was not given to you because it was the magic formula for creating
              paragraphs of the perfect length; rather, your educator was attempting to give you a
              good reason to do adequate research on your topic. Academic writing yields the best
              examples of the topic-support-conclusion paragraph structure.
            </p>
            <br />
            <button className="mx-2 my-2 btn btn-outline-dark" type="button">
              Github
            </button>
            <button className="mx-2 my-2 btn btn-outline-info" type="button">
              Feedback
            </button>
          </div>
        </Section>
        <br />

        <Section title="Top Contributors">
          <div className="top-contributors">all top contributors here</div>
        </Section>
        <br />

        <Section title="Developers">
          <div className="developer"> Developers Here </div>
        </Section>
      </div>
    </div>
  );
}

export default About;
