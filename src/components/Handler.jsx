import { useState } from 'react';
import Form from "./Form";
import List from "./List";

const Handler = () => {

  const [list, setList] = useState({
    listItems: [],
  });

  const [data, setData] = useState({
    date: '',
    count: '',
  });

  const onSubmit = (event) => {
    event.preventDefault();
    const { target } = event;
    const formData = new FormData(target);
    const data = Object.fromEntries(formData);
    const arr = [...list.listItems];
    handlerData(data, arr);
    setList({
      ...list,
      listItems: arr,
    });
    setData({
      ...data,
      date: '',
      count: '',
    });
  }

  const handlerData = (data, arr) => {
    const el = arr.find(el => el.date === data.date);
    if (el) {
      el.count = (Number(el.count) + Number(data.count)).toString();
      return el
    } else {
      arr.push(data);
      arr.sort((a, b) => new Date(b.date) - new Date(a.date));
      return arr
    }
  }

  const edit = (item) => {
    remove(item);
    setData({
      ...data,
      date: item.date,
      count: item.count,
    });
  }

  const remove = (item) => {
    if (list.listItems.includes(item)) {
      setList({
        ...list,
        listItems: list.listItems.filter(el => el != item),
      });
    }
  }

  const onChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setData({
      ...data,
      [name]: value,
    });
  }

  return (
    <div className="container">
      <Form onSubmit={onSubmit} data={data} onChange={onChange} />
      <List
        list={list.listItems}
        edit={edit}
        remove={remove}
      />
    </div>
  )
}

export default Handler;