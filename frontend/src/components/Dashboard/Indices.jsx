

const Indices = ({ data }) => (
  <div className="mb-6">
    <h2 className="text-xl font-bold mb-2">Indices</h2>
    <div className="flex gap-4 overflow-x-auto pb-2">
      {data.map(ind => (
        <div key={ind.id} className="p-4 rounded-lg shadow min-w-[200px] bg-white">
          <div className="font-bold text-green-800 text-lg">{ind.scrip}</div>
          <div className="text-2xl font-semibold">{ind.price}</div>
          <div className="text-sm text-gray-500">
            {ind.change} {ind.pct_change !== null ? `(${ind.pct_change}%)` : ""}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Indices;
