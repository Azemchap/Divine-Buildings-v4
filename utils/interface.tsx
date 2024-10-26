export interface PlanInterface {
    name: string;         // Product name
    slug: { current: string }     // Slug for the product
    description: string;  // Description of the product
    category: Array<CategoryInterface>;  // Category of the product
    _id: string;     // ID of the product
    price: number;        // Price of the product
    rating: number;       // Rating of the product (0-5)
    numReview: number;    // Number of reviews for the product
    createdAt: string;    // Creation date (ISO string)
    images: Array<{       // Array of images
        _key?: string;      // Optional key for Sanity
        _type: 'image';     // Type of the image
        asset: {            // Asset object containing image details
            _id: string;      // ID of the asset
            url: string;      // URL of the image
        };
    }>;
    body: Array<{         // Rich text body
        _key?: string;      // Optional key for Sanity
        _type: 'block';     // Type of the block
        children?: Array<{   // Children of the block
            _key?: string;     // Optional key
            _type: 'span';     // Type of the child
            text: string;      // Text of the child
            marks: string[];   // Array of marks applied to the text (e.g., bold, italic)
        }>;
        markDefs?: Array<{}>; // Optional array for mark definitions
        style?: string;      // Style of the block (e.g., normal, h1, h2)
        level?: number;      // Level of the heading (if applicable)
    }>;
}

export interface EbookInterface {
    name: string;         // Product name
    slug: { current: string }     // Slug for the product
    description: string;  // Description of the product
    category: Array<CategoryInterface>;  // Category of the product
    _id: string;     // ID of the product
    price: number;        // Price of the product
    rating: number;       // Rating of the product (0-5)
    numReview: number;    // Number of reviews for the product
    createdAt: string;    // Creation date (ISO string)
    thumbnail: {       // Array of images
        _key?: string;      // Optional key for Sanity
        _type: 'image';     // Type of the image
        asset: {            // Asset object containing image details
            _id: string;      // ID of the asset
            url: string;      // URL of the image
        };
    };
    pdfFiles: Array<{       // Array of files
        _key?: string;      // Optional key for Sanity
        _type: 'file';     // Type of the file
        asset: {            // Asset object containing image details
            _id: string;      // ID of the asset
            url: string;      // URL of the image
        };
    }>;
    body: Array<{         // Rich text body
        _key?: string;      // Optional key for Sanity
        _type: 'block';     // Type of the block
        children?: Array<{   // Children of the block
            _key?: string;     // Optional key
            _type: 'span';     // Type of the child
            text: string;      // Text of the child
            marks: string[];   // Array of marks applied to the text (e.g., bold, italic)
        }>;
        markDefs?: Array<{}>; // Optional array for mark definitions
        style?: string;      // Style of the block (e.g., normal, h1, h2)
        level?: number;      // Level of the heading (if applicable)
    }>;
}

export interface CategoryInterface {
    name: string,
    slug: { current: string },
    _id: string,
    categoryCount: number
}



export interface VideoInterface {
    name: string;         // Product name
    slug: { current: string }     // Slug for the product
    description: string;  // Description of the product
    category: Array<CategoryInterface>;  // Category of the product
    _id: string;     // ID of the product
    price: number;        // Price of the product
    rating: number;       // Rating of the product (0-5)
    createdAt: string;    // Creation date (ISO string)
    images: Array<{       // Array of images
        _key?: string;      // Optional key for Sanity
        _type: 'image';     // Type of the image
        asset: {            // Asset object containing image details
            _id: string;      // ID of the asset
            url: string;      // URL of the image
        };
    }>;
    body: Array<{         // Rich text body
        _key?: string;      // Optional key for Sanity
        _type: 'block';     // Type of the block
        children?: Array<{   // Children of the block
            _key?: string;     // Optional key
            _type: 'span';     // Type of the child
            text: string;      // Text of the child
            marks: string[];   // Array of marks applied to the text (e.g., bold, italic)
        }>;
        markDefs?: Array<{}>; // Optional array for mark definitions
        style?: string;      // Style of the block (e.g., normal, h1, h2)
        level?: number;      // Level of the heading (if applicable)
    }>;
}