async function page({ searchParams }) {
  const params = (await searchParams).items;

  const items = JSON.parse(params);
  return (
    <div>
      <h1>Hello</h1>
      <ul>
        {items.map((item, i) => {
          return (
            <li key={i}>
              {item.name} - {item.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default page;
