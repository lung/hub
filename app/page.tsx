"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { SearchBar } from "@/components/search-bar"
import { FilterBar } from "@/components/filter-bar"
import { RecentAssets } from "@/components/recent-assets"
import { CollectionGrid } from "@/components/collection-grid"

const recentAssets = [
  {
    id: "1",
    name: "Q4 Report Cover",
    type: "image" as const,
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop",
    updatedAt: "2 hours ago",
  },
  {
    id: "2",
    name: "Brand Guidelines",
    type: "document" as const,
    thumbnail: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=200&h=200&fit=crop",
    updatedAt: "Yesterday",
  },
  {
    id: "3",
    name: "Product Demo",
    type: "video" as const,
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=200&h=200&fit=crop",
    updatedAt: "3 days ago",
  },
  {
    id: "4",
    name: "Team Photo 2024",
    type: "image" as const,
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&h=200&fit=crop",
    updatedAt: "1 week ago",
  },
  {
    id: "5",
    name: "Sales Deck",
    type: "template" as const,
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=200&fit=crop",
    updatedAt: "1 week ago",
  },
  {
    id: "6",
    name: "Logo Pack",
    type: "image" as const,
    thumbnail: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=200&h=200&fit=crop",
    updatedAt: "2 weeks ago",
  },
]

const collections = [
  {
    id: "1",
    name: "Brand Assets",
    coverImage: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop",
    assetCount: 48,
  },
  {
    id: "2",
    name: "Marketing Materials",
    coverImage: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=300&fit=crop",
    assetCount: 124,
  },
  {
    id: "3",
    name: "Product Photography",
    coverImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
    assetCount: 89,
  },
  {
    id: "4",
    name: "Social Media",
    coverImage: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=300&fit=crop",
    assetCount: 256,
  },
  {
    id: "5",
    name: "Event Photos",
    coverImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
    assetCount: 312,
  },
  {
    id: "6",
    name: "Team & Culture",
    coverImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop",
    assetCount: 67,
  },
  {
    id: "7",
    name: "Press Kit",
    coverImage: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop",
    assetCount: 23,
  },
  {
    id: "8",
    name: "Templates",
    coverImage: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
    assetCount: 45,
  },
]

export default function AssetManagementPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [assetType, setAssetType] = useState("all")
  const [department, setDepartment] = useState("all")
  const [sortBy, setSortBy] = useState("recent")

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="px-4 py-6 max-w-7xl mx-auto">
        <div className="mb-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2 text-balance">
            Find Your Assets
          </h1>
          <p className="text-muted-foreground text-sm">
            Browse and manage corporate resources
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <FilterBar
            assetType={assetType}
            department={department}
            sortBy={sortBy}
            onAssetTypeChange={setAssetType}
            onDepartmentChange={setDepartment}
            onSortByChange={setSortBy}
          />
        </div>

        <div className="space-y-8">
          <RecentAssets assets={recentAssets} />
          <CollectionGrid collections={collections} />
        </div>
      </main>
    </div>
  )
}
