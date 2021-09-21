import Policy from "../policy/policy";
import "./ActivePolicies.scss";
import Data from "../../data/vehicles.json";

const ActivePolicies = () => {
    return (
        <div className="active-policies ">
                {Data.cars.map(car => <Policy car={car} key={car.carId} />)}
        </div>
    )
}

export default ActivePolicies;