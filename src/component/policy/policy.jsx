const Policy = (props) => {
    return (
        <div className="box box--white box--border active-policies__policies">
            <div>
                <span className="active-policies__title">{ props.car.makeModel }</span>
                <span className="active-policies__registration">{ props.car.registrationNumber }</span>
                <div className="active-policies__menu">
                    <span className="active-policies__policy-number">Policy number: { props.car.policyNumber }</span>
                    <button>Menu</button>
                </div>
                <div className="active-policies__period">
                    <div className="active-policies__period-date">
                        <span>Cover start</span>
                        <span>{ props.car.coverStart }</span>
                    </div>
                    <div className="active-policies__period-date">
                        <span>Renewal</span>
                        <span>{ props.car.coverEnd }</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Policy