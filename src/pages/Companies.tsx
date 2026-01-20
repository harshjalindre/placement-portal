import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Companies() {
  const companies = ["Amazon", "TCS", "Infosys", "Zomato"]
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Recruiting Partners</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {companies.map((company) => (
          <Card key={company}>
            <CardHeader>
              <CardTitle>{company}</CardTitle>
              <CardDescription>Visits scheduled for June 2026</CardDescription>
              <Button variant="secondary" className="mt-4 w-full">View Job Roles</Button>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}