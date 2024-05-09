import AreaCard from "./AreaCard";
import "./AreaCards.scss";

const AreaCards = () => {
  return (
    <section className="content-area-cards">
      <AreaCard
        colors={["#e4e8ef", "#475be8"]}
        percentFillValue={80}
        cardInfo={{
          title: "Current Reading",
          value: "$400ppm",
          text: "The CO2 level is 400ppm.",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#4ce13f"]}
        percentFillValue={50}
        cardInfo={{
          title: "Today's Average Level",
          value: "600ppm",
          text: "You are in safe Range",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#f29a2e"]}
        percentFillValue={40}
        cardInfo={{
          title: "In Escrow",
          value: "$18.2K",
          text: "Available to payout",
        }}
      />
    </section>
  );
};

export default AreaCards;
