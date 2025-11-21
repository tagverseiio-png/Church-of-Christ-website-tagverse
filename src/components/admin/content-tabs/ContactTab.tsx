import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactContent } from "@/types/content";

interface ContactTabProps {
  content: ContactContent;
  onChange: (content: ContactContent) => void;
}

const ContactTab = ({ content, onChange }: ContactTabProps) => {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Page Header</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Page Title</Label>
            <Input
              value={content.title}
              onChange={(e) => onChange({ ...content, title: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea
              rows={2}
              value={content.description}
              onChange={(e) => onChange({ ...content, description: e.target.value })}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Email</Label>
            <Input
              type="email"
              value={content.email}
              onChange={(e) => onChange({ ...content, email: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label>Phone</Label>
            <Input
              value={content.phone}
              onChange={(e) => onChange({ ...content, phone: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label>Address</Label>
            <Textarea
              rows={4}
              value={content.address}
              onChange={(e) => onChange({ ...content, address: e.target.value })}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Service Times</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Sunday Worship</Label>
            <Input
              value={content.serviceTimeSunday}
              onChange={(e) => onChange({ ...content, serviceTimeSunday: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label>Bible Study</Label>
            <Input
              value={content.serviceTimeBibleStudy}
              onChange={(e) => onChange({ ...content, serviceTimeBibleStudy: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label>Wednesday Evening</Label>
            <Input
              value={content.serviceTimeWednesday}
              onChange={(e) => onChange({ ...content, serviceTimeWednesday: e.target.value })}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactTab;
