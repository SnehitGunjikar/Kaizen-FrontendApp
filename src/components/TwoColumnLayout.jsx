import ClaimForm from "./ClaimForm";
import "../CustomLayout.css";

function TwoColumnLayout() {
    return (
        <div className="custom-bg">
            <div className="custom-overlay" />
            <section className="custom-main-container">
                <div className="custom-row">
                    {/* Left Card */}
                    <div className="custom-card">
                        <div className="custom-card-gradient" />
                        <div className="custom-card-content">
                            <div className="custom-card-title">Free<br/>Case<br/>Review</div>
                            <div className="custom-badge"><span className="custom-badge-text">ONLY 6 SLOTS LEFT</span></div>
                            <div className="custom-help-text">We are here to help!</div>
                            <ul className="custom-feature-list">
                                <li><span className="icon confidential">🔒</span>100% Confidential</li>
                                <li><span className="icon nowin">✔️</span>No Win, No Fee</li>
                                <li><span className="icon free">⭐</span>Free Case Evaluation</li>
                            </ul>
                            <button className="custom-contact-btn">Contact us <span className="arrow">&gt;</span></button>
                        </div>
                    </div>
                    {/* Right Card (Form) */}
                    <div className="custom-form-card">
                        <ClaimForm />
                    </div>
                </div>
                {/* Bottom Card */}
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
