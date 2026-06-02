import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import DashboardCard from "./components/DashboardCard"

const dashboardData = [
  {
    title: "Portfolio Value",
    value: "$124,500",
  },

  {
    title: "Today's Profit",
    value: "+$2,430",
    color: "text-green-400",
  },

  {
    title: "Active Positions",
    value: "12",
  },
]

function App() {
  return (
    <div className="flex bg-[#0f172a] text-white min-h-screen">

      <Sidebar />

      <div className="flex-1 p-8">

        <Navbar />

        <div className="grid grid-cols-3 gap-6">

          {
  dashboardData.map((item, index) => (
    <DashboardCard
      key={index}
      title={item.title}
      value={item.value}
      color={item.color}
    />
  ))
}

        </div>

      </div>

    </div>
  )
}

export default App