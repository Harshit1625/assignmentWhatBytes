"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

const UpdaterComponent = ({ rank, percentile, score, handleUpdate }) => {
  const [formValues, setFormValues] = React.useState({
    rank: rank || "",
    percentile: percentile || "",
    score: score || "",
  });

  const [open, setOpen] = React.useState(false);

  const handleSave = () => {
    handleUpdate(formValues.rank, formValues.percentile, formValues.score);
    setOpen(false); // Close the modal
  };

  return (
    <div className="flex items-center justify-between bg-white shadow-md p-6 rounded-xl border w-full mx-auto">
      <div className="w-1/5">
        <Image
          src="/HTMlLogo.svg"
          alt="HTML5 Logo"
          width={100}
          height={100}
          priority
        />
      </div>

      <div className="w-3/5 flex flex-col gap-2">
        <div className="text-lg font-semibold">HYPERTEXT MARKUP LANGUAGE</div>
        <div className="text-sm text-gray-600 space-y-1">
          <div>
            Questions: <span className="font-medium">20</span>
          </div>
          <div>
            Duration: <span className="font-medium">30 mins</span>
          </div>
          <div>
            Date:{" "}
            <span className="font-medium">
              {new Date().toISOString().split("T")[0]}
            </span>
          </div>
          <div>
            Rank: <span className="font-medium">{rank || "Not Updated"}</span>
          </div>
          <div>
            Percentile:{" "}
            <span className="font-medium">{percentile || "Not Updated"}</span>
          </div>
          <div>
            Score: <span className="font-medium">{score || "Not Updated"}</span>
          </div>
        </div>
      </div>

      <div className="w-1/5 text-right">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              className="text-white bg-black hover:text-black hover:bg-white hover:border hover:border-black border border-white"
              onClick={() => setOpen(true)}
            >
              Update
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Update Stats</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-4 py-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="rank">Rank</Label>
                <Input
                  id="rank"
                  value={formValues.rank}
                  onChange={(e) =>
                    setFormValues({ ...formValues, rank: e.target.value })
                  }
                  placeholder="Enter your rank"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="percentile">Percentile</Label>
                <Input
                  id="percentile"
                  value={formValues.percentile}
                  onChange={(e) =>
                    setFormValues({ ...formValues, percentile: e.target.value })
                  }
                  placeholder="Enter your percentile"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="score">Current Score</Label>
                <Input
                  id="score"
                  value={formValues.score}
                  onChange={(e) =>
                    setFormValues({ ...formValues, score: e.target.value })
                  }
                  placeholder="Enter your score"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" onClick={handleSave}>
                Save Changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default UpdaterComponent;
