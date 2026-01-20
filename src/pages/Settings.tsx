import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Settings() {
  return (
    <div className="p-6 max-w-2xl space-y-6">
      <h1 className="text-2xl font-bold">Admin Settings</h1>
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium">Portal Name</label>
          <Input placeholder="e.g. IIT Placement Portal" className="mt-1" />
        </div>
        <div>
          <label className="text-sm font-medium">Admin Email</label>
          <Input type="email" placeholder="admin@college.edu" className="mt-1" />
        </div>
        <Button>Save Changes</Button>
      </div>
    </div>
  )
}