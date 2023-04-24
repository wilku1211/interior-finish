import classes from "./WhyWe.module.scss";

import WhyWy from "../../assets/image/index/whyWy.jpg";
import CornerEffect from "../UI/CornerEffect";

const WhyWe = () => {
  return (
    <section className={classes["wrapper"]}>
      <CornerEffect className={classes["content"]}>
        <div>
          <h2>Obsługę nieruchomości wymyśliliśmy na nowo</h2>
        </div>
        <div>
          <p>
            Interior finishes to nowoczesne biuro nieruchomości z profesjonalnym
            i innowacyjnym podejściem do tematu nieruchomości i inwestycji.
          </p>
          <p>
            Klienci wybierają nas, ponieważ zakres naszych usług wykracza poza
            to, co jest w stanie zaoferować konkurencja.
          </p>
        </div>
      </CornerEffect>
      <CornerEffect className={classes["image-wrapper"]}>
        <img src={WhyWy} alt="" />
      </CornerEffect>
    </section>
  );
};

export default WhyWe;
