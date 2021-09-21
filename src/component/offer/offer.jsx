import './offer.scss';

const Offer = () => {
    return (
        <div className="box box--white box--border offer">
            <div>
                <h3 className="offer__title">Loyal customers save up to 20% on our Home Insurance</h3>
                <p className="offer__copy"> Thanks for already insuring with us. With our quality home cover, you’ll get great value and reassuring benefits. </p>
            </div>
            <div className="offer__actions">
                <p>
                    <button className="offer__button">Get a quote</button>
                </p>
                <p>
                    <span className="offer__link">More Details</span>
                </p>
            </div>
        </div>
    )
}

export default Offer;