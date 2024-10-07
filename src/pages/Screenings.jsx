import React from 'react';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";

const screenings = [
  { city: "New York", theater: "Cinema 1", date: "2024-05-15", time: "19:00" },
  { city: "Los Angeles", theater: "Movieplex", date: "2024-05-17", time: "20:00" },
  { city: "Chicago", theater: "Film Center", date: "2024-05-20", time: "18:30" },
  { city: "San Francisco", theater: "Bay Theater", date: "2024-05-22", time: "19:30" },
];

const Screenings = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <header className="bg-gradient-to-r from-blue-accent to-green-accent text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Screenings</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-blue-accent">City</TableHead>
              <TableHead className="text-blue-accent">Theater</TableHead>
              <TableHead className="text-blue-accent">Date</TableHead>
              <TableHead className="text-blue-accent">Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {screenings.map((screening, index) => (
              <TableRow key={index} className="hover:bg-gray-800">
                <TableCell>{screening.city}</TableCell>
                <TableCell>{screening.theater}</TableCell>
                <TableCell>{screening.date}</TableCell>
                <TableCell>{screening.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </main>
    </div>
  );
};

export default Screenings;