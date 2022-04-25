import { useDispatch, useSelector } from "react-redux";
import { getAllVendors, setSort } from "../../store";
import "./sort.scss";

export const Sort = () => {
  const dispatch = useDispatch();
  const sortItems = useSelector(
    (state: any) => state?.vendors?.data?.data?.extra_sections.filters.top.data
  );
  const activeSort = useSelector((state: any) => state?.filter?.sort);

  const handleSortClicked = (sortValue: string) => {
    dispatch(setSort(sortValue));
    dispatch(getAllVendors(`filters={"sortings":["${sortValue}"]}`));
  };

  return (
    <div className="sort-list">
      {sortItems?.map((sortItem: any, index: number) => (
        <div
          className={`sort-tag ${
            activeSort === sortItem.value && "sort-tag--active"
          }`}
          onClick={() => handleSortClicked(sortItem.value)}
          key={index}
        >
          {sortItem.title}
        </div>
      ))}
    </div>
  );
};
