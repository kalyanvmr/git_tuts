
function itemList() {
const items=['biriyani','Mutton','chicken'];
  return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
  );
}

export default itemList;
