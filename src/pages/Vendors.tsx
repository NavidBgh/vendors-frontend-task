import { RestaurantCard } from "../components/RestaurantCard";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { useDispatch, useSelector } from "react-redux";
import { getAllVendors } from "../store";
import React, { useEffect } from "react";
import InfiniteLoader from "react-window-infinite-loader";
import { Filter, Loading, Sort } from "../components";

const Vendors = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.vendors);

  useEffect(() => {
    dispatch(getAllVendors());
    // eslint-disable-next-line
  }, []);

  const Row = ({ index, style }: any) =>
    !isItemLoaded(index) ? (
      <Loading />
    ) : (
      <div style={style}>
        <RestaurantCard {...state?.data?.data?.finalResult[index + 1]} />
      </div>
    );

  const loadMoreItems = state?.loading
    ? () => {}
    : () => dispatch(getAllVendors('',state?.page));

  const isItemLoaded = (index: number) => {
    return !!state?.data?.data?.finalResult[index +1]
  };

  return (
    <React.Fragment>
      <Filter />
      <Sort />
      {state?.loading ? (
        <Loading />
      ) : (
        <InfiniteLoader
          isItemLoaded={isItemLoaded}
          itemCount={10}
          loadMoreItems={loadMoreItems}
        >
          {({ onItemsRendered, ref }) => (
            <AutoSizer>
              {({ height, width }) => (
                <List
                  ref={ref}
                  className="container"
                  direction="rtl"
                  height={height}
                  onItemsRendered={onItemsRendered}
                  itemCount={state?.data?.data?.finalResult.length - 1}
                  itemSize={250}
                  width={width}
                >
                  {Row}
                </List>
              )}
            </AutoSizer>
          )}
        </InfiniteLoader>
      )}
    </React.Fragment>
  );
};

export default Vendors;
