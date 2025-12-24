import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <Card className="w-full max-w-md mx-4 border-0 shadow-none text-center">
        <CardContent className="pt-6">
          <div className="flex justify-center mb-6">
            <AlertTriangle className="h-12 w-12 text-muted-foreground/30" />
          </div>
          <h1 className="text-3xl font-serif text-foreground mb-4">Page Not Found</h1>
          <p className="text-muted-foreground mb-8 text-lg">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link href="/">
            <Button variant="outline" className="min-w-[140px]">
              Return Home
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
