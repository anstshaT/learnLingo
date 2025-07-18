import { useState } from "react";
import { languages } from "../../utils/filtersOptins";
import { levels } from "../../utils/filtersOptins";
import { prices } from "../../utils/filtersOptins";
import Selector from "../Selector/Selector";

const Filter = () => {
  const [selectedLang, setselectedLang] = useState(languages[0]);
  const [selectedLevel, setselectedLevel] = useState(levels[0]);
  const [selectedPrice, setselectedPrice] = useState(prices[0]);

  return (
    <div>
      <div>
        <span></span>
        <Selector
          arrays={languages}
          selectedValue={selectedLang}
          setSelectedValue={setselectedLang}
        />
      </div>

      <div>
        <span></span>

        <Selector
          arrays={levels}
          selectedValue={selectedLevel}
          setSelectedValue={setselectedLevel}
        />
      </div>

      <div>
        <span></span>
        <Selector
          arrays={prices}
          selectedValue={selectedPrice}
          setSelectedValue={setselectedPrice}
        />
      </div>
    </div>
  );
};

export default Filter;
