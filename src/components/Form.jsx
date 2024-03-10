const Form = ({ onSubmit, data, onChange }) => {

    return (
      <form onSubmit={onSubmit} className="form">
        <label>
          <p>Date (DD.MM.YY)</p>
          <input type="date" name="date" className="date" value={data.date} onChange={onChange} required={true} />
        </label>
        <label>
          <p>Result (km)</p>
          <input type="text" name="count" className="count" value={data.count} onChange={onChange} required={true} />
        </label>
        <button className="btn">ОК</button>
      </form>
    );
  }

  export default Form;