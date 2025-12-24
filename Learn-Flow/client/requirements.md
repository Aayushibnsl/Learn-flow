## Packages
framer-motion | For subtle page transitions and entry animations
zod | Schema validation (already in base but good to be explicit)
react-hook-form | Form handling
@hookform/resolvers | Zod resolver for forms

## Notes
Tailwind Config: Extend fontFamily to include 'Inter', 'Playfair Display' (for headings to add sophistication).
Colors: Use a refined palette of slate/gray, white, and a subtle accent like indigo or teal.
Auth: Protected routes wrapper needed for dashboard/admin areas if expanded later, though current spec implies mostly public read access + auth for management? The spec mentions "Login/Register pages", so I will implement them.
