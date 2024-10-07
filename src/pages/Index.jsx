import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlayCircle, Calendar, Clock } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100">
      <header className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-4">
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
              <h2 className="text-4xl font-bold mb-4 text-blue-800">Discover the Truth</h2>
              <p className="text-xl mb-6 text-green-700">A groundbreaking documentary that uncovers the hidden stories behind our world's most pressing issues.</p>
              <Button className="mr-4 bg-blue-500 hover:bg-blue-600">
                <PlayCircle className="mr-2 h-4 w-4" /> Watch Trailer
              </Button>
              <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-50">Learn More</Button>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-blue-800">Film Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-blue-50 to-green-50 border-blue-200">
              <CardContent className="flex items-center p-6">
                <Calendar className="h-8 w-8 mr-4 text-blue-600" />
                <div>
                  <h4 className="font-semibold text-blue-700">Release Date</h4>
                  <p className="text-green-600">Coming Soon</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-50 to-green-50 border-blue-200">
              <CardContent className="flex items-center p-6">
                <Clock className="h-8 w-8 mr-4 text-blue-600" />
                <div>
                  <h4 className="font-semibold text-blue-700">Duration</h4>
                  <p className="text-green-600">120 minutes</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-50 to-green-50 border-blue-200">
              <CardContent className="flex items-center p-6">
                <PlayCircle className="h-8 w-8 mr-4 text-blue-600" />
                <div>
                  <h4 className="font-semibold text-blue-700">Format</h4>
                  <p className="text-green-600">4K Ultra HD</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-6 text-blue-800">About the Film</h3>
          <p className="text-lg mb-4 text-green-700">
            "The Untold Story" is a captivating journey into the heart of our society's most complex issues. 
            Through intimate interviews and stunning cinematography, this documentary sheds light on 
            the untold narratives that shape our world.
          </p>
          <p className="text-lg text-green-700">
            Join us as we explore the depths of human resilience, uncover hidden truths, and inspire 
            change in this thought-provoking film that will leave you questioning everything you thought you knew.
          </p>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-blue-800 to-green-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 The Untold Story. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;