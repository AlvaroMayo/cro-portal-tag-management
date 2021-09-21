import Navigation from "../../component/navigation/navigation";
import Offer from "../../component/offer/offer";
import Salutation from "../../component/shared/salutation/salutation";
import './offers.scss';

const Offers = () => {
    return (
        <div>
            <Navigation />
            <Salutation />
            <div className="main">
                <h1>Offers - just buy direct</h1>
                <div className="box box--white box--border offers">
                    <Offer />
                    <Offer />
                </div>
            </div>
        </div>
    )
}

export default Offers;