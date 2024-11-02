import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
          id: 1,
          name: "Basic",
          price: 29.99,
          features: [
            "Access to gym equipment",
            "Locker room access",
            "One free training session",
            "Access during staffed hours only",
            "Standard cardio machines",
            "Water refill station access"
          ]
        },
        {
          id: 2,
          name: "Standard",
          price: 49.99,
          features: [
            "Access to gym equipment",
            "Locker room and sauna access",
            "Three free training sessions",
            "Group classes included",
            "Extended gym hours",
            "Access to advanced cardio machines",
            "Towel service",
            "Discount on protein shakes"
          ]
        },
        {
          id: 3,
          name: "Premium",
          price: 79.99,
          features: [
            "Access to all gym equipment",
            "Locker room, sauna, and pool access",
            "Unlimited training sessions",
            "Group classes and personal training",
            "Nutrition consultation",
            "Guest pass (2 per month)",
            "Early access to new equipment",
            "Discount on merchandise",
            "Priority class booking",
            "Complimentary fitness assessment"
          ]
        },
        {
          id: 4,
          name: "VIP",
          price: 99.99,
          features: [
            "24/7 gym access",
            "Private locker",
            "Unlimited personal training sessions",
            "Group classes, personal training, and yoga classes",
            "Customized meal plans",
            "Priority support",
            "Private lounge access",
            "Complimentary snacks and beverages",
            "Free guest pass (5 per month)",
            "Monthly body composition analysis",
            "Access to exclusive workshops and events"
          ]
        }
      ];
      

    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the town</h2>
           <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
           {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
           </div>
        </div>
    );
};

export default PriceOptions;