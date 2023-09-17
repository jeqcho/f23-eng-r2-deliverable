"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Database } from "@/lib/schema";
import Image from "next/image";
import { useState } from "react";
type Species = Database["public"]["Tables"]["species"]["Row"];

// Define the SpeciesDialog component
function SpeciesDialog({ species, authorName }: { species: Species; authorName: string }) {
  const [open, setOpen] = useState(false);

  // Function to open the dialog
  const handleOpen = () => {
    setOpen(true);
  };

  // Function to close the dialog
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="mt-3 w-full" onClick={handleOpen}>
          Learn more
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold"> {species.common_name}</DialogTitle>
          <DialogDescription className="text-lg font-light italic">{species.scientific_name}</DialogDescription>
        </DialogHeader>
        {species.image && (
          <div className="relative h-40 w-full">
            <Image src={species.image} alt={species.scientific_name} fill style={{ objectFit: "cover" }} />
          </div>
        )}
        <p>
          <strong>Total Population:</strong>{" "}
          {species.total_population ? species.total_population.toLocaleString() : "Unknown"}
        </p>
        <p>
          <strong>Kingdom:</strong> {species.kingdom}
        </p>
        <p>
          <strong>Description:</strong> {species.description}
        </p>
        <p>
          {/* TODO: give author name */}
          <strong>Author:</strong> {authorName}
        </p>
        <Button onClick={handleClose}>Close</Button>
      </DialogContent>
    </Dialog>
  );
}

export default SpeciesDialog;
