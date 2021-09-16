import './landing.scss';

const Landing = () => {
  return (
    <div className="landing">
      <div className="container container--centered">
        <h1 className="landing__heading landing__heading--white">Esure</h1>
        <div className="box box--white">
          <h1 className="landing__form-title">My account</h1>
          <div className="landing__container">
            <div className="landing__half box--separator-right">
              <h2 className="landing__form-subtitle">Log in</h2>
              <form className="landing__form" action="submit">
                <label>Email address</label>
                <input type="text" />
                <label>Password</label>
                <input type="password" />
                <button type="button">Log in</button>
              </form>
            </div>
            <div className="landing__half">
              <h2 className="landing__form-subtitle">Why log in to My Account?</h2>
              <p>Just log in and you'll discover everything to do with your esure insurance and so much more:</p>
              <ul>
                <li>Your documents - View, check and print your policy details</li>
                <li>Make changes to your policy</li>
                <li>Your No Claim Discount - Easily upload or request your proof of NCD</li>
              </ul>
              <p>Plus you'll get access to our loyalty discounts as our way of saying thank you.</p>
            </div>
          </div>
        </div>
        <p className="small-copy small-copy--white">esure is a trading name of esure Services Limited and esure Insurance Limited. esure Services Limited and esure Insurance Limited are both subsidiaries of esure Group plc.</p>
        <p className="small-copy small-copy--white">esure Services Limited (Company No 02135610/ FCA FRN 312063) and esure Insurance Limited (Company No 03885534/ FCA FRN 203350) are registered in England and Wales at The Observatory, Reigate, Surrey, RH2 0SG. esure Services Limited is authorised and regulated by the Financial Conduct Authority. esure Insurance Limited is authorised by the Prudential Regulation Authority and regulated by the Financial Conduct Authority and the Prudential Regulation Authority.</p>
        <p className="small-copy small-copy--white">esure Services Limited introduces and administers products on behalf of esure Insurance Limited and various other regulated insurance providers, click here for full details.</p>
      </div>
    </div>
  )
}

export default Landing;