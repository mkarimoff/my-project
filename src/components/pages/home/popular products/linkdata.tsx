import { useState } from "react";
import { Container, MenuBtn } from "./style";
import Discounted from "./discounted";
import BestSeller from "./best.seller";
import NewArrival from "./new.arrival";
import OnSale from "./on.sale";


type CategoryType = "BestSeller" | "Discounted" | "NewArrival" | "OnSale";

const LinkData = () => {
    const [selectCategory, setSelectCategory] = useState<CategoryType>("BestSeller");

    const handleClick = (category: CategoryType) => {
      setSelectCategory(category);
  };

  return (
    <div>
      <Container>
        <MenuBtn active={selectCategory === "NewArrival"} onClick={() => handleClick("NewArrival")}>
          New Arrivals
        </MenuBtn>
        <MenuBtn active={selectCategory === "BestSeller"} onClick={() => handleClick("BestSeller")}>
          Best Seller
        </MenuBtn>
        <MenuBtn active={selectCategory === "Discounted"} onClick={() => handleClick("Discounted")}>
          Discounted
        </MenuBtn>
        <MenuBtn active={selectCategory === "OnSale"} onClick={() => handleClick("OnSale")}>
          On Sale
        </MenuBtn>
      </Container>
      {selectCategory === "BestSeller" && <BestSeller />}
      {selectCategory === "Discounted" && <Discounted />}
      {selectCategory === "NewArrival" && <NewArrival />}
      {selectCategory === "OnSale" && <OnSale />}
    </div>
  );
};

export default LinkData;