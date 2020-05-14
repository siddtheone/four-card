import React from 'react';
import Heading from './components/Heading/Heading';
import Card from './components/Card/Card';
import Paragraph from './components/Paragraph/Paragraph'
import supervisorImage from './images/icon-supervisor.svg';
import teamBuilderImage from './images/icon-team-builder.svg';
import karmaImage from './images/icon-karma.svg';
import calculatorImage from './images/icon-calculator.svg';

function App() {
  return (
    <div className="container">
      <main className="main">
        <Heading>Reliable, efficient delivery</Heading>
        <Heading primary>Powered by Technology</Heading>
        <Paragraph align="center" className="main__desc">
          Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful
        </Paragraph>
        <div className="grid">
          <div className="cols">
            <Card
              title="Supervisor"
              desc="Monitors activity to indentify project roadblocks"
              src={supervisorImage}
              type={0}
            />
          </div>
          <div className="cols">
            <Card
              title="Team Builder"
              desc="Scans our talent network to create the optimal team for your project"
              src={teamBuilderImage}
              type={1}
            />
            <Card
              title="Karma"
              desc="Regularly evaluates our talent to ensure quality"
              src={karmaImage}
              type={2}
            />
          </div>
          <div className="cols">
            <Card
              title="Calculator"
              desc="Uses data from past projects to provide better delivery estimates"
              src={calculatorImage}
              type={3}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
