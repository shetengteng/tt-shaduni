# Theming

TT ShadUni uses CSS variables for theming. Override them to create your own brand.

## CSS Variables

| Variable | Light | Dark | Description |
|---|---|---|---|
| `--tt-background` | `#ffffff` | `#0a0a0a` | Page background |
| `--tt-foreground` | `#0a0a0a` | `#fafafa` | Primary text |
| `--tt-primary` | `#18181b` | `#fafafa` | Primary brand color |
| `--tt-muted` | `#f5f5f5` | `#262626` | Muted backgrounds |
| `--tt-border` | `#e5e5e5` | `#262626` | Borders |
| `--tt-destructive` | `#ef4444` | `#ef4444` | Error/destructive actions |
| `--tt-radius` | `6px` | `6px` | Border radius |

## Custom Theme

```vue
<tt-config-provider :theme-vars="{ '--tt-primary': '#6366f1' }">
  <!-- Your app with custom primary color -->
</tt-config-provider>
```
