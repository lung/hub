"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { SearchBar } from "@/components/search-bar"
import { FilterBar } from "@/components/filter-bar"
import { RecentAssets } from "@/components/recent-assets"
import { CollectionGrid } from "@/components/collection-grid"
import { assets, collections } from "@/lib/data"

const recentAssets = assets.map(({ id, name, type, thumbnail, updatedAt }) => ({
  id,
  name,
  type,
  thumbnail,
  updatedAt,
}))

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
