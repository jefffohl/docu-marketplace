import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlayCircle, Calendar, Clock } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <header className="bg-gradient-to-r from-blue-accent to-green-accent text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">The Untold Story</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <img src="https://via.placeholder.com/600x400" alt="Documentary Poster" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-4xl font-bold mb-4 text-blue-accent">Discover the Truth</h2>
              <p className="text-xl mb-6 text-green-accent">A groundbreaking documentary that uncovers the hidden stories behind our world's most pressing issues.</p>
              <div className="flex space-x-4"> {/* Added flex container for buttons */}
                <Button className="bg-blue-accent hover:bg-blue-600">
                  <PlayCircle className="mr-2 h-4 w-4" /> Watch Trailer
                </Button>
                <Button variant="outline" className="border-green-accent text-green-accent hover:bg-green-accent hover:text-white">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-blue-accent">Film Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gray-800 border-blue-accent">
              <CardContent className="flex items-center p-6">
                <Calendar className="h-8 w-8 mr-4 text-blue-accent" />
                <div>
                  <h4 className="font-semibold text-blue-accent">Release Date</h4>
                  <p className="text-green-accent">Coming Soon</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-blue-accent">
              <CardContent className="flex items-center p-6">
                <Clock className="h-8 w-8 mr-4 text-blue-accent" />
                <div>
                  <h4 className="font-semibold text-blue-accent">Duration</h4>
                  <p className="text-green-accent">120 minutes</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-blue-accent">
              <CardContent className="flex items-center p-6">
                <PlayCircle className="h-8 w-8 mr-4 text-blue-accent" />
                <div>
                  <h4 className="font-semibold text-blue-accent">Format</h4>
                  <p className="text-green-accent">4K Ultra HD</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-6 text-blue-accent">About the Film</h3>
          <p className="text-lg mb-4 text-gray-300">
            "The Untold Story" is a captivating journey into the heart of our society's most complex issues. 
            Through intimate interviews and stunning cinematography, this documentary sheds light on 
            the untold narratives that shape our world.
          </p>
          <p className="text-lg text-gray-300">
            Join us as we explore the depths of human resilience, uncover hidden truths, and inspire 
            change in this thought-provoking film that will leave you questioning everything you thought you knew.
          </p>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-blue-accent to-green-accent text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 The Untold Story. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
