import ClaimForm from "./ClaimForm";
import "../CustomLayout.css";

function Only6SlotsBadge() {
  // SVG with curved text for the badge, larger radius
  return (
    <svg width="260" height="260" viewBox="0 0 260 260" className="custom-badge-svg">
      <circle cx="130" cy="130" r="120" fill="#35588A" />
      <defs>
        {/* Full circle path, larger radius */}
        <path id="badge-arc" d="M 130 30 A 100 100 0 1 1 129.99 30" fill="none" />
      </defs>
      <text fontSize="28" fontWeight="bold" fill="#fff">
        <textPath href="#badge-arc" startOffset="25%" textAnchor="middle" dominantBaseline="middle">
          ONLY 6 SLOTS LEFT
        </textPath>
      </text>
    </svg>
  );
}

function FeatureIcon({ type }) {
  // SVG icons for each feature
  if (type === "confidential") {
    return (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#E3EAF6"/><path d="M10 6a2 2 0 0 1 2 2v1h-4V8a2 2 0 0 1 2-2Zm-4 5c0-2.21 1.79-4 4-4s4 1.79 4 4v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-2Z" fill="#35588A"/></svg>
    );
  }
  if (type === "nowin") {
    return (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#F1E6F6"/><path d="M7 10l2 2 4-4" stroke="#6B2D7C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    );
  }
  if (type === "free") {
    return (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#F6EDE3"/><path d="M10 5l1.09 3.36H15l-2.8 2.04L13.18 15 10 12.27 6.82 15l.98-4.6L5 8.36h3.91L10 5z" fill="#C7A47B"/></svg>
    );
  }
  return null;
}

function LeftCard() {
  return (
    <div className="custom-left-card">
      <div className="custom-left-panel">
        {/* Removed custom-blur-bg */}
        <div className="custom-left-title">
          <span className="custom-left-title-bold">Free</span><br />
          <span className="custom-left-title-light">Case <br /> Review</span>
        </div>
        <div style={{ flex: 1 }} />
        <ul className="custom-feature-list-2">
          <li><FeatureIcon type="confidential" /> <span>100% Confidential</span></li>
          <li><FeatureIcon type="nowin" /> <span>No Win, No Fee</span></li>
          <li><FeatureIcon type="free" /> <span>Free Case Evaluation</span></li>
        </ul>
      </div>
      <div className="custom-right-panel">
        <div className="custom-help-text">We are here <br /> to help!</div>
        <div className="custom-badge-container"><Only6SlotsBadge /></div>
        <button className="custom-contact-btn">Contact us <span className="arrow">&gt;</span></button>
      </div>
    </div>
  );
}

function TwoColumnLayout() {
    return (
        <div className="custom-bg">
            <div className="custom-overlay" />
            <section className="custom-main-container">
                <div className="custom-row">
                    {/* Left Card */}
                    <LeftCard />
                    {/* Right Card (Form) */}
                    <div className="custom-form-card">
                        <ClaimForm />
                    </div>
                </div>
                {/* Bottom Card (outside custom-row for correct stacking) */}
                <div className="custom-bottom-card">
                    <div className="custom-bottom-title">Have you or a loved one been affected by <span>Mesothelioma?</span></div>
                    <div className="custom-bottom-desc">As a woman, you've carried the weight of care, love, and resilience. Now it's time someone stands with you.</div>
                    <ul className="custom-bottom-list">
                        <li>Secondary Asbestos exposure is common</li>
                        <li>Misdiagnosis delays are more frequent in women</li>
                        <li>Women have won significant legal settlements</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default TwoColumnLayout;
