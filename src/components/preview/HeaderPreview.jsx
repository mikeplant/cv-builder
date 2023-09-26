function HeaderPreview({ generalInfo }) {
  return (
    <div className="preview-header">
      <h1>{generalInfo.name}</h1>
      <p>{generalInfo.address}</p>

      {generalInfo.email || generalInfo.phone ? (
        <p className="header-contacts">
          {generalInfo.email ? (
            <span className="icon-contact-pair">
              <img
                src="src/assets/img/circle-mail.svg"
                className="header-icon"
                alt="circle mail icon"
              ></img>
              {generalInfo.email}
            </span>
          ) : (
            ""
          )}

          {generalInfo.phone ? (
            <span className="icon-contact-pair">
              <img
                src="src/assets/img/circle-phone.svg"
                className="header-icon"
                alt="circle phone icon"
              ></img>
              {generalInfo.phone}
            </span>
          ) : (
            ""
          )}
        </p>
      ) : (
        ""
      )}
      <p></p>
    </div>
  );
}

export default HeaderPreview;
