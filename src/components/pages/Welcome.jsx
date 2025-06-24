import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useState} from "react"

const Welcome = () => {
  const [open, setOpen] = useState(true); // show by default on first visit

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Welcome to Shloka Setu!!</DialogTitle>
          <DialogDescription>
            This project is about Gita Slok. We hope you find it useful and informative to deep dive into spirituality.
            <br /><br />
            Feel free to explore the various features and functionalities it offers. If you want to give feedback or suggestions, please don't hesitate to reach out.
            <br /><br />
            Thank you for visiting Shloka Setu! 🙏 <br />
            <strong>Happy exploring!</strong><br />
            — Muskan Gupta
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={() => setOpen(false)}>Start Exploring</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Welcome;
