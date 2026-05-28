function DashboardCard({ title, value, color }) {
  return (
    <div className="bg-[#1e293b] p-6 rounded-xl">

      <h3 className="text-gray-400">
        {title}
      </h3>

      <p className={`text-3xl font-bold mt-2 ${color}`}>
        {value}
      </p>

    </div>
  )
}

export default DashboardCard