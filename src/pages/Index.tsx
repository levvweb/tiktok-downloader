import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { Download, Clipboard, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import DownloadCard from "@/components/DownloadCard";
import LoadingSpinner from "@/components/LoadingSpinner";
import { downloadTikTok, isValidTikTokUrl, type TikTokResult } from "@/lib/tiktok";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<TikTokResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: "power2.out" }
      );
    }
  }, []);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
      if (isValidTikTokUrl(text)) {
        toast({
          title: "URL Ditempel",
          description: "Link TikTok terdeteksi!",
        });
      }
    } catch {
      toast({
        title: "Gagal Menempel",
        description: "Silakan tempel URL secara manual",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setResult(null);

    if (!url.trim()) {
      setError("Silakan masukkan URL TikTok");
      return;
    }

    if (!isValidTikTokUrl(url)) {
      setError("Silakan masukkan URL TikTok yang valid");
      return;
    }

    setLoading(true);

    try {
      const data = await downloadTikTok(url);
      if (data.status) {
        setResult(data);
      } else {
        setError("Gagal mengambil video. Silakan coba lagi.");
      }
    } catch {
      setError("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-background px-4 pb-12 pt-4 md:px-6"
    >
      <div className="mx-auto max-w-2xl">
        <Header />

        {/* Main Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="mt-4 md:mt-8"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col gap-3 md:flex-row">
              <div className="relative flex-1">
                <Input
                  type="text"
                  placeholder="Tempel link TikTok di sini..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="pr-12"
                />
                <button
                  type="button"
                  onClick={handlePaste}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-2 text-muted-foreground transition-colors"
                  aria-label="Tempel dari clipboard"
                >
                  <Clipboard className="h-5 w-5" />
                </button>
              </div>
              <Button
                type="submit"
                variant={loading ? "secondary" : "glow"}
                size="xl"
                disabled={loading}
                className="w-full md:w-auto"
              >
                <Download className="h-5 w-5" />
                {loading ? "Memproses..." : "Unduh"}
              </Button>
            </div>
          </form>

          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 rounded-lg border border-border bg-card/50 p-4 text-center"
          >
            <p className="text-sm text-muted-foreground">
              Tempel link video atau slideshow TikTok untuk mengunduh tanpa watermark
            </p>
          </motion.div>
        </motion.div>

        {/* Error Message */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-6 flex items-center gap-2 rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-destructive"
            >
              <AlertCircle className="h-5 w-5 flex-shrink-0" />
              <p className="text-sm">{error}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Loading State */}
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8"
          >
            <LoadingSpinner />
            <p className="mt-2 text-center text-sm text-muted-foreground">
              Mengambil data video...
            </p>
          </motion.div>
        )}

        {/* Result */}
        <AnimatePresence>
          {result && !loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-6"
            >
              <DownloadCard result={result} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-xs text-muted-foreground">
            Unduh video TikTok tanpa watermark secara gratis
          </p>
        </motion.footer>
      </div>
    </div>
  );
};

export default Index;
