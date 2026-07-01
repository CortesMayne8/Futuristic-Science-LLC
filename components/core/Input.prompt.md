Text field with label, optional leading icon, hint/error. Used for search, contact, checkout, account.

```jsx
<Input label="Email" type="email" placeholder="you@lab.org" iconLeft={<Mail size={16}/>} />
<Input label="Batch number" placeholder="FS-2024-0312" error="No batch found" />
```

- Gold focus ring + border on focus; red border when `error` set.
- 44px height (md). Pass `hint` for helper text, `error` to show a validation message.
