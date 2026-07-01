Styled native dropdown for shop filters — category, price range, sort order.

```jsx
<Select label="Category" options={['All peptides','Repair','Cognitive','Longevity']} />
<Select label="Sort by" options={[{value:'price-asc',label:'Price: low to high'}]} />
```

- Accepts array of strings or `{value,label}`. Gold focus ring. Custom chevron.
