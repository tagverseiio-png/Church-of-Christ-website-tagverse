import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, BookOpen, Users } from "lucide-react";
import worshipScene from "@/assets/worship-scene.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-soft py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6 animate-in fade-in duration-700">
              <div className="inline-block">
                <span className="text-accent font-medium text-sm uppercase tracking-wider">
                  Matthew 26:28
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight">
                The Blood of the{" "}
                <span className="text-gradient-gold">New Covenant</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                "For this is My blood of the new covenant, which is shed for many for the remission of sins."
              </p>
              <p className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto">
                Experience the transforming love and grace found through Jesus Christ. 
                Discover God's unconditional love and the promise of eternal life through the New Covenant.
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
              Welcome to Our Fellowship
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a community of believers united in Christ, devoted to sharing the gospel 
              and living out the love and grace found in the New Covenant. Through His sacrifice, 
              we have been redeemed and called to walk in His light.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Love & Grace</h3>
              <p className="text-muted-foreground leading-relaxed">
                God's unconditional love through Christ's sacrifice brings us grace, forgiveness, 
                and the gift of eternal life. His love transforms our hearts.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Scripture & Truth</h3>
              <p className="text-muted-foreground leading-relaxed">
                We hold fast to the Word of God, seeking truth and understanding through 
                the teachings of Christ and the apostles in the New Testament.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Community</h3>
              <p className="text-muted-foreground leading-relaxed">
                We are a family in Christ, supporting one another in faith, worship, and service. 
                Together, we grow in love and share His message.
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
              Come and Experience God's Love
            </h2>
            <p className="text-lg md:text-xl opacity-90">
              Join us in worship, fellowship, and growing together in faith. 
              All are welcome in the family of Christ.
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
