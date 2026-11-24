import type { MetadataRoute } from "next";

import jogos from "@/data/jogos.json";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const anos = [...new Set(jogos.map((jogo) => jogo.ano))];

  return [{ url: SITE_URL }, ...anos.map((ano) => ({ url: `${SITE_URL}/ano/${ano}` }))];
}
