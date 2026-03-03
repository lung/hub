"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface FilterBarProps {
  assetType: string
  department: string
  sortBy: string
  onAssetTypeChange: (value: string) => void
  onDepartmentChange: (value: string) => void
  onSortByChange: (value: string) => void
}

export function FilterBar({
  assetType,
  department,
  sortBy,
  onAssetTypeChange,
  onDepartmentChange,
  onSortByChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center px-4 sm:px-8">
      <Select value={assetType} onValueChange={onAssetTypeChange}>
        <SelectTrigger className="h-10 bg-card border-border rounded-lg w-full sm:w-40">
          <SelectValue placeholder="Asset Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Types</SelectItem>
          <SelectItem value="image">Images</SelectItem>
          <SelectItem value="document">Documents</SelectItem>
          <SelectItem value="video">Videos</SelectItem>
          <SelectItem value="template">Templates</SelectItem>
          <SelectItem value="brand">Brand Assets</SelectItem>
        </SelectContent>
      </Select>

      <Select value={department} onValueChange={onDepartmentChange}>
        <SelectTrigger className="h-10 bg-card border-border rounded-lg w-full sm:w-44">
          <SelectValue placeholder="Department" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Departments</SelectItem>
          <SelectItem value="marketing">Marketing</SelectItem>
          <SelectItem value="sales">Sales</SelectItem>
          <SelectItem value="engineering">Engineering</SelectItem>
          <SelectItem value="design">Design</SelectItem>
          <SelectItem value="hr">Human Resources</SelectItem>
        </SelectContent>
      </Select>

      <Select value={sortBy} onValueChange={onSortByChange}>
        <SelectTrigger className="h-10 bg-card border-border rounded-lg w-full sm:w-40">
          <SelectValue placeholder="Sort By" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="recent">Most Recent</SelectItem>
          <SelectItem value="name">Name A-Z</SelectItem>
          <SelectItem value="name-desc">Name Z-A</SelectItem>
          <SelectItem value="popular">Most Popular</SelectItem>
          <SelectItem value="size">File Size</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
