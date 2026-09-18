const stats = [
  {
    value: "08+",
    label: "Projects",
  },
  {
    value: "10+",
    label: "Technologies",
  },
  {
    value: "∞",
    label: "Ideas",
  },
  {
    value: "24/7",
    label: "Curiosity",
  },
];

function Stats() {
  return (
    <div className="stats-grid">
      {stats.map((stat) => (
        <div className="stat-card" key={stat.label}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

export default Stats;