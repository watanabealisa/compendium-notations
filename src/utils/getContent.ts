// src/utils/getContent.ts

import { getCollection } from "astro:content"
import type { CollectionKey, CollectionEntry } from "astro:content"

type AnyEntry = CollectionEntry<CollectionKey>

// ---------- HELPERS ----------
const sortByDateDesc = (a: any, b: any) => {
  const timeA = a ? new Date(a).getTime() : 0
  const timeB = b ? new Date(b).getTime() : 0
  return (isNaN(timeB) ? 0 : timeB) - (isNaN(timeA) ? 0 : timeA)
}

const excludeDrafts = (item: AnyEntry) => !item.data.draft

// ---------- GENERIC GETTER ----------
export async function getContent<T extends CollectionKey>(
  collection: T,
  options: {
    drafts?: boolean
    sort?: boolean
  } = {}
) {
  const { drafts = false, sort = true } = options

  const items = await getCollection(collection)

  const filtered = drafts ? items : items.filter(excludeDrafts)
  const sorted = sort
    ? filtered.sort((a, b) =>
        sortByDateDesc(
          "date" in a.data ? (a.data.date ?? new Date(0)) : new Date(0),
          "date" in b.data ? (b.data.date ?? new Date(0)) : new Date(0)
        )
      )
    : filtered
  return sorted
}

// ---------- NAMED GETTER ----------
export const getPages = () => getContent("pages", { sort: false })
export const getMissives = () => getContent("missives")
