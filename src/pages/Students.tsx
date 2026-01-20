import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const students = [
  { name: "Harsh Kumar", roll: "CS001", status: "Placed", company: "Google" },
  { name: "Anjali Singh", roll: "CS002", status: "Pending", company: "-" },
  { name: "Rohit Verma", roll: "CS003", status: "Interviewing", company: "Microsoft" },
]

export default function Students() {
  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Student Directory</h1>
        <Button>Add Student</Button>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Roll No.</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Company</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((s) => (
              <TableRow key={s.roll}>
                <TableCell className="font-medium">{s.name}</TableCell>
                <TableCell>{s.roll}</TableCell>
                <TableCell><Badge variant="outline">{s.status}</Badge></TableCell>
                <TableCell>{s.company}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}