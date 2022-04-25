import { RestaurantCard } from "../components/RestaurantCard";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

export const Vendors = () => {
  const Row = ({ index, style }: any) => (
    <div style={style}>
      <RestaurantCard />
    </div>
  );
  
  return (
      // <RestaurantCard />
    <AutoSizer>
      {({ height, width }) => (
        <List
          className="container"
          direction="rtl"
          height={height}
          itemCount={10}
          itemSize={258}
          width={width}
        >
          {Row}
        </List>
      )}
    </AutoSizer>
  );
};
