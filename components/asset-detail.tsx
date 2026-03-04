"use client"

import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import {
  ArrowLeft,
  Download,
  Share2,
  FileImage,
  FileText,
  FileVideo,
  File,
  Calendar,
  HardDrive,
  Maximize2,
  FileType,
  User,
  FolderOpen,
  Copy,
  Check,
  Mail,
  Link2,
} from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getAssetById, getRelatedAssets, type Asset } from "@/lib/data"

function getAssetIcon(type: Asset["type"], className = "h-4 w-4") {
  switch (type) {
    case "image":
      return <FileImage className={`${className} text-primary`} />
    case "document":
      return <FileText className={`${className} text-primary`} />
    case "video":
      return <FileVideo className={`${className} text-primary`} />
    default:
      return <File className={`${className} text-primary`} />
  }
}

function getTypeLabel(type: Asset["type"]) {
  switch (type) {
    case "image":
      return "Image"
    case "document":
      return "Document"
    case "video":
      return "Video"
    case "template":
      return "Template"
  }
}

function MetadataRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-border last:border-b-0">
      <span className="text-muted-foreground">{icon}</span>
      <span className="text-sm text-muted-foreground w-24 shrink-0">
        {label}
      </span>
      <span className="text-sm font-medium text-foreground">{value}</span>
    </div>
  )
}

export function AssetDetail() {
  const params = useParams()
  const router = useRouter()
  const [copied, setCopied] = useState(false)

  const asset = getAssetById(params.id as string)
  const relatedAssets = asset ? getRelatedAssets(asset.id) : []

  if (!asset) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Asset not found
          </h1>
          <p className="text-muted-foreground mb-6">
            The asset you are looking for does not exist.
          </p>
          <Button onClick={() => router.push("/")} variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Hub
          </Button>
        </div>
      </div>
    )
  }

  function handleCopyLink() {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="flex items-center justify-between h-14 px-4 max-w-7xl mx-auto">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.push("/")}
            className="gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Back to collection</span>
          </Button>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopyLink}
              className="gap-2"
            >
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Share2 className="h-4 w-4" />
              )}
              <span className="hidden sm:inline">
                {copied ? "Copied" : "Share"}
              </span>
            </Button>
            <Button size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Download</span>
            </Button>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-6 lg:py-10">
        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Preview */}
          <div className="flex-1 min-w-0">
            <div className="relative rounded-xl overflow-hidden bg-muted border border-border aspect-[4/3]">
              <img
                src={asset.previewImage}
                alt={asset.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-card/90 backdrop-blur-sm border border-border text-xs font-medium text-foreground">
                  {getAssetIcon(asset.type)}
                  {getTypeLabel(asset.type)}
                </div>
              </div>
            </div>

            {/* Description below image on large screens */}
            <div className="mt-6 hidden lg:block">
              <h3 className="text-sm font-semibold text-foreground mb-2">
                Description
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {asset.description}
              </p>
            </div>
          </div>

          {/* Right: Details sidebar */}
          <div className="w-full lg:w-80 xl:w-96 shrink-0">
            <h1 className="text-2xl font-bold text-foreground mb-1 text-balance">
              {asset.name}
            </h1>
            <p className="text-sm text-muted-foreground mb-6">
              Uploaded by {asset.uploadedBy}
            </p>

            {/* Description on mobile */}
            <div className="mb-6 lg:hidden">
              <h3 className="text-sm font-semibold text-foreground mb-2">
                Description
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {asset.description}
              </p>
            </div>

            {/* Tags */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-foreground mb-2">
                Tags
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {asset.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-xs font-normal"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Metadata */}
            <div className="rounded-xl border border-border bg-card p-4">
              <h3 className="text-sm font-semibold text-foreground mb-1">
                Details
              </h3>
              <MetadataRow
                icon={<Calendar className="h-4 w-4" />}
                label="Created"
                value={asset.createdAt}
              />
              <MetadataRow
                icon={<Calendar className="h-4 w-4" />}
                label="Updated"
                value={asset.updatedAt}
              />
              <MetadataRow
                icon={<HardDrive className="h-4 w-4" />}
                label="File size"
                value={asset.fileSize}
              />
              <MetadataRow
                icon={<Maximize2 className="h-4 w-4" />}
                label="Dimensions"
                value={asset.dimensions}
              />
              <MetadataRow
                icon={<FileType className="h-4 w-4" />}
                label="Format"
                value={asset.format}
              />
              <MetadataRow
                icon={<FolderOpen className="h-4 w-4" />}
                label="Collection"
                value={asset.collection}
              />
              <div className="flex items-start gap-3 py-3 border-b border-border">
                <span className="text-muted-foreground"><Mail className="h-4 w-4" /></span>
                <span className="text-sm text-muted-foreground w-24 shrink-0">
                  Owner
                </span>
                <div className="text-sm font-medium text-foreground">
                  <div>{asset.ownerName}</div>
                  <div className="text-muted-foreground font-normal">{asset.ownerEmail}</div>
                </div>
              </div>
              <div className="flex items-start gap-3 py-3 border-b border-border">
                <span className="text-muted-foreground"><Link2 className="h-4 w-4" /></span>
                <span className="text-sm text-muted-foreground w-24 shrink-0">
                  Asset URL
                </span>
                <a 
                  href={asset.assetUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary hover:underline break-all"
                >
                  {asset.assetUrl}
                </a>
              </div>
              <MetadataRow
                icon={<User className="h-4 w-4" />}
                label="Useage Rights"
                value={asset.usageRights}
              />
            </div>

            {/* Actions on mobile */}
            <div className="mt-6 flex gap-3 lg:hidden">
              <Button
                variant="outline"
                className="flex-1 gap-2"
                onClick={handleCopyLink}
              >
                {copied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                {copied ? "Copied" : "Copy link"}
              </Button>
              <Button className="flex-1 gap-2">
                <Download className="h-4 w-4" />
                Download
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}