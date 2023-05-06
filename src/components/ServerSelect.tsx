interface Props {}

const ServerSelect = (Props: Props) => {
  return (
    <select className="form-select" aria-label="Server Selection">
      <option selected>NA</option>
      <option value="1">EUW</option>
      <option value="2">KR</option>
      <option value="3">LAN</option>
    </select>
  );
};

export default ServerSelect;
