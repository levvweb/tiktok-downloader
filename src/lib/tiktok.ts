import axios from "axios";

export interface TikTokResult {
  status: boolean;
  video: string | null;
  wm: string | null;
  audio: string | null;
  images: string[];
  author: string;
  desc: string;
  cover?: string;
}

export const downloadTikTok = async (url: string): Promise<TikTokResult> => {
  const host = "https://www.tikwm.com/";

  try {
    const res = await axios.post(
      host + "api/",
      {},
      {
        headers: {
          accept: "application/json, text/javascript, */*; q=0.01",
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
        },
        params: {
          url: url,
          count: 12,
          cursor: 0,
          web: 1,
          hd: 1,
        },
      }
    );

    const data = res.data.data;

    const formatUrl = (path: string | undefined) => {
      if (!path) return null;
      if (path.startsWith("http")) return path;
      return host + path;
    };

    return {
      status: true,
      video: formatUrl(data.play),
      wm: formatUrl(data.wmplay),
      audio: formatUrl(data.music),
      images: Array.isArray(data.images)
        ? data.images.map((img: string) => img.startsWith("http") ? img : host + img)
        : [],
      author: data.author?.nickname || "-",
      desc: data.title || "-",
      cover: data.origin_cover || data.cover || undefined,
    };
  } catch (error) {
    console.error("TikTok download error:", error);
    return {
      status: false,
      video: null,
      wm: null,
      audio: null,
      images: [],
      author: "-",
      desc: "-",
    };
  }
};

export const isValidTikTokUrl = (url: string): boolean => {
  const tiktokRegex = /^https?:\/\/(www\.|vm\.|vt\.)?tiktok\.com\/.+/i;
  return tiktokRegex.test(url);
};
