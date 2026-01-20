import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Building2, CheckCircle, TrendingUp } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Students" value="1,420" icon={<Users className="h-4 w-4" />} />
        <StatCard title="Companies" value="84" icon={<Building2 className="h-4 w-4" />} />
        <StatCard title="Placed" value="912" icon={<CheckCircle className="h-4 w-4 text-green-500" />} />
        <StatCard title="Active Drives" value="08" icon={<TrendingUp className="h-4 w-4 text-blue-500" />} />
      </div>
    </div>
  )
}

function StatCard({ title, value, icon }: any) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent><div className="text-2xl font-bold">{value}</div></CardContent>
    </Card>
  )
}