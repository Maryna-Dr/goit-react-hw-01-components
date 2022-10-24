export default function Statistics({title, stats}) {
  return (
    <section className="statistics">
        {title && (
            <h2 className="title">{title}</h2>
        )}
  
        <ul className="stat-list">
            {stats.map(it => (<li className="item" key={it.id}>
            <span className="label">{it.label}</span>
            <span className="percentage">{it.percentage}</span>
            </li>))}
        </ul>
        </section>
  )
}

//==== можна розбити на декілька компонентів:  ====
//Statistics({title, children})
//StatisticList({stats}) - це ul
//StatiscticList як children для Statistics


