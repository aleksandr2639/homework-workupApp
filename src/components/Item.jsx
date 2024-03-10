const Item = ({ item, edit, remove }) => {

  const getTime = (date) => {
   let data = new Date(date);
   const time =  data.toLocaleDateString();
   return time
  }

  return (
    <li className="list_item">
      <div>{getTime(item.date)}</div>
      <div>{item.count}</div>
      <div>
        <button className="buttons btn_edit" onClick={() => {
          edit(item);
        }}></button>
        <button className="buttons btn_remove" onClick={() => {
          remove(item);
        }}></button>
      </div>
    </li>
  );
}

export default Item;