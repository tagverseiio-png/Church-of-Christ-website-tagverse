import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Heart, Cross } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-16 bg-gradient-soft">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">
            About The Church of Christ
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
                    We thrive to ensure the whole world knows the truth of the God the Father, the Lord Jesus Christ and the Holy Spirit through New blood covenant, so that the new covenantal believers inherit the heaven.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* The Truth */}
          <Card className="shadow-soft border-primary/10">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6">
                <p className="text-lg text-foreground leading-relaxed">
                  <strong className="text-primary">The truth is:</strong> The four books of Matthew, Mark, Luke and John "MMLJ/Before the cross" belong to the Old –not the New Testament. This means that millions in the denominational world including the majority among churches of Christ -- unknowingly and unwittingly – have accepted this grievous Roman Catholic error and they continue to teach, promote and perpetuate this ancient Papal "heresy" among their own, in the Lord's New Testament church – and around the world.
                </p>
                
                <p className="text-lg text-foreground leading-relaxed">
                  These biblical and historical facts are confirmed by letter from The Roman Catholic Vatican Library in Rome, Italy, The British Museum/Library in London, England, The American Bible Society in New York, N.Y, Oklahoma Christian University, Oklahoma City, OK, Harding University, Memphis, TN and would be acknowledged by every other reputable and biblical manuscript authority.
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
                    Biblical Manuscript Authorities Declare
                  </h2>
                  <blockquote className="border-l-4 border-accent pl-6 py-2 italic text-foreground/90">
                    "The first 'title page' to the Bible was added in a 1486AD edition of a Latin Bible published by Pruss of Strassburg...The authority for its insertion was that of the printer...Second, there were no title sheets in the oldest and best manuscripts."
                    <footer className="text-sm text-accent font-medium mt-2 not-italic">
                      — Curt Niccum, Professor of the College of Biblical Studies, OKLAHOMA CHRISTIAN UNIVERSITY
                    </footer>
                  </blockquote>
                  
                  <p className="text-lg text-foreground leading-relaxed">
                    This Roman Catholic deception and corruption of the "written" old and new covenants in the Bible caused the Protestant Reformation of the 14th and 16th centuries. Including many among churches of Christ who sought "Biblical authority" rather than "Papal authority" to establish their faith and hopes on Christ's teaching of the Old Testament law of Moses in MMLJ/BC – rather than on the "true" New Testament of Christ revealed in "the apostles' doctrine" of Acts 2 through Revelation 22.
                  </p>
                  
                  <p className="text-lg text-foreground leading-relaxed">
                    This doctrinal error created among the Protestants by the Roman Catholic church has been the basic cause of the religious division between Catholics, Protestant denominations and doctrinal argument between churches of Christ and the Roman Catholic and Protestant world.
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
                    The Scriptural Truth
                  </h2>
                  
                  <p className="text-lg text-foreground leading-relaxed">
                    Simply stated, the Scriptures teach that Malachi was not the "end" or "last" book of the Old Testament, and that the book of Matthew was not the "beginning" or "first" book of the New Testament. The Scriptures teach that Christ's death on the cross described in Matthew 27, Mark 15, Luke 23 and John 19 was the "end" of the Old Testament (Rom. 10:4; 7:4). The Scriptures teach that Acts 2, not Matthew 1, marks the "beginning" of the New Testament age and revelation of new covenant "truth."
                  </p>
                  
                  <p className="text-lg text-foreground leading-relaxed">
                    Truly, MMLJ/BC are the only books in the Bible that describe the "end" of the Old Testament law of Moses. MMLJ/BC do not describe the "beginning" of the New Testament age as many, on the basis of Roman Catholic "heresy" of mistranslation in 1486AD, assume today.
                  </p>
                  
                  <p className="text-lg text-foreground leading-relaxed">
                    The Scriptures teach that MMLJ/BC describe the "last" thirty-three years of the Old Testament age and rule of the old covenant law of Moses among the Jews of Israel. And as faithful churches of Christ have known and taught from the time of Acts 2. The New Testament passage in which Christ describes and marks the "beginning" of the New Testament age and revelation of New Covenant doctrine.
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
