import rss from "@astrojs/rss"

import { getMissives } from "@utils/getContent"
import { config } from "@parseConfig"

export async function GET(context) {
  const missives = await getMissives()

  return rss({
    title: config.site.title,
    description: config.site.description,
    site: context.site,
    items: missives.map((missives) => ({
      title: missives.data.title,
      description: missives.data.description,
      link: missives.id,
      pubDate: missives.data.date,
    })),
    customData: `<language>${config.site.locale}</language>`,
  })
}
