import React from 'react';
import './Features.css'; // Make sure to create a corresponding Features.css file

const Features = () => {
  return (
    
    <div className="features-container">
      <div className="feature-card">
        <div className="icon-wrapper">
          <i className="fas fa-truck-moving"></i> {/* Replace with actual icons */}
        </div>
        <h3>Real-time Tracking</h3>
        <p>Monitor your shipments every step of the way with our GPS-enabled tracking system.</p>
      </div>
      <div className="feature-card">
        <div className="icon-wrapper">
          <i className="fas fa-dollar-sign"></i> {/* Replace with actual icons */}
        </div>
        <h3>Cost Reduction</h3>
        <p>Optimize your spending with our intelligent route planning and load optimization features.</p>
      </div>
      <div className="feature-card">
        <div className="icon-wrapper">
          <i className="fas fa-chart-line"></i> {/* Replace with actual icons */}
        </div>
        <h3>Enhanced Efficiency</h3>
        <p>Improve your operational efficiency with our end-to-end supply chain management solutions.</p>
      </div>
    </div>
  );
};

export default Features;
