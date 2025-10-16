'use client'

import { Download } from "lucide-react"
import { Button } from "./ui/button"
import { Add } from "./sheet"
import { exportTableToExcel } from "@/utils/exportExcel"
import { useState } from "react"


export const Navbar = () => {
  const [url, setUrl] = useState("https://www.tiktok.com/");
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const handleScreenshot = async () => {

    if (!url) {

      setError("Please enter a valid URL.");

      return;

    }

    // Client-side URL validation: must start with http:// or https:// and be a valid URL

    if (!/^https?:\/\//i.test(url.trim())) {

      setError("URL must start with http:// or https://");

      return;

    }

    try {

      new URL(url.trim());

    } catch {

      setError("Invalid URL format. Please enter a valid URL.");

      return;

    }

    setLoading(true);

    setError(null);

    setScreenshot(null);


    try {

      const response = await fetch(

        `/api/screenshot?url=${encodeURIComponent(url)}`

      );

      if (!response.ok) {

        throw new Error("Failed to capture screenshot.");

      }

      const blob = await response.blob();

      setScreenshot(URL.createObjectURL(blob));

    } catch (err) {

      setError(

        err instanceof Error ? err.message : "An unknown error occurred."

      );

    } finally {

      setLoading(false);

    }

  };


  return (
    <header className="w-full h-12 flex items-center px-2">
      <nav className="w-full  flex justify-end gap-x-4">
        <Button
          onClick={handleScreenshot}
          disabled={loading}>
          <span>
            تحميل الجدول
          </span>
          <span>
            <Download />
          </span>
        </Button>
        <Add />
      </nav>
    </header>
  )
}
