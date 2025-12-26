import { motion } from "framer-motion";
import { Download, Music, Video, Image, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { TikTokResult } from "@/lib/tiktok";

interface DownloadCardProps {
  result: TikTokResult;
}

const DownloadCard = ({ result }: DownloadCardProps) => {
  const handleDownload = (url: string, filename: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const isSlideshow = result.images.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full rounded-xl border-2 border-border bg-card p-4 md:p-6"
    >
      <div className="flex flex-col gap-4 md:flex-row md:gap-6">
        {/* Preview */}
        <div className="flex-shrink-0">
          <div className="relative mx-auto h-48 w-32 overflow-hidden rounded-lg bg-muted md:h-56 md:w-40">
            {result.cover ? (
              <img
                src={result.cover}
                alt="Thumbnail video"
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            ) : null}
            <div className="absolute inset-0 flex items-center justify-center bg-background/40">
              {isSlideshow ? (
                <Image className="h-8 w-8 text-foreground" />
              ) : (
                <Video className="h-8 w-8 text-foreground" />
              )}
            </div>
            {/* HD Badge */}
            <div className="absolute right-1 top-1 flex items-center gap-0.5 rounded bg-primary px-1.5 py-0.5 text-[10px] font-bold text-primary-foreground">
              <Sparkles className="h-3 w-3" />
              HD
            </div>
          </div>
        </div>

        {/* Info & Buttons */}
        <div className="flex flex-1 flex-col gap-4">
          <div>
            <p className="text-sm text-primary">@{result.author}</p>
            <p className="mt-1 line-clamp-2 text-sm text-muted-foreground md:text-base">
              {result.desc}
            </p>
          </div>

          {/* Download Buttons */}
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {result.video && (
              <Button
                variant="default"
                size="lg"
                onClick={() => handleDownload(result.video!, `tiktok_${Date.now()}.mp4`)}
                className="w-full"
              >
                <Download className="h-4 w-4" />
                <span className="hidden sm:inline">Video Tanpa WM</span>
                <span className="sm:hidden">Tanpa Watermark</span>
              </Button>
            )}

            {result.wm && (
              <Button
                variant="secondary"
                size="lg"
                onClick={() => handleDownload(result.wm!, `tiktok_wm_${Date.now()}.mp4`)}
                className="w-full"
              >
                <Video className="h-4 w-4" />
                <span className="hidden sm:inline">Dengan WM</span>
                <span className="sm:hidden">Watermark</span>
              </Button>
            )}

            {result.audio && (
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleDownload(result.audio!, `tiktok_audio_${Date.now()}.mp3`)}
                className="w-full"
              >
                <Music className="h-4 w-4" />
                Audio
              </Button>
            )}
          </div>

          {/* Slideshow Images */}
          {isSlideshow && (
            <div className="mt-2">
              <p className="mb-2 text-sm font-medium text-foreground">
                Gambar Slideshow ({result.images.length})
              </p>
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5">
                {result.images.slice(0, 10).map((img, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleDownload(img, `tiktok_slide_${index + 1}.jpg`)}
                    className="relative aspect-square overflow-hidden rounded-lg border border-border"
                  >
                    <img
                      src={img}
                      alt={`Slide ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 transition-opacity focus:opacity-100">
                      <Download className="h-5 w-5 text-foreground" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default DownloadCard;
