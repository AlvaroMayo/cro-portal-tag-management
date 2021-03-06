import Navigation from "../../component/navigation/navigation";
import ActivePolicies from "../../component/policies/ActivePolicies";
import QuickLinks from "../../component/quick-links/quicklinks";
import Salutation from "../../component/shared/salutation/salutation";
import "./policies.scss";

const Policies = () => {
    return (
        <div className="policies">
            <Navigation />
            <Salutation />
            <div className="main">
                <div>
                    <h1 className="policies__title">My policies</h1>
                    <p className="policies__subtitle">Click the details button on your policy card to see your cover details and documents, make changes, find quotes or claim</p>
                </div>
                <QuickLinks />
                <ActivePolicies />
            </div>
        </div>
    )
}

export default Policies