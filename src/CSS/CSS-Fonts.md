# Notes on Fonts in CSS

## 1. Font Properties to Remember
- **`font-family`**: Specifies the font type. Use a fallback stack for better compatibility.
  - Example: `font-family: 'Roboto', Arial, sans-serif;`
- **`font-size`**: Defines the size of the font. Use relative units (`em`, `rem`) for better scalability.
- **`font-weight`**: Adjusts the thickness of the text. Common values: `normal`, `bold`, `100` to `900`.
- **`font-style`**: Specifies if the font is normal, italic, or oblique.
- **`line-height`**: Controls the spacing between lines of text. Use relative units for accessibility.

---

## 2. Using Google Fonts
### Steps to Use:
1. Visit [Google Fonts](https://fonts.google.com/).
2. Search for and select a font you like.
3. Customize styles (weights, subsets) as needed.
4. Copy the `<link>` tag or `@import` rule provided.
   - Example for `<link>`:
     ```html
     <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
     ```
   - Example for `@import` in CSS:
     ```css
     @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
     ```
5. Apply the font in your CSS:
   ```css
   body {
       font-family: 'Roboto', sans-serif;
   }
   ```

## 3. Tips for Using Fonts (Continued)
- **Responsive Typography**: Use relative units (`em`, `rem`, `%`) for font sizes to ensure text scales well across devices.
  - Example:
    ```css
    html {
        font-size: 16px; /* Base font size */
    }
    h1 {
        font-size: 2rem; /* 32px */
    }
    p {
        font-size: 1rem; /* 16px */
    }
    ```
- **Font Pairing**: Pair fonts thoughtfully for a visually cohesive design. A common combination:
  - Serif for headings and sans-serif for body text.
  - Example: `'Playfair Display'` for headings and `'Roboto'` for body text.
- **Web Safe Fonts**: When not using external fonts, choose web-safe fonts that work across all devices (e.g., Arial, Georgia, Times New Roman).
- **Character Support**: Ensure the font supports the necessary character sets (e.g., Latin, Cyrillic, Arabic).
- **Text Rendering**: Use the `text-rendering` property for better readability on certain systems:
  - Example:
    ```css
    body {
        text-rendering: optimizeLegibility;
    }
    ```
- **Font Optimization**: For custom fonts, use tools like Font Squirrel or Google Fonts' optimization settings to reduce file sizes.
- **Local Fonts**: Consider self-hosting fonts for better control and reliability, especially if CDN access might be restricted.

---
