"use client"

import { FolderOpen } from "lucide-react"

interface Collection {
  id: string
  name: string
  coverImage: string
  assetCount: number
}

interface CollectionGridProps {
  collections: Collection[]
}

export function CollectionGrid({ collections }: CollectionGridProps) {
  return (
    <section>
      <div className="flex items-center gap-2 mb-4">
        <FolderOpen className="h-5 w-5 text-muted-foreground" />
        <h2 className="text-lg font-semibold text-foreground">Collections</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {collections.map((collection) => (
          <button
            key={collection.id}
            type="button"
            className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <img
              src={collection.coverImage || "/placeholder.svg"}
              alt={collection.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <h3 className="text-sm font-semibold text-white truncate">
                {collection.name}
              </h3>
              <p className="text-xs text-white/70">
                {collection.assetCount} assets
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
