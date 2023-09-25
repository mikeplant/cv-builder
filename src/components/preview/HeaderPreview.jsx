function HeaderPreview({ generalInfo }) {
  return (
    <div className="preview-header">
      {generalInfo.name}
      <br />
      {generalInfo.address}
      <br />
      {generalInfo.email}
      <br />
      {generalInfo.phone}
    </div>
  );
}

export default HeaderPreview;
