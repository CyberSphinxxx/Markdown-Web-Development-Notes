# HTML Headers

#### In HTML, headers are defined using heading tags h1 through h6. These tags represent different levels of importance, with h1 being the most important and h6 being the least.

## Syntax and Usage:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HTML Headers</title>
  </head>
  <body>
    <h1>Main Heading (Most Important)</h1>
    <h2>Subheading Level 2</h2>
    <h3>Subheading Level 3</h3>
    <h4>Subheading Level 4</h4>
    <h5>Subheading Level 5</h5>
    <h6>Subheading Level 6 (Least Important)</h6>
  </body>
</html>
```

## Key Points:

- **SEO Relevance**: `<h1>` is typically used for the main title of a page, and search engines prioritize it. Use one `<h1>` per page.
- **Semantic Structure**: Use heading tags to structure content hierarchically, making it easier for users and screen readers to navigate.
- **Styling**: By default, each heading tag has a different font size and weight. You can style them using CSS.
- **Accessibility**: Well-structured headers improve accessibility for visually impaired users using screen readers.

## Example with CSS Styling:

```css
<style>
    h1 {
        color: blue;
        font-size: 36px;
    }
    h2 {
        color: green;
        font-size: 30px;
    }
</style>

```

## Best Practices:

- Do not skip heading levels (e.g., don't jump from `<h1>` to `<h4>` directly).
- Use headings to logically organize content, not for styling purposes (use CSS for styling).
