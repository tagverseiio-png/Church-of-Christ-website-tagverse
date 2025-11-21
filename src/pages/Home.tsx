import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, BookOpen, Users, Loader2 } from "lucide-react";
import worshipScene from "@/assets/worship-scene.jpg";
import { useSiteContent } from "@/hooks/useSiteContent";

const Home = () => {
  const { content, loading } = useSiteContent();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!content) {
    console.error('No content loaded in Home page');
    return null;
  }

  console.log('Home page using content:', content.home.heroTitle);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-soft py-20 md:py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6 animate-in fade-in duration-700">
              <div className="inline-block">
                <span className="text-accent font-medium text-sm uppercase tracking-wider">
                  {content.home.heroSubtitle}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight">
                {content.home.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-center">
                "For this is My blood of the new covenant, which is shed for many for the remission of sins."
              </p>
              <p className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto text-justify">
                {content.home.heroDescription}
              </p>
              <div className="flex flex-wrap gap-4 pt-4 justify-center">
                <Link to="/about">
                  <Button variant="covenant" size="lg" className="shadow-elevated">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Learn More
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg">
                    <Heart className="mr-2 h-5 w-5" />
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-primary">
              {content.home.welcomeTitle}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              {content.home.welcomeDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-10 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{content.home.value1Title}</h3>
              <p className="text-muted-foreground leading-relaxed text-justify">
                {content.home.value1Description}
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{content.home.value2Title}</h3>
              <p className="text-muted-foreground leading-relaxed text-justify">
                {content.home.value2Description}
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{content.home.value3Title}</h3>
              <p className="text-muted-foreground leading-relaxed text-justify">
                {content.home.value3Description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${worshipScene})` }}
        />
        <div className="absolute inset-0 bg-gradient-wine opacity-90" />
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6 text-primary-foreground">
            <h2 className="text-3xl md:text-5xl font-bold">
              {content.home.ctaTitle}
            </h2>
            <p className="text-lg md:text-xl opacity-90 text-justify">
              {content.home.ctaDescription}
            </p>
            <div className="pt-4">
              <Link to="/contact">
                <Button variant="gold" size="lg" className="shadow-elevated">
                  Join Our Community
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
