import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Heart, Cross, Loader2 } from "lucide-react";
import { useSiteContent } from "@/hooks/useSiteContent";

const About = () => {
  const { content, loading } = useSiteContent();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!content) return null;

  return (
    <div className="min-h-screen py-16 bg-gradient-soft">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">
            {content.about.title}
          </h1>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Mission Statement */}
          <Card className="shadow-soft border-primary/10">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Cross className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {content.about.missionStatement}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* The Truth */}
          <Card className="shadow-soft border-primary/10">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  {content.about.truthTitle}
                </h2>
                <p className="text-lg text-foreground leading-relaxed">
                  {content.about.truthContent}
                </p>
                
                <p className="text-lg text-foreground leading-relaxed">
                  {content.about.truthContent2}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Biblical Manuscript */}
          <Card className="shadow-soft border-primary/10">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    {content.about.manuscriptTitle}
                  </h2>
                  <blockquote className="border-l-4 border-accent pl-6 py-2 italic text-foreground/90">
                    {content.about.manuscriptQuote}
                    <footer className="text-sm text-accent font-medium mt-2 not-italic">
                      — {content.about.manuscriptAuthor}
                    </footer>
                  </blockquote>
                  
                  <p className="text-lg text-foreground leading-relaxed">
                    {content.about.manuscriptContent}
                  </p>
                  
                  <p className="text-lg text-foreground leading-relaxed">
                    {content.about.manuscriptContent2}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Simply Stated */}
          <Card className="shadow-soft border-primary/10">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    {content.about.scriptureTitle}
                  </h2>
                  
                  <p className="text-lg text-foreground leading-relaxed">
                    {content.about.scriptureContent1}
                  </p>
                  
                  <p className="text-lg text-foreground leading-relaxed">
                    {content.about.scriptureContent2}
                  </p>
                  
                  <p className="text-lg text-foreground leading-relaxed">
                    {content.about.scriptureContent3}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
