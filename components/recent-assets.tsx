"use client"

import { FileImage, FileText, FileVideo, File, Clock } from "lucide-react"

interface Asset {
  id: string
  name: string
  type: "image" | "document" | "video" | "template"
  thumbnail: string
  updatedAt: string
}

interface RecentAssetsProps {
  assets: Asset[]
}

function getAssetIcon(type: Asset["type"]) {
  switch (type) {
    case "image":
      return <FileImage className="h-4 w-4 text-primary" />
    case "document":
      return <FileText className="h-4 w-4 text-primary" />
    case "video":
      return <FileVideo className="h-4 w-4 text-primary" />
    default:
      return <File className="h-4 w-4 text-primary" />
  }
}

export function RecentAssets({ assets }: RecentAssetsProps) {
  return (
    <section>
      <div className="flex items-center gap-2 mb-4">
        <Clock className="h-5 w-5 text-muted-foreground" />
        <h2 className="text-lg font-semibold text-foreground">Recent Assets</h2>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 items-end gap-3 sm:pt-6 pb-2">
        {assets.map((asset, index) => (
          <button
            key={asset.id}
            type="button"
            className={`group cursor-pointer ${index % 2 === 1 ? "sm:-translate-y-4" : ""}`}
          >
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-card border border-border shadow-sm mb-2 group-hover:border-primary/50 transition-colors">
              <img
                src={asset.thumbnail || "/placeholder.svg"}
                alt={asset.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 right-2 p-1.5 rounded-md bg-card/90 backdrop-blur-sm border border-border">
                {getAssetIcon(asset.type)}
              </div>
            </div>
            <p className="text-xs font-medium text-foreground truncate">{asset.name}</p>
            <p className="text-xs text-muted-foreground">{asset.updatedAt}</p>
          </button>
        ))}
      </div>
    </section>
  )
}
