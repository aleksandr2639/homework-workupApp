import { v4 as uuidv4 } from "uuid";
import Item from "./Item";

const List = ({ list, ...props }) => {

  return (
    <div className="list_wrapper">
      <div className="list_header">
        <p>Date (DD.MM.YY)</p>
        <p>Results (km)</p>
        <p>Actions</p>
      </div>
      <ul className="list">
        {list.map(item => (
          <Item
            {...props}
            item={item}
            key={uuidv4()}
          />
        ))}
      </ul>
    </div>

  );
}

export default List;