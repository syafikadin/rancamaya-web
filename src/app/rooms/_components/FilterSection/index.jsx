"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./styles.module.css";
import "react-datepicker/dist/react-datepicker.css";

import Select from "react-select";
import toast, { Toaster } from "react-hot-toast";

const options = [
  { value: "default", label: "Default Sorting" },
  { value: "high-price", label: "From High to Low price" },
  { value: "low-price", label: "From Low to High price" },
  // { value: "max-guests", label: "From Max to Min guests" },
  // { value: "min-guests", label: "From Min to Max guests" },
];

function FilterSection({ filters }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSort(e) {
    console.log(e);
    const params = new URLSearchParams(searchParams);
    params.set("sort", e.value);
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <form className={`${styles.filterSection} roomsForm`}>
      <div className={styles.formControl}>
        <label htmlFor="">Sort Price</label>
        <Select
          onChange={(e) => {
            handleSort(e);
          }}
          options={options}
          isSearchable={false}
          className={styles.select}
          defaultValue={
            options.find((item) => item.value === filters?.filter) ?? options.at(0)
          }
        />
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </form>
  );
}

export default FilterSection;
