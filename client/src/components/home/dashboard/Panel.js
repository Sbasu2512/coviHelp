const Panel = (props) => {

    const { label, value, onSelect } = props;

    return (
      <section className="dashboard__panel" onClick={onSelect} >
        <h1 className="dashboard__panel-header">{label}</h1>
        <p className="dashboard__panel-value">{value}</p>
      </section>
    );
}

export default Panel;