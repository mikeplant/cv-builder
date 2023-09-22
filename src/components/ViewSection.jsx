function ViewSection({ generalInfo }) {
  return (
    <section className="view-section">
      {generalInfo.email}
      {generalInfo.phone}
    </section>
  );
}

export default ViewSection;
