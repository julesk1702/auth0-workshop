const InfoRow = ({ label, value }) => {
  return (
    <p>
      <strong>{label}:</strong>{" "}
      {value ? value : <span className="faded">Not provided</span>}
    </p>
  );
};

export default InfoRow;
