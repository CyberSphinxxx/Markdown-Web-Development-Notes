# CSS: Cascading Style Sheets

CSS, which stands for **Cascading Style Sheets**, is a stylesheet language used to describe the presentation of a document written in HTML or XML. It is a cornerstone technology of the web, alongside HTML and JavaScript, and is used to control the layout, appearance, and visual aesthetics of web pages.

## Key Features of CSS

- **Styling HTML Elements**: CSS allows you to style HTML elements by specifying their color, size, spacing, fonts, and more.
- **Separation of Content and Design**: CSS separates the content (HTML) from the visual presentation, making the web design process more efficient and organized.
- **Responsive Design**: It enables web pages to adjust layouts for different screen sizes and devices (mobile, tablet, desktop).
- **Reusability**: CSS styles can be applied to multiple elements or pages, ensuring consistency across a website.

## Types of CSS

### 1. Inline CSS: Styles are written directly within an HTML element's style attribute.

```css
<p style="color: blue; font-size: 16px;">This is a paragraph.</p>
```

### 2. Internal CSS: Styles are placed inside a style tag within the head section of the HTML file

```css
<style>
    p {
        color: blue;
        font-size: 16px;
    }
</style>
```

### 3. External CSS: Styles are written in a separate .css file and linked to the HTML document using the link tag.

```css
<link rel="stylesheet" href="styles.css">
```

```css
/* styles.css */
p {
  color: blue;
  font-size: 16px;
}
```

---

# Example

### Here’s an example of how CSS enhances an HTML page:

## index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Styled Page</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Welcome to CSS</h1>
    <p>This is a simple web page styled with CSS.</p>
  </body>
</html>
```

## styles.css

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f0f8ff;
  margin: 0;
  padding: 20px;
}

h1 {
  color: #333;
  text-align: center;
}

p {
  color: #555;
  line-height: 1.6;
}
```

### The result is a visually appealing page with clean text, centered headers, and a soothing background.
