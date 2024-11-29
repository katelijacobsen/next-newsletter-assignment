function page() {
  return (
    <div>
      <form action="/form/update">
        <label htmlFor="">Number</label>
        <input className="border border-blue-800" type="number" name="number" />
      </form>
    </div>
  );
}

export default page;
