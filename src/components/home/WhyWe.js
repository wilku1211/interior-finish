import classes from "./WhyWe.module.scss";
import WhyWy from "../../assets/image/index/whyWy.jpg";

const WhyWe = () => {
  return (
    <section className={classes["wrapper"]}>
      <div className={classes["content"]}>
        <div>
          <h3>Obsługę nieruchomości wymyśliliśmy na nowo</h3>
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
      </div>
      <div className={classes["image-wrapper"]}>
        <img src={WhyWy} alt="" />
      </div>
    </section>
  );
};

export default WhyWe;
