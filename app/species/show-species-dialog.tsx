"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import type { Database } from "@/lib/schema";
import { useState } from "react";
type Species = Database["public"]["Tables"]["species"]["Row"];

// Define the SpeciesDialog component
function SpeciesDialog({ species }: { species: Species }) {
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
          <DialogTitle>Species Information</DialogTitle>
        </DialogHeader>
        <p>
          <strong>Scientific Name:</strong> {species.scientific_name}
        </p>
        <p>
          <strong>Common Name:</strong> {species.common_name}
        </p>
        <p>
          <strong>Total Population:</strong> {species.total_population}
        </p>
        <p>
          <strong>Kingdom:</strong> {species.kingdom}
        </p>
        <p>
          <strong>Description:</strong> {species.description}
        </p>
        <p>
          {/* TODO: give author name */}
          <strong>Author:</strong> {species.author}
        </p>
        <Button onClick={handleClose}>Close</Button>
      </DialogContent>
    </Dialog>
  );
}

export default SpeciesDialog;
