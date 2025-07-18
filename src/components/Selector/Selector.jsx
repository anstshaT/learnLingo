import React from "react";
import s from "./Selector.module.css";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";

const Selector = ({ arrays, selectedValue, setSelectedValue }) => {
  return (
    <div>
      <Listbox value={selectedValue} onChange={setSelectedValue}>
        <ListboxButton>{selectedValue.value} $</ListboxButton>
        <ListboxOptions anchor="bottom">
          {arrays.map((array) => (
            <ListboxOption key={array.id} value={array} className={s.option}>
              {array.name}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
};

export default Selector;
