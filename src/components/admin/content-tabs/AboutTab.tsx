import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AboutContent } from "@/types/content";

interface AboutTabProps {
  content: AboutContent;
  onChange: (content: AboutContent) => void;
}

const AboutTab = ({ content, onChange }: AboutTabProps) => {
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
            <Label>Mission Statement</Label>
            <Textarea
              rows={3}
              value={content.missionStatement}
              onChange={(e) => onChange({ ...content, missionStatement: e.target.value })}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>The Truth Section</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Section Title</Label>
            <Input
              value={content.truthTitle}
              onChange={(e) => onChange({ ...content, truthTitle: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label>Content Paragraph 1</Label>
            <Textarea
              rows={4}
              value={content.truthContent}
              onChange={(e) => onChange({ ...content, truthContent: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label>Content Paragraph 2</Label>
            <Textarea
              rows={3}
              value={content.truthContent2}
              onChange={(e) => onChange({ ...content, truthContent2: e.target.value })}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Biblical Manuscript Section</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Section Title</Label>
            <Input
              value={content.manuscriptTitle}
              onChange={(e) => onChange({ ...content, manuscriptTitle: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label>Quote</Label>
            <Textarea
              rows={3}
              value={content.manuscriptQuote}
              onChange={(e) => onChange({ ...content, manuscriptQuote: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label>Quote Author</Label>
            <Input
              value={content.manuscriptAuthor}
              onChange={(e) => onChange({ ...content, manuscriptAuthor: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label>Content Paragraph 1</Label>
            <Textarea
              rows={4}
              value={content.manuscriptContent}
              onChange={(e) => onChange({ ...content, manuscriptContent: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label>Content Paragraph 2</Label>
            <Textarea
              rows={3}
              value={content.manuscriptContent2}
              onChange={(e) => onChange({ ...content, manuscriptContent2: e.target.value })}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Scriptural Truth Section</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Section Title</Label>
            <Input
              value={content.scriptureTitle}
              onChange={(e) => onChange({ ...content, scriptureTitle: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label>Content Paragraph 1</Label>
            <Textarea
              rows={4}
              value={content.scriptureContent1}
              onChange={(e) => onChange({ ...content, scriptureContent1: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label>Content Paragraph 2</Label>
            <Textarea
              rows={3}
              value={content.scriptureContent2}
              onChange={(e) => onChange({ ...content, scriptureContent2: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label>Content Paragraph 3</Label>
            <Textarea
              rows={4}
              value={content.scriptureContent3}
              onChange={(e) => onChange({ ...content, scriptureContent3: e.target.value })}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutTab;
