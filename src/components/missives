---
import type { CollectionEntry } from "astro:content"

interface Props {
  writingEntry: CollectionEntry<"writings">
}

const { writingEntry } = Astro.props
const { title, description, tags } = writingEntry.data
---

<a
  href={`/${writingEntry.collection}/${writingEntry.id}`}
  class="group -m-4 flex flex-col gap-y-0 rounded-sm bg-card/0 p-4 transition-colors duration-200 ease-out hover:bg-card/75"
>
  <h2
    class="font-medium text-foreground underline decoration-muted-foreground/50 underline-offset-2 transition-colors duration-200 ease-out group-hover:decoration-muted-foreground"
  >
    {title}
  </h2>
  {
    description && (
      <p class="leading-normal text-muted-foreground">{description}</p>
    )
  }
</a>
