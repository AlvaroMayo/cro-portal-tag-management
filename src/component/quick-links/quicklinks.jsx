import "./quicklinks.scss";

const QuickLinks = () => {
    return (
        <div className="quick-links box box--white box--border">
            <h2 className="quick-links__title">Quick links</h2>
            <div className="quick-links__links">
                <span className="quick-links__link">View your payments</span>
                <span className="quick-links__link">View your documents</span>
                <span className="quick-links__link">Request: motor proof of no claims discount</span>
                <span className="quick-links__link">Make changes to your policy</span>
            </div>
        </div>
    )
}

export default QuickLinks