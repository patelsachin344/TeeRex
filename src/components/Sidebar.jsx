export const Sidebar = () => {
  return (
    <div style={{ flex: "1", padding: "1rem" }}>
      <div>
        <div style={{ display: "flex", flexDirection: "column", width: "80%" }}>
          <span>Gender</span>
          <select name="" id="">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div style={{ display: "flex", flexDirection: "column", width: "80%" }}>
          <span>categories</span>
          <select name="" id="">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div style={{ display: "flex", flexDirection: "column", width: "80%" }}>
          <span>size</span>
          <select name="" id="">
            <option value="30">30</option>
            <option value="32">32</option>
            <option value="34">34</option>
            <option value="36">36</option>
          </select>
        </div>

        <div style={{ display: "flex", flexDirection: "column", width: "80%" }}>
          <span>color</span>
          <select name="" id="">
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
            <option value="blue">Blue</option>
          </select>
        </div>
      </div>
    </div>
  );
};
