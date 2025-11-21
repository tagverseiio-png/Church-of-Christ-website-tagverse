import { useState, useEffect } from "react";
import { getSiteContent, updateSiteContent, contentExists } from "@/services/contentService";
import { SiteContent } from "@/types/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Save, RefreshCw } from "lucide-react";
import AboutTab from "./content-tabs/AboutTab";
import ContactTab from "./content-tabs/ContactTab";
import FooterTab from "./content-tabs/FooterTab";

const ContentEditor = () => {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [hasContent, setHasContent] = useState(false);
  const { toast } = useToast();

  const fetchContent = async (showLoading = true) => {
    try {
      if (showLoading) setLoading(true);
      const exists = await contentExists();
      setHasContent(exists);
      const fetchedContent = await getSiteContent();
      setContent(fetchedContent);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load content",
        variant: "destructive",
      });
    } finally {
      if (showLoading) setLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  const handleSave = async () => {
    if (!content) return;

    setSaving(true);
    try {
      await updateSiteContent(content);
      toast({
        title: "Success",
        description: "Content updated successfully",
      });
      // Refresh content from database to ensure sync
      await fetchContent(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update content",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };



  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!content) return null;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Content Management</CardTitle>
              <CardDescription>
                Edit website content for all pages
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => fetchContent(true)}>
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
              <Button onClick={handleSave} disabled={saving}>
                {saving ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Save All Changes
                  </>
                )}
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="home" className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="home">Home</TabsTrigger>
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
              <TabsTrigger value="footer">Footer</TabsTrigger>
            </TabsList>

            {/* Home Content */}
            <TabsContent value="home" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Hero Section</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="heroTitle">Hero Title</Label>
                    <Input
                      id="heroTitle"
                      value={content.home.heroTitle}
                      onChange={(e) => setContent({
                        ...content,
                        home: { ...content.home, heroTitle: e.target.value }
                      })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="heroSubtitle">Hero Subtitle</Label>
                    <Input
                      id="heroSubtitle"
                      value={content.home.heroSubtitle}
                      onChange={(e) => setContent({
                        ...content,
                        home: { ...content.home, heroSubtitle: e.target.value }
                      })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="heroDescription">Hero Description</Label>
                    <Textarea
                      id="heroDescription"
                      rows={3}
                      value={content.home.heroDescription}
                      onChange={(e) => setContent({
                        ...content,
                        home: { ...content.home, heroDescription: e.target.value }
                      })}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Welcome Section</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="welcomeTitle">Welcome Title</Label>
                    <Input
                      id="welcomeTitle"
                      value={content.home.welcomeTitle}
                      onChange={(e) => setContent({
                        ...content,
                        home: { ...content.home, welcomeTitle: e.target.value }
                      })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="welcomeDescription">Welcome Description</Label>
                    <Textarea
                      id="welcomeDescription"
                      rows={3}
                      value={content.home.welcomeDescription}
                      onChange={(e) => setContent({
                        ...content,
                        home: { ...content.home, welcomeDescription: e.target.value }
                      })}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Values Section</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="font-medium">Value 1</h4>
                    <div className="space-y-2">
                      <Label>Title</Label>
                      <Input
                        value={content.home.value1Title}
                        onChange={(e) => setContent({
                          ...content,
                          home: { ...content.home, value1Title: e.target.value }
                        })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Description</Label>
                      <Textarea
                        rows={2}
                        value={content.home.value1Description}
                        onChange={(e) => setContent({
                          ...content,
                          home: { ...content.home, value1Description: e.target.value }
                        })}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium">Value 2</h4>
                    <div className="space-y-2">
                      <Label>Title</Label>
                      <Input
                        value={content.home.value2Title}
                        onChange={(e) => setContent({
                          ...content,
                          home: { ...content.home, value2Title: e.target.value }
                        })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Description</Label>
                      <Textarea
                        rows={2}
                        value={content.home.value2Description}
                        onChange={(e) => setContent({
                          ...content,
                          home: { ...content.home, value2Description: e.target.value }
                        })}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium">Value 3</h4>
                    <div className="space-y-2">
                      <Label>Title</Label>
                      <Input
                        value={content.home.value3Title}
                        onChange={(e) => setContent({
                          ...content,
                          home: { ...content.home, value3Title: e.target.value }
                        })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Description</Label>
                      <Textarea
                        rows={2}
                        value={content.home.value3Description}
                        onChange={(e) => setContent({
                          ...content,
                          home: { ...content.home, value3Description: e.target.value }
                        })}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Call to Action</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>CTA Title</Label>
                    <Input
                      value={content.home.ctaTitle}
                      onChange={(e) => setContent({
                        ...content,
                        home: { ...content.home, ctaTitle: e.target.value }
                      })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>CTA Description</Label>
                    <Textarea
                      rows={2}
                      value={content.home.ctaDescription}
                      onChange={(e) => setContent({
                        ...content,
                        home: { ...content.home, ctaDescription: e.target.value }
                      })}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* About Content */}
            <TabsContent value="about">
              <AboutTab
                content={content.about}
                onChange={(about) => setContent({ ...content, about })}
              />
            </TabsContent>

            {/* Contact Content */}
            <TabsContent value="contact">
              <ContactTab
                content={content.contact}
                onChange={(contact) => setContent({ ...content, contact })}
              />
            </TabsContent>

            {/* Footer Content */}
            <TabsContent value="footer">
              <FooterTab
                content={content.footer}
                onChange={(footer) => setContent({ ...content, footer })}
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>


    </div>
  );
};

export default ContentEditor;
