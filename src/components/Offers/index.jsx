import CardOffers from "./CardOffers";
import "./index.scss";

const index = () => {
    return (
        <section>
            <div className="container mx-auto">
                <div className="offers">
                    <div className="offers_info">{/* content */}</div>

                    <ul>
                        <li>
                            <CardOffers/>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default index;