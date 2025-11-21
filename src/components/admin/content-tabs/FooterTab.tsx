import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FooterContent } from "@/types/content";

interface FooterTabProps {
  content: FooterContent;
  onChange: (content: FooterContent) => void;
}

const FooterTab = ({ content, onChange }: FooterTabProps) => {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Footer Content</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Church Name</Label>
            <Input
              value={content.churchName}
              onChange={(e) => onChange({ ...content, churchName: e.target.value })}
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
            <Input
              value={content.address}
              onChange={(e) => onChange({ ...content, address: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label>Copyright Text</Label>
            <Input
              value={content.copyright}
              onChange={(e) => onChange({ ...content, copyright: e.target.value })}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FooterTab;
