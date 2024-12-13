# HTML Attributes

HTML attributes provide additional information about elements, defining their properties or behavior. They are included in the opening tag of an element and typically consist of a name and a value pair.

## Common Characteristics of Attributes

- **Name-Value Pairs**: Written as `name="value"`.
- **Placement**: Always appear in the opening tag.
- **Quotes**: Attribute values should be enclosed in double (`"`) or single (`'`) quotes.

## Common HTML Attributes

### Global Attributes

These can be applied to almost any HTML element:

- **`id`**: Assigns a unique identifier to an element.
- **`class`**: Assigns one or more class names for styling or scripting.
- **`style`**: Adds inline CSS styling.
- **`title`**: Provides additional information displayed as a tooltip when hovered.
- **`data-*`**: Defines custom data attributes for storing extra data.

### Event Attributes

Define JavaScript event handlers for user interactions:

- **`onclick`**: Executes JavaScript when the element is clicked.
- **`onmouseover`**: Triggers when the mouse hovers over an element.

### Input-Specific Attributes

Used with `<input>` elements:

- **`type`**: Specifies the type of input (e.g., `text`, `password`, `email`).
- **`placeholder`**: Displays a hint inside the input field.
- **`value`**: Defines the default value of the input.
- **`required`**: Marks the input field as mandatory.

### Hyperlink Attributes

Used with `<a>` elements:

- **`href`**: Specifies the URL of the link.
- **`target`**: Determines how the link opens (e.g., in a new tab).

## Best Practices

- Always use meaningful and descriptive values for attributes to enhance clarity and maintainability.
- Avoid inline styling (`style` attribute) in favor of external or internal CSS for better separation of content and design.
- Use unique `id` values to avoid conflicts in scripts or styling.
- Test attributes to ensure they behave as intended across browsers and devices.
