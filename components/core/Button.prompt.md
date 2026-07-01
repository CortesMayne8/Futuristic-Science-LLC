Action control for Futuristic Science — gold `primary` for conversion, `ink`/`outline`/`ghost` for secondary actions.

```jsx
<Button variant="primary" size="lg">Add to Cart</Button>
<Button variant="outline">Select Options</Button>
<Button variant="ghost" iconRight={<ChevronRight/>}>View COA</Button>
```

- **variant:** `primary` (gold, glows — the main CTA), `ink` (navy), `outline` (hairline, fills gold-50 on hover), `ghost` (teal text).
- **size:** `sm` 36px · `md` 44px · `lg` 54px (lg for hero/checkout).
- Hover lifts/darkens; press scales to 0.98. Pass `iconLeft`/`iconRight` with a Lucide icon node.
