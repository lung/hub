export interface Asset {
  id: string
  name: string
  type: "image" | "document" | "video" | "template"
  thumbnail: string
  previewImage: string
  createdAt: string
  updatedAt: string
  description: string
  fileSize: string
  dimensions: string
  format: string
  tags: string[]
  collection: string
  uploadedBy: string
  ownerName: string
  ownerEmail: string
  assetUrl: string
  usageRights: string
}

export interface Collection {
  id: string
  name: string
  coverImage: string
  assetCount: number
}

export const assets: Asset[] = [
  {
    id: "1",
    name: "Q4 Report Cover",
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop",
    previewImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    createdAt: "Jan 15, 2026",
    updatedAt: "2 hours ago",
    description: "Cover design for the Q4 financial report. Features a data-driven visual layout with brand colors and key performance metrics highlighted.",
    fileSize: "4.2 MB",
    dimensions: "3200 x 2400",
    format: "PNG",
    tags: ["report", "finance", "Q4", "cover"],
    collection: "Brand Assets",
    uploadedBy: "Jane Doe",
    ownerName: "John Smith",
    ownerEmail: "jane.doe@company.com",
    assetUrl: "https://assets.company.com/reports/q4-report-cover.png",
    usageRights: "Produced--Unlimited--Global: Produced image licensing usage is perpetual, worldwide and unlimited; can be used in any and all media by Herbalife, Affiliates and Distributors.",
  },
  {
    id: "2",
    name: "Brand Guidelines",
    type: "document",
    thumbnail: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=200&h=200&fit=crop",
    previewImage: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&h=800&fit=crop",
    createdAt: "Nov 3, 2025",
    updatedAt: "Yesterday",
    description: "Comprehensive brand guidelines document covering typography, color palettes, logo usage, voice and tone, and visual identity standards.",
    fileSize: "12.8 MB",
    dimensions: "8.5 x 11 in",
    format: "PDF",
    tags: ["brand", "guidelines", "identity", "design system"],
    collection: "Brand Assets",
    uploadedBy: "Alex Smith",
    ownerName: "John Smith",
    ownerEmail: "alex.smith@company.com",
    assetUrl: "https://assets.company.com/brand/guidelines.pdf",
    usageRights: "Produced--Unlimited--Global: Produced image licensing usage is perpetual, worldwide and unlimited; can be used in any and all media by Herbalife, Affiliates and Distributors.",

  },
  {
    id: "3",
    name: "Product Demo",
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=200&h=200&fit=crop",
    previewImage: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&h=800&fit=crop",
    createdAt: "Feb 20, 2026",
    updatedAt: "3 days ago",
    description: "Product walkthrough video showcasing new features and improvements in the latest release. Optimized for web and social media embedding.",
    fileSize: "248 MB",
    dimensions: "1920 x 1080",
    format: "MP4",
    tags: ["product", "demo", "video", "marketing"],
    collection: "Marketing Materials",
    uploadedBy: "Chris Lee",
    ownerName: "John Smith",
    ownerEmail: "chris.lee@company.com",
    assetUrl: "https://assets.company.com/videos/product-demo.mp4",
    usageRights: "Produced--Unlimited--Global: Produced image licensing usage is perpetual, worldwide and unlimited; can be used in any and all media by Herbalife, Affiliates and Distributors.",

  },
  {
    id: "4",
    name: "Team Photo 2024",
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&h=200&fit=crop",
    previewImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop",
    createdAt: "Oct 12, 2024",
    updatedAt: "1 week ago",
    description: "Annual team photo taken at the company offsite. High-resolution image suitable for print and digital use.",
    fileSize: "8.1 MB",
    dimensions: "4800 x 3200",
    format: "JPEG",
    tags: ["team", "photo", "culture", "2024"],
    collection: "Team & Culture",
    uploadedBy: "Jane Doe",
    ownerName: "John Smith",
    ownerEmail: "jane.doe@company.com",
    assetUrl: "https://assets.company.com/photos/team-2024.jpg",
    usageRights: "Produced--Unlimited--Global: Produced image licensing usage is perpetual, worldwide and unlimited; can be used in any and all media by Herbalife, Affiliates and Distributors.",

  },
  {
    id: "5",
    name: "Sales Deck",
    type: "template",
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=200&fit=crop",
    previewImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop",
    createdAt: "Dec 8, 2025",
    updatedAt: "1 week ago",
    description: "Editable sales presentation template with pre-designed slides for pitch decks, case studies, and product overviews.",
    fileSize: "6.5 MB",
    dimensions: "16:9",
    format: "PPTX",
    tags: ["sales", "presentation", "template", "deck"],
    collection: "Templates",
    uploadedBy: "Morgan Chen",
    ownerName: "John Smith",
    ownerEmail: "morgan.chen@company.com",
    assetUrl: "https://assets.company.com/templates/sales-deck.pptx",
    usageRights: "Produced--Unlimited--Global: Produced image licensing usage is perpetual, worldwide and unlimited; can be used in any and all media by Herbalife, Affiliates and Distributors.",

  },
  {
    id: "6",
    name: "Logo Pack",
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=200&h=200&fit=crop",
    previewImage: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1200&h=800&fit=crop",
    createdAt: "Sep 5, 2025",
    updatedAt: "2 weeks ago",
    description: "Complete logo package including primary, secondary, monochrome, and icon-only variants in multiple formats for all use cases.",
    fileSize: "2.3 MB",
    dimensions: "Various",
    format: "SVG, PNG, EPS",
    tags: ["logo", "brand", "identity", "icon"],
    collection: "Brand Assets",
    uploadedBy: "Alex Smith",
    ownerName: "John Smith",
    ownerEmail: "alex.smith@company.com",
    assetUrl: "https://assets.company.com/brand/logo-pack.zip",
    usageRights: "Produced--Unlimited--Global: Produced image licensing usage is perpetual, worldwide and unlimited; can be used in any and all media by Herbalife, Affiliates and Distributors.",
  },
]

export const collections: Collection[] = [
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

export function getAssetById(id: string): Asset | undefined {
  return assets.find((asset) => asset.id === id)
}

export function getRelatedAssets(currentId: string, limit = 4): Asset[] {
  const current = getAssetById(currentId)
  if (!current) return assets.slice(0, limit)

  return assets
    .filter((a) => a.id !== currentId)
    .sort((a, b) => {
      const aMatch = a.tags.filter((t) => current.tags.includes(t)).length
      const bMatch = b.tags.filter((t) => current.tags.includes(t)).length
      return bMatch - aMatch
    })
    .slice(0, limit)
}